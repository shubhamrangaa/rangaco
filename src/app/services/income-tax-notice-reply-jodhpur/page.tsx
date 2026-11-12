import ServicePage, { serviceMetadata } from "@/components/services/ServicePage";
import { getService } from "@/content/services";

const service = getService("income-tax-notice-reply-jodhpur");
export const metadata = serviceMetadata(service);

export default function Page() {
  return (
    <ServicePage service={service}>
      <h2>Common Notices We Resolve</h2>
      <ul>
      <li><strong>Section 143(1)</strong> adjustment</li>
      <li><strong>Section 143(2)</strong> scrutiny</li>
      <li><strong>Section 148</strong> income escape</li>
      </ul>
      <h2>End-to-End Representation</h2>
      <p>We draft replies, upload them on the portal, and attend hearings—online or at the Jodhpur ward office.</p>
      <h2>Flat-Fee Packages</h2>
      <p>Notices up to ₹10 lakh demand: <strong>₹7,500</strong><br /> Higher complexity quoted after review.</p>
    </ServicePage>
  );
}
