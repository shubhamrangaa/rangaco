import ServicePage, { serviceMetadata } from "@/components/services/ServicePage";
import { getService } from "@/content/services";

const service = getService("statutory-audit-jodhpur");
export const metadata = serviceMetadata(service);

export default function Page() {
  return (
    <ServicePage service={service}>
      <h2>When Is a Statutory Audit Mandatory?</h2>
      <p>Under the <strong>Companies Act, 2013</strong>, every company must have its accounts audited every year, whatever its size. <strong>LLPs</strong> need an audit once turnover exceeds <strong>₹40 lakh</strong> or contribution exceeds <strong>₹25 lakh</strong>. Separately, a <strong>tax audit</strong> under section 44AB applies above the turnover limits in the Income-tax Act.</p><p>We prepare your books, schedules and audit file; the audit report itself is signed by our partner CA firm.</p>
      <h2>Our Audit Methodology</h2>
      <ol>
      <li><strong>Planning & Risk Assessment</strong>
      </li>
      <li><strong>Field Work: Ledger Testing & Stock Verification</strong>
      </li>
      <li><strong>Reporting: CARO Checklist & Management Letter</strong>
      </li>
      </ol>
      <h2>Audit Fee Range</h2>
      <ul>
      <li>Small company: <strong>₹50k–₹1.5 lakh</strong>
      </li>
      <li>Medium enterprise: quotation after scoping</li>
      </ul>
    </ServicePage>
  );
}
