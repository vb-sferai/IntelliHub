import { z } from 'zod';

// Schema для валидации формы PM вакансии
export const pmApplicationSchema = z.object({
  // Личная информация
  fullName: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  telegram: z.string().min(1, 'Укажите ваш Telegram').regex(/^@?[a-zA-Z0-9_]{5,}$/, 'Неверный формат Telegram'),
  location: z.string().min(2, 'Укажите город и страну'),

  // Опыт и навыки
  experience: z.string().min(50, 'Расскажите подробнее о вашем опыте (минимум 50 символов)'),
  englishLevel: z.string().regex(/^([1-9]|10)$/, 'Выберите уровень от 1 до 10'),
  aiUsage: z.string().min(30, 'Опишите ваш опыт использования AI (минимум 30 символов)'),

  // Проекты
  successProject: z.string().min(50, 'Расскажите подробнее о проекте (минимум 50 символов)'),
  failureProject: z.string().min(50, 'Расскажите подробнее о проекте (минимум 50 символов)'),

  // Мотивация и ожидания
  motivation: z.string().min(30, 'Опишите вашу мотивацию (минимум 30 символов)'),
  expectedCompensation: z.string().min(1, 'Укажите ожидаемую компенсацию'),

  // Дополнительно
  additionalInfo: z.string().optional(),
});

export type PmApplicationFormData = z.infer<typeof pmApplicationSchema>;

// Общий интерфейс для конфигурации вакансий
export interface JobFormConfig {
  jobId: string;
  jobTitle: string;
  googleSheetUrl?: string;
  fields: FormFieldConfig[];
  successMessage: string;
}

export interface FormFieldConfig {
  name: string;
  label: string;
  type: 'text' | 'textarea' | 'radio' | 'select';
  placeholder?: string;
  required?: boolean;
  helperText?: string;
  validation?: z.ZodSchema;
  options?: Array<{ value: string; label: string }>;
  rows?: number; // для textarea
}

// Статус отправки формы
export interface SubmissionStatus {
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage?: string;
}