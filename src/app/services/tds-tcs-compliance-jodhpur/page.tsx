import ServicePage, { serviceMetadata } from "@/components/services/ServicePage";
import { getService } from "@/content/services";

const service = getService("tds-tcs-compliance-jodhpur");
export const metadata = serviceMetadata(service);

export default function Page() {
  return (
    <ServicePage service={service}>
      <h2>Key TDS/TCS Deadlines for FY 2025-26</h2>
      <ul>
      <li>Tax deposit: <strong>7th</strong> of next month</li>
      <li>Q1 return: <strong>31 July</strong> | Q2: 31 Oct | Q3: 31 Jan | Q4: 31 May</li>
      </ul>
      <h2>How We Keep You Compliant</h2>
      <ul>
      <li>PAN validation & TAN application (if required)</li>
      <li>Accurate challan creation (ITNS-281)</li>
      <li>Form 16/16A generation and distribution</li>
      </ul>
      <h2>Packages & Support</h2>
      <p>Up to 200 lines per quarter from <strong>₹2,500</strong>. Correction statements billed separately.</p>
    </ServicePage>
  );
}
