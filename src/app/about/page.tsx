import BlogTemplate from "@/components/BlogTemplate";

const aboutUsPost = {
  title: "About Ranga & Company - Leading Tax Consultants in Jodhpur",
  content: `
    <h2>34+ Years of Excellence in Tax & Financial Services</h2>
    <p>Founded in 1990 by <strong>Jugal Kishore Ranga</strong>, Ranga & Company has been serving businesses and individuals across Rajasthan with comprehensive tax and financial services. Our journey began with a simple mission: to make tax compliance simple, efficient, and stress-free for our clients.</p>
    
    <p>In loving memory of <strong>Kishore Ranga</strong>, our esteemed ex-CEO and co-founder, whose vision, dedication, and unwavering commitment to excellence continue to inspire our team every day. His legacy of integrity, professionalism, and client-first approach remains the cornerstone of our firm's values and success.</p>
    
    <h2>Our Core Values</h2>
    <ul>
      <li><strong>Integrity:</strong> We maintain the highest ethical standards in all our dealings</li>
      <li><strong>Excellence:</strong> Every client receives our best effort and attention to detail</li>
      <li><strong>Innovation:</strong> We continuously adapt to changing tax laws and technology</li>
      <li><strong>Client-First:</strong> Your success is our priority</li>
    </ul>
    
    <h2>Why Choose Ranga & Company?</h2>
    <h3>Expert Team</h3>
    <p>Our team consists of qualified Chartered Accountants, tax professionals, and financial experts with decades of combined experience. We stay updated with the latest tax regulations and technological advancements to provide you with the most accurate and efficient services.</p>
    
    <h3>Comprehensive Services</h3>
    <p>From basic ITR filing to complex audit requirements, we offer end-to-end solutions under one roof. Our services include:</p>
    <ul>
      <li>Income Tax Return Filing & Planning</li>
      <li>GST Registration, Filing & Refund Assistance</li>
      <li>TDS & TCS Compliance Services</li>
      <li>Statutory & Internal Audit</li>
      <li>Accounting & Payroll Outsourcing</li>
      <li>Virtual CFO Services</li>
      <li>Tax Advisory & Notice Reply</li>
    </ul>
    
    <h3>Technology-Driven Approach</h3>
    <p>We leverage modern technology and software to ensure accuracy, speed, and transparency in all our processes. Our digital-first approach means faster processing times and better communication with clients.</p>
    
    <h2>Our Commitment to Jodhpur & Rajasthan</h2>
    <p>As a local firm deeply rooted in Jodhpur, we understand the unique challenges and opportunities that businesses in Rajasthan face. Our local expertise combined with national-level knowledge makes us the preferred choice for businesses across the state.</p>
    
    <h2>Client Success Stories</h2>
    <p>Over the years, we've helped thousands of businesses and individuals achieve their financial goals. From small startups to established enterprises, our clients trust us with their most important financial decisions.</p>
    
    <h2>Get Started Today</h2>
    <p>Whether you're a business owner looking for comprehensive financial services or an individual needing help with tax filing, our team is ready to assist you. Contact us for a free consultation and discover how we can help you achieve your financial objectives.</p>
  `,
  relatedPosts: [
    {
      title: "Our Services Overview",
      description:
        "Explore our comprehensive range of tax and financial services designed for businesses and individuals.",
      href: "/services",
    },
    {
      title: "Income-Tax Return (ITR) Filing in Jodhpur",
      description:
        "Professional ITR filing services with expert guidance and fast processing times.",
      href: "/services/itr-filing-jodhpur",
    },
    {
      title: "GST Registration Services in Jodhpur",
      description:
        "Complete GST registration support with end-to-end assistance and fast turnaround times.",
      href: "/services/gst-registration-jodhpur",
    },
  ],
};

export default function AboutPage() {
  return <BlogTemplate post={aboutUsPost} />;
}
