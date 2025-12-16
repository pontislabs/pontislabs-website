import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BackgroundSection from '@/components/BackgroundSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <BackgroundSection />
      <ServicesSection />
      <ProcessSection />
      <CaseStudiesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
