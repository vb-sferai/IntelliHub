import { SupremeHeader } from './SupremeHeader';
import { HeroSection } from './HeroSection';
import { WhoWeAreSection } from './WhoWeAreSection';
import { WhatWeDoSection } from './WhatWeDoSection';
import { CasesStories } from './CasesStories';
import { PhilosophySection } from './PhilosophySection';
import { WhatSetsUsApartSection } from './WhatSetsUsApartSection';
import { DiscoverCTASection } from './DiscoverCTASection';
import { ContactsSection } from './ContactsSection';
import { CASES } from '../../../data/cases';

export const SupremeMainPage = () => {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <SupremeHeader />
      <main className="flex-1">
        <HeroSection />
        <WhoWeAreSection />
        <WhatWeDoSection />
        <CasesStories cases={CASES} />
        <PhilosophySection />
        <WhatSetsUsApartSection />
        <DiscoverCTASection />
        <ContactsSection />
      </main>
    </div>
  );
};

