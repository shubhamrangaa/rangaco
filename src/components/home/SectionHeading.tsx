export default function SectionHeading({ id, eyebrow, title, lede, center }: {
  id?: string;
  eyebrow: string;
  title: string;
  lede?: string;
  center?: boolean;
}) {
  return (
    <div className={`reveal max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p className="text-sm font-medium text-brand">{eyebrow}</p>
      <h2 id={id} className="mt-3 text-title font-medium text-ink">{title}</h2>
      {lede && <p className="mt-4 text-[17px] leading-relaxed text-ink-muted">{lede}</p>}
    </div>
  );
}
