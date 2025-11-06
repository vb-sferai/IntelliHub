import { SupremeHeader } from './SupremeHeader';
import { HeroSection } from './HeroSection';
import { WhoWeAreSection } from './WhoWeAreSection';
import { WhatWeDoSection } from './WhatWeDoSection';
import { CaseStudiesSection } from './CaseStudiesSection';
import { PhilosophySection } from './PhilosophySection';
import { WhatSetsUsApartSection } from './WhatSetsUsApartSection';
import { DiscoverCTASection } from './DiscoverCTASection';
import { ContactsSection } from './ContactsSection';

export const SupremeMainPage = () => {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <SupremeHeader />
      <main className="flex-1">
        <HeroSection />
        <WhoWeAreSection />
        <WhatWeDoSection />
        <CaseStudiesSection />
        <PhilosophySection />
        <WhatSetsUsApartSection />
        <DiscoverCTASection />
        <ContactsSection />
      </main>
    </div>
  );
};

