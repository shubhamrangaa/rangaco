import { BadgeCheck, BookOpen, ChartLine, FileSpreadsheet, Landmark, Lightbulb, MailWarning, Receipt, RefreshCw, ShieldCheck } from "lucide-react";
import type { ServiceIcon as Key } from "@/content/services";

const MAP = {
  receipt: Receipt,
  badge: BadgeCheck,
  "file-spreadsheet": FileSpreadsheet,
  landmark: Landmark,
  "shield-check": ShieldCheck,
  "book-open": BookOpen,
  "line-chart": ChartLine,
  lightbulb: Lightbulb,
  refresh: RefreshCw,
  "mail-warning": MailWarning,
} satisfies Record<Key, unknown>;

export default function ServiceIcon({ name, className }: { name: Key; className?: string }) {
  const Icon = MAP[name];
  return <Icon aria-hidden="true" className={className} />;
}
