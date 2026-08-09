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
  { label: "Portfolio", to: "/portfolio" },
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
  { slug: "industrial-automation", icon: "Cpu", title: "Industrial Automation", short: "PLC, HMI and control architectures for reliable production lines.", img: "automation" },
  { slug: "relocation", icon: "Truck", title: "Relocation", short: "Machine and plant relocation with precision rigging.", img: "logistics" },
  { slug: "plc-programming", icon: "Code2", title: "PLC Programming", short: "Ladder, structured text and function-block programming.", img: "panel" },
  { slug: "scada-development", icon: "Monitor", title: "SCADA Development", short: "Data acquisition, alarms and operator interfaces.", img: "scada" },
  { slug: "control-panel-design", icon: "LayoutGrid", title: "Control Panel Design", short: "Panel engineering, wiring and testing to standards.", img: "panel" },
  { slug: "electrical-engineering", icon: "Zap", title: "Electrical Engineering", short: "Distribution, wiring and power system design.", img: "electrical" },
  { slug: "mechanical-engineering", icon: "Cog", title: "Mechanical Engineering", short: "Mechanical design, layout and integration.", img: "factory" },
  { slug: "epc-projects", icon: "ClipboardList", title: "EPC Projects", short: "Engineering, procurement and construction delivery.", img: "hero" },
  { slug: "cad-design", icon: "PencilRuler", title: "CAD Design", short: "2D/3D CAD drafting and detailing.", img: "cad" },
  { slug: "welding", icon: "Flame", title: "Welding", short: "Certified welding for structural and process work.", img: "welding" },
  { slug: "fabrication", icon: "Wrench", title: "Fabrication", short: "Precision fabrication and finishing.", img: "fabrication" },
  { slug: "engineering-consultancy", icon: "Compass", title: "Engineering Consultancy", short: "Advisory, feasibility and method statements.", img: "team" },
  { slug: "installation-commissioning", icon: "PlugZap", title: "Installation & Commissioning", short: "Safe install, alignment and start-up.", img: "automation" },
  { slug: "annual-maintenance", icon: "CalendarClock", title: "Annual Maintenance", short: "Planned maintenance to keep uptime high.", img: "factory" },
  { slug: "technical-support", icon: "Headphones", title: "Technical Support", short: "Engineering support where applicable.", img: "team" },
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
