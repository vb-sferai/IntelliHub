import { useEffect } from 'react';
import { AutomationsHeader } from './AutomationsHeader';
import { HeroSection } from './HeroSection';
import { ServicesSection } from './ServicesSection';
import { RoadmapSection } from './RoadmapSection';
import { CasesSection } from './CasesSection';

/**
 * AutomationsPage - страница B2B услуг по AI-автоматизации
 *
 * Светлая тема (bg-[#f9f7f4]), синие акценты, кастомный header.
 */
export const AutomationsPage = () => {
    useEffect(() => {
        document.title = 'AI Автоматизации | SFER.AI';
    }, []);

    return (
        <div className="min-h-screen">
            <AutomationsHeader />
            <HeroSection />
            <ServicesSection />
            <RoadmapSection />
            <CasesSection />
        </div>
    );
};
