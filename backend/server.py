from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import httpx
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Email (Hostinger SMTP)
SMTP_HOST = os.environ.get("SMTP_HOST", "smtp.hostinger.com")
SMTP_PORT = int(os.environ.get("SMTP_PORT", "465"))
SMTP_USERNAME = os.environ["SMTP_USERNAME"]
SMTP_PASSWORD = os.environ["SMTP_PASSWORD"]
EMAIL_FROM_NAME = os.environ.get("EMAIL_FROM_NAME", "Furthmac Solutions")
COMPANY_EMAIL = os.environ["COMPANY_EMAIL"]

app = FastAPI(title="Furthmac Solutions API")
api_router = APIRouter(prefix="/api")

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# ---------- Models ----------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class ContactCreate(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    phone: Optional[str] = Field(default=None, max_length=40)
    company: Optional[str] = Field(default=None, max_length=160)
    service: Optional[str] = Field(default=None, max_length=120)
    message: str = Field(min_length=1, max_length=4000)


class Contact(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: Optional[str] = None
    company: Optional[str] = None
    service: Optional[str] = None
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


def _build_email_html(c: ContactCreate) -> str:
    return f"""
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif; background:#f4f6f9; padding:24px;">
      <tr><td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border:1px solid #e2e6ea;">
          <tr><td style="background:#0B1F3A; padding:24px 32px;">
            <span style="color:#ffffff; font-size:20px; font-weight:bold; letter-spacing:1px;">FURTHMAC SOLUTIONS</span><br/>
            <span style="color:#E11D2E; font-size:12px; letter-spacing:2px;">NEW ENQUIRY</span>
          </td></tr>
          <tr><td style="padding:32px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px; color:#111111;">
              <tr><td style="padding:8px 0; width:120px; color:#6b7280;">Name</td><td style="padding:8px 0; font-weight:bold;">{c.name}</td></tr>
              <tr><td style="padding:8px 0; color:#6b7280;">Email</td><td style="padding:8px 0;">{c.email}</td></tr>
              <tr><td style="padding:8px 0; color:#6b7280;">Phone</td><td style="padding:8px 0;">{c.phone or '-'}</td></tr>
              <tr><td style="padding:8px 0; color:#6b7280;">Company</td><td style="padding:8px 0;">{c.company or '-'}</td></tr>
              <tr><td style="padding:8px 0; color:#6b7280;">Service</td><td style="padding:8px 0;">{c.service or '-'}</td></tr>
            </table>
            <div style="margin-top:16px; padding:16px; background:#f4f6f9; border-left:3px solid #E11D2E; font-size:14px; color:#111111; line-height:1.6;">
              {c.message}
            </div>
          </td></tr>
          <tr><td style="background:#0B1F3A; padding:16px 32px; color:#9aa7b8; font-size:11px;">
            Sent from furthmacsolutions.com contact form
          </td></tr>
        </table>
      </td></tr>
    </table>
    """


async def _send_company_email(c: ContactCreate) -> None:
    payload = {
        "to": [COMPANY_EMAIL],
        "subject": f"New Enquiry from {c.name} — Furthmac Solutions",
        "html": _build_email_html(c),
        "from_name": EMAIL_FROM_NAME,
        "contact_email": c.email,
    }
    async with httpx.AsyncClient(timeout=30) as http_client:
        resp = await http_client.post(
            f"{EMAIL_BASE_URL}/api/v1/email/send",
            headers={"X-Email-Key": EMAIL_KEY},
            json=payload,
        )
    resp.raise_for_status()


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Furthmac Solutions API"}


@api_router.post("/contact", response_model=Contact)
async def create_contact(payload: ContactCreate):
    contact = Contact(**payload.model_dump())
    doc = contact.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.contacts.insert_one(doc)

    try:
        await _send_company_email(payload)
    except Exception as e:  # storing succeeded; email is best-effort
        logger.error(f"Contact email failed: {e}")

    return contact


@api_router.get("/contact", response_model=List[Contact])
async def list_contacts():
    docs = await db.contacts.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for d in docs:
        if isinstance(d.get('created_at'), str):
            d['created_at'] = datetime.fromisoformat(d['created_at'])
    return docs


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
