import Breadcrumbs from "@/components/layout/Breadcrumbs";
import type { Crumb } from "@/lib/seo";

/** H1 + lede + breadcrumbs for every inner page. */
export default function PageHero({ crumbs, eyebrow, title, lede, children }: {
  crumbs: Crumb[];
  eyebrow?: string;
  title: string;
  lede?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="max-w-4xl">
      <Breadcrumbs items={crumbs} />
      {eyebrow && (
        <span className="inline-block rounded-full border border-line bg-white px-3 py-1 text-xs font-medium uppercase tracking-wider text-ink-muted">
          {eyebrow}
        </span>
      )}
      <h1 className="mt-5 text-display font-normal text-ink">{title}</h1>
      {lede && <p className="mt-6 max-w-3xl text-lede text-ink-muted">{lede}</p>}
      {children}
    </header>
  );
}
