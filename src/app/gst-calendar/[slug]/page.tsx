import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MonthPage from "@/components/gst-calendar/MonthPage";
import ReturnPage from "@/components/gst-calendar/ReturnPage";
import { GST_PAGE_SLUGS, gstPageFromSlug, itemCopy, monthCopy } from "@/content/gst-calendar";
import { itemHref, monthHref } from "@/lib/gst-calendar-urls";
import { pageMetadata } from "@/lib/seo";

// /gst-calendar/gst-due-dates-november and /gst-calendar/gstr-3b-due-date share this one segment.
type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => GST_PAGE_SLUGS.map((slug) => ({ slug }));

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const page = gstPageFromSlug((await params).slug);
  if (!page) return {};
  const { title, description } = page.kind === "month" ? monthCopy(page.month) : itemCopy(page.id);
  return pageMetadata({ title, description, path: page.kind === "month" ? monthHref(page.month) : itemHref(page.id) });
}

export default async function GstCalendarSubPage({ params }: Params) {
  const page = gstPageFromSlug((await params).slug);
  if (!page) notFound();
  return page.kind === "month" ? <MonthPage month={page.month} /> : <ReturnPage id={page.id} />;
}
