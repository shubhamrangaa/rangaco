import Link from "next/link";
import { MapPin, Mail, MessageCircle, Phone } from "lucide-react";
import { SITE, telHref, whatsappHref } from "@/content/site";
import { SERVICES, serviceHref } from "@/content/services";
import { ITR_YEARS, itrHref } from "@/content/itr-years";
import Logo from "./Logo";

const linkCls = "text-[15px] text-ink-body transition-colors hover:text-brand";

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-4 text-xs font-medium uppercase tracking-wider text-ink-muted">{title}</p>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}

export default function SiteFooter() {
  const { address } = SITE;
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 min-[760px]:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-[15px] leading-relaxed text-ink-muted">{SITE.description}</p>
        </div>

        <Column title="Services">
          {SERVICES.map((s) => (
            <li key={s.slug}>
              <Link href={serviceHref(s.slug)} className={linkCls}>{s.name}</Link>
            </li>
          ))}
        </Column>

        <Column title="Company">
          <li><Link href="/about" className={linkCls}>About us</Link></li>
          <li><Link href="/services" className={linkCls}>All services</Link></li>
          <li><Link href="/blog" className={linkCls}>Blog</Link></li>
          <li><Link href="/case-studies" className={linkCls}>Case studies</Link></li>
          {ITR_YEARS.map((y) => (
            <li key={y.year}><Link href={itrHref(y.year)} className={linkCls}>ITR filing {y.year} guide</Link></li>
          ))}
          <li><Link href="/#faq" className={linkCls}>FAQ</Link></li>
        </Column>

        <Column title="Contact">
          <li>
            <a href={telHref} className={`${linkCls} flex items-center gap-2`}><Phone className="h-4 w-4" aria-hidden="true" />{SITE.phone.display}</a>
          </li>
          <li>
            <a href={whatsappHref()} target="_blank" rel="noopener" className={`${linkCls} flex items-center gap-2`}><MessageCircle className="h-4 w-4" aria-hidden="true" />WhatsApp</a>
          </li>
          <li>
            <a href={`mailto:${SITE.email}`} className={`${linkCls} flex items-center gap-2`}><Mail className="h-4 w-4" aria-hidden="true" />{SITE.email}</a>
          </li>
          <li>
            <a href={SITE.googleProfile} target="_blank" rel="noopener" className={`${linkCls} flex items-start gap-2`}>
              <MapPin className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
              <address className="not-italic">{address.street}, {address.locality} {address.postalCode}</address>
            </a>
          </li>
        </Column>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-4 py-6 text-sm text-ink-muted">
          © {new Date().getFullYear()} {SITE.name}. Tax consultants in Jodhpur since {SITE.foundingYear}.
        </p>
      </div>
    </footer>
  );
}
