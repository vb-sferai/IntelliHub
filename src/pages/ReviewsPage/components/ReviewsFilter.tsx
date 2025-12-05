import React from 'react';
import type { ProductId } from '../../../data/reviews';
import { PRODUCTS } from '../../../data/reviews';

interface ReviewsFilterProps {
  activeFilter: ProductId | 'all';
  onFilterChange: (filter: ProductId | 'all') => void;
}

/**
 * Фильтр отзывов по продуктам (табы)
 */
export const ReviewsFilter: React.FC<ReviewsFilterProps> = ({
  activeFilter,
  onFilterChange,
}) => {
  const filters: Array<{ id: ProductId | 'all'; label: string }> = [
    { id: 'all', label: 'Все' },
    ...PRODUCTS.filter((p) => p.id !== 'general').map((p) => ({
      id: p.id,
      label: p.nameShort,
    })),
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 px-4 sm:gap-3">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors sm:px-6 sm:text-base ${
            activeFilter === filter.id
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};
