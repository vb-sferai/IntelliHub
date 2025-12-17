export type { CaseStudy, CaseResult } from './types';
export { CASES } from './cases';

import { CASES } from './cases';
import type { CaseStudy } from './types';

/**
 * Получить все опубликованные кейсы
 */
export function getAllCases(): CaseStudy[] {
  return CASES;
}

/**
 * Получить кейс по id
 */
export function getCaseById(id: string): CaseStudy | undefined {
  return CASES.find((c) => c.id === id);
}

/**
 * Получить общее количество кейсов
 */
export function getCasesCount(): number {
  return CASES.length;
}
