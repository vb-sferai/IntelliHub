/**
 * Централизованное хранилище отзывов
 * @module data/reviews
 */

export type { Review, ProductId, Product } from './types';
export { PRODUCTS } from './products';
export { REVIEWS } from './reviews';

import { REVIEWS } from './reviews';
import { PRODUCTS } from './products';
import type { Review, ProductId } from './types';

/**
 * Получить отзывы для конкретного продукта
 * Включает универсальные отзывы + специфичные для продукта
 */
export function getReviewsForProduct(productId: ProductId): Review[] {
  return REVIEWS.filter(
    (review) =>
      (review.productId === productId || review.isUniversal === true) &&
      review.isPublished !== false
  );
}

/**
 * Получить featured отзывы (для приоритетного показа)
 */
export function getFeaturedReviews(): Review[] {
  return REVIEWS.filter(
    (review) => review.isFeatured === true && review.isPublished !== false
  );
}

/**
 * Получить все опубликованные отзывы
 * (отзывы без isPublished считаются опубликованными по умолчанию)
 */
export function getPublishedReviews(): Review[] {
  return REVIEWS.filter((review) => review.isPublished !== false);
}

/**
 * Получить отзывы по конкретному продукту (без универсальных)
 */
export function getReviewsByProductId(productId: ProductId): Review[] {
  if (productId === 'general') {
    return getPublishedReviews();
  }
  return REVIEWS.filter(
    (review) =>
      review.productId === productId && review.isPublished !== false
  );
}

/**
 * Получить название продукта по ID
 */
export function getProductName(productId: ProductId): string {
  const product = PRODUCTS.find((p) => p.id === productId);
  return product?.name ?? 'Общее';
}

/**
 * Получить короткое название продукта по ID
 */
export function getProductShortName(productId: ProductId): string {
  const product = PRODUCTS.find((p) => p.id === productId);
  return product?.nameShort ?? 'Все';
}

/**
 * Получить общее количество опубликованных отзывов
 */
export function getTotalReviewsCount(): number {
  return getPublishedReviews().length;
}
