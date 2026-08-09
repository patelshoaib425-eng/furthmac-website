import {
  Cpu, Truck, Code2, Monitor, LayoutGrid, Zap, Cog, ClipboardList, PencilRuler, Flame, Wrench,
  Compass, PlugZap, CalendarClock, Headphones, Users, BadgeCheck, Sliders, MapPin, Clock, IndianRupee,
  Car, Factory, Utensils, Plane, Droplet, FlaskConical, TestTube2, Waves, Layers, PackageOpen,
  ShieldCheck, Target, Award,
} from "lucide-react";
const M = { Cpu, Truck, Code2, Monitor, LayoutGrid, Zap, Cog, ClipboardList, PencilRuler, Flame, Wrench, Compass, PlugZap, CalendarClock, Headphones, Users, BadgeCheck, Sliders, MapPin, Clock, IndianRupee, Car, Factory, Utensils, Plane, Droplet, FlaskConical, TestTube2, Waves, Layers, PackageOpen, ShieldCheck, Target, Award };
export const Icon = ({ name, ...p }) => { const C = M[name] || Cog; return <C {...p} />; };
