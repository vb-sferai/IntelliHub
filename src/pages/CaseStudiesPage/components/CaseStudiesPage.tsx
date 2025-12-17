import React, { useEffect } from 'react';
import { CaseStudiesHero } from './CaseStudiesHero';
import { CaseStudiesGrid } from './CaseStudiesGrid';
import { CaseStudiesCTA } from './CaseStudiesCTA';
import { getAllCases } from '../../../data/cases';

/**
 * Страница со всеми кейсами SFER.AI
 * Route: /cases
 */
export const CaseStudiesPage: React.FC = () => {
  const cases = getAllCases();

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    // Set page title
    document.title = 'Кейсы | SFER.AI';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <CaseStudiesHero />

      {/* Main Content - Case Studies Grid */}
      <div className="mx-auto max-w-[1408px] px-4 py-12 sm:px-12 lg:px-16 lg:py-16 xl:px-0">
        <CaseStudiesGrid cases={cases} />

        {cases.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-lg text-gray-500">Кейсы пока не добавлены</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <CaseStudiesCTA />
    </div>
  );
};
