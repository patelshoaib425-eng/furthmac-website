import {
  PencilRuler,
  Factory,
  Wrench,
  Cpu,
  Lightbulb,
  ClipboardList,
  Users,
  ShieldCheck,
  BadgeCheck,
  Clock,
  Layers,
} from "lucide-react";

const MAP = {
  PencilRuler,
  Factory,
  Wrench,
  Cpu,
  Lightbulb,
  ClipboardList,
  Users,
  ShieldCheck,
  BadgeCheck,
  Clock,
  Layers,
};

export const Icon = ({ name, ...props }) => {
  const Cmp = MAP[name] || Layers;
  return <Cmp {...props} />;
};
