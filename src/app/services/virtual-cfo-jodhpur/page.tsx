import ServicePage, { serviceMetadata } from "@/components/services/ServicePage";
import { getService } from "@/content/services";

const service = getService("virtual-cfo-jodhpur");
export const metadata = serviceMetadata(service);

export default function Page() {
  return (
    <ServicePage service={service}>
      <h2>Strategic Finance without Full-Time Cost</h2>
      <p>Our Virtual CFO attends board meetings, builds budgets, and sets KPIs so you make data-driven decisions.</p>
      <h2>Key Deliverables</h2>
      <ul>
      <li>Monthly MIS dashboard</li>
      <li>Cash-flow forecasting</li>
      <li>Investor deck financials</li>
      </ul>
      <h2>Engagement Models</h2>
      <ul>
      <li>Lite: review call + MIS – <strong>₹25k/month</strong>
      </li>
      <li>Growth: on-site visit + budgeting – <strong>₹40k/month</strong>
      </li>
      </ul>
    </ServicePage>
  );
}
