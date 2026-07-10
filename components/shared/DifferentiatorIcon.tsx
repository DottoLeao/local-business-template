import {
  Award,
  Clock,
  Heart,
  Leaf,
  MapPin,
  Scissors,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { Differentiator } from "@/data/types";

const iconMap: Record<Differentiator["icon"], LucideIcon> = {
  "map-pin": MapPin,
  clock: Clock,
  sparkles: Sparkles,
  users: Users,
  leaf: Leaf,
  scissors: Scissors,
  heart: Heart,
  award: Award,
};

export function DifferentiatorIcon({
  name,
  className,
}: {
  name: Differentiator["icon"];
  className?: string;
}) {
  const Icon = iconMap[name];
  return <Icon className={className} aria-hidden />;
}
