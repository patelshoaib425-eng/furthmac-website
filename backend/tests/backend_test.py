"""API regression tests for Furthmac root and contact submission/validation/persistence."""
import os
import uuid
from datetime import datetime

import pytest
import requests
from dotenv import dotenv_values

frontend_env = dotenv_values("/app/frontend/.env")
base_url = os.environ.get("REACT_APP_BACKEND_URL") or frontend_env.get("REACT_APP_BACKEND_URL")
if not base_url:
    raise RuntimeError("REACT_APP_BACKEND_URL is missing")
BASE_URL = base_url.rstrip("/")


@pytest.fixture(scope="session")
def api_client():
    session = requests.Session()
    session.headers.update({"Content-Type": "application/json"})
    yield session
    session.close()


class TestApiRoot:
    """Public API availability."""

    def test_root(self, api_client):
        response = api_client.get(f"{BASE_URL}/api/", timeout=20)
        assert response.status_code == 200
        assert response.json() == {"message": "Furthmac Solutions API"}


class TestContact:
    """Contact creation, persistence, response shape, and request validation."""

    def test_create_contact_and_verify_persistence(self, api_client):
        marker = uuid.uuid4().hex[:12]
        payload = {
            "name": f"TEST_QA Contact {marker}",
            "email": f"test.qa.{marker}@example.com",
            "phone": "+91 9999999999",
            "company": "TEST_Furthmac QA",
            "service": "Industrial Automation",
            "message": f"TEST_ automated persistence verification {marker}",
        }
        create_response = api_client.post(
            f"{BASE_URL}/api/contact", json=payload, timeout=45
        )
        assert create_response.status_code == 200, create_response.text
        created = create_response.json()
        assert isinstance(created["id"], str) and created["id"]
        for field, expected in payload.items():
            assert created[field] == expected
        assert "_id" not in created
        datetime.fromisoformat(created["created_at"].replace("Z", "+00:00"))

        list_response = api_client.get(f"{BASE_URL}/api/contact", timeout=20)
        assert list_response.status_code == 200, list_response.text
        contacts = list_response.json()
        assert isinstance(contacts, list)
        persisted = next((item for item in contacts if item.get("id") == created["id"]), None)
        assert persisted is not None, "Created contact was not returned by GET /api/contact"
        for field, expected in payload.items():
            assert persisted[field] == expected
        assert "_id" not in persisted

    @pytest.mark.parametrize(
        "payload,missing_field",
        [
            ({"email": "test@example.com", "message": "Required fields test"}, "name"),
            ({"name": "TEST_Missing Email", "message": "Required fields test"}, "email"),
            ({"name": "TEST_Missing Message", "email": "test@example.com"}, "message"),
        ],
    )
    def test_missing_required_fields_returns_422(self, api_client, payload, missing_field):
        response = api_client.post(f"{BASE_URL}/api/contact", json=payload, timeout=20)
        assert response.status_code == 422, response.text
        detail = response.json().get("detail")
        assert isinstance(detail, list) and detail
        assert any(missing_field in error.get("loc", []) for error in detail)

    def test_invalid_email_returns_422(self, api_client):
        response = api_client.post(
            f"{BASE_URL}/api/contact",
            json={
                "name": "TEST_Invalid Email",
                "email": "not-an-email",
                "message": "Validation test",
            },
            timeout=20,
        )
        assert response.status_code == 422, response.text
        detail = response.json().get("detail")
        assert isinstance(detail, list) and any("email" in error.get("loc", []) for error in detail)

    def test_overlong_message_returns_422(self, api_client):
        response = api_client.post(
            f"{BASE_URL}/api/contact",
            json={
                "name": "TEST_Long Message",
                "email": "long-message@example.com",
                "message": "x" * 4001,
            },
            timeout=20,
        )
        assert response.status_code == 422, response.text
        detail = response.json().get("detail")
        assert isinstance(detail, list) and any("message" in error.get("loc", []) for error in detail)

    @pytest.mark.xfail(reason="Required text fields should reject whitespace-only input")
    def test_whitespace_only_required_fields_rejected(self, api_client):
        response = api_client.post(
            f"{BASE_URL}/api/contact",
            json={"name": "   ", "email": "space@example.com", "message": "   "},
            timeout=45,
        )
        assert response.status_code == 422, response.text
