import Link from "next/link";
import { ChevronRight } from "lucide-react";
import JsonLd from "@/components/ui/JsonLd";
import { breadcrumbLd, type Crumb } from "@/lib/seo";

/** Visible breadcrumb trail + BreadcrumbList schema. Pass crumbs after "Home". */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbLd(all)} />
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ink-muted">
        <ol className="flex min-w-0 items-center gap-1.5">
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={c.path} className={`flex items-center gap-1.5 ${last ? "min-w-0 text-ink" : ""}`} aria-current={last ? "page" : undefined}>
                {i > 0 && <ChevronRight aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />}
                {last ? <span className="truncate">{c.name}</span> : <Link href={c.path} className="hover:text-ink">{c.name}</Link>}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
