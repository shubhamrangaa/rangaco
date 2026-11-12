import Link from "next/link";
import ServicePage, { serviceMetadata } from "@/components/services/ServicePage";
import { getService } from "@/content/services";

const service = getService("accounting-payroll-jodhpur");
export const metadata = serviceMetadata(service);

export default function Page() {
  return (
    <ServicePage service={service}>
      <h2>Core Bookkeeping Tasks We Handle</h2>
      <ul>
      <li>Sales, purchase and bank entries in Tally/Zoho</li>
      <li>Monthly GST and TDS reconciliation</li>
      <li>Year-end financial statements, with monthly MIS available through our <Link href="/services/virtual-cfo-jodhpur">virtual CFO service</Link></li>
      </ul>
      <h2>Payroll Made Simple</h2>
      <p>Employees receive payslips on time; PF, ESI and PT returns filed before due dates.</p>
      <h2>Pricing & Software Options</h2>
      <p>Starter plan: <strong>₹5,000/month</strong> for up to 200 vouchers. Choose Tally, Zoho Books or QuickBooks.</p>
    </ServicePage>
  );
}
