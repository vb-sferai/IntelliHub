import { z } from 'zod';

// Типы полей формы
// 'info' - информационный экран без поля ввода (только текст и кнопка "Далее")
export type FieldType = 'text' | 'email' | 'textarea' | 'select' | 'phone' | 'info';

// Конфигурация одного шага/поля
export interface StepConfig {
  id: string;
  type: FieldType;
  question: string;
  description?: string;
  placeholder?: string;
  required?: boolean;
  options?: string[]; // Для select
  validation?: z.ZodSchema;
  buttonText?: string; // Кастомный текст кнопки (например, "Понятно" для info-шагов)
}

// Конфигурация приветственного экрана
export interface WelcomeScreenConfig {
  title: string;
  description?: string;
  buttonText?: string;
}

// Конфигурация финального экрана
export interface ThankYouScreenConfig {
  title: string;
  description?: string;
  /** URL для автоматического редиректа после показа экрана */
  redirectUrl?: string;
  /** Задержка перед редиректом в мс (по умолчанию 2000) */
  redirectDelay?: number;
}

// Тема формы
export interface ThemeConfig {
  backgroundColor?: string;
  primaryColor?: string;
  textColor?: string;
  questionFontSize?: string;
}

// Данные формы
export type FormData = Record<string, string>;

// Конфигурация Google Sheets интеграции
export interface GoogleSheetsConfig {
  /**
   * URL Google Apps Script Web App
   * Получается после деплоя скрипта из docs/google-apps-script/forms-to-sheets.js
   */
  webhookUrl: string;
  /**
   * Название формы для отображения в таблице (опционально)
   * Если не указано, используется id формы
   */
  formTitle?: string;
}

// Главная конфигурация формы
export interface TypeformConfig {
  id: string;
  /**
   * Название формы (для Google Sheets и аналитики)
   */
  title?: string;
  welcomeScreen?: WelcomeScreenConfig;
  thankYouScreen?: ThankYouScreenConfig;
  steps: StepConfig[];
  /**
   * Кастомный обработчик отправки формы
   * Вызывается после отправки в Google Sheets (если настроено)
   */
  onSubmit?: (data: FormData) => Promise<void>;
  /**
   * Конфигурация записи в Google Sheets
   * Если указано, данные автоматически отправляются в таблицу
   */
  googleSheets?: GoogleSheetsConfig;
  theme?: ThemeConfig;
}

// Состояние формы
export interface TypeformState {
  currentStep: number; // -1 = welcome, 0..n = steps, n+1 = thank you
  formData: FormData;
  isSubmitting: boolean;
  isComplete: boolean;
  errors: Record<string, string>;
}

// Экшены для управления формой
export type TypeformAction =
  | { type: 'START' }
  | { type: 'NEXT' }
  | { type: 'PREV' }
  | { type: 'SET_VALUE'; stepId: string; value: string }
  | { type: 'SET_ERROR'; stepId: string; error: string }
  | { type: 'CLEAR_ERROR'; stepId: string }
  | { type: 'SUBMIT_START' }
  | { type: 'SUBMIT_SUCCESS' }
  | { type: 'SUBMIT_ERROR' }
  | { type: 'RESET' };
