import Link from "next/link";
import ServicePage, { serviceMetadata } from "@/components/services/ServicePage";
import { getService } from "@/content/services";
import type { Faq } from "@/content/faqs";

const service = getService("gst-registration-jodhpur");
const returns = getService("gst-return-filing-jodhpur");
export const metadata = serviceMetadata(service);

const FAQS: Faq[] = [
  {
    q: "How long does GST registration take in Jodhpur?",
    a: "Usually 3–5 working days when your documents are in order. The law gives the GST officer 7 working days to approve an application, or up to 30 days if the officer orders a physical verification of your premises.",
  },
  {
    q: "Can I register for GST with my home address in Jodhpur?",
    a: "Yes. A residential address can be your principal place of business. Upload an electricity bill or property tax receipt for the house, plus a consent letter if it is owned by a family member.",
  },
  {
    q: "Is there a government fee for GST registration?",
    a: `No. The GST portal charges nothing to register. Our fee, ${service.price.toLowerCase()}, covers preparing the application, uploading the documents and answering officer queries until your GSTIN is issued.`,
  },
  {
    q: "Should a small shop choose the composition scheme when registering?",
    a: "Only if it sells mainly to consumers within Rajasthan. For FY 2026-27, composition is open to goods suppliers with turnover up to ₹1.5 crore and taxes traders at 1% of turnover, but it gives up input tax credit and inter-state sales.",
  },
  {
    q: "What happens if the GST officer raises a query on my application?",
    a: "You must reply to the query notice (Form GST REG-03) within 7 working days through Form GST REG-04, or the application can be rejected. We answer portal queries within 24 hours of receiving them.",
  },
];

export default function Page() {
  return (
    <ServicePage service={service} faqs={FAQS}>
      <nav aria-label="On this page" className="rounded-2xl border border-line bg-paper p-5 text-[16px]">
      <p className="!mt-0 font-medium text-ink">On this page</p>
      <ol className="mt-2">
      <li><a href="#who">Who must register in Rajasthan</a></li>
      <li><a href="#included">What we do, and what we don&apos;t</a></li>
      <li><a href="#steps">How registration works</a></li>
      <li><a href="#docs">Documents needed</a></li>
      <li><a href="#timeline">Timelines</a></li>
      <li><a href="#fees">Fees</a></li>
      <li><a href="#mistakes">Mistakes that get applications rejected</a></li>
      <li><a href="#service-faq">FAQs</a></li>
      </ol>
      </nav>

      <h2 id="who">1. Who must register for GST in Rajasthan</h2>
      <p>For FY 2026-27, a Jodhpur business must take a <Link href="/glossary/gstin">GSTIN</Link> when any of these apply:</p>
      <ul>
      <li>Aggregate turnover above <strong>₹40 lakh</strong> for suppliers of goods, or <strong>₹20 lakh</strong> for service providers.</li>
      <li>It makes <strong>inter-state supplies of goods</strong>, whatever its turnover.</li>
      <li>It sells through most <strong>e-commerce platforms</strong>, or must pay tax under <Link href="/glossary/reverse-charge-mechanism">reverse charge</Link>.</li>
      </ul>
      <p>Businesses below the limit can also register voluntarily, which makes sense when your customers are GST-registered and want <Link href="/glossary/input-tax-credit">input tax credit</Link> on your bills. Small traders, kirana stores and restaurants selling within Rajasthan can register under the <Link href="/glossary/composition-scheme">composition scheme</Link> instead. New to the tax? Start with <Link href="/glossary/gst">what GST is and how it flows through a sale</Link>.</p>

      <h2 id="included">2. What we do, and what we don&apos;t</h2>
      <p><strong>Included:</strong></p>
      <ul>
      <li>A free check of your documents before anything is uploaded.</li>
      <li>Filling Form GST REG-01, including business details, place of business and <Link href="/glossary/hsn-sac-code">HSN or SAC codes</Link> for what you sell.</li>
      <li>Uploading KYC and address proof, and tracking the ARN until approval.</li>
      <li>Answering any officer query on the portal within 24 hours, so the application isn&apos;t rejected.</li>
      </ul>
      <p><strong>Not included:</strong> returns after your GSTIN is issued. Those are covered by our <Link href={`/services/${returns.slug}`}>GST return filing service</Link> ({returns.price}).</p>

      <h2 id="steps">3. How GST registration works</h2>
      <ol>
      <li><strong>Document check.</strong> Send PAN, Aadhaar, address proof and bank details on WhatsApp or email. We confirm they match each other before filing.</li>
      <li><strong>Part A of REG-01.</strong> PAN, mobile number and email are verified by OTP, and the portal issues a temporary reference number (TRN).</li>
      <li><strong>Part B of REG-01.</strong> Business constitution, principal place of business, goods and services, bank account and the details of each proprietor, partner or director.</li>
      <li><strong>Aadhaar authentication.</strong> Each promoter authenticates through an OTP link. The portal can instead ask for a biometric visit to a GST Suvidha Kendra.</li>
      <li><strong>ARN and officer review.</strong> The application gets an ARN and goes to the jurisdictional officer, who approves it or raises a query in REG-03.</li>
      <li><strong>GSTIN issued.</strong> On approval, the registration certificate (REG-06) is available to download from the portal. Rajasthan GSTINs start with state code 08.</li>
      </ol>

      <h2 id="docs">4. Documents needed</h2>
      <ul>
      <li>PAN of the business, and PAN and Aadhaar of each proprietor, partner or director.</li>
      <li>A recent photograph of each of them.</li>
      <li>Address proof for the place of business: electricity bill or property tax receipt, plus the rent agreement if rented, or a consent letter if owned by a relative.</li>
      <li>Bank statement or cancelled cheque in the business&apos;s name.</li>
      <li>For a firm, LLP or company: partnership deed, LLP agreement or certificate of incorporation, and an authorisation for the signatory.</li>
      </ul>

      <h2 id="timeline">5. Timelines</h2>
      <p>With complete documents, most applications we file get a GSTIN in <strong>3–5 working days</strong>. Under the GST rules, the officer must act within 7 working days, or within 30 days where a physical verification is ordered. A query in REG-03 must be answered within 7 working days. Once registered, your first returns are due on the GST calendar; see <Link href="/gst-calendar">this year&apos;s GST due dates</Link>.</p>

      <h2 id="fees">6. Fees</h2>
      <p>GST registration is a flat fee, <strong>{service.price.toLowerCase()}</strong>. The government charges no fee for registration.</p>

      <h2 id="mistakes">7. Mistakes that get applications rejected</h2>
      <ul>
      <li>An address on the electricity bill that doesn&apos;t match the address typed in the form.</li>
      <li>A rent agreement uploaded without the owner&apos;s utility bill, or a family property without a consent letter.</li>
      <li>Missing the 7-day window to answer a REG-03 query.</li>
      <li>Picking composition and then making an inter-state sale, which composition doesn&apos;t allow.</li>
      <li>Registering late after crossing the limit, which brings tax and interest on the sales already made.</li>
      </ul>
    </ServicePage>
  );
}
