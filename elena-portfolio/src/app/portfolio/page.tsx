import { Typography, Container } from '@/components/ui';
import { GalleryCard } from '@/components/gallery';
import { getAllGalleries } from '@/lib/gallery-data';

export default function Portfolio() {
  const galleries = getAllGalleries();

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-cream to-warm-white">
        <Container size="lg" padding="lg">
          <div className="text-center">
            <Typography variant="h1" className="mb-4">
              Portfolio
            </Typography>
            <Typography variant="lead" className="text-charcoal-600 mb-8 max-w-3xl mx-auto">
              Explore Elena's travel and cultural photography collections, 
              capturing the soul of places through the people who call them home
            </Typography>
            <div className="w-24 h-1 bg-terracotta-600 mx-auto mb-12"></div>
          </div>
        </Container>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <Container size="lg" padding="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {galleries.map((gallery, index) => (
              <GalleryCard 
                key={gallery.id} 
                gallery={gallery} 
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>      {/* Call to Action */}
      <section className="section-padding bg-charcoal text-white">
        <Container size="md" padding="lg">
          <div className="text-center">
            <Typography variant="h2" className="text-white mb-4">
              Interested in Working Together?
            </Typography>
            <Typography variant="lead" className="text-white/90 mb-8">
              Let's discuss how we can capture your story through authentic photography
            </Typography>
            <a 
              href="/contact"
              className="inline-block bg-terracotta-600 hover:bg-terracotta-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}