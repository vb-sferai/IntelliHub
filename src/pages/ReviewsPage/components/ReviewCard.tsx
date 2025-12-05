import React from 'react';
import type { Review } from '../../../data/reviews';
import { getProductName } from '../../../data/reviews';

interface ReviewCardProps {
  review: Review;
  /** Показывать тег продукта (true на /reviews, false на страницах продуктов) */
  showProductTag?: boolean;
}

/**
 * Карточка отзыва для страницы /reviews
 */
export const ReviewCard: React.FC<ReviewCardProps> = ({
  review,
  showProductTag = true,
}) => {
  const { title, text, author, role, avatarUrl, rating = 5, productId } = review;

  // Генерация звёзд рейтинга
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
      ★
    </span>
  ));

  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      {/* Рейтинг */}
      <div className="mb-3 text-lg">{stars}</div>

      {/* Заголовок */}
      <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>

      {/* Текст отзыва */}
      <p className="mb-4 flex-grow text-sm leading-relaxed text-gray-600 whitespace-pre-line">
        {text}
      </p>

      {/* Автор */}
      <div className="mt-auto flex items-center gap-3">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={author}
            className="h-10 w-10 rounded-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-sm font-medium text-gray-600">
            {author.charAt(0).toUpperCase()}
          </div>
        )}
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-900">{author}</span>
          {role && (
            <span className="text-xs text-gray-500">{role}</span>
          )}
        </div>
      </div>

      {/* Тег продукта */}
      {showProductTag && productId !== 'general' && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
            {getProductName(productId)}
          </span>
        </div>
      )}
    </div>
  );
};
