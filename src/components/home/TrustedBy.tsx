import Image from "next/image";
import { TRUSTED_BY } from "@/content/testimonials";

export default function TrustedBy() {
  return (
    <section aria-labelledby="trusted-by" className="mx-auto max-w-6xl px-4 py-16">
      <h2 id="trusted-by" className="reveal text-center text-sm font-medium text-ink-muted">
        Trusted by employees at
      </h2>
      <ul className="reveal mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 min-[760px]:gap-x-14">
        {TRUSTED_BY.map((c) => (
          <li key={c.name}>
            {/* brightness-0 flattens every brand colour (incl. FamPay's white logo) into one neutral tone */}
            <Image src={c.src} alt={c.name} width={c.width} height={c.height} className="h-7 w-auto max-w-[130px] object-contain opacity-50 brightness-0" />
          </li>
        ))}
      </ul>
    </section>
  );
}
