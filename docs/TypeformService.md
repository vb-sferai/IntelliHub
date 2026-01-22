# TypeformService — Сервис форм

Сервис для создания форм в стиле Typeform с пошаговыми переходами и анимациями.

## Быстрый старт

```tsx
import { TypeformContainer } from '../services/TypeformService';
import type { TypeformConfig } from '../services/TypeformService';

const myFormConfig: TypeformConfig = {
  id: 'my-form',
  title: 'Моя форма',

  welcomeScreen: {
    title: 'Добро пожаловать!',
    description: 'Ответьте на несколько вопросов',
    buttonText: 'Начать',
  },

  thankYouScreen: {
    title: 'Спасибо!',
    description: 'Мы свяжемся с вами.',
  },

  steps: [
    {
      id: 'name',
      type: 'text',
      question: 'Как вас зовут?',
      required: true,
    },
    {
      id: 'email',
      type: 'email',
      question: 'Ваш email?',
      required: true,
    },
  ],
};

export function MyFormPage() {
  return <TypeformContainer config={myFormConfig} />;
}
```

## Типы полей

| Тип | Описание | Особенности |
|-----|----------|-------------|
| `text` | Текстовое поле | Enter для продолжения |
| `email` | Email поле | Автоматическая валидация email |
| `textarea` | Многострочное поле | Cmd+Enter для продолжения |
| `select` | Выбор из списка | Клавиши A-Z, стрелки, автопереход |
| `phone` | Телефон | Аналог text |

## Конфигурация шага (StepConfig)

```typescript
interface StepConfig {
  id: string;           // Уникальный ID поля (будет ключом в formData)
  type: FieldType;      // Тип поля
  question: string;     // Текст вопроса
  description?: string; // Подсказка под вопросом
  placeholder?: string; // Placeholder для input
  required?: boolean;   // Обязательное поле
  options?: string[];   // Варианты для select
  validation?: ZodSchema; // Кастомная валидация
}
```

## Интеграция с Google Sheets

### Шаг 1: Настройка Google Apps Script

1. Откройте https://script.google.com/
2. Создайте новый проект
3. Скопируйте код из `docs/google-apps-script/forms-to-sheets.js`
4. Замените `FOLDER_ID` на ID вашей папки в Google Drive
5. Разверните как Web App:
   - Deploy → New deployment
   - Type: Web app
   - Execute as: Me
   - Who has access: Anyone
6. Скопируйте URL деплоя

### Шаг 2: Добавьте в конфигурацию формы

```typescript
const myFormConfig: TypeformConfig = {
  id: 'feedback-form',
  title: 'Форма обратной связи',

  // Добавьте эту секцию
  googleSheets: {
    webhookUrl: 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec',
    formTitle: 'Обратная связь', // Опционально
  },

  steps: [
    // ...
  ],
};
```

### Что происходит автоматически

1. При первой отправке создаётся новая Google таблица
2. Таблица называется `[Form] {formTitle}`
3. Заголовки столбцов создаются из ID полей формы
4. Добавляется колонка `Timestamp`
5. Каждая отправка — новая строка

### Структура папки в Google Drive

```
📁 Ваша папка (FOLDER_ID)
├── 📄 _forms_registry        # Реестр всех форм (JSON)
├── 📊 [Form] Обратная связь  # Таблица формы 1
├── 📊 [Form] Заявка          # Таблица формы 2
└── ...
```

## Кастомный обработчик

```typescript
const myFormConfig: TypeformConfig = {
  id: 'my-form',

  // Вызывается после отправки в Google Sheets
  onSubmit: async (data) => {
    // Отправка в CRM
    await fetch('/api/crm', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    // Отправка в Telegram
    await fetch('/api/telegram-notify', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  steps: [/* ... */],
};
```

## Валидация с Zod

```typescript
import { z } from 'zod';

const steps: StepConfig[] = [
  {
    id: 'phone',
    type: 'text',
    question: 'Ваш телефон',
    validation: z.string().regex(
      /^\+7\d{10}$/,
      'Введите телефон в формате +7XXXXXXXXXX'
    ),
  },
  {
    id: 'age',
    type: 'text',
    question: 'Ваш возраст',
    validation: z.string().transform(Number).pipe(
      z.number().min(18, 'Минимальный возраст 18 лет')
    ),
  },
];
```

## Темизация

```typescript
const myFormConfig: TypeformConfig = {
  id: 'my-form',

  theme: {
    backgroundColor: '#f5f5f5',
    primaryColor: '#005EE0',
    textColor: '#333333',
  },

  steps: [/* ... */],
};
```

## Добавление новой формы

1. Создайте папку `src/pages/MyFormPage/`
2. Создайте файл с конфигурацией формы
3. Добавьте роут в `src/constants/routes.ts`
4. Добавьте Route в `src/modules/App/components/Pages.tsx`

### Пример

```typescript
// src/pages/FeedbackFormPage/components/FeedbackFormPage.tsx
import { TypeformContainer, TypeformConfig } from '../../../services/TypeformService';

const feedbackFormConfig: TypeformConfig = {
  id: 'feedback',
  title: 'Обратная связь',
  googleSheets: {
    webhookUrl: process.env.VITE_GOOGLE_SHEETS_WEBHOOK || '',
  },
  welcomeScreen: {
    title: 'Оставьте отзыв',
  },
  thankYouScreen: {
    title: 'Спасибо за отзыв!',
  },
  steps: [
    { id: 'name', type: 'text', question: 'Ваше имя', required: true },
    { id: 'email', type: 'email', question: 'Email', required: true },
    { id: 'feedback', type: 'textarea', question: 'Ваш отзыв', required: true },
  ],
};

export function FeedbackFormPage() {
  return <TypeformContainer config={feedbackFormConfig} />;
}
```

## Клавиатурная навигация

- **Enter** — следующий шаг (кроме textarea)
- **Cmd/Ctrl + Enter** — следующий шаг (в textarea)
- **A-Z** — быстрый выбор в select
- **↑↓** — навигация в select

## API компонентов

Для продвинутого использования доступны отдельные компоненты:

```typescript
import {
  useTypeform,        // Хук состояния
  WelcomeScreen,      // Приветственный экран
  ThankYouScreen,     // Финальный экран
  StepScreen,         // Экран вопроса
  ProgressBar,        // Прогресс-бар
  TextField,          // Текстовое поле
  EmailField,         // Email поле
  TextareaField,      // Многострочное поле
  SelectField,        // Выбор из списка
} from '../services/TypeformService';
```
