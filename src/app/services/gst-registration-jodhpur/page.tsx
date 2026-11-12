import ServicePage, { serviceMetadata } from "@/components/services/ServicePage";
import { getService } from "@/content/services";

const service = getService("gst-registration-jodhpur");
export const metadata = serviceMetadata(service);

export default function Page() {
  return (
    <ServicePage service={service}>
      <h2>Who Must Register for GST in Rajasthan</h2>
      <ul>
      <li>Goods turnover above <strong>₹40 lakh</strong>
      </li>
      <li>Services turnover above <strong>₹20 lakh</strong>
      </li>
      <li>Inter-state e-commerce sellers, even below threshold</li>
      </ul>
      <h2>End-to-End Registration Support</h2>
      <p>We fill Form GST REG-01, upload KYC, and track ARN. Any portal clarification is answered within 24 hours to avoid rejection.</p>
      <h2>Documents Needed & Turnaround</h2>
      <ul>
      <li>PAN, Aadhaar, photo of proprietor/partner/director</li>
      <li>Address proof (electricity bill / rent agreement)</li>
      <li>Bank statement or cancelled cheque</li>
      </ul>
      <p>Get your GSTIN in <strong>3–5 working days</strong>. Flat fee starts at <strong>₹2,999</strong>.</p>
    </ServicePage>
  );
}
