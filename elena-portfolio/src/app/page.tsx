import { Button, Typography, Container } from '@/components/ui';

export default function Home() {
  return (
    <main className="min-h-screen bg-warm-white">
      {/* Hero Section */}
      <section className="section-padding">
        <Container size="lg" padding="lg">
          <div className="text-center animate-fade-in">
            <Typography variant="h1" className="mb-4">
              ELENA VASQUEZ
            </Typography>
            <Typography variant="lead" className="text-forest-green-800 mb-8">
              Travel & Cultural Photography
            </Typography>
            <div className="w-24 h-1 bg-terracotta-600 mx-auto mb-8"></div>
            <Typography variant="body" className="max-w-2xl mx-auto mb-12 text-balance">
              "Capturing the soul of places through the people who call them home"
            </Typography>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="primary" size="lg">
                VIEW MY WORK
              </Button>
              <Button variant="outline" size="lg">
                CONTACT ME
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Design System Showcase */}
      <section className="section-padding bg-cream-400/30">
        <Container size="lg" padding="lg">
          <div className="text-center mb-12">
            <Typography variant="h2" className="mb-4">
              Design System Implementation
            </Typography>
            <Typography variant="lead" className="text-charcoal-600">
              Task 2: Complete ✅
            </Typography>
          </div>

          {/* Typography Showcase */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <Typography variant="h3" className="mb-6">Typography Scale</Typography>
              <div className="space-y-4">
                <Typography variant="h4">Heading 4 - Playfair Display</Typography>
                <Typography variant="h5">Heading 5 - Playfair Display</Typography>
                <Typography variant="h6">Heading 6 - Playfair Display</Typography>
                <Typography variant="body">Body text - Source Sans Pro with excellent readability</Typography>
                <Typography variant="lead">Lead text - Larger body text for emphasis</Typography>
                <Typography variant="small">Small text - For captions and metadata</Typography>
                <Typography variant="caption">Caption - Uppercase tracking</Typography>
              </div>
            </div>

            {/* Button Showcase */}
            <div>
              <Typography variant="h3" className="mb-6">Button Variants</Typography>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary" size="sm">Primary Small</Button>
                  <Button variant="primary" size="md">Primary Medium</Button>
                  <Button variant="primary" size="lg">Primary Large</Button>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button variant="secondary" size="md">Secondary</Button>
                  <Button variant="outline" size="md">Outline</Button>
                  <Button variant="ghost" size="md">Ghost</Button>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary" size="md" loading>Loading</Button>
                  <Button variant="link" size="md">Link Button</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Color Palette */}
          <div className="mb-16">
            <Typography variant="h3" className="mb-6 text-center">Elena's Brand Colors</Typography>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-full h-20 bg-terracotta-600 rounded-lg mb-2 shadow-soft"></div>
                <Typography variant="small">Terracotta</Typography>
                <Typography variant="caption">#d2691e</Typography>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-forest-green-800 rounded-lg mb-2 shadow-soft"></div>
                <Typography variant="small">Forest Green</Typography>
                <Typography variant="caption">#2d5016</Typography>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-cream-400 rounded-lg mb-2 shadow-soft"></div>
                <Typography variant="small">Cream</Typography>
                <Typography variant="caption">#f5f5dc</Typography>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-charcoal-800 rounded-lg mb-2 shadow-soft"></div>
                <Typography variant="small">Charcoal</Typography>
                <Typography variant="caption">#36454f</Typography>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-warm-white border border-charcoal-200 rounded-lg mb-2 shadow-soft"></div>
                <Typography variant="small">Warm White</Typography>
                <Typography variant="caption">#fefefe</Typography>
              </div>
            </div>
          </div>

          {/* Success Criteria */}
          <div className="text-center">
            <Typography variant="h4" className="mb-6">Task 2 Success Criteria</Typography>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="text-left space-y-2">
                <Typography variant="body" className="flex items-center">
                  <span className="text-green-600 mr-2">✅</span>
                  Brand colors available as Tailwind utilities
                </Typography>
                <Typography variant="body" className="flex items-center">
                  <span className="text-green-600 mr-2">✅</span>
                  Typography system with custom fonts implemented
                </Typography>
                <Typography variant="body" className="flex items-center">
                  <span className="text-green-600 mr-2">✅</span>
                  Reusable UI components created and documented
                </Typography>
              </div>
              <div className="text-left space-y-2">
                <Typography variant="body" className="flex items-center">
                  <span className="text-green-600 mr-2">✅</span>
                  Responsive design system functional
                </Typography>
                <Typography variant="body" className="flex items-center">
                  <span className="text-green-600 mr-2">✅</span>
                  Design tokens accessible throughout project
                </Typography>
                <Typography variant="body" className="flex items-center">
                  <span className="text-green-600 mr-2">✅</span>
                  Professional foundation for Elena's portfolio
                </Typography>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}