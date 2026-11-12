import Link from "next/link";
import Cta from "@/components/ui/Cta";
import { SERVICES, serviceHref } from "@/content/services";
import { telHref } from "@/content/site";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-4 pt-28 text-center">
      <p className="text-sm font-medium text-brand">404</p>
      <h1 className="mt-3 text-title font-medium text-ink">This page doesn&apos;t exist</h1>
      <p className="mt-3 text-ink-muted">It may have moved. Try one of these instead:</p>
      <ul className="mt-6 flex flex-wrap justify-center gap-2">
        {SERVICES.filter((s) => s.featured).map((s) => (
          <li key={s.slug}>
            <Link href={serviceHref(s.slug)} className="inline-block rounded-full border border-line px-4 py-2 text-sm text-ink transition-colors hover:border-brand hover:text-brand">
              {s.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex gap-3">
        <Cta href="/" icon="arrow">Go home</Cta>
        <Cta href={telHref} variant="soft" icon="phone">Call us</Cta>
      </div>
    </main>
  );
}
