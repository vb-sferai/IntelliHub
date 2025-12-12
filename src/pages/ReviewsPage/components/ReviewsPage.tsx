import React, { useEffect } from 'react';
import { ReviewsHero } from './ReviewsHero';
import { ReviewsFilter } from './ReviewsFilter';
import { ReviewsGrid } from './ReviewsGrid';
import { ReviewsCTA } from './ReviewsCTA';
import { useReviewsFilter } from '../hooks/useReviewsFilter';

/**
 * Страница отзывов /reviews
 *
 * Отображает все отзывы с возможностью фильтрации по продуктам.
 * Использует централизованное хранилище данных из src/data/reviews/
 */
export const ReviewsPage: React.FC = () => {
  const { activeFilter, filteredReviews, setFilter } = useReviewsFilter();

  // Scroll to top on mount + SEO title
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Отзывы | SFER.AI';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ReviewsHero />

      {/* Main Content */}
      <div className="mx-auto max-w-[1408px] px-4 py-12 sm:px-12 lg:px-16 xl:px-0">
        {/* Filter Tabs */}
        <div className="mb-10">
          <ReviewsFilter activeFilter={activeFilter} onFilterChange={setFilter} />
        </div>

        {/* Reviews Grid */}
        <ReviewsGrid reviews={filteredReviews} showProductTag={true} />

        {/* Empty State */}
        {filteredReviews.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-lg text-gray-500">
              Отзывов по выбранному фильтру пока нет
            </p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <ReviewsCTA />
    </div>
  );
};
