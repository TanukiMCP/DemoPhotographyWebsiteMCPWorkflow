import { 
  ServicesHero, 
  ServicePackages, 
  ServicesFAQ, 
  ServicesCTA 
} from '@/components/services';

export default function Services() {
  return (
    <div className="min-h-screen">
      <ServicesHero />
      <ServicePackages />
      <ServicesFAQ />
      <ServicesCTA />
    </div>
  );
}