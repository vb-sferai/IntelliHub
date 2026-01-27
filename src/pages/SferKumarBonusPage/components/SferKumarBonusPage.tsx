import { useEffect } from 'react';
import { saveUTMParams } from '../../../utils/analytics';
import { HeroSection } from './HeroSection';
import { MiroSection } from './MiroSection';
import { BonusLessonSection } from './BonusLessonSection';
import { MoreExamplesSection } from './MoreExamplesSection';
import { TimelineSection } from './TimelineSection';
import { QuoteSection } from './QuoteSection';
import { SkillsChecklistSection } from './SkillsChecklistSection';
import { VibeAcademyFeaturesSection } from './VibeAcademyFeaturesSection';
import { InstructorsSection } from './InstructorsSection';
import { ToolsLogosSection } from './ToolsLogosSection';
import { SuccessStoriesSection } from './SuccessStoriesSection';
import { ReviewsSection } from './ReviewsSection';
import { CTASection } from './CTASection';
import { FinalCTASection } from './FinalCTASection';
import { FooterSection } from './FooterSection';

export const SferKumarBonusPage = () => {
  // Сохраняем UTM-параметры при загрузке страницы
  useEffect(() => {
    saveUTMParams();
  }, []);

  return (
    <div className="flex flex-col w-full overflow-x-clip">
      {/* Custom CSS variables */}
      <style>{`
        .sfer-kumar-bonus-primary {
          color: #005EE0;
        }
      `}</style>

      {/* ========== HERO SECTION ========== */}
      <HeroSection />

      {/* ========== MAIN CONTENT ========== */}
      <div className="flex flex-col px-4 sm:px-12 lg:px-16 xl:px-0 xl:w-312 xl:mx-auto">
        {/* ========== MIRO SECTION ========== */}
        <MiroSection />

        {/* ========== BONUS LESSON SECTION ========== */}
        <BonusLessonSection />

        {/* ========== MORE EXAMPLES SECTION ========== */}
        <MoreExamplesSection />

        {/* ========== TIMELINE SECTION ========== */}
        <TimelineSection />

        {/* ========== QUOTE SECTION ========== */}
        <QuoteSection />
      </div>

      {/* ========== CTA SECTION ========== */}
      <CTASection />

      {/* ========== SKILLS CHECKLIST SECTION ========== */}
      <div className="flex flex-col px-4 sm:px-12 lg:px-16 xl:px-0 xl:w-312 xl:mx-auto">
        <SkillsChecklistSection />
      </div>

      {/* ========== VIBE ACADEMY FEATURES SECTION ========== */}
      <div className="flex flex-col px-4 sm:px-12 lg:px-16 xl:px-0 xl:w-312 xl:mx-auto">
        <VibeAcademyFeaturesSection />
      </div>

      {/* ========== INSTRUCTORS SECTION ========== */}
      <div className="flex flex-col px-4 sm:px-12 lg:px-16 xl:px-0 xl:w-312 xl:mx-auto">
        <InstructorsSection />
      </div>

      {/* ========== TOOLS LOGOS SECTION ========== */}
      <div className="flex flex-col px-4 sm:px-12 lg:px-16 xl:px-0 xl:w-312 xl:mx-auto">
        <ToolsLogosSection />
      </div>

      {/* ========== SUCCESS STORIES SECTION ========== */}
      <SuccessStoriesSection />

      {/* ========== REVIEWS SECTION ========== */}
      <div className="flex flex-col px-4 sm:px-12 lg:px-16 xl:px-0 xl:w-312 xl:mx-auto">
        <ReviewsSection />
      </div>

      {/* ========== FINAL CTA SECTION ========== */}
      <FinalCTASection />

      {/* ========== FOOTER ========== */}
      <FooterSection />
    </div>
  );
};
