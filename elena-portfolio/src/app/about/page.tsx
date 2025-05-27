import { AboutHero, JourneyTimeline, Philosophy, Testimonials } from '@/components/about';

export default function About() {
  return (
    <div className="min-h-screen bg-warm-white">
      <AboutHero />
      <Philosophy />
      <JourneyTimeline />
      <Testimonials />
    </div>
  );
}