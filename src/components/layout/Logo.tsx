import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/content/site";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 rounded-full" aria-label={`${SITE.name} home`}>
      <Image src="/LogoRangaCo.svg" alt="" width={40} height={42} priority className="h-10 w-10" />
      <span className="font-serif text-[22px] leading-none tracking-[-0.02em] text-ink">{SITE.name}</span>
    </Link>
  );
}
