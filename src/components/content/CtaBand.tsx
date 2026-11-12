import Cta from "@/components/ui/Cta";
import { telHref, whatsappHref } from "@/content/site";

export default function CtaBand({
  title = "Talk to a Jodhpur tax expert today",
  body = "Send your documents on WhatsApp or book a free 15-minute call. We reply the same working day.",
}: { title?: string; body?: string }) {
  return (
    <section className="relative mt-24 overflow-hidden rounded-3xl bg-ink-strong px-6 py-14 text-center min-[760px]:px-12">
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[640px] -translate-x-1/2 rounded-full bg-brand/40 blur-[100px]" />
      <h2 className="relative text-title font-medium text-white">{title}</h2>
      <p className="relative mx-auto mt-3 max-w-xl text-[17px] text-white/70">{body}</p>
      <div className="relative mt-8 flex flex-col justify-center gap-3 min-[520px]:flex-row">
        <Cta href={whatsappHref("Hi, I need help with my taxes.")} icon="whatsapp">WhatsApp us</Cta>
        <Cta href={telHref} variant="soft" icon="phone">Free 15-min call</Cta>
      </div>
    </section>
  );
}
