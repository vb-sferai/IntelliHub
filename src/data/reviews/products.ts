import type { Product } from './types';

/**
 * Список продуктов для фильтрации отзывов
 */
export const PRODUCTS: Product[] = [
  { id: 'ai-base', name: 'AI База', nameShort: 'База' },
  { id: 'vibecoding', name: 'Вайбкодинг', nameShort: 'Вайбкодинг' },
  { id: 'agents', name: 'AI Агенты', nameShort: 'Агенты' },
  { id: 'general', name: 'Общие', nameShort: 'Все' },
];
