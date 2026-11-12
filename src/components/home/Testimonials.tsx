import { ArrowUpRight, Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/content/testimonials";
import { SITE } from "@/content/site";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="bg-paper py-24 min-[760px]:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading id="testimonials-heading" eyebrow="Testimonials" title="What clients say" />
        <div className="mt-12 grid gap-4 min-[760px]:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure key={t.name + t.quote} className={`reveal card flex flex-col p-7 ${i === 0 ? "min-[760px]:col-span-2" : ""}`}>
              <div className="flex items-center justify-between">
                <Quote aria-hidden="true" className="h-7 w-7 text-brand/30" />
                {t.source === "google" && (
                  <span className="flex gap-0.5 text-amber-500" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }, (_, i) => <Star key={i} aria-hidden="true" className="h-4 w-4 fill-current" />)}
                  </span>
                )}
              </div>
              <blockquote className="mt-6 flex-1 text-[24px] font-medium leading-snug tracking-[-0.02em] text-ink min-[760px]:text-[28px]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-line pt-5">
                <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-sm font-semibold text-brand">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-medium text-ink">{t.name}</span>
                  {t.sourceUrl ? (
                    <a href={t.sourceUrl} target="_blank" rel="noopener" className="text-sm text-ink-muted hover:text-brand">{t.context}</a>
                  ) : (
                    <span className="text-sm text-ink-muted">{t.context}</span>
                  )}
                </span>
              </figcaption>
            </figure>
          ))}

          <a
            href={SITE.googleProfile}
            target="_blank"
            rel="noopener"
            className="reveal card card-hover group flex flex-col justify-between p-7"
          >
            <span className="text-[19px] font-medium text-ink">Worked with us?</span>
            <span className="mt-2 text-[15px] leading-relaxed text-ink-muted">
              Read our reviews or leave one on Google. It helps other Jodhpur families find a tax consultant they can trust.
            </span>
            <span className="mt-8 inline-flex items-center gap-1 text-[15px] font-medium text-brand">
              Open our Google profile
              <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform ease-spring group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
