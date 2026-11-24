import './home.css';
import HomeMotion from '@/components/home/HomeMotion';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Day from '@/components/home/Day';
import Film from '@/components/home/Film';
import PricingSection from '@/components/PricingSection';
import Faq from '@/components/home/Faq';
import CloseCta from '@/components/home/CloseCta';

export default function HomePage() {
  return (
    <HomeMotion>
      <Hero />
      <Features />
      <Day />
      <Film />
      <PricingSection />
      <Faq />
      <CloseCta />
    </HomeMotion>
  );
}
