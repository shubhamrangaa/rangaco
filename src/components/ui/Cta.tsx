import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";

type Variant = "brand" | "dark" | "soft" | "ghost";

const variants: Record<Variant, string> = {
  brand: "bg-brand text-white hover:bg-brand-dark shadow-[0_1px_0_rgb(255_255_255/0.2)_inset,0_8px_20px_-8px_rgb(18_137_72/0.6)]",
  dark: "bg-ink-strong text-white hover:bg-ink",
  soft: "bg-white text-ink border border-line hover:border-ink/20",
  ghost: "text-brand hover:bg-brand-soft",
};

const icons = { phone: Phone, whatsapp: MessageCircle, arrow: ArrowRight };

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  icon?: keyof typeof icons;
  className?: string;
};

/** Every call-to-action is a real link (tel:, wa.me or a page), so it works without JavaScript. */
export default function Cta({ href, children, variant = "brand", icon, className = "" }: Props) {
  const Icon = icon ? icons[icon] : null;
  const external = /^https?:/.test(href);
  const cls = `group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[15px] font-medium transition-[transform,background-color,border-color,box-shadow] ease-spring active:scale-[0.97] ${variants[variant]} ${className}`;
  const body = (
    <>
      {Icon && icon !== "arrow" && <Icon aria-hidden="true" className="h-4 w-4" />}
      <span>{children}</span>
      {icon === "arrow" && (
        <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform ease-spring group-hover:translate-x-0.5" />
      )}
    </>
  );
  if (href.startsWith("/")) return <Link href={href} className={cls}>{body}</Link>;
  return (
    <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener" } : {})}>
      {body}
    </a>
  );
}
