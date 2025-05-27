import { HeroSection, FeaturedWork, AboutPreview, RecentAdventures } from '@/components/sections';

export default function Home() {
  return (
    <main className="min-h-screen bg-warm-white">
      <HeroSection />
      <div className="bg-red-500 p-8 text-white text-center">
        <h2>TEST SECTION - This should be visible</h2>
      </div>
      <FeaturedWork />
      <div className="bg-blue-500 p-8 text-white text-center">
        <h2>ANOTHER TEST SECTION</h2>
      </div>
      <AboutPreview />
      <RecentAdventures />
    </main>
  );
}