/**
 * Централизованные типы для системы отзывов
 * @module data/reviews/types
 */

/**
 * Идентификаторы продуктов для категоризации отзывов
 */
export type ProductId =
  | 'ai-base' // AI База (3-дневный воркшоп)
  | 'vibecoding' // Вайбкодинг
  | 'agents' // AI Агенты
  | 'edu' // Обучение
  | 'general'; // Общие отзывы о компании

/**
 * Структура одного отзыва
 */
export interface Review {
  /** Уникальный идентификатор отзыва */
  id: string;

  /** Заголовок отзыва (краткая суть) */
  title: string;

  /** Полный текст отзыва */
  text: string;

  /** Имя автора */
  author: string;

  /** Должность/роль автора (опционально) */
  role?: string;

  /** URL аватара автора (опционально, fallback на placeholder) */
  avatarUrl?: string;

  /** Оценка в звёздах (1-5, по умолчанию 5) */
  rating?: 1 | 2 | 3 | 4 | 5;

  /** К какому продукту относится отзыв */
  productId: ProductId;

  /** Можно отображать на всех страницах продуктов */
  isUniversal?: boolean;

  /** Выделенный отзыв (featured) для приоритетного показа */
  isFeatured?: boolean;

  /** Опубликован ли отзыв (false = черновик, по умолчанию true) */
  isPublished?: boolean;
}

/**
 * Структура продукта для фильтрации
 */
export interface Product {
  /** Уникальный идентификатор продукта */
  id: ProductId;

  /** Полное название продукта */
  name: string;

  /** Короткое название для табов/кнопок */
  nameShort: string;
}
