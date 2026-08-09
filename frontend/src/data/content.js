// Central content + assets for Furthmac Solutions
export const COMPANY = {
  name: "Furthmac Solutions",
  short: "Furthmac",
  tagline: "Engineering Innovation. Smart Automation.",
  email: "info@furthmac.com",
  phone: "+91 7558647831",
  phoneDigits: "917558647831",
  address: "Hinjewadi, Village Marunji, Taluka Mulshi, Pune, Maharashtra 411057, India",
  addressLines: ["Hinjewadi, Village Marunji", "Taluka Mulshi, Pune", "Maharashtra 411057, India"],
  hours: "Monday–Saturday · 9:00 AM – 6:00 PM",
  domain: "https://www.furthmac.com",
  socials: { instagram: "https://www.instagram.com/the_furthmacsolutions" },
};

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?auto=format&fit=crop&w=1920&q=80",
  hero2: "https://images.unsplash.com/photo-1684695749267-233af13276d0?auto=format&fit=crop&w=1600&q=80",
  automation: "https://images.unsplash.com/photo-1716191300020-b52dec5b70a8?auto=format&fit=crop&w=1200&q=80",
  panel: "https://images.unsplash.com/photo-1716191300020-b52dec5b70a8?auto=format&fit=crop&w=1200&q=80",
  welding: "https://images.pexels.com/photos/27084598/pexels-photo-27084598.jpeg?auto=compress&cs=tinysrgb&w=1200",
  cad: "https://images.pexels.com/photos/27084598/pexels-photo-27084598.jpeg?auto=compress&cs=tinysrgb&w=1200",
  factory: "https://images.unsplash.com/photo-1413882353314-73389f63b6fd?auto=format&fit=crop&w=1600&q=80",
  team: "https://images.unsplash.com/photo-1598299803204-b73796f43289?auto=format&fit=crop&w=1200&q=80",
  scada: "https://images.unsplash.com/photo-1716191300020-b52dec5b70a8?auto=format&fit=crop&w=1200&q=80",
  fabrication: "https://images.pexels.com/photos/27084598/pexels-photo-27084598.jpeg?auto=compress&cs=tinysrgb&w=1200",
  logistics: "https://images.unsplash.com/photo-1684695749267-233af13276d0?auto=format&fit=crop&w=1200&q=80",
  electrical: "https://images.unsplash.com/photo-1716191300020-b52dec5b70a8?auto=format&fit=crop&w=1200&q=80",
  aerospace: "https://images.unsplash.com/photo-1413882353314-73389f63b6fd?auto=format&fit=crop&w=1200&q=80",
  pharma: "https://images.unsplash.com/photo-1598299803204-b73796f43289?auto=format&fit=crop&w=1200&q=80",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Careers", to: "/careers" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export const TRUST = [
  { icon: "Users", title: "Experienced Engineers", desc: "Practical, multi-disciplinary engineering talent." },
  { icon: "BadgeCheck", title: "Quality Focused", desc: "QA/QC discipline on every deliverable." },
  { icon: "Sliders", title: "Customized Solutions", desc: "Engineered around each project's requirements." },
  { icon: "MapPin", title: "PAN India Services", desc: "On-site execution across the country." },
];

export const SERVICES = [
  {
    slug: "industrial-automation", icon: "Cpu", title: "Industrial Automation", img: "automation",
    short: "PLC, HMI and control architectures for reliable production lines.",
    intro: "Modern industrial automation for productive, safe and repeatable operations. We design PLC/HMI/SCADA architectures and integrate the panels, drives and instrumentation needed to run them reliably on the shop floor.",
    features: ["PLC-based control architecture", "HMI and operator interfaces", "Motor & drive integration", "Field instrumentation & I/O", "Safety interlocks", "Data acquisition & OEE hooks"],
    benefits: ["Higher throughput and uptime", "Consistent product quality", "Fewer manual errors", "Better process visibility"],
    faqs: [
      { q: "Which PLC brands do you work with?", a: "Common PLC platforms including Siemens, Allen-Bradley, Mitsubishi, Delta and Schneider — chosen based on your standard." },
      { q: "Do you handle brownfield upgrades?", a: "Yes. We survey the existing panel and controls, plan the migration path and cut over with minimum production downtime." },
      { q: "Can you integrate SCADA and MES later?", a: "Yes. Architectures are designed to allow phased SCADA and higher-level integration." },
    ],
  },
  {
    slug: "plc-programming", icon: "Code2", title: "PLC Programming", img: "panel",
    short: "Ladder, structured text and function-block programming.",
    intro: "Structured, maintainable PLC programs — ladder, function block and structured text — built to your automation standard with documented tag lists, alarms and interlocks.",
    features: ["Ladder / FBD / ST programming", "Standard function blocks", "Documented tag lists", "Alarms & interlocks", "Sequence control", "Version-controlled backups"],
    benefits: ["Reliable, deterministic control", "Faster troubleshooting", "Easier future changes", "Reduced downtime"],
    faqs: [
      { q: "Can you follow our in-house programming standard?", a: "Yes. We adhere to the customer's naming, tag and structure standards when provided." },
      { q: "Do you provide source code and documentation?", a: "Yes. Source, logic diagrams and I/O documentation are handed over on project close." },
      { q: "Can you optimise existing PLC logic?", a: "Yes. We review, refactor and document legacy programs to improve reliability and clarity." },
    ],
  },
  {
    slug: "scada-development", icon: "Monitor", title: "SCADA Development", img: "scada",
    short: "Data acquisition, alarms and operator interfaces.",
    intro: "SCADA solutions for real-time visibility of your plant — screens, alarms, trends and reports engineered around your operators.",
    features: ["Screen design & navigation", "Real-time alarming", "Historian & trending", "Reports and dashboards", "User & role management", "Secure remote access options"],
    benefits: ["Real-time production visibility", "Faster incident response", "Data for informed decisions", "Audit-friendly logging"],
    faqs: [
      { q: "Which SCADA platforms do you support?", a: "Popular platforms including AVEVA/Wonderware, WinCC, Ignition, iFIX and open-source alternatives when preferred." },
      { q: "Can SCADA data feed our ERP/MES?", a: "Yes. Historian data can be exposed via OPC UA, REST or SQL to downstream systems." },
      { q: "Do you provide operator training?", a: "Basic operator training and quick-reference documentation are included with commissioning." },
    ],
  },
  {
    slug: "control-panel-design", icon: "LayoutGrid", title: "Control Panel Design", img: "panel",
    short: "Panel engineering, wiring and testing to standards.",
    intro: "Control panels engineered and built to standard — from single-line diagrams and BOM to wiring, testing and dispatch.",
    features: ["Panel electrical design", "BOM & GA drawings", "Wiring & termination", "FAT testing", "Standards compliance", "Traceable documentation"],
    benefits: ["Safe, code-compliant panels", "Reduced site-work time", "Higher first-time pass rate", "Easy maintenance"],
    faqs: [
      { q: "Which standards do you follow?", a: "Panels are designed to applicable IS/IEC standards and customer-specific specifications." },
      { q: "Do you supply the panel or only design?", a: "Both — design-only engagements as well as design + build + FAT are offered." },
      { q: "Is FAT documentation included?", a: "Yes. FAT protocols and results are documented and shared before dispatch." },
    ],
  },
  {
    slug: "electrical-engineering", icon: "Zap", title: "Electrical Engineering", img: "electrical",
    short: "Distribution, wiring and power system design.",
    intro: "Industrial electrical engineering — from load studies and single-line diagrams to distribution design, wiring and site engineering.",
    features: ["Load & short-circuit study", "Single-line & schematic design", "LT/HT distribution", "Cable sizing & routing", "Earthing & lightning protection", "Site engineering support"],
    benefits: ["Safe, code-compliant systems", "Optimised cable & equipment sizing", "Faster site execution", "Fewer field revisions"],
    faqs: [
      { q: "Do you handle new plant electrical design?", a: "Yes — greenfield electrical design from utility connection to end-of-line loads." },
      { q: "Can you audit an existing installation?", a: "Yes. Electrical audits, thermography and corrective recommendations are offered." },
      { q: "Do you support HT/LT switchgear?", a: "Yes — panel specification, coordination and commissioning support for switchgear." },
    ],
  },
  {
    slug: "mechanical-engineering", icon: "Cog", title: "Mechanical Engineering", img: "factory",
    short: "Mechanical design, layout and integration.",
    intro: "Mechanical engineering for industrial plants — layout, structures, machine integration and detailed drawings.",
    features: ["Plant & equipment layout", "Structural design", "Machine base & foundation", "Piping & routing", "Detailed drawings", "BOM & procurement support"],
    benefits: ["Efficient plant flow", "Precise machine placement", "Reduced rework", "Ready-to-fabricate drawings"],
    faqs: [
      { q: "Do you provide detailed shop drawings?", a: "Yes. Fabrication-ready drawings with BOM are part of standard deliverables." },
      { q: "Can you design equipment foundations?", a: "Yes. Foundation design coordinated with civil consultants where needed." },
      { q: "Can you handle machine relocation layouts?", a: "Yes. Layout planning is a core part of our relocation service." },
    ],
  },
  {
    slug: "epc-projects", icon: "ClipboardList", title: "EPC Projects", img: "hero",
    short: "Engineering, procurement and construction delivery.",
    intro: "Engineering, procurement and construction packages delivered as a single accountable scope — from concept to commissioning.",
    features: ["Front-end engineering", "Vendor management", "Procurement coordination", "Site construction", "Quality control", "Commissioning & handover"],
    benefits: ["Single point of accountability", "Coordinated schedule", "Controlled cost & quality", "Reduced interface risk"],
    faqs: [
      { q: "What is the typical EPC scope?", a: "Scope is tailored — from pure engineering + procurement to full turnkey construction and commissioning." },
      { q: "How do you handle vendor selection?", a: "Approved vendor lists, technical evaluation and commercial evaluation to select best-fit suppliers." },
      { q: "Do you provide project management?", a: "Yes. Dedicated PM with defined WBS, schedule, cost tracking and reporting." },
    ],
  },
  {
    slug: "cad-design", icon: "PencilRuler", title: "CAD Design", img: "cad",
    short: "2D/3D CAD drafting and detailing.",
    intro: "2D and 3D CAD drafting and detailing for mechanical and electrical projects — production-ready drawings you can build from.",
    features: ["2D drafting", "3D modelling", "Detailing & GA drawings", "BOM extraction", "Revision control", "Standards-aligned drafting"],
    benefits: ["Accurate, production-ready drawings", "Fewer fabrication errors", "Faster iteration", "Traceable revisions"],
    faqs: [
      { q: "Which CAD tools do you use?", a: "AutoCAD, SolidWorks, Inventor and comparable tools depending on project needs." },
      { q: "Can you reverse-engineer existing parts?", a: "Yes — from physical parts or legacy drawings we can create fresh, dimensioned CAD." },
      { q: "Do you provide as-built drawings?", a: "Yes. As-built revisions are prepared after site verification." },
    ],
  },
  {
    slug: "welding", icon: "Flame", title: "Welding", img: "welding",
    short: "Certified welding for structural and process work.",
    intro: "Certified welding services for structural and process work — MIG, TIG and arc — executed to industrial quality standards.",
    features: ["MIG/TIG/ARC welding", "Structural welding", "Stainless & carbon steel", "Weld inspection", "WPS/PQR-aligned procedures", "Post-weld finishing"],
    benefits: ["Strong, code-compliant welds", "Consistent quality", "Reduced rework", "Traceable inspection"],
    faqs: [
      { q: "Do you follow WPS/PQR?", a: "Yes. Welding procedures are followed and documented per project requirement." },
      { q: "Can you weld stainless and dissimilar metals?", a: "Yes, with appropriate procedures, filler materials and inspection." },
      { q: "Is NDT / weld inspection offered?", a: "Yes. Visual, PT/MT and third-party NDT can be arranged." },
    ],
  },
  {
    slug: "fabrication", icon: "Wrench", title: "Fabrication", img: "fabrication",
    short: "Precision fabrication and finishing.",
    intro: "Precision fabrication of structural steel, skids, frames and process components — engineered, welded and finished to spec.",
    features: ["Structural fabrication", "Skids & frames", "Sheet metal work", "Machining coordination", "Surface finishing & painting", "Assembly & FAT"],
    benefits: ["To-spec fabricated deliverables", "Reduced site work", "Better dimensional control", "Single-vendor delivery"],
    faqs: [
      { q: "Do you fabricate to customer drawings?", a: "Yes. We can also produce shop drawings from concept drawings before starting fabrication." },
      { q: "What finishes are supported?", a: "Powder coating, epoxy paint and other industrial finishes based on requirement." },
      { q: "Do you handle logistics of fabricated items?", a: "Yes — packing, road transport and site delivery coordination." },
    ],
  },
  {
    slug: "relocation", icon: "Truck", title: "Relocation", img: "logistics",
    short: "Machine and plant relocation with precision rigging.",
    intro: "Machine and plant relocation — from decommissioning and packing to transport, reinstallation and commissioning.",
    features: ["Site survey & method statement", "Certified rigging", "Packing & transport", "Reinstallation", "Alignment & levelling", "Recommissioning"],
    benefits: ["Minimised downtime", "Protection of capital assets", "Documented safe execution", "Faster restart"],
    faqs: [
      { q: "Do you handle intra-city or PAN India relocation?", a: "Both — from short intra-plant moves to inter-state relocations." },
      { q: "How is downtime minimised?", a: "Detailed sequencing, pre-fabricated foundations where possible and staged commissioning to compress the critical path." },
      { q: "Are heavy machines insured during transit?", a: "Insurance is arranged based on client requirement and asset value." },
    ],
  },
  {
    slug: "engineering-consultancy", icon: "Compass", title: "Engineering Consultancy", img: "team",
    short: "Advisory, feasibility and method statements.",
    intro: "Independent engineering advisory — feasibility, technology selection, method statements and project reviews.",
    features: ["Feasibility & scoping", "Technology selection", "Method statements", "Project reviews", "Third-party engineering", "Owner's engineer role"],
    benefits: ["Objective technical guidance", "Reduced project risk", "Better decisions, earlier", "Clear execution roadmap"],
    faqs: [
      { q: "Can you act as owner's engineer?", a: "Yes. We can represent the client through design review, tendering and construction supervision." },
      { q: "Do you provide feasibility studies?", a: "Yes — techno-commercial feasibility with clear recommendations." },
      { q: "Can you review third-party designs?", a: "Yes. Independent design and safety reviews are offered." },
    ],
  },
  {
    slug: "installation-commissioning", icon: "PlugZap", title: "Installation & Commissioning", img: "automation",
    short: "Safe install, alignment and start-up.",
    intro: "Safe installation, alignment and start-up of industrial systems — from single machines to full lines.",
    features: ["Equipment installation", "Precision alignment", "Utility connection", "I/O and controls check", "Cold & hot commissioning", "Handover documentation"],
    benefits: ["Reliable start-up", "Safe execution", "Reduced early-life failures", "Well-documented handover"],
    faqs: [
      { q: "Do you supply installation manpower?", a: "Yes. Trained mechanical, electrical and instrumentation manpower for on-site work." },
      { q: "Is precision alignment offered?", a: "Yes — laser alignment and precision levelling for rotating and heavy equipment." },
      { q: "What documentation is provided?", a: "Installation reports, alignment records, calibration certificates and handover checklists." },
    ],
  },
  {
    slug: "annual-maintenance", icon: "CalendarClock", title: "Annual Maintenance", img: "factory",
    short: "Planned maintenance to keep uptime high.",
    intro: "Planned annual maintenance contracts designed to keep uptime high and surprises low.",
    features: ["Preventive maintenance schedule", "Periodic inspection", "Consumables management", "Breakdown response", "Spare-part planning", "Performance reports"],
    benefits: ["Higher plant availability", "Predictable maintenance cost", "Longer asset life", "Fewer surprise breakdowns"],
    faqs: [
      { q: "How are AMC scopes defined?", a: "Scope is agreed based on the assets covered, frequency of visits and response SLAs." },
      { q: "Do you cover mechanical and electrical scope?", a: "Yes — bundled mechanical + electrical + automation AMC scopes are supported." },
      { q: "Is breakdown response included?", a: "Yes — response times are defined in the AMC agreement." },
    ],
  },
  {
    slug: "technical-support", icon: "Headphones", title: "Technical Support", img: "team",
    short: "Engineering support where applicable.",
    intro: "Engineering technical support — remote diagnostics, on-call troubleshooting and periodic health checks for your systems.",
    features: ["Remote diagnostics", "On-call troubleshooting", "Health checks", "Documentation support", "Spares advice", "Training refreshers"],
    benefits: ["Faster resolution", "Reduced downtime", "Extended asset life", "Better in-house awareness"],
    faqs: [
      { q: "How can we reach support?", a: "Phone, email and scheduled site visits — the response model is defined per engagement." },
      { q: "Is remote support secure?", a: "Yes. Access is granted only through customer-approved channels and time-boxed sessions." },
      { q: "Do you offer refresher training?", a: "Yes. On-request refresher training for operators and maintenance teams is available." },
    ],
  },
];

export const INDUSTRIES = [
  { slug: "automobile", icon: "Car", title: "Automobile", img: "factory", desc: "Automation, fixtures and assembly line engineering." },
  { slug: "manufacturing", icon: "Factory", title: "Manufacturing", img: "automation", desc: "Process automation and plant engineering." },
  { slug: "food-processing", icon: "Utensils", title: "Food Processing", img: "fabrication", desc: "Hygienic design, packing lines and controls." },
  { slug: "aerospace", icon: "Plane", title: "Aerospace", img: "aerospace", desc: "Precision assembly support and tooling." },
  { slug: "oil-gas", icon: "Droplet", title: "Oil & Gas", img: "electrical", desc: "Panels, instrumentation and site engineering." },
  { slug: "pharmaceutical", icon: "FlaskConical", title: "Pharmaceutical", img: "pharma", desc: "Compliant utilities, HMI/SCADA and validation support." },
  { slug: "chemical", icon: "TestTube2", title: "Chemical", img: "panel", desc: "Instrumentation, safety interlocks and controls." },
  { slug: "power-plants", icon: "Zap", title: "Power Plants", img: "electrical", desc: "Electrical systems, controls and I&C." },
  { slug: "water-treatment", icon: "Waves", title: "Water Treatment", img: "scada", desc: "PLC/SCADA for treatment plants." },
  { slug: "paper-textile", icon: "Layers", title: "Paper & Textile", img: "factory", desc: "Drives, motion and process integration." },
  { slug: "packaging", icon: "PackageOpen", title: "Packaging", img: "automation", desc: "Line integration and end-of-line automation." },
];

export const WHY = [
  { icon: "Users", title: "Experienced Engineers", desc: "Technical expertise focused on practical industrial solutions." },
  { icon: "Sliders", title: "Customized Solutions", desc: "Solutions designed around individual project requirements." },
  { icon: "BadgeCheck", title: "Quality Assurance", desc: "Professional engineering and quality-focused execution." },
  { icon: "Clock", title: "On-Time Delivery", desc: "Structured planning and project coordination." },
  { icon: "Cpu", title: "Latest Technology", desc: "Modern automation and engineering technologies." },
  { icon: "IndianRupee", title: "Affordable Pricing", desc: "Competitive solutions without compromising technical quality." },
  { icon: "Headphones", title: "24×7 Technical Support", desc: "Technical assistance where applicable." },
];

export const CAPABILITIES = [
  { group: "Automation", items: ["PLC", "SCADA", "HMI", "Industrial Controls"] },
  { group: "Electrical", items: ["Control Panels", "Electrical Design", "Installation", "Commissioning"] },
  { group: "Mechanical", items: ["CAD", "Fabrication", "Welding", "Machine / Equipment Relocation"] },
];

export const PROCESS = [
  { no: "01", title: "Consultation", desc: "Understand requirements and project objectives." },
  { no: "02", title: "Planning", desc: "Analyze scope, resources and technical requirements." },
  { no: "03", title: "Design", desc: "Develop engineering and automation solutions." },
  { no: "04", title: "Development", desc: "Build and configure the required systems." },
  { no: "05", title: "Testing", desc: "Verify functionality, safety and performance." },
  { no: "06", title: "Delivery", desc: "Complete implementation and handover." },
  { no: "07", title: "Support", desc: "Provide maintenance and technical assistance." },
];

export const VALUES = ["Quality", "Integrity", "Innovation", "Safety", "Customer Satisfaction", "Reliability"];
