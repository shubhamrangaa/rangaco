import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/content/PageHero";
import FaqList from "@/components/content/FaqList";
import RelatedLinks from "@/components/content/RelatedLinks";
import CtaBand from "@/components/content/CtaBand";
import DueBadge from "@/components/gst-calendar/DueBadge";
import { GST_DATES, GST_ITEMS, dateCopy, eventTitle, eventsIn, eventsOn, monthFromSlug } from "@/content/gst-calendar";
import { glossaryHref } from "@/content/glossary";
import { addDays, longDate, monthLabel, pad2, shortDate, weekday } from "@/lib/dates";
import { GST_CALENDAR_PATH, dateHref, itemHref, monthHref, monthSlug } from "@/lib/gst-calendar-urls";
import { pageMetadata } from "@/lib/seo";

type Params = { params: Promise<{ month: string; day: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => GST_DATES.map((d) => ({ month: monthSlug(d), day: String(Number(d.slice(8))) }));

async function resolve({ params }: Params) {
  const { month: slug, day } = await params;
  const month = monthFromSlug(slug);
  const date = month && `${month}-${pad2(Number(day))}`;
  return date && GST_DATES.includes(date) ? date : null;
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const date = await resolve(props);
  if (!date) return {};
  const { title, absoluteTitle, description } = dateCopy(date);
  return pageMetadata({ title, absoluteTitle, description, path: dateHref(date) });
}

const LATE = ["return", "payment"];

export default async function DatePage(props: Params) {
  const date = await resolve(props);
  if (!date) notFound();
  const events = eventsOn(date);
  const copy = dateCopy(date);
  const full = longDate(date);
  const i = GST_DATES.indexOf(date);
  const [prev, next] = [GST_DATES[i - 1], GST_DATES[i + 1]];
  const sameMonth = [...new Set(eventsIn(date.slice(0, 7)).map((e) => e.date))];
  const services = [...new Set(events.flatMap((e) => GST_ITEMS[e.item].services))].slice(0, 3);

  return (
    <main className="mx-auto max-w-6xl px-4 pb-24 pt-28 min-[760px]:pt-32">
      <PageHero
        crumbs={[
          { name: "GST calendar", path: GST_CALENDAR_PATH },
          { name: monthLabel(date), path: monthHref(date) },
          { name: shortDate(date), path: dateHref(date) },
        ]}
        eyebrow={weekday(date)}
        title={`GST due dates on ${full}`}
        lede={copy.faqs[0].a}
      >
        <DueBadge date={date} late={events.some((e) => LATE.includes(GST_ITEMS[e.item].kind))} className="mt-6 !px-3.5 !py-1.5 !text-sm" />
      </PageHero>

      <div className="mt-12 grid max-w-[860px] gap-4">
        {events.map((e) => {
          const item = GST_ITEMS[e.item];
          return (
            <article key={`${e.item}-${e.variant}`} className="card p-6 min-[760px]:p-8">
              <p className="text-xs font-medium uppercase tracking-wider text-brand">{item.plain}</p>
              <h2 className="mt-2 text-title font-medium text-ink">{eventTitle(e)}</h2>
              {e.variant && <p className="mt-2 text-[15px] font-medium text-ink">{e.variant}</p>}
              {e.note && <p className="mt-4 rounded-2xl bg-amber-50 px-4 py-3 text-[15px] text-amber-900">{e.note}</p>}
              <p className="mt-4 text-[17px] leading-relaxed text-ink-body">{item.what}</p>

              <dl className="mt-6 divide-y divide-line overflow-hidden rounded-2xl border border-line">
                {[
                  ["Who it applies to", item.who],
                  ["Covers", e.period],
                  ["The rule", item.when],
                  [
                    item.kind === "info" ? "Good to know" : item.kind === "optional" ? "If you skip it" : "If you miss it",
                    LATE.includes(item.kind) ? `Anything filed from ${weekday(addDays(date, 1))}, ${longDate(addDays(date, 1))} is late. ${item.ifMissed}` : item.ifMissed,
                  ],
                ].map(([k, v]) => (
                  <div key={k} className="grid gap-1 px-5 py-3.5 min-[560px]:grid-cols-[170px_minmax(0,1fr)] min-[560px]:gap-4">
                    <dt className="text-sm text-ink-muted">{k}</dt>
                    <dd className="text-[15px] leading-relaxed text-ink">{v}</dd>
                  </div>
                ))}
              </dl>

              <h3 className="mt-7 text-xs font-medium uppercase tracking-wider text-ink-muted">Keep ready</h3>
              <ul className="mt-3 space-y-2">
                {item.ready.map((r) => (
                  <li key={r} className="flex gap-3 text-[16px] leading-relaxed text-ink-body">
                    <Check aria-hidden="true" className="mt-1.5 h-4 w-4 shrink-0 text-brand" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[15px] font-medium">
                <Link href={itemHref(e.item)} className="text-brand hover:underline">All {item.name} dates →</Link>
                {item.glossary && <Link href={glossaryHref(item.glossary)} className="text-brand hover:underline">Glossary: how it works →</Link>}
                {item.post && <Link href={item.post} className="text-brand hover:underline">Read the full guide →</Link>}
              </p>
            </article>
          );
        })}
      </div>

      <section aria-labelledby="around" className="mt-16 max-w-[860px]">
        <h2 id="around" className="text-xl font-medium text-ink">Other GST dates in {monthLabel(date)}</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {sameMonth.map((d) => (
            <li key={d}>
              {d === date ? (
                <span aria-current="page" className="inline-block rounded-full bg-ink-strong px-4 py-2 text-sm font-medium text-white">{shortDate(d)}</span>
              ) : (
                <Link href={dateHref(d)} className="inline-block rounded-full border border-line bg-white px-4 py-2 text-sm text-ink transition-colors ease-spring hover:border-brand hover:text-brand">
                  {shortDate(d)}
                </Link>
              )}
            </li>
          ))}
          <li>
            <Link href={monthHref(date)} className="inline-block rounded-full px-4 py-2 text-sm font-medium text-brand hover:underline">{monthLabel(date)} calendar →</Link>
          </li>
        </ul>

        <nav aria-label="Previous and next due date" className="mt-8 grid gap-3 min-[560px]:grid-cols-2">
          {prev ? (
            <Link href={dateHref(prev)} className="card card-hover group flex items-center gap-4 p-5">
              <ArrowLeft aria-hidden="true" className="h-4 w-4 shrink-0 text-ink-muted transition-transform ease-spring group-hover:-translate-x-0.5" />
              <span className="min-w-0">
                <span className="block text-xs font-medium uppercase tracking-wider text-ink-muted">Before this</span>
                <span className="mt-1 block truncate font-medium text-ink group-hover:text-brand">{longDate(prev)}</span>
              </span>
            </Link>
          ) : <span />}
          {next && (
            <Link href={dateHref(next)} className="card card-hover group flex items-center justify-end gap-4 p-5 text-right">
              <span className="min-w-0">
                <span className="block text-xs font-medium uppercase tracking-wider text-ink-muted">After this</span>
                <span className="mt-1 block truncate font-medium text-ink group-hover:text-brand">{longDate(next)}</span>
              </span>
              <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 text-ink-muted transition-transform ease-spring group-hover:translate-x-0.5" />
            </Link>
          )}
        </nav>
      </section>

      <section aria-labelledby="date-faq" className="mt-16 max-w-[760px]">
        <h2 id="date-faq" className="mb-6 text-title font-medium text-ink">Frequently asked questions</h2>
        <FaqList faqs={copy.faqs} />
      </section>

      <RelatedLinks services={services} heading="Get help with this" />
      <CtaBand />
    </main>
  );
}
