#!/usr/bin/env python3
"""Furthmac Solutions — static site generator.

Regenerates every HTML page from the content below (ported from the
React app's src/data/content.js). Run:  python3 generate.py
Output: static .html files in this folder (upload everything except
generate.py to any static host, e.g. Hostinger public_html).
"""
import json
import os

BASE = os.path.dirname(os.path.abspath(__file__))
DOMAIN = "https://www.furthmac.com"

COMPANY = {
    "name": "Furthmac Solutions",
    "tagline": "Engineering Innovation. Smart Automation.",
    "email": "info@furthmac.com",
    "phone": "+91 7558647831",
    "phoneDigits": "917558647831",
    "address": "Hinjewadi, Village Marunji, Taluka Mulshi, Pune, Maharashtra 411057, India",
    "addressLines": ["Hinjewadi, Village Marunji", "Taluka Mulshi, Pune", "Maharashtra 411057, India"],
    "hours": "Monday–Saturday · 9:00 AM – 6:00 PM",
    "instagram": "https://www.instagram.com/the_furthmacsolutions",
}

IMAGES = {
    "hero": "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?auto=format&fit=crop&w=1920&q=80",
    "hero2": "https://images.unsplash.com/photo-1684695749267-233af13276d0?auto=format&fit=crop&w=1600&q=80",
    "automation": "https://images.unsplash.com/photo-1716191300020-b52dec5b70a8?auto=format&fit=crop&w=1200&q=80",
    "panel": "https://images.unsplash.com/photo-1716191300020-b52dec5b70a8?auto=format&fit=crop&w=1200&q=80",
    "welding": "https://images.pexels.com/photos/27084598/pexels-photo-27084598.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "cad": "https://images.pexels.com/photos/27084598/pexels-photo-27084598.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "factory": "https://images.unsplash.com/photo-1413882353314-73389f63b6fd?auto=format&fit=crop&w=1600&q=80",
    "team": "https://images.unsplash.com/photo-1598299803204-b73796f43289?auto=format&fit=crop&w=1200&q=80",
    "scada": "https://images.unsplash.com/photo-1716191300020-b52dec5b70a8?auto=format&fit=crop&w=1200&q=80",
    "fabrication": "https://images.pexels.com/photos/27084598/pexels-photo-27084598.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "logistics": "https://images.unsplash.com/photo-1684695749267-233af13276d0?auto=format&fit=crop&w=1200&q=80",
    "electrical": "https://images.unsplash.com/photo-1716191300020-b52dec5b70a8?auto=format&fit=crop&w=1200&q=80",
    "aerospace": "https://images.unsplash.com/photo-1413882353314-73389f63b6fd?auto=format&fit=crop&w=1200&q=80",
    "pharma": "https://images.unsplash.com/photo-1598299803204-b73796f43289?auto=format&fit=crop&w=1200&q=80",
}

NAV = [
    ("Home", "index.html"),
    ("About", "about.html"),
    ("Services", "services.html"),
    ("Industries", "industries.html"),
    ("Careers", "careers.html"),
    ("Blog", "blog.html"),
    ("Contact", "contact.html"),
]

TRUST = [
    ("Users", "Experienced Engineers", "Practical, multi-disciplinary engineering talent."),
    ("BadgeCheck", "Quality Focused", "QA/QC discipline on every deliverable."),
    ("Sliders", "Customized Solutions", "Engineered around each project's requirements."),
    ("MapPin", "PAN India Services", "On-site execution across the country."),
]

SERVICES = [
    {
        "slug": "industrial-automation", "icon": "Cpu", "title": "Industrial Automation", "img": "automation",
        "short": "PLC, HMI and control architectures for reliable production lines.",
        "intro": "Modern industrial automation for productive, safe and repeatable operations. We design PLC/HMI/SCADA architectures and integrate the panels, drives and instrumentation needed to run them reliably on the shop floor.",
        "features": ["PLC-based control architecture", "HMI and operator interfaces", "Motor & drive integration", "Field instrumentation & I/O", "Safety interlocks", "Data acquisition & OEE hooks"],
        "benefits": ["Higher throughput and uptime", "Consistent product quality", "Fewer manual errors", "Better process visibility"],
        "faqs": [
            ("Which PLC brands do you work with?", "Common PLC platforms including Siemens, Allen-Bradley, Mitsubishi, Delta and Schneider — chosen based on your standard."),
            ("Do you handle brownfield upgrades?", "Yes. We survey the existing panel and controls, plan the migration path and cut over with minimum production downtime."),
            ("Can you integrate SCADA and MES later?", "Yes. Architectures are designed to allow phased SCADA and higher-level integration."),
        ],
    },
    {
        "slug": "plc-programming", "icon": "Code2", "title": "PLC Programming", "img": "panel",
        "short": "Ladder, structured text and function-block programming.",
        "intro": "Structured, maintainable PLC programs — ladder, function block and structured text — built to your automation standard with documented tag lists, alarms and interlocks.",
        "features": ["Ladder / FBD / ST programming", "Standard function blocks", "Documented tag lists", "Alarms & interlocks", "Sequence control", "Version-controlled backups"],
        "benefits": ["Reliable, deterministic control", "Faster troubleshooting", "Easier future changes", "Reduced downtime"],
        "faqs": [
            ("Can you follow our in-house programming standard?", "Yes. We adhere to the customer's naming, tag and structure standards when provided."),
            ("Do you provide source code and documentation?", "Yes. Source, logic diagrams and I/O documentation are handed over on project close."),
            ("Can you optimise existing PLC logic?", "Yes. We review, refactor and document legacy programs to improve reliability and clarity."),
        ],
    },
    {
        "slug": "scada-development", "icon": "Monitor", "title": "SCADA Development", "img": "scada",
        "short": "Data acquisition, alarms and operator interfaces.",
        "intro": "SCADA solutions for real-time visibility of your plant — screens, alarms, trends and reports engineered around your operators.",
        "features": ["Screen design & navigation", "Real-time alarming", "Historian & trending", "Reports and dashboards", "User & role management", "Secure remote access options"],
        "benefits": ["Real-time production visibility", "Faster incident response", "Data for informed decisions", "Audit-friendly logging"],
        "faqs": [
            ("Which SCADA platforms do you support?", "Popular platforms including AVEVA/Wonderware, WinCC, Ignition, iFIX and open-source alternatives when preferred."),
            ("Can SCADA data feed our ERP/MES?", "Yes. Historian data can be exposed via OPC UA, REST or SQL to downstream systems."),
            ("Do you provide operator training?", "Basic operator training and quick-reference documentation are included with commissioning."),
        ],
    },
    {
        "slug": "control-panel-design", "icon": "LayoutGrid", "title": "Control Panel Design", "img": "panel",
        "short": "Panel engineering, wiring and testing to standards.",
        "intro": "Control panels engineered and built to standard — from single-line diagrams and BOM to wiring, testing and dispatch.",
        "features": ["Panel electrical design", "BOM & GA drawings", "Wiring & termination", "FAT testing", "Standards compliance", "Traceable documentation"],
        "benefits": ["Safe, code-compliant panels", "Reduced site-work time", "Higher first-time pass rate", "Easy maintenance"],
        "faqs": [
            ("Which standards do you follow?", "Panels are designed to applicable IS/IEC standards and customer-specific specifications."),
            ("Do you supply the panel or only design?", "Both — design-only engagements as well as design + build + FAT are offered."),
            ("Is FAT documentation included?", "Yes. FAT protocols and results are documented and shared before dispatch."),
        ],
    },
    {
        "slug": "electrical-engineering", "icon": "Zap", "title": "Electrical Engineering", "img": "electrical",
        "short": "Distribution, wiring and power system design.",
        "intro": "Industrial electrical engineering — from load studies and single-line diagrams to distribution design, wiring and site engineering.",
        "features": ["Load & short-circuit study", "Single-line & schematic design", "LT/HT distribution", "Cable sizing & routing", "Earthing & lightning protection", "Site engineering support"],
        "benefits": ["Safe, code-compliant systems", "Optimised cable & equipment sizing", "Faster site execution", "Fewer field revisions"],
        "faqs": [
            ("Do you handle new plant electrical design?", "Yes — greenfield electrical design from utility connection to end-of-line loads."),
            ("Can you audit an existing installation?", "Yes. Electrical audits, thermography and corrective recommendations are offered."),
            ("Do you support HT/LT switchgear?", "Yes — panel specification, coordination and commissioning support for switchgear."),
        ],
    },
    {
        "slug": "mechanical-engineering", "icon": "Cog", "title": "Mechanical Engineering", "img": "factory",
        "short": "Mechanical design, layout and integration.",
        "intro": "Mechanical engineering for industrial plants — layout, structures, machine integration and detailed drawings.",
        "features": ["Plant & equipment layout", "Structural design", "Machine base & foundation", "Piping & routing", "Detailed drawings", "BOM & procurement support"],
        "benefits": ["Efficient plant flow", "Precise machine placement", "Reduced rework", "Ready-to-fabricate drawings"],
        "faqs": [
            ("Do you provide detailed shop drawings?", "Yes. Fabrication-ready drawings with BOM are part of standard deliverables."),
            ("Can you design equipment foundations?", "Yes. Foundation design coordinated with civil consultants where needed."),
            ("Can you handle machine relocation layouts?", "Yes. Layout planning is a core part of our relocation service."),
        ],
    },
    {
        "slug": "epc-projects", "icon": "ClipboardList", "title": "EPC Projects", "img": "hero",
        "short": "Engineering, procurement and construction delivery.",
        "intro": "Engineering, procurement and construction packages delivered as a single accountable scope — from concept to commissioning.",
        "features": ["Front-end engineering", "Vendor management", "Procurement coordination", "Site construction", "Quality control", "Commissioning & handover"],
        "benefits": ["Single point of accountability", "Coordinated schedule", "Controlled cost & quality", "Reduced interface risk"],
        "faqs": [
            ("What is the typical EPC scope?", "Scope is tailored — from pure engineering + procurement to full turnkey construction and commissioning."),
            ("How do you handle vendor selection?", "Approved vendor lists, technical evaluation and commercial evaluation to select best-fit suppliers."),
            ("Do you provide project management?", "Yes. Dedicated PM with defined WBS, schedule, cost tracking and reporting."),
        ],
    },
    {
        "slug": "cad-design", "icon": "PencilRuler", "title": "CAD Design", "img": "cad",
        "short": "2D/3D CAD drafting and detailing.",
        "intro": "2D and 3D CAD drafting and detailing for mechanical and electrical projects — production-ready drawings you can build from.",
        "features": ["2D drafting", "3D modelling", "Detailing & GA drawings", "BOM extraction", "Revision control", "Standards-aligned drafting"],
        "benefits": ["Accurate, production-ready drawings", "Fewer fabrication errors", "Faster iteration", "Traceable revisions"],
        "faqs": [
            ("Which CAD tools do you use?", "AutoCAD, SolidWorks, Inventor and comparable tools depending on project needs."),
            ("Can you reverse-engineer existing parts?", "Yes — from physical parts or legacy drawings we can create fresh, dimensioned CAD."),
            ("Do you provide as-built drawings?", "Yes. As-built revisions are prepared after site verification."),
        ],
    },
    {
        "slug": "welding", "icon": "Flame", "title": "Welding", "img": "welding",
        "short": "Certified welding for structural and process work.",
        "intro": "Certified welding services for structural and process work — MIG, TIG and arc — executed to industrial quality standards.",
        "features": ["MIG/TIG/ARC welding", "Structural welding", "Stainless & carbon steel", "Weld inspection", "WPS/PQR-aligned procedures", "Post-weld finishing"],
        "benefits": ["Strong, code-compliant welds", "Consistent quality", "Reduced rework", "Traceable inspection"],
        "faqs": [
            ("Do you follow WPS/PQR?", "Yes. Welding procedures are followed and documented per project requirement."),
            ("Can you weld stainless and dissimilar metals?", "Yes, with appropriate procedures, filler materials and inspection."),
            ("Is NDT / weld inspection offered?", "Yes. Visual, PT/MT and third-party NDT can be arranged."),
        ],
    },
    {
        "slug": "fabrication", "icon": "Wrench", "title": "Fabrication", "img": "fabrication",
        "short": "Precision fabrication and finishing.",
        "intro": "Precision fabrication of structural steel, skids, frames and process components — engineered, welded and finished to spec.",
        "features": ["Structural fabrication", "Skids & frames", "Sheet metal work", "Machining coordination", "Surface finishing & painting", "Assembly & FAT"],
        "benefits": ["To-spec fabricated deliverables", "Reduced site work", "Better dimensional control", "Single-vendor delivery"],
        "faqs": [
            ("Do you fabricate to customer drawings?", "Yes. We can also produce shop drawings from concept drawings before starting fabrication."),
            ("What finishes are supported?", "Powder coating, epoxy paint and other industrial finishes based on requirement."),
            ("Do you handle logistics of fabricated items?", "Yes — packing, road transport and site delivery coordination."),
        ],
    },
    {
        "slug": "relocation", "icon": "Truck", "title": "Relocation", "img": "logistics",
        "short": "Machine and plant relocation with precision rigging.",
        "intro": "Machine and plant relocation — from decommissioning and packing to transport, reinstallation and commissioning.",
        "features": ["Site survey & method statement", "Certified rigging", "Packing & transport", "Reinstallation", "Alignment & levelling", "Recommissioning"],
        "benefits": ["Minimised downtime", "Protection of capital assets", "Documented safe execution", "Faster restart"],
        "faqs": [
            ("Do you handle intra-city or PAN India relocation?", "Both — from short intra-plant moves to inter-state relocations."),
            ("How is downtime minimised?", "Detailed sequencing, pre-fabricated foundations where possible and staged commissioning to compress the critical path."),
            ("Are heavy machines insured during transit?", "Insurance is arranged based on client requirement and asset value."),
        ],
    },
    {
        "slug": "engineering-consultancy", "icon": "Compass", "title": "Engineering Consultancy", "img": "team",
        "short": "Advisory, feasibility and method statements.",
        "intro": "Independent engineering advisory — feasibility, technology selection, method statements and project reviews.",
        "features": ["Feasibility & scoping", "Technology selection", "Method statements", "Project reviews", "Third-party engineering", "Owner's engineer role"],
        "benefits": ["Objective technical guidance", "Reduced project risk", "Better decisions, earlier", "Clear execution roadmap"],
        "faqs": [
            ("Can you act as owner's engineer?", "Yes. We can represent the client through design review, tendering and construction supervision."),
            ("Do you provide feasibility studies?", "Yes — techno-commercial feasibility with clear recommendations."),
            ("Can you review third-party designs?", "Yes. Independent design and safety reviews are offered."),
        ],
    },
    {
        "slug": "installation-commissioning", "icon": "PlugZap", "title": "Installation & Commissioning", "img": "automation",
        "short": "Safe install, alignment and start-up.",
        "intro": "Safe installation, alignment and start-up of industrial systems — from single machines to full lines.",
        "features": ["Equipment installation", "Precision alignment", "Utility connection", "I/O and controls check", "Cold & hot commissioning", "Handover documentation"],
        "benefits": ["Reliable start-up", "Safe execution", "Reduced early-life failures", "Well-documented handover"],
        "faqs": [
            ("Do you supply installation manpower?", "Yes. Trained mechanical, electrical and instrumentation manpower for on-site work."),
            ("Is precision alignment offered?", "Yes — laser alignment and precision levelling for rotating and heavy equipment."),
            ("What documentation is provided?", "Installation reports, alignment records, calibration certificates and handover checklists."),
        ],
    },
    {
        "slug": "annual-maintenance", "icon": "CalendarClock", "title": "Annual Maintenance", "img": "factory",
        "short": "Planned maintenance to keep uptime high.",
        "intro": "Planned annual maintenance contracts designed to keep uptime high and surprises low.",
        "features": ["Preventive maintenance schedule", "Periodic inspection", "Consumables management", "Breakdown response", "Spare-part planning", "Performance reports"],
        "benefits": ["Higher plant availability", "Predictable maintenance cost", "Longer asset life", "Fewer surprise breakdowns"],
        "faqs": [
            ("How are AMC scopes defined?", "Scope is agreed based on the assets covered, frequency of visits and response SLAs."),
            ("Do you cover mechanical and electrical scope?", "Yes — bundled mechanical + electrical + automation AMC scopes are supported."),
            ("Is breakdown response included?", "Yes — response times are defined in the AMC agreement."),
        ],
    },
    {
        "slug": "technical-support", "icon": "Headphones", "title": "Technical Support", "img": "team",
        "short": "Engineering support where applicable.",
        "intro": "Engineering technical support — remote diagnostics, on-call troubleshooting and periodic health checks for your systems.",
        "features": ["Remote diagnostics", "On-call troubleshooting", "Health checks", "Documentation support", "Spares advice", "Training refreshers"],
        "benefits": ["Faster resolution", "Reduced downtime", "Extended asset life", "Better in-house awareness"],
        "faqs": [
            ("How can we reach support?", "Phone, email and scheduled site visits — the response model is defined per engagement."),
            ("Is remote support secure?", "Yes. Access is granted only through customer-approved channels and time-boxed sessions."),
            ("Do you offer refresher training?", "Yes. On-request refresher training for operators and maintenance teams is available."),
        ],
    },
]

INDUSTRIES = [
    ("automobile", "Car", "Automobile", "factory", "Automation, fixtures and assembly line engineering."),
    ("manufacturing", "Factory", "Manufacturing", "automation", "Process automation and plant engineering."),
    ("food-processing", "Utensils", "Food Processing", "fabrication", "Hygienic design, packing lines and controls."),
    ("aerospace", "Plane", "Aerospace", "aerospace", "Precision assembly support and tooling."),
    ("oil-gas", "Droplet", "Oil & Gas", "electrical", "Panels, instrumentation and site engineering."),
    ("pharmaceutical", "FlaskConical", "Pharmaceutical", "pharma", "Compliant utilities, HMI/SCADA and validation support."),
    ("chemical", "TestTube2", "Chemical", "panel", "Instrumentation, safety interlocks and controls."),
    ("power-plants", "Zap", "Power Plants", "electrical", "Electrical systems, controls and I&C."),
    ("water-treatment", "Waves", "Water Treatment", "scada", "PLC/SCADA for treatment plants."),
    ("paper-textile", "Layers", "Paper & Textile", "factory", "Drives, motion and process integration."),
    ("packaging", "PackageOpen", "Packaging", "automation", "Line integration and end-of-line automation."),
]

WHY = [
    ("Users", "Experienced Engineers", "Technical expertise focused on practical industrial solutions."),
    ("Sliders", "Customized Solutions", "Solutions designed around individual project requirements."),
    ("BadgeCheck", "Quality Assurance", "Professional engineering and quality-focused execution."),
    ("Clock", "On-Time Delivery", "Structured planning and project coordination."),
    ("Cpu", "Latest Technology", "Modern automation and engineering technologies."),
    ("IndianRupee", "Affordable Pricing", "Competitive solutions without compromising technical quality."),
    ("Headphones", "24×7 Technical Support", "Technical assistance where applicable."),
]

CAPABILITIES = [
    ("Automation", ["PLC", "SCADA", "HMI", "Industrial Controls"]),
    ("Electrical", ["Control Panels", "Electrical Design", "Installation", "Commissioning"]),
    ("Mechanical", ["CAD", "Fabrication", "Welding", "Machine / Equipment Relocation"]),
]

PROCESS = [
    ("01", "Consultation", "Understand requirements and project objectives."),
    ("02", "Planning", "Analyze scope, resources and technical requirements."),
    ("03", "Design", "Develop engineering and automation solutions."),
    ("04", "Development", "Build and configure the required systems."),
    ("05", "Testing", "Verify functionality, safety and performance."),
    ("06", "Delivery", "Complete implementation and handover."),
    ("07", "Support", "Provide maintenance and technical assistance."),
]

VALUES = ["Quality", "Integrity", "Innovation", "Safety", "Customer Satisfaction", "Reliability"]

WHY_FURTHMAC = [
    "Multi-disciplinary engineering team",
    "QA/QC discipline on every deliverable",
    "Documented, safe execution",
    "Post-handover support",
]

ABOUT_POINTS = [
    "Mission — Deliver reliable, safe and precise engineering solutions.",
    "Vision — To be a trusted long-term engineering partner for Indian industry.",
    "Values — Quality, integrity, innovation, safety, reliability.",
    "Approach — Multi-disciplinary teams engineered around your project.",
]

ICONS = {
    "Cpu": "cpu", "Truck": "truck", "Code2": "code-2", "Monitor": "monitor",
    "LayoutGrid": "layout-grid", "Zap": "zap", "Cog": "cog", "ClipboardList": "clipboard-list",
    "PencilRuler": "pencil-ruler", "Flame": "flame", "Wrench": "wrench", "Compass": "compass",
    "PlugZap": "plug-zap", "CalendarClock": "calendar-clock", "Headphones": "headphones",
    "Users": "users", "BadgeCheck": "badge-check", "Sliders": "sliders", "MapPin": "map-pin",
    "Clock": "clock", "IndianRupee": "indian-rupee", "Car": "car", "Factory": "factory",
    "Utensils": "utensils", "Plane": "plane", "Droplet": "droplet", "FlaskConical": "flask-conical",
    "TestTube2": "test-tube-2", "Waves": "waves", "Layers": "layers", "PackageOpen": "package-open",
    "MessageCircle": "message-circle", "Phone": "phone", "Mail": "mail", "Instagram": "instagram",
    "ArrowRight": "arrow-right", "ChevronRight": "chevron-right", "ChevronDown": "chevron-down",
    "Menu": "menu", "X": "x", "Sparkles": "sparkles", "CheckCircle2": "check-circle-2",
    "Briefcase": "briefcase", "Newspaper": "newspaper", "Home": "home",
}


def icon(name, size=20, cls=""):
    lucide = ICONS.get(name, "cog")
    c = f' class="{cls}"' if cls else ""
    return f'<i data-lucide="{lucide}" width="{size}" height="{size}"{c}></i>'


def delay(i, step=0.05):
    return f' style="--d:{round(i * step, 2)}s"'


# ---------------------------------------------------------------- components

def head(title, description, path, prefix, extra_schema=""):
    canonical = f"{DOMAIN}/{path}".rstrip("/") or DOMAIN
    if path == "":
        canonical = DOMAIN + "/"
    return f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{title}</title>
  <meta name="description" content="{description}">
  <meta name="robots" content="index, follow">
  <meta name="theme-color" content="#0A2A5E">
  <link rel="canonical" href="{canonical}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Furthmac Solutions">
  <meta property="og:title" content="{title}">
  <meta property="og:description" content="{description}">
  <meta property="og:url" content="{canonical}">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" type="image/png" href="{prefix}assets/logo.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="{prefix}assets/styles.css">
  <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js" defer></script>
  <script src="{prefix}assets/main.js" defer></script>
  {extra_schema}
</head>"""


def header(prefix, active="", solid=True):
    cls = "site-header solid" if solid else "site-header"
    links = []
    for label, href in NAV:
        act = ' active' if label.lower() == active else ''
        if label == "Services":
            drop = "\n".join(
                f'        <a href="{prefix}services/{s["slug"]}.html">{s["title"]}</a>' for s in SERVICES
            )
            links.append(f"""      <div class="has-drop">
        <a href="{prefix}services.html" class="nav-link{act}">Services {icon("ChevronDown", 14)}</a>
        <div class="drop">
{drop}
        </div>
      </div>""")
        else:
            links.append(f'      <a href="{prefix}{href}" class="nav-link{act}">{label}</a>')
    nav_html = "\n".join(links)
    mnav = "\n".join(
        f'        <a href="{prefix}{href}" class="mnav-link">{label}</a>' for label, href in NAV
    )
    return f"""<header class="{cls}" data-testid="site-header">
  <div class="container-x header-inner">
    <a href="{prefix}index.html" class="logo" aria-label="Furthmac Solutions — home">
      <img class="logo-light" src="{prefix}assets/wordmark.png" alt="Furthmac Solutions">
      <img class="logo-dark" src="{prefix}assets/wordmark-dark.png" alt="Furthmac Solutions">
    </a>
    <nav class="main-nav" aria-label="Main navigation">
{nav_html}
    </nav>
    <a href="{prefix}contact.html" class="btn-primary btn-sm header-cta">Get a Free Consultation</a>
    <button class="menu-btn" aria-label="Menu" aria-expanded="false" data-testid="mobile-menu-btn">
      <span class="icon-wrap icon-menu">{icon("Menu", 18)}</span>
      <span class="icon-wrap icon-close hidden">{icon("X", 18)}</span>
    </button>
  </div>
  <div class="mobile-nav">
    <div class="container-x mobile-nav-inner">
{mnav}
      <a href="{prefix}contact.html" class="btn-primary btn-block" style="margin-top:1rem">Get a Free Consultation</a>
      <a href="tel:{COMPANY['phone'].replace(' ', '')}" class="mobile-nav-phone">{COMPANY['phone']}</a>
    </div>
  </div>
</header>"""


def footer(prefix):
    svc_links = "\n".join(
        f'          <li><a href="{prefix}services/{s["slug"]}.html">{s["title"]}</a></li>' for s in SERVICES[:8]
    )
    ind_links = "\n".join(
        f'          <li><a href="{prefix}industries.html">{t}</a></li>' for (_, _, t, _, _) in INDUSTRIES[:6]
    )
    return f"""<footer class="site-footer" data-testid="site-footer">
  <div class="eng-grid eng-grid-bg"></div>
  <div class="container-x footer-inner">
    <div class="footer-grid">
      <div class="footer-about">
        <a href="{prefix}index.html" class="logo"><img src="{prefix}assets/wordmark.png" alt="Furthmac Solutions"></a>
        <p>Industrial Automation, PLC Programming, Electrical &amp; Mechanical Engineering, EPC Projects and Engineering Consultancy across India.</p>
        <div class="footer-hours">{icon("Clock", 15)} {COMPANY['hours']}</div>
        <a href="{COMPANY['instagram']}" target="_blank" rel="noreferrer" class="footer-social" aria-label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="{prefix}about.html">About Us</a></li>
          <li><a href="{prefix}careers.html">Careers</a></li>
          <li><a href="{prefix}blog.html">Blog</a></li>
          <li><a href="{prefix}contact.html">Contact Us</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <ul>
{svc_links}
        </ul>
      </div>
      <div class="footer-col">
        <h4>Industries</h4>
        <ul>
{ind_links}
        </ul>
      </div>
    </div>
    <div class="footer-contact">
      <a href="tel:{COMPANY['phone'].replace(' ', '')}" class="footer-contact-item">
        <span class="icon-chip">{icon("Phone", 18)}</span>
        <span><div class="overline fc-label">Phone</div><div class="fc-value">{COMPANY['phone']}</div></span>
      </a>
      <a href="mailto:{COMPANY['email']}" class="footer-contact-item">
        <span class="icon-chip">{icon("Mail", 18)}</span>
        <span><div class="overline fc-label">Email</div><div class="fc-value">{COMPANY['email']}</div></span>
      </a>
      <div class="footer-contact-item">
        <span class="icon-chip">{icon("MapPin", 18)}</span>
        <span><div class="overline fc-label">Address</div><div class="fc-value" style="color:rgba(255,255,255,0.8)">{COMPANY['address']}</div></span>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Furthmac Solutions. All Rights Reserved.</span>
      <div class="footer-legal">
        <a href="{prefix}privacy.html">Privacy Policy</a>
        <a href="{prefix}terms.html">Terms &amp; Conditions</a>
        <a href="{prefix}cookie-policy.html">Cookie Policy</a>
      </div>
    </div>
  </div>
</footer>"""


def floating():
    return f"""<div class="floating-contacts">
  <a href="https://wa.me/{COMPANY['phoneDigits']}" target="_blank" rel="noreferrer" aria-label="WhatsApp" class="fc-btn fc-wa">{icon("MessageCircle", 20)}</a>
  <a href="tel:{COMPANY['phone'].replace(' ', '')}" aria-label="Call" class="fc-btn fc-call">{icon("Phone", 20)}</a>
  <a href="mailto:{COMPANY['email']}" aria-label="Email" class="fc-btn fc-mail">{icon("Mail", 20)}</a>
</div>"""


def page_header(overline, title_lines, subtitle="", image="hero", crumb=None):
    lines = "\n".join(
        f'        <span class="mask-line"><span style="--d:{round(0.1 + i * 0.12, 2)}s">{l}</span></span>'
        for i, l in enumerate(title_lines)
    )
    sub = f'<p class="ph-sub anim-fade-up" style="--d:0.4s">{subtitle}</p>' if subtitle else ""
    return f"""<section class="page-header">
    <img class="ph-bg" src="{IMAGES[image]}" alt="" aria-hidden="true">
    <div class="ph-overlay"></div>
    <div class="eng-grid ph-grid"></div>
    <div class="container-x ph-content">
      <nav class="breadcrumb overline anim-fade-in" aria-label="Breadcrumb">
        <a href="index.html">Home</a><span>›</span><span class="current">{crumb or overline}</span>
      </nav>
      <h1>
{lines}
      </h1>
      {sub}
    </div>
  </section>"""


def cta_banner(prefix):
    return f"""<section class="container-x cta-section">
    <div class="cta-banner">
      <div class="eng-grid eng-grid-bg"></div>
      <div class="glow"></div>
      <div class="inner">
        <div>
          <p class="overline text-orange" style="margin-bottom:0.75rem">Ready to start?</p>
          <h3>Discuss your project with our engineering team.</h3>
        </div>
        <div class="ctas">
          <a href="{prefix}contact.html" class="btn-primary">Get a Free Consultation {icon("ArrowRight", 18)}</a>
          <a href="tel:{COMPANY['phone'].replace(' ', '')}" class="btn-ghost-white">Call {COMPANY['phone']}</a>
        </div>
      </div>
    </div>
  </section>"""


def process_section():
    steps = "\n".join(
        f"""        <div class="process-step reveal"{delay(i, 0.04)}>
          <div class="process-no">{no}</div>
          <h3>{t}</h3>
          <p>{d}</p>
        </div>"""
        for i, (no, t, d) in enumerate(PROCESS)
    )
    return f"""<section class="bg-steel section-pad">
    <div class="container-x">
      <div class="reveal" style="max-width:42rem;margin-bottom:3.5rem">
        <p class="overline text-orange" style="margin-bottom:0.75rem">Our Process</p>
        <h2 class="section-title">A disciplined path from brief to handover.</h2>
      </div>
      <div class="process-grid">
{steps}
      </div>
    </div>
  </section>"""


def why_us():
    cards = "\n".join(
        f"""      <div class="card-soft why-card reveal"{delay(i, 0.04)}>
        <span class="icon-chip icon-chip-navy">{icon(ic, 20)}</span>
        <h3>{t}</h3>
        <p>{d}</p>
      </div>"""
        for i, (ic, t, d) in enumerate(WHY)
    )
    return f"""<section class="container-x section-pad">
    <div class="reveal" style="max-width:42rem;margin-bottom:3rem">
      <p class="overline text-orange" style="margin-bottom:0.75rem">Why choose Furthmac</p>
      <h2 class="section-title">Engineered for reliability, built to deliver.</h2>
    </div>
    <div class="why-grid">
{cards}
    </div>
  </section>"""


def capabilities_section():
    cards = "\n".join(
        f"""        <div class="card-soft cap-card reveal"{delay(i)}>
          <div class="overline text-orange">{g}</div>
          <ul>
{chr(10).join(f'            <li><span class="cap-dot"></span>{it}</li>' for it in items)}
          </ul>
        </div>"""
        for i, (g, items) in enumerate(CAPABILITIES)
    )
    return f"""<section class="container-x section-pad">
    <div class="cap-grid">
      <div class="reveal">
        <p class="overline text-orange" style="margin-bottom:0.75rem">Technology &amp; Capabilities</p>
        <h2 class="section-title" style="line-height:1.2">The technical stack we bring to every project.</h2>
        <p class="about-text" style="max-width:28rem">Modern automation, electrical and mechanical technologies applied with disciplined engineering practice.</p>
      </div>
      <div class="cap-cards">
{cards}
      </div>
    </div>
  </section>"""


def services_grid(prefix, compact=False):
    cards = "\n".join(
        f"""        <a href="{prefix}services/{s['slug']}.html" class="card-soft service-card reveal"{delay(i, 0.03)}>
          <div class="service-card-img">
            <img src="{IMAGES.get(s['img'], IMAGES['hero'])}" alt="{s['title']}" loading="lazy">
            <span class="icon-chip icon-chip-white service-card-icon">{icon(s['icon'], 18)}</span>
          </div>
          <div class="service-card-body">
            <h3 class="service-card-title">{s['title']}</h3>
            <p class="service-card-desc">{s['short']}</p>
            <span class="service-card-more">Learn More {icon("ArrowRight", 15)}</span>
          </div>
        </a>"""
        for i, s in enumerate(SERVICES)
    )
    btn = "" if compact else f'<a href="{prefix}services.html" class="btn-secondary reveal" style="--d:0.1s">All services {icon("ArrowRight", 16)}</a>'
    return f"""<section class="bg-steel section-pad">
    <div class="container-x">
      <div class="services-head">
        <div class="reveal">
          <p class="overline text-orange" style="margin-bottom:0.75rem">What we do</p>
          <h2 class="section-title" style="max-width:42rem">Engineering services built around your industry.</h2>
        </div>
        {btn}
      </div>
      <div class="cards-grid">
{cards}
      </div>
    </div>
  </section>"""


def industries_home():
    chips = "\n".join(
        f"""        <div class="industry-chip reveal"{delay(i, 0.03)}>
          <span class="icon-chip">{icon(ic, 20)}</span>
          <h3>{t}</h3>
          <p>{d}</p>
        </div>"""
        for i, (_, ic, t, _, d) in enumerate(INDUSTRIES)
    )
    return f"""<section class="industries-section section-pad">
    <div class="eng-grid eng-grid-bg"></div>
    <div class="container-x inner">
      <div class="reveal" style="max-width:42rem;margin-bottom:3rem">
        <p class="overline text-orange" style="margin-bottom:0.75rem">Industries we serve</p>
        <h2 class="section-title light">Deep industry knowledge, applied end-to-end.</h2>
      </div>
      <div class="industries-grid">
{chips}
      </div>
    </div>
  </section>"""


def about_section(prefix):
    points = "\n".join(
        f"""          <div class="about-point reveal"{delay(i)}>{icon("ChevronRight", 18)}<span>{t}</span></div>"""
        for i, t in enumerate(ABOUT_POINTS)
    )
    return f"""<section class="container-x section-pad about-grid">
    <div class="reveal">
      <div class="about-img-wrap">
        <img src="{IMAGES['team']}" alt="Furthmac engineering team" class="about-img" loading="lazy">
        <div class="about-badge">
          <div class="overline text-orange">Values</div>
          <div class="about-badge-title">Quality · Safety · Precision</div>
        </div>
      </div>
    </div>
    <div class="reveal">
      <p class="overline text-orange" style="margin-bottom:1rem">About Furthmac</p>
      <h2 class="section-title">Engineering excellence, delivered on the ground.</h2>
      <p class="about-text">Furthmac Solutions is an industrial engineering partner headquartered in Pune, delivering automation, electrical, mechanical and EPC solutions to manufacturing clients across India. We combine technical expertise with disciplined execution — protecting your uptime, capital and people.</p>
      <div class="about-points">
{points}
      </div>
      <a href="{prefix}about.html" class="btn-secondary" style="margin-top:2rem">Learn more about us {icon("ArrowRight", 16)}</a>
    </div>
  </section>"""


def contact_section(prefix, compact=False):
    options = "\n".join(f'            <option value="{s["title"]}">{s["title"]}</option>' for s in SERVICES)
    heading = "" if compact else f"""<div class="reveal" style="margin-bottom:3rem">
        <p class="overline text-orange" style="margin-bottom:0.75rem">Contact</p>
        <h2 class="section-title" style="max-width:42rem">Let's engineer your next project.</h2>
      </div>"""
    pad = "padding-block:4rem" if compact else ""
    address = "".join(f"<div>{l}</div>" for l in COMPANY["addressLines"])
    return f"""<section class="section-pad" style="{pad}" data-testid="contact-section">
    <div class="container-x">
      {heading}
      <div class="contact-grid">
        <form class="card-soft contact-form reveal" action="https://formsubmit.co/{COMPANY['email']}" method="POST" data-testid="contact-form">
          <input type="hidden" name="_subject" value="New enquiry — Furthmac Solutions website">
          <input type="hidden" name="_template" value="table">
          <input type="hidden" name="_captcha" value="true">
          <input type="hidden" name="_next" value="{DOMAIN}/thanks.html">
          <input type="hidden" name="_autoresponse" value="Thank you for contacting Furthmac Solutions. Our engineering team typically responds within one working day.">
          <input type="text" name="_honey" style="display:none">
          <div class="form-row">
            <div class="field"><span class="label overline text-steel">Full Name *</span><input type="text" name="name" placeholder="Your full name" required data-testid="input-name"></div>
            <div class="field"><span class="label overline text-steel">Company</span><input type="text" name="company" placeholder="Company name"></div>
            <div class="field"><span class="label overline text-steel">Email *</span><input type="email" name="email" placeholder="you@company.com" required data-testid="input-email"></div>
            <div class="field"><span class="label overline text-steel">Phone</span><input type="tel" name="phone" placeholder="+91 ..."></div>
          </div>
          <div class="field"><span class="label overline text-steel">Service Required</span>
            <select name="service">
              <option value="" selected>Select a service</option>
{options}
              <option value="Other">Other</option>
            </select>
          </div>
          <div class="field"><span class="label overline text-steel">Message *</span><textarea name="message" rows="5" placeholder="Tell us about your project..." required data-testid="input-message"></textarea></div>
          <button type="submit" class="btn-primary" data-testid="contact-submit">Send Enquiry {icon("ArrowRight", 16)}</button>
        </form>
        <div class="contact-side reveal" style="--d:0.1s">
          <div class="card-soft info-card">
            <div class="info-row"><span class="icon-chip icon-chip-orange">{icon("MapPin", 17)}</span><div><div class="overline info-label">Address</div><div class="info-value">{address}</div></div></div>
            <div class="info-row"><span class="icon-chip icon-chip-orange">{icon("Phone", 17)}</span><div><div class="overline info-label">Phone</div><div class="info-value"><a href="tel:{COMPANY['phone'].replace(' ', '')}">{COMPANY['phone']}</a></div></div></div>
            <div class="info-row"><span class="icon-chip icon-chip-orange">{icon("Mail", 17)}</span><div><div class="overline info-label">Email</div><div class="info-value"><a href="mailto:{COMPANY['email']}">{COMPANY['email']}</a></div></div></div>
            <div class="info-row"><span class="icon-chip icon-chip-orange">{icon("Clock", 17)}</span><div><div class="overline info-label">Working Hours</div><div class="info-value">{COMPANY['hours']}</div></div></div>
          </div>
          <a href="https://wa.me/{COMPANY['phoneDigits']}" target="_blank" rel="noreferrer" class="wa-btn">
            <span>{icon("MessageCircle", 18)} Chat on WhatsApp</span>{icon("ArrowRight", 18)}
          </a>
          <div class="map-embed">
            <iframe title="Furthmac Solutions location" src="https://www.google.com/maps?q=Hinjewadi,+Village+Marunji,+Taluka+Mulshi,+Pune,+Maharashtra+411057&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>"""


def page(title, description, path, body, prefix="", active="", solid=True, extra_schema=""):
    return f"""{head(title, description, path, prefix, extra_schema)}
<body>
{header(prefix, active, solid)}
<main>
{body}
</main>
{footer(prefix)}
{floating()}
</body>
</html>
"""


ORG_SCHEMA = '<script type="application/ld+json">' + json.dumps({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Furthmac Solutions",
    "url": DOMAIN,
    "email": COMPANY["email"],
    "telephone": COMPANY["phone"],
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Hinjewadi, Village Marunji, Taluka Mulshi",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411057",
        "addressCountry": "IN",
    },
    "sameAs": [COMPANY["instagram"]],
}) + "</script>"


# ---------------------------------------------------------------- pages

def home_page():
    lines = "\n".join(
        f'          <span class="mask-line"><span style="--d:{round(0.35 + i * 0.12, 2)}s">{l}</span></span>'
        for i, l in enumerate(["Engineering Innovation.", "Smart Automation.", "Reliable Industrial Solutions."])
    )
    body = f"""  <section class="hero" data-testid="hero-section">
    <div class="hero-bg"><img src="{IMAGES['hero']}" alt="Industrial engineer operating automation equipment"></div>
    <div class="hero-overlay"></div>
    <div class="eng-grid hero-grid"></div>
    <div class="hero-card anim-fade-in" style="--d:1.4s">
      <div class="hero-card-inner animate-float-slow">
        <div class="hero-card-tag">{icon("Sparkles", 14)} AUTOMATION</div>
        <div class="hero-card-text">PLC · SCADA · HMI · Controls</div>
      </div>
    </div>
    <div class="container-x hero-content">
      <p class="overline text-orange anim-fade-up" style="--d:0.3s;margin-bottom:1.25rem">Industrial Engineering · India</p>
      <h1>
{lines}
      </h1>
      <p class="hero-sub anim-fade-up" style="--d:1s">Delivering Industrial Automation, Electrical Engineering, Mechanical Design, EPC Solutions, PLC Programming, Control Panels, Installation &amp; Commissioning, and Engineering Consultancy.</p>
      <div class="hero-ctas anim-fade-up" style="--d:1.2s">
        <a href="contact.html" class="btn-primary">Get a Free Consultation {icon("ArrowRight", 18)}</a>
        <a href="contact.html" class="btn-ghost-white">Contact Us</a>
      </div>
    </div>
    <div class="hero-scroll anim-fade-in" style="--d:2s">SCROLL ↓</div>
  </section>
  <section class="trust-strip">
    <div class="container-x trust-grid">
{chr(10).join(f'''      <div class="trust-item reveal"{delay(i, 0.06)}>
        <span class="icon-chip icon-chip-orange">{icon(ic, 22)}</span>
        <div><div class="trust-title">{t}</div><div class="trust-desc">{d}</div></div>
      </div>''' for i, (ic, t, d) in enumerate(TRUST))}
    </div>
  </section>
{about_section("")}
{services_grid("")}
{why_us()}
{industries_home()}
{capabilities_section()}
{process_section()}
{cta_banner("")}
{contact_section("")}"""
    return page(
        "Furthmac Solutions | Industrial Automation & Engineering Services",
        "Furthmac Solutions provides Industrial Automation, PLC Programming, Electrical Engineering, Mechanical Design, EPC Projects, Control Panel Manufacturing and Engineering Consultancy across India.",
        "", body, active="home", solid=False, extra_schema=ORG_SCHEMA,
    )


def about_page():
    values = "\n".join(
        f"""        <div class="card-soft value-card reveal"{delay(i, 0.04)}>
          <div class="value-no">0{i + 1}</div>
          <h3 class="value-name">{v}</h3>
        </div>"""
        for i, v in enumerate(VALUES)
    )
    body = f"""  {page_header("About Us", ["A serious engineering", "partner for Indian", "industry."], "Furthmac Solutions delivers automation, electrical, mechanical and EPC solutions with disciplined execution.", "team")}
{about_section("")}
  <section class="container-x" style="padding-bottom:6rem">
    <div class="reveal">
      <p class="overline text-orange" style="margin-bottom:0.75rem">Core Values</p>
      <h2 class="section-title" style="font-size:2rem;max-width:42rem">The principles behind every project.</h2>
    </div>
    <div class="values-grid">
{values}
    </div>
  </section>
{capabilities_section()}
{why_us()}
{process_section()}
{cta_banner("")}"""
    return page(
        "About Us | Furthmac Solutions",
        "Learn about Furthmac Solutions — an industrial engineering partner delivering automation, electrical, mechanical and EPC solutions across India.",
        "about.html", body, active="about",
    )


def services_page():
    body = f"""  {page_header("Services", ["Engineering services", "built for", "Indian industry."], "Fifteen integrated capabilities across automation, electrical, mechanical and EPC — engineered to work together.", "automation")}
{services_grid("", compact=True)}
{process_section()}
{cta_banner("")}"""
    return page(
        "Services | Industrial Automation & Engineering | Furthmac",
        "Industrial Automation, PLC Programming, SCADA, Electrical & Mechanical Engineering, Control Panels, EPC Projects, Fabrication, Installation & Commissioning and Consultancy.",
        "services.html", body, active="services",
    )


def service_detail_page(s):
    features = "\n".join(
        f"""          <div class="card-soft feature-card reveal"{delay(i, 0.03)}>
            <span class="icon-chip icon-chip-orange">{icon("CheckCircle2", 20)}</span>
            <div class="feature-name">{f}</div>
          </div>"""
        for i, f in enumerate(s["features"])
    )
    benefits = "\n".join(
        f"""          <div class="card-soft benefit-card reveal"{delay(i)}>
            <div class="benefit-no">0{i + 1}</div>
            <div class="benefit-name">{b}</div>
          </div>"""
        for i, b in enumerate(s["benefits"])
    )
    faqs = "\n".join(
        f"""          <details class="faq-item">
            <summary>{q} {icon("ChevronDown", 20, "faq-chevron")}</summary>
            <div class="faq-a">{a}</div>
          </details>"""
        for q, a in s["faqs"]
    )
    related = [x for x in SERVICES if x["slug"] != s["slug"]][:4]
    related_html = "\n".join(
        f"""        <a href="{r['slug']}.html" class="card-soft related-card">
          <span class="icon-chip icon-chip-orange">{icon(r["icon"], 20)}</span>
          <div class="rel-title">{r['title']}</div>
          <div class="rel-more">Learn more →</div>
        </a>"""
        for r in related
    )
    wf = "\n".join(
        f'              <li>{icon("CheckCircle2", 16)}<span>{t}</span></li>' for t in WHY_FURTHMAC
    )
    faq_schema = '<script type="application/ld+json">' + json.dumps({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}}
            for q, a in s["faqs"]
        ],
    }) + "</script>"
    body = f"""  <section class="svc-hero">
    <img class="bg" src="{IMAGES.get(s['img'], IMAGES['hero'])}" alt="{s['title']}">
    <div class="overlay"></div>
    <div class="eng-grid eng-grid-bg"></div>
    <div class="container-x content">
      <nav class="breadcrumb overline reveal in" aria-label="Breadcrumb">
        <a href="../index.html">Home</a><span>›</span>
        <a href="../services.html">Services</a><span>›</span>
        <span class="current">{s['title']}</span>
      </nav>
      <div class="svc-icon-row">
        <span class="svc-icon">{icon(s["icon"], 26)}</span>
        <span class="overline text-orange">Furthmac Service</span>
      </div>
      <h1><span class="mask-line"><span style="--d:0.25s">{s['title']}</span></span></h1>
      <p class="svc-hero-sub anim-fade-up" style="--d:0.5s">{s['short']}</p>
      <div class="ctas anim-fade-up" style="--d:0.65s">
        <a href="../contact.html" class="btn-primary">Get a Free Consultation {icon("ArrowRight", 18)}</a>
        <a href="tel:{COMPANY['phone'].replace(' ', '')}" class="btn-ghost-white">{icon("Phone", 16)} Call {COMPANY['phone']}</a>
      </div>
    </div>
  </section>
  <section class="container-x section-pad">
    <div class="overview-grid">
      <div class="reveal">
        <p class="overline text-orange" style="margin-bottom:0.75rem">Overview</p>
        <h2 class="section-title" style="font-size:2.25rem">Engineering-led {s['title'].lower()}, delivered with discipline.</h2>
        <p class="overview-text">{s['intro']}</p>
      </div>
      <div class="reveal" style="--d:0.1s">
        <div class="card-soft why-furthmac-card">
          <div class="wf-head">{icon("Sparkles", 16)} Why Furthmac</div>
          <ul>
{wf}
          </ul>
          <a href="../contact.html" class="btn-primary btn-sm btn-block" style="margin-top:1.5rem">Request a quote {icon("ArrowRight", 15)}</a>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-steel section-pad">
    <div class="container-x">
      <div class="reveal">
        <p class="overline text-orange" style="margin-bottom:0.75rem">Features</p>
        <h2 class="section-title" style="font-size:2.25rem;max-width:42rem">What's included in this service.</h2>
      </div>
      <div class="features-grid">
{features}
      </div>
    </div>
  </section>
  <section class="container-x section-pad">
    <div class="benefits-grid-outer">
      <div class="reveal">
        <p class="overline text-orange" style="margin-bottom:0.75rem">Benefits</p>
        <h2 class="section-title" style="font-size:2.25rem;line-height:1.2">Outcomes you can plan around.</h2>
        <p class="about-text">Clear, measurable business outcomes designed into every engagement.</p>
      </div>
      <div class="benefits-grid">
{benefits}
      </div>
    </div>
  </section>
{process_section()}
  <section class="bg-steel section-pad">
    <div class="container-x faq-grid">
      <div class="reveal">
        <p class="overline text-orange" style="margin-bottom:0.75rem">FAQ</p>
        <h2 class="section-title" style="font-size:2.25rem;line-height:1.2">Questions we hear often.</h2>
      </div>
      <div class="reveal">
{faqs}
      </div>
    </div>
  </section>
  <section class="container-x" style="padding-block:5rem">
    <div class="reveal">
      <p class="overline text-orange" style="margin-bottom:0.75rem">Related services</p>
      <h3 style="font-weight:700;font-size:1.5rem;color:var(--navy)">Explore more capabilities</h3>
    </div>
    <div class="related-grid">
{related_html}
    </div>
  </section>
{cta_banner("../")}
{contact_section("../", compact=True)}"""
    return page(
        f"{s['title']} | Furthmac Solutions",
        f"{s['title']} — {s['short']}",
        f"services/{s['slug']}.html", body, prefix="../", active="services", extra_schema=faq_schema,
    )


def industries_page():
    cards = "\n".join(
        f"""        <div class="card-soft industry-card reveal"{delay(i, 0.03)}>
          <div class="industry-card-img">
            <img src="{IMAGES[img]}" alt="{t}" loading="lazy">
            <span class="icon-chip icon-chip-white industry-card-icon">{icon(ic, 20)}</span>
          </div>
          <div class="industry-card-body">
            <h3>{t}</h3>
            <p>{d}</p>
          </div>
        </div>"""
        for i, (_, ic, t, img, d) in enumerate(INDUSTRIES)
    )
    body = f"""  {page_header("Industries", ["Deep industry", "knowledge, applied", "end-to-end."], image="factory")}
  <section class="container-x section-pad">
    <div class="cards-grid">
{cards}
    </div>
  </section>
{cta_banner("")}"""
    return page(
        "Industries We Serve | Furthmac Solutions",
        "Furthmac Solutions delivers industrial engineering across automobile, manufacturing, food processing, pharma, chemical, power, packaging and more.",
        "industries.html", body, active="industries",
    )


def careers_page():
    body = f"""  {page_header("Careers", ["Build a career in", "industrial engineering."], "We're looking for engineers who take ownership and love shipping real-world projects.", "team")}
  <section class="container-x section-pad">
    <div class="card-soft big-card reveal">
      <span class="icon-chip icon-chip-orange">{icon("Briefcase", 26)}</span>
      <h2>Working at Furthmac</h2>
      <p class="lead">Furthmac is a hands-on engineering environment. You'll work across automation, electrical and mechanical projects with real ownership from scoping to commissioning.</p>
      <div class="form-row" style="margin-top:2rem;max-width:42rem">
        <div><div class="overline text-orange">Send resume</div><a href="mailto:{COMPANY['email']}" style="display:block;margin-top:0.5rem;font-family:var(--font-display);font-weight:600;color:var(--navy)">{COMPANY['email']}</a></div>
        <div><div class="overline text-orange">Or call</div><a href="tel:{COMPANY['phone'].replace(' ', '')}" style="display:block;margin-top:0.5rem;font-family:var(--font-display);font-weight:600;color:var(--navy)">{COMPANY['phone']}</a></div>
      </div>
      <p style="margin-top:2rem;font-size:0.875rem;color:var(--steel-500)">Open positions are posted here as they become available.</p>
    </div>
  </section>
{cta_banner("")}"""
    return page(
        "Careers | Furthmac Solutions",
        "Join Furthmac Solutions — engineering careers in industrial automation, electrical, mechanical and EPC projects.",
        "careers.html", body, active="careers",
    )


def blog_page():
    body = f"""  {page_header("Blog", ["Engineering insights", "and industry", "notes."], image="scada")}
  <section class="container-x section-pad">
    <div class="card-soft center-card reveal">
      <span class="icon-chip icon-chip-orange" style="height:3.5rem;width:3.5rem;border-radius:1rem">{icon("Newspaper", 26)}</span>
      <h2 style="margin-top:1.5rem;font-weight:700;font-size:1.5rem;color:var(--navy)">Articles publishing soon</h2>
      <p style="margin-top:0.75rem;color:var(--steel-500);line-height:1.7">Technical articles on automation, PLC programming, SCADA, electrical and mechanical engineering will be published here.</p>
    </div>
  </section>
{cta_banner("")}"""
    return page(
        "Blog | Furthmac Solutions",
        "Articles on industrial automation, PLC programming, SCADA, electrical and mechanical engineering.",
        "blog.html", body, active="blog",
    )


def contact_page():
    body = f"""  {page_header("Contact", ["Let's discuss", "your project."], "Our engineering team typically responds within one working day.", "panel")}
{contact_section("", compact=True)}"""
    return page(
        "Contact | Furthmac Solutions",
        "Contact Furthmac Solutions for industrial automation, PLC programming, electrical, mechanical and EPC engineering. Pune, Maharashtra.",
        "contact.html", body, active="contact",
    )


LEGAL_PAGES = [
    ("privacy.html", "Privacy Policy", "Furthmac Solutions privacy policy.", [
        ("", "This privacy policy describes how Furthmac Solutions collects, uses and protects information submitted through our website."),
        ("Information we collect", "We collect only the information you voluntarily submit through contact forms — name, email, phone, company and message."),
        ("How we use it", "We use your information solely to respond to enquiries and to provide requested engineering services."),
        ("Data protection", "Submissions are stored securely. We do not sell or share your data with third parties."),
        ("Contact", 'For any privacy question, email <a href="mailto:info@furthmac.com">info@furthmac.com</a>.'),
    ]),
    ("terms.html", "Terms & Conditions", "Furthmac Solutions terms and conditions.", [
        ("", "By using this website, you agree to the following terms."),
        ("Website use", "Content on this website is provided for informational purposes and may be updated without notice."),
        ("Services", "Engineering services are governed by separate contractual agreements executed between Furthmac Solutions and the client."),
        ("Intellectual property", "All content and marks on this site are the property of Furthmac Solutions unless otherwise stated."),
    ]),
    ("cookie-policy.html", "Cookie Policy", "Furthmac Solutions cookie policy.", [
        ("", "This website may use essential cookies to remember preferences such as theme selection. We do not use cookies to track users across other websites."),
    ]),
]


def legal_page(filename, title, desc, blocks):
    content = "\n".join(
        (f"      <h2>{h}</h2>\n      <p>{p}</p>" if h else f"      <p>{p}</p>") for h, p in blocks
    )
    body = f"""  {page_header(title, [title], image="team")}
  <section class="container-x" style="padding-block:5rem">
    <div class="prose">
{content}
    </div>
  </section>"""
    return page(f"{title} | Furthmac Solutions", desc, filename, body)


def notfound_page():
    body = f"""  <section class="container-x full-page-msg">
    <div class="msg-box reveal in">
      <div class="overline text-orange">404</div>
      <h1>Page not found.</h1>
      <p>The page you're looking for doesn't exist or may have moved.</p>
      <a href="index.html" class="btn-primary">{icon("Home", 16)} Return Home</a>
    </div>
  </section>
{cta_banner("")}"""
    return page(
        "Page Not Found | Furthmac Solutions",
        "The page you were looking for could not be found.",
        "404.html", body,
    )


def thanks_page():
    body = f"""  <section class="container-x full-page-msg">
    <div class="msg-box reveal in">
      <div class="overline text-orange">Thank you</div>
      <h1>Enquiry received.</h1>
      <p>Thank you for contacting Furthmac Solutions. Our engineering team typically responds within one working day. For urgent requirements, call <a href="tel:{COMPANY['phone'].replace(' ', '')}" style="color:var(--orange);font-weight:600">{COMPANY['phone']}</a>.</p>
      <a href="index.html" class="btn-primary">{icon("Home", 16)} Return Home</a>
    </div>
  </section>
{cta_banner("")}"""
    return page(
        "Thank You | Furthmac Solutions",
        "Thank you for contacting Furthmac Solutions.",
        "thanks.html", body,
    )


SITEMAP_URLS = (
    [("", "weekly", "1.0"), ("about.html", "", "0.8"), ("services.html", "", "0.9")]
    + [(f"services/{s['slug']}.html", "", "0.8") for s in SERVICES]
    + [("industries.html", "", "0.8"), ("careers.html", "", "0.7"), ("blog.html", "", "0.7"),
       ("contact.html", "", "0.9"), ("privacy.html", "", "0.3"), ("terms.html", "", "0.3"),
       ("cookie-policy.html", "", "0.3")]
)


def sitemap():
    rows = []
    for loc, freq, prio in SITEMAP_URLS:
        url = f"{DOMAIN}/{loc}"
        cf = f"<changefreq>{freq}</changefreq>" if freq else ""
        rows.append(f"  <url><loc>{url}</loc>{cf}<priority>{prio}</priority></url>")
    return '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + "\n".join(rows) + "\n</urlset>\n"


ROBOTS = """User-agent: *
Allow: /
Sitemap: https://www.furthmac.com/sitemap.xml
"""


def write(relpath, content):
    full = os.path.join(BASE, relpath)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, "w", encoding="utf-8") as f:
        f.write(content)
    print("wrote", relpath)


def main():
    write("index.html", home_page())
    write("about.html", about_page())
    write("services.html", services_page())
    for s in SERVICES:
        write(f"services/{s['slug']}.html", service_detail_page(s))
    write("industries.html", industries_page())
    write("careers.html", careers_page())
    write("blog.html", blog_page())
    write("contact.html", contact_page())
    for filename, title, desc, blocks in LEGAL_PAGES:
        write(filename, legal_page(filename, title, desc, blocks))
    write("404.html", notfound_page())
    write("thanks.html", thanks_page())
    write("sitemap.xml", sitemap())
    write("robots.txt", ROBOTS)
    print(f"\nDone — {7 + len(SERVICES) + len(LEGAL_PAGES) + 2} HTML pages generated.")


if __name__ == "__main__":
    main()
