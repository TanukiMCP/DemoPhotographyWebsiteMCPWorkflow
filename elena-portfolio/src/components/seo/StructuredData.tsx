export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Elena Vasquez",
    jobTitle: "Travel & Cultural Photographer",
    description: "Professional photographer specializing in authentic cultural documentation across 40+ countries",
    url: "https://elenavasquez.photography",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    sameAs: [
      "https://instagram.com/elenavasquezphoto",
      "https://linkedin.com/in/elenavasquezphoto",
      "https://twitter.com/elenavasquezphoto"
    ],
    knowsAbout: [
      "Travel Photography",
      "Cultural Photography", 
      "Documentary Photography",
      "Editorial Photography",
      "Portrait Photography"
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Photographer",
      occupationalCategory: "27-4021.00",
      description: "Travel and cultural documentary photographer"
    },
    brand: {
      "@type": "Brand",
      name: "Elena Vasquez Photography",
      slogan: "Capturing the soul of places through the people who call them home"
    },
    offers: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Photography Services",
        description: "Professional travel, cultural, and editorial photography services"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}