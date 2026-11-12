import Link from "next/link";
import { NAV, telHref } from "@/content/site";
import Cta from "@/components/ui/Cta";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 min-[760px]:px-6">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-line/70 bg-white/80 px-3 py-2 backdrop-blur-xl backdrop-saturate-150 min-[760px]:px-4">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-1 min-[760px]:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-[15px] font-medium text-ink-body transition-colors hover:bg-paper hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Cta href={telHref} variant="dark" icon="phone" className="ml-2 !py-2.5">
            Free 15-min call
          </Cta>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
