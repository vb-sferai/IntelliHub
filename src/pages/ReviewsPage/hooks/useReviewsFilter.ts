import { useState, useMemo } from 'react';
import type { ProductId, Review } from '../../../data/reviews';
import { getPublishedReviews, getReviewsByProductId } from '../../../data/reviews';

type FilterType = ProductId | 'all';

interface UseReviewsFilterResult {
  /** Текущий активный фильтр */
  activeFilter: FilterType;
  /** Отфильтрованные отзывы */
  filteredReviews: Review[];
  /** Изменить фильтр */
  setFilter: (filter: FilterType) => void;
  /** Общее количество отзывов */
  totalCount: number;
}

/**
 * Хук для фильтрации отзывов по продуктам
 */
export function useReviewsFilter(): UseReviewsFilterResult {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const allReviews = useMemo(() => getPublishedReviews(), []);

  const filteredReviews = useMemo(() => {
    if (activeFilter === 'all') {
      return allReviews;
    }
    return getReviewsByProductId(activeFilter);
  }, [activeFilter, allReviews]);

  return {
    activeFilter,
    filteredReviews,
    setFilter: setActiveFilter,
    totalCount: allReviews.length,
  };
}
