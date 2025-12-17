import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { CaseStudy } from '../../../data/cases';
import { CaseStudyCard } from './CaseStudyCard';

interface CaseStudiesGridProps {
  cases: CaseStudy[];
}

/**
 * Сетка кейсов с анимацией появления при скролле
 */
export const CaseStudiesGrid: React.FC<CaseStudiesGridProps> = ({ cases }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
      <AnimatePresence mode="popLayout">
        {cases.map((caseStudy, index) => (
          <motion.div
            key={caseStudy.id}
            layout
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.5,
              delay: (index % 2) * 0.15, // Каскадный эффект по колонкам
              ease: [0.25, 0.1, 0.25, 1], // Плавный easing
            }}
          >
            <CaseStudyCard caseStudy={caseStudy} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
