import { HeaderSection } from '@/components/Header';
import { HeroImageRight } from '@/components/Hero/HeroImageRight';
import { FooterSection } from '@/components/Footer';
import { FeatureSection } from '@/components/Features'
import { Networks } from './Networks';
import { ContactUs } from './ContactUs';

export function Home() {
  return (
    <>
      <HeaderSection />
      <HeroImageRight />
      <FeatureSection />
      <Networks />
      <ContactUs />
      <FooterSection />
    </>
  );
}
