import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileCTA from '@/components/layout/MobileCTA';
import Hero from '@/components/sections/Hero';
import Problems from '@/components/sections/Problems';
import WhySection from '@/components/sections/WhySection';
import Curriculum from '@/components/sections/Curriculum';
import LearningSystem from '@/components/sections/LearningSystem';
import Reviews from '@/components/sections/Reviews';
import Teachers from '@/components/sections/Teachers';
import PreviewSection from '@/components/sections/PreviewSection';
import Classes from '@/components/sections/Classes';
import Consultation from '@/components/sections/Consultation';
import Location from '@/components/sections/Location';
import FAQ from '@/components/sections/FAQ';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="w-full">
        <Hero />
        <Problems />
        <WhySection />
        <Curriculum />
        <LearningSystem />
        <Reviews />
        <Teachers />
        <PreviewSection />
        <Classes />
        <Consultation />
        <Location />
        <FAQ />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
