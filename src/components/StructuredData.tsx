import React from 'react';

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["RealEstateAgent", "Organization"],
    "name": "Lodha Villa Royale Palava",
    "description": "Luxury 3 & 4 BHK villas and land in Dombivli West, Thane by Lodha Group",
    "url": "https://lodha-villa-royale-palava.com",
    "telephone": "+91 9773069318",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dombivli West",
      "addressLocality": "Thane",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN",
      "postalCode": "421202"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.2046",
      "longitude": "73.0870"
    },
    "openingHours": "Mo-Su 09:00-21:00",
    "sameAs": [
      "https://www.facebook.com/lodhagroup",
      "https://www.instagram.com/lodhagroup",
      "https://twitter.com/lodhagroup"
    ],
    "brand": {
      "@type": "Brand",
      "name": "Lodha Group"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "3 BHK Luxury Villa",
        "description": "Spacious 3 BHK luxury villa with premium amenities",
        "price": "20000000",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2025-12-31"
      },
      {
        "@type": "Offer", 
        "name": "4 BHK Luxury Villa",
        "description": "Spacious 4 BHK luxury villa with premium amenities",
        "price": "25000000",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2025-12-31"
      }
    ],
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Land Parcel",
        "value": "20.32 Acres"
      },
      {
        "@type": "PropertyValue", 
        "name": "Configuration",
        "value": "3, 4 BHK Luxury Villas & Land"
      },
      {
        "@type": "PropertyValue",
        "name": "Floors",
        "value": "G+1 Storey"
      },
      {
        "@type": "PropertyValue",
        "name": "Amenities",
        "value": "Club House, Gymnasium, Indoor Games, Kids Play Area"
      }
    ]
  };

  const projectData = {
    "@context": "https://schema.org",
    "@type": "ResidentialRealEstateDevelopment",
    "name": "Lodha Villa Royale Palava",
    "description": "Premium residential development offering luxury 3 & 4 BHK villas in Dombivli West, Thane",
    "url": "https://lodha-villa-royale-palava.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dombivli West",
      "addressLocality": "Thane", 
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.2046",
      "longitude": "73.0870"
    },
    "developer": {
      "@type": "Organization",
      "name": "Lodha Group",
      "url": "https://www.lodhagroup.com"
    },
    "numberOfUnits": "Limited",
    "occupancy": "Under Construction",
    "yearBuilt": "2025",
    "floorSize": {
      "@type": "QuantitativeValue",
      "unitText": "Square Feet",
      "value": "1500-2500"
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Club House",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Gymnasium", 
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Indoor Games",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Kids Play Area",
        "value": true
      }
    ],
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "20000000",
      "highPrice": "30000000",
      "offerCount": "Limited",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectData) }}
      />
    </>
  );
};

export default StructuredData;
