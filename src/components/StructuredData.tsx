export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "Ranga & Company",
    "description": "Tax Consultant in Jodhpur for Income-Tax & GST Filing. 36+ years helping Rajasthan businesses stay compliant.",
    "url": "https://rangaco.com",
    "logo": "https://rangaco.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "A7, Abhay Chambers, Jalori Gate",
      "addressLocality": "Jodhpur",
      "addressRegion": "Rajasthan",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9829021030",
      "contactType": "customer service",
      "email": "kr@rangaco.com"
    },
    "areaServed": {
      "@type": "State",
      "name": "Rajasthan"
    },
    "serviceType": [
      "Income Tax Filing",
      "GST Registration",
      "GST Returns",
      "TDS Compliance",
      "Audit Services",
      "Accounting Services"
    ],
    "foundingDate": "1988",
    "numberOfEmployees": "10-50",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "2500"
    },
    "sameAs": [
      "https://www.youtube.com/@rangaco",
      "https://www.linkedin.com/company/rangaco"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 