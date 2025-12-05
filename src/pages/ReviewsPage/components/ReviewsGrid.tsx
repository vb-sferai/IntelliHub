import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Review } from '../../../data/reviews';
import { ReviewCard } from './ReviewCard';

interface ReviewsGridProps {
  reviews: Review[];
  showProductTag?: boolean;
}

/**
 * Сетка отзывов с анимацией появления при скролле
 */
export const ReviewsGrid: React.FC<ReviewsGridProps> = ({
  reviews,
  showProductTag = true,
}) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            layout
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.5,
              delay: (index % 3) * 0.1, // Каскадный эффект по колонкам
              ease: [0.25, 0.1, 0.25, 1], // Плавный easing
            }}
          >
            <ReviewCard review={review} showProductTag={showProductTag} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
