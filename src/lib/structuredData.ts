// Structured Data (JSON-LD) helpers for SEO

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.columbuscabinets.com",
  "name": "Columbus Cabinets",
  "image": "https://www.columbuscabinets.com/logo.png",
  "logo": "https://www.columbuscabinets.com/logo.png",
  "url": "https://www.columbuscabinets.com",
  "telephone": "+16145551234",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "601 Corduroy Rd",
    "addressLocality": "Lewis Center",
    "addressRegion": "OH",
    "postalCode": "43035",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "40.1747",
    "longitude": "-83.0089"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Columbus"
    },
    {
      "@type": "City",
      "name": "Lewis Center"
    },
    {
      "@type": "City",
      "name": "Dublin"
    },
    {
      "@type": "City",
      "name": "Westerville"
    },
    {
      "@type": "City",
      "name": "Powell"
    }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "40.1747",
      "longitude": "-83.0089"
    },
    "geoRadius": {
      "@type": "Distance",
      "name": "Greater Columbus Area"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Cabinetry Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Kitchen Cabinets",
          "description": "Custom kitchen cabinets from trusted brands"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bathroom Cabinets",
          "description": "Custom bathroom cabinetry solutions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cabinet Design",
          "description": "Personalized cabinet design and layout services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cabinet Installation",
          "description": "Professional cabinet installation services"
        }
      }
    ]
  }
});

export const getServiceSchema = (serviceName: string, description: string, price?: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "LocalBusiness",
    "name": "Columbus Cabinets",
    "telephone": "+16145551234"
  },
  "areaServed": {
    "@type": "City",
    "name": "Columbus"
  },
  ...(price && {
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  })
});

export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Columbus Cabinets",
  "url": "https://www.columbuscabinets.com",
  "logo": "https://www.columbuscabinets.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+16145551234",
    "contactType": "Customer Service",
    "areaServed": "US",
    "availableLanguage": "English"
  }
});

export const getWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Columbus Cabinets",
  "url": "https://www.columbuscabinets.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.columbuscabinets.com/?s={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
});

