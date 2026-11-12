import Link from "next/link";
import { authorHref, type Author } from "@/content/blog";

const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

export default function AuthorBadge({ author }: { author: Author }) {
  return (
    <div className="flex items-center gap-3">
      <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-sm font-bold text-brand">
        {initials(author.name)}
      </span>
      <div className="leading-tight">
        <Link href={authorHref(author)} rel="author" className="font-medium text-ink hover:text-brand">
          {author.name}
        </Link>
        <p className="text-sm text-ink-muted">{author.role}</p>
      </div>
    </div>
  );
}
