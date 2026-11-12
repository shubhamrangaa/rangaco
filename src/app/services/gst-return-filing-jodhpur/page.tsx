import Link from "next/link";
import ServicePage, { serviceMetadata } from "@/components/services/ServicePage";
import { getService } from "@/content/services";

const service = getService("gst-return-filing-jodhpur");
export const metadata = serviceMetadata(service);

export default function Page() {
  return (
    <ServicePage service={service}>
      <h2>Avoid Late Fees & Interest</h2>
      <p>GSTR-3B late fee is ₹50 per day; interest is 18% on unpaid tax. Our monthly filing plans prevent both.</p>
      <h2>Reconciliation for 100% Input-Tax Credit</h2>
      <p>We match purchase entries with <strong>GSTR-2B</strong>. Any mismatch is flagged so you never lose credit. Exporters and businesses with an inverted duty structure can claim unused credit back through <Link href="/services/gst-refund-assistance-jodhpur">GST refunds</Link>.</p>
      <h2>Monthly Service Deliverables</h2>
      <ul>
      <li>GSTR-3B & GSTR-1 preparation and upload</li>
      <li>Challan creation and tax-payment reminder</li>
      <li>WhatsApp confirmation plus PDF copy of filed return</li>
      </ul>
      <p>Plans from <strong>₹799</strong> per return.</p>
    </ServicePage>
  );
}
