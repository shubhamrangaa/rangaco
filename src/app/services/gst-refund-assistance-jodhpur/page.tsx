import ServicePage, { serviceMetadata } from "@/components/services/ServicePage";
import { getService } from "@/content/services";

const service = getService("gst-refund-assistance-jodhpur");
export const metadata = serviceMetadata(service);

export default function Page() {
  return (
    <ServicePage service={service}>
      <h2>Types of Refunds We Handle</h2>
      <ul>
      <li>Export of goods/services (with LUT)</li>
      <li>Inverted duty structure</li>
      <li>Excess cash ledger balance</li>
      </ul>
      <h2>Our Refund Workflow</h2>
      <p>Form RFD-01 filing → ARN tracking → clarification reply → refund order follow-up.</p>
      <h2>Fees & Timeline</h2>
      <p>Service fee <strong>5% of refund</strong> (min ₹5,000). Avg. credit in 4–8 weeks.</p>
    </ServicePage>
  );
}
