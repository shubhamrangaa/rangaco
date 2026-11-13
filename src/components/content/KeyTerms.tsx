import Link from "next/link";
import { BookOpen } from "lucide-react";
import { GLOSSARY, glossaryHref, termLabel } from "@/content/glossary";

/** Glossary terms tagged with this service or post, so definitions are one click away. */
export default function KeyTerms({ service, post, services = [], max = 16 }: { service?: string; post?: string; services?: string[]; max?: number }) {
  const all = [...(service ? [service] : []), ...services];
  const direct = GLOSSARY.filter((t) => (post && t.posts?.includes(post)) || (service && t.services[0] === service));
  const byService = GLOSSARY.filter((t) => !direct.includes(t) && t.services.some((s) => all.includes(s)));
  const terms = [...direct, ...byService].slice(0, max);
  if (!terms.length) return null;
  return (
    <section aria-labelledby="key-terms" className="mt-14">
      <h2 id="key-terms" className="flex items-center gap-2 text-xl font-medium text-ink">
        <BookOpen aria-hidden="true" className="h-5 w-5 text-brand" /> Key terms
      </h2>
      <ul className="mt-4 flex flex-wrap gap-2">
        {terms.map((t) => (
          <li key={t.slug}>
            <Link href={glossaryHref(t.slug)} className="inline-block rounded-full border border-line bg-white px-4 py-2 text-sm text-ink transition-colors ease-spring hover:border-brand hover:text-brand">
              {termLabel(t)}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
