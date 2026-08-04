// Central content + assets for Furthmac Solutions
export const COMPANY = {
  name: "Furthmac Solutions",
  short: "FURTHMAC",
  tagline: "Your Trusted Engineering Partner",
  email: "Info@furthmacsolutions.com",
  phone: "+91 9420582563",
  phoneDigits: "919420582563",
  address:
    "SR. No. 107/1, Village Nere, Taluka Mulshi, Pune – 411033, Maharashtra, India",
};

export const IMAGES = {
  hero:
    "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwzfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwZmFjdG9yeXxlbnwwfHx8fDE3ODU4MTcyMjJ8MA&ixlib=rb-4.1.0&q=85",
  about:
    "https://images.unsplash.com/photo-1598299803204-b73796f43289?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNDR8MHwxfHNlYXJjaHwxfHxlbmdpbmVlciUyMGZhY3RvcnklMjBwb3J0cmFpdHxlbnwwfHx8fDE3ODU4MTcyMjJ8MA&ixlib=rb-4.1.0&q=85",
  electrical:
    "https://images.unsplash.com/photo-1716191300020-b52dec5b70a8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHw0fHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwZmFjdG9yeXxlbnwwfHx8fDE3ODU4MTcyMjJ8MA&ixlib=rb-4.1.0&q=85",
  mechanical:
    "https://images.pexels.com/photos/27084598/pexels-photo-27084598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  logistics:
    "https://images.unsplash.com/photo-1684695749267-233af13276d0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHw0fHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjBpbmR1c3RyaWFsfGVufDB8fHx8MTc4NTgxNzIyMnww&ixlib=rb-4.1.0&q=85",
  infra:
    "https://images.unsplash.com/photo-1413882353314-73389f63b6fd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwyfHxlbGVjdHJpY2FsJTIwZW5naW5lZXJpbmclMjBpbmR1c3RyeXxlbnwwfHx8fDE3ODU4MTcyMjJ8MA&ixlib=rb-4.1.0&q=85",
};

export const MARQUEE_ITEMS = [
  "Engineering Design",
  "Manufacturing",
  "Fabrication",
  "Industrial Automation",
  "Product Development",
  "Consultancy",
  "Precision",
  "Safety First",
  "Quality Assured",
];

export const STATS = [
  { value: 15, suffix: "+", label: "Years of Combined Experience" },
  { value: 120, suffix: "+", label: "Projects Delivered" },
  { value: 20, suffix: "+", label: "Industries Served" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
];

export const SERVICES = [
  {
    key: "design",
    no: "01",
    icon: "PencilRuler",
    title: "Engineering Design",
    img: "mechanical",
    desc: "Concept-to-production mechanical and structural design using modern CAD/CAE, optimised for manufacturability and performance.",
    points: ["3D CAD modelling", "Design validation & FEA", "Detailed drawings & BOM"],
  },
  {
    key: "manufacturing",
    no: "02",
    icon: "Factory",
    title: "Manufacturing Solutions",
    img: "hero",
    desc: "End-to-end manufacturing support — from process planning to precision production of components and assemblies.",
    points: ["Process planning", "Precision machining", "Assembly & QC"],
  },
  {
    key: "fabrication",
    no: "03",
    icon: "Wrench",
    title: "Fabrication Services",
    img: "logistics",
    desc: "Structural and sheet-metal fabrication, welding and finishing built to demanding industrial tolerances.",
    points: ["Structural fabrication", "Certified welding", "Surface finishing"],
  },
  {
    key: "automation",
    no: "04",
    icon: "Cpu",
    title: "Industrial Automation",
    img: "electrical",
    desc: "PLC, SCADA and control-panel solutions that increase throughput, safety and repeatability on your plant floor.",
    points: ["PLC & SCADA", "Control panels", "Line integration"],
  },
  {
    key: "product",
    no: "05",
    icon: "Lightbulb",
    title: "Product Development",
    img: "infra",
    desc: "From idea to prototype to market-ready product — engineering, prototyping and iterative testing under one roof.",
    points: ["Prototyping", "Testing & iteration", "Design for cost"],
  },
  {
    key: "consultancy",
    no: "06",
    icon: "ClipboardList",
    title: "Engineering Consultancy",
    img: "about",
    desc: "Expert technical advisory for plant setup, relocation and optimisation — method statements, feasibility and project management.",
    points: ["Feasibility studies", "Method statements", "Project management"],
  },
];

export const WHY = [
  { icon: "Users", title: "Experienced Engineering Team", desc: "Multi-disciplinary engineers who own every method statement." },
  { icon: "ShieldCheck", title: "Safety First Approach", desc: "Documented risk assessments and certified rigging on every site." },
  { icon: "BadgeCheck", title: "Quality Workmanship", desc: "Tolerances checked, aligned and signed off before handover." },
  { icon: "Clock", title: "On-Time Completion", desc: "Sequenced schedules engineered to minimise plant downtime." },
  { icon: "Layers", title: "Complete Industrial Solutions", desc: "Design, manufacturing, automation and logistics under one partner." },
  { icon: "Cpu", title: "Modern Technology", desc: "CAD/CAE, automation and data-driven engineering throughout." },
];

export const PROJECTS = [
  {
    title: "Automated Assembly Line",
    category: "Industrial Automation",
    img: "electrical",
    tech: ["PLC", "SCADA", "Servo Drives"],
    desc: "Design and integration of a semi-automated assembly cell for a components manufacturer.",
    result: "+32% throughput, 40% fewer manual errors.",
  },
  {
    title: "Heavy Machine Installation",
    category: "Manufacturing",
    img: "hero",
    tech: ["Rigging", "Alignment", "Commissioning"],
    desc: "Precision leveling and commissioning of a heavy press within a live production facility.",
    result: "Zero-incident install, 2 days ahead of schedule.",
  },
  {
    title: "Structural Fabrication Package",
    category: "Fabrication",
    img: "mechanical",
    tech: ["MIG/TIG Welding", "Structural Steel", "Coating"],
    desc: "Fabrication and finishing of structural steel platforms and support frames.",
    result: "100% weld inspection pass rate.",
  },
  {
    title: "Plant Power Distribution",
    category: "Engineering Design",
    img: "infra",
    tech: ["Panel Design", "Industrial Wiring", "Load Analysis"],
    desc: "Electrical distribution design and installation for a new manufacturing bay.",
    result: "Safe, code-compliant power-on in one shift.",
  },
];

export const GALLERY = ["hero", "mechanical", "electrical", "logistics", "infra", "about"];

export const TESTIMONIALS = [
  {
    quote:
      "Furthmac handled our machine relocation with precision. Downtime was minimal and the team's safety discipline was outstanding.",
    name: "Operations Head",
    role: "Auto Components Manufacturer",
    rating: 5,
  },
  {
    quote:
      "Their automation upgrade transformed our line efficiency. Clear communication and solid engineering throughout.",
    name: "Plant Manager",
    role: "Packaging Industry",
    rating: 5,
  },
  {
    quote:
      "Professional, responsive and technically strong. They delivered the fabrication package exactly to spec and on time.",
    name: "Project Lead",
    role: "Heavy Engineering",
    rating: 5,
  },
];

export const CLIENTS = [
  "NORTHFORGE",
  "AXIOM STEEL",
  "PRIMA AUTO",
  "VERTEX PACK",
  "IRONCLAD",
  "MERIDIAN",
];

export const CERTIFICATIONS = [
  { code: "ISO 9001", label: "Quality Management" },
  { code: "ISO 45001", label: "Occupational Safety" },
  { code: "MSME", label: "Registered Enterprise" },
  { code: "QA/QC", label: "Inspection Protocols" },
];

export const TIMELINE = [
  { year: "Foundation", title: "Furthmac Solutions established", desc: "Founded in Pune to deliver reliable industrial engineering under one partner." },
  { year: "Workshop", title: "In-house fabrication capability", desc: "Set up fabrication, welding and finishing to control quality end-to-end." },
  { year: "Expansion", title: "Multi-disciplinary team", desc: "Added mechanical, electrical and automation engineers for turnkey delivery." },
  { year: "Today", title: "Turnkey engineering partner", desc: "Design, manufacturing, automation and relocation — one accountable team." },
];

export const FAQS = [
  {
    q: "What industries do you serve?",
    a: "We work across automotive, manufacturing, packaging, heavy engineering and general industrial sectors — anywhere precision engineering and installation are required.",
  },
  {
    q: "How do you minimise plant downtime during relocation?",
    a: "Every project starts with a detailed survey and method statement. We sequence dismantling, transport and re-installation to keep your downtime as short and predictable as possible.",
  },
  {
    q: "Do you handle safety and compliance?",
    a: "Yes. We follow documented risk assessments, certified rigging practices and QA/QC inspection protocols on every site as standard.",
  },
  {
    q: "Can you manage a complete turnkey project?",
    a: "Absolutely. From engineering design and fabrication to automation and commissioning, we can own the full lifecycle with a single accountable team.",
  },
  {
    q: "How do I get a quote?",
    a: "Use the Request a Quote form or message us on WhatsApp with your scope. Our engineering team typically responds within one business day.",
  },
];

export const MISSION = {
  vision:
    "To be the most trusted engineering partner for industry — known for precision, safety and dependable delivery.",
  mission:
    "We engineer, build, automate and relocate industrial systems with disciplined execution, protecting our clients' capital, uptime and people.",
};
