import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { VisionSection } from '@/components/VisionSection';
import { ProblemSection } from '@/components/ProblemSection';
import { SolutionsSection } from '@/components/SolutionsSection';
import { CommunityImpact } from '@/components/CommunityImpact';
import { HowItWorks } from '@/components/HowItWorks';
import { ServicesGrid } from '@/components/ServicesGrid';
import { Testimonials } from '@/components/Testimonials';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <VisionSection />
      <ProblemSection />
      <SolutionsSection />
      <CommunityImpact />
      <HowItWorks />
      <ServicesGrid />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
