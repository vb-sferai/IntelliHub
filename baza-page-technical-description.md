# Техническое описание страницы `/baza`

## Общая информация

**URL:** `http://localhost:5173/baza`
**Маршрут:** `/baza` (определен в `src/constants/routes.ts` как `base`)
**Основной компонент:** `BasePage` (`src/pages/BasePage/components/BasePage.tsx`)

## Архитектура и маршрутизация

### Структура маршрутизации

```
App.tsx (BrowserRouter)
  └─ Layout.tsx
      ├─ Header (условно скрыт на некоторых страницах)
      ├─ Pages.tsx (Routes)
      │   └─ Route path="/baza" → BasePage
      └─ Footer (условно скрыт на некоторых страницах)
```

### Файлы маршрутизации

- **`src/constants/routes.ts`** - константы маршрутов
- **`src/modules/App/components/Pages.tsx`** - определение маршрутов через React Router
- **`src/modules/App/components/Layout.tsx`** - layout с Header и Footer

## Компоненты страницы BasePage

### Основной компонент: BasePage

**Файл:** `src/pages/BasePage/components/BasePage.tsx` (188 строк)

#### Структура страницы:

1. **Hero секция** (строки 23-35)
   - Градиентный фон с использованием `MeshGradient1` от `@paper-design/shaders-react`
   - Заголовок: "AI-база: как эффективно использовать ИИ в работе и жизни"
   - Кнопка CTA: "Прокачаться"
   - Абсолютное позиционирование контента поверх градиента

2. **Статистика** (строки 36-48)
   - Два блока с метриками:
     - Средняя оценка: 9.4/10
     - Количество участников: 2500+

3. **Программа воркшопа** (строки 49-58)
   - Title: "3 онлайн-встречи по 2,5 часа"
   - Carousel с `CONTENT` данными (3 карточки)
   - Использует `CarouselContentItem`

4. **Видео секция** (строки 59-70)
   - Title: "Адаптируем каждый воркшоп..."
   - HTML5 видео-плеер с файлом `BaseVideo`

5. **Автор программы** (строки 71-102)
   - Информация о Кирилле Гурбанове
   - Фото с градиентным фоном (адаптивное для мобильных и десктопа)
   - Background: `#F7F7F5`

6. **Целевая аудитория** (строки 103-112)
   - Title: "Кому подойдёт воркшоп"
   - Carousel с `AUDIENCE` данными (3 карточки)

7. **Отзывы** (строки 113-120)
   - Carousel с заголовком "Что говорят участники"
   - `REVIEWS` данные (15 отзывов)
   - Использует `CarouselReviewsItem`

8. **Цены** (строки 121-128)
   - Carousel с заголовком "Сколько стоит?"
   - `PRICE` данные (2 тарифа)
   - Использует `CarouselPriceItem`

9. **FAQ** (строки 129-132)
   - Компонент `Questions` с аккордеоном

10. **Призыв к действию (CTA)** (строки 133-158)
    - Градиентный фон
    - Две кнопки: "Участвовать вживую" и "Купить запись"
    - Адаптивная вёрстка (колонки на мобильных, строка на десктопе)

11. **Контакты** (строки 159-181)
    - Две карточки: Телеграм и Email
    - Background: `#F7F7F5`

### Дочерние компоненты

#### 1. Carousel
**Файл:** `src/pages/BasePage/components/Carousel/components/Carousel.tsx` (151 строка)

**Функционал:**
- Адаптивная карусель с поддержкой drag-and-drop
- Использует `framer-motion` для анимаций
- Навигация стрелками (на десктопе)
- Автоматический расчет количества видимых карточек
- Responsive дизайн с breakpoints

**Props:**
- `id?: string` - ID для якорных ссылок
- `title?: string` - Заголовок карусели
- `cardWidth: number` - Ширина карточки
- `cardsLength: number` - Количество карточек
- `children` - Содержимое (карточки)

**Технические особенности:**
- `useMotionValue` для отслеживания позиции drag
- `dragConstraints` для ограничения перетаскивания
- Динамический расчет `maxIndex` на основе видимых карточек
- Отдельные `motion.div` для мобильных и десктопных версий

#### 2. CarouselContentItem
**Файл:** `src/pages/BasePage/components/CarouselContentItem.tsx` (29 строк)

**Props:**
- `iconUrl: string` - URL иконки
- `title: string` - Заголовок
- `text: string` - Описание
- `list: string[]` - Список пунктов

**Стилизация:**
- Background: `#F7F7F5`
- Минимальная высота: 320px (xs: 360px, lg: 520px)
- Адаптивные размеры текста

#### 3. CarouselPriceItem
**Файл:** `src/pages/BasePage/components/CarouselPriceItem.tsx` (45 строк)

**Props:**
- `title: string` - Название тарифа
- `price: string` - Цена
- `forMonth: string` - Цена за месяц
- `list: string[]` - Список преимуществ
- `buttonText: string` - Текст кнопки
- `link: string` - Ссылка для кнопки

**Стилизация:**
- Background: `#F7F7F5`
- Минимальная высота: 320px (xs: 360px, lg: 592px)
- Иконки чекмарков для списка

#### 4. CarouselReviewsItem
**Файл:** `src/pages/BasePage/components/CarouselReviewsItem.tsx` (42 строки)

**Props:**
- `title: string` - Заголовок отзыва
- `text: string` - Текст отзыва
- `author: string` - Имя автора
- `role?: string` - Должность автора (опционально)
- `avatarUrl?: string` - URL аватара (опционально, fallback: `AvatarPlaceholder`)

**Стилизация:**
- Background: `#F7F7F5`
- Звёздочки в заголовке
- Круглый аватар (48x48px)

### Общие компоненты

#### 1. Button
**Файл:** `src/components/Button/components/Button.tsx` (34 строки)

**Props:**
- `color: 'white' | 'black' | 'blur' | 'blue'` - Цветовая схема
- `children: ReactElement | string` - Содержимое
- `isInHeader?: boolean` - Для размеров в хедере
- `fullWidth?: boolean` - Во всю ширину
- `link?: string` - URL для открытия
- `width?: string` - Кастомная ширина

**Функционал:**
- Открывает ссылки в новой вкладке через `window.open`
- Default ссылка: `https://calendly.com/as-sfer/30min`
- Использует `noopener,noreferrer` для безопасности

**Цвета:**
- `white`: белый фон, черный текст
- `black`: черный фон, белый текст
- `blue`: `#005EE0` фон, белый текст
- `blur`: `#FFFFFF33` с backdrop-blur, белый текст

#### 2. Title
**Файл:** `src/components/Title/components/Title.tsx` (12 строк)

**Props:**
- `title: string` - Заголовок
- `subTitle?: string` - Подзаголовок (опционально)

**Стилизация:**
- Центрирование на больших экранах
- Адаптивные размеры шрифтов
- Максимальная ширина: 768px

#### 3. Questions (FAQ)
**Файл:** `src/components/FAQ/components/Questions.tsx` (33 строки)

**Содержит:** 4 вопроса с ответами

**Подкомпонент:** `QuestionBlockItem`
**Файл:** `src/components/FAQ/components/QuestionBlockItem.tsx` (63 строки)

**Props:**
- `question: string`
- `answer: string`
- `isLast?: boolean` - для скрытия нижней границы

**Функционал:**
- Аккордеон с анимацией открытия/закрытия
- Использует `framer-motion` для плавных анимаций
- Автоматический расчет высоты контента через `useRef`
- Иконки плюс/минус с ротацией

## Данные страницы

**Файл:** `src/pages/BasePage/data.ts` (213 строк)

### 1. CONTENT (3 элемента)
Программа воркшопа:
- "Узнать базу"
- "Настроить AI-приложения под себя"
- "Стать AI-Native"

### 2. AUDIENCE (3 элемента)
Целевая аудитория:
- "Новички"
- "Любители"
- "Специалисты, предприниматели, креаторы"

### 3. REVIEWS (15 элементов)
Отзывы участников с фотографиями и должностями

### 4. PRICE (2 элемента)
Тарифы:
- "Живое участие" - 24 990 ₽
- "Только запись" - 19 990 ₽

## Технологический стек

### Основные зависимости:

1. **React 19.1.1** - UI библиотека
2. **React Router DOM 7.8.2** - Маршрутизация
3. **Framer Motion 12.23.12** - Анимации
   - Используется в: Carousel, QuestionBlockItem
   - Функции: drag-and-drop, плавные переходы, rotate анимации

4. **@paper-design/shaders-react 0.0.61** - Градиентные шейдеры
   - Компонент: `MeshGradient1`
   - Параметры: speed, colors, distortion, swirl, grainMixer, frame

5. **Tailwind CSS 4.1.12** - Utility-first CSS фреймворк
6. **Vite 7.1.2** - Build tool и dev server

### Dev зависимости:

- TypeScript 5.8.3
- ESLint + Prettier для code quality
- Autoprefixer для CSS

## Стилизация

### Tailwind CSS конфигурация

**Custom цвета:**
```css
--color-primary-100: oklch(0.7319 0.1856 52.89)
--color-primary-200: oklch(0.656 0.2126 38.09)
--color-gray-200: oklch(0.9271 0.0075 260.73)
--color-gray-400: oklch(0.7565 0.0048 258.33)
--color-gray-500: oklch(0.6167 0 0)
--color-gray-600: oklch(0.5138 0 0)
--color-gray-700: oklch(0.4422 0.0355 257.79)
```

**Custom шрифты:**
- `--font-geist: "Geist Mono", monospace`
- Google Fonts: Geist Mono, Montserrat

**Breakpoints:**
- xs: 480px
- sm: 768px
- md: 1024px
- lg: 1280px
- xl: 1440px
- 2xl: 1680px

### Цветовая палитра страницы /baza

- **Акцентный синий:** `#005EE0` (используется для цифр статистики)
- **Фон карточек:** `#F7F7F5` (светло-серый)
- **Градиент:** `['#80C2FF', '#061346', '#3A83E8']` (синие оттенки)

### Inline стили

В `BasePage.tsx` определен custom класс:
```css
.base-page-primary {
    color: #005EE0;
}
```

## Особенности реализации

### 1. Адаптивный дизайн
- Mobile-first подход
- Breakpoints для всех секций
- Адаптивные шрифты и spacing
- Разная компоновка для мобильных и десктопа

### 2. Производительность
- Lazy loading изображений (`loading="lazy"`)
- Video с `preload="metadata"`
- Оптимизированные анимации через GPU (transform, opacity)

### 3. Доступность
- `aria-label` для кнопок навигации карусели
- Семантичные HTML5 теги
- Alt атрибуты для изображений
- `noopener,noreferrer` для внешних ссылок

### 4. Анимации
- Smooth drag-and-drop в карусели
- Spring анимации с настраиваемыми параметрами
- Rotate анимация для иконок FAQ
- Fade in/out для контента аккордеона

### 5. Градиентные эффекты
- WebGL шейдеры через `@paper-design/shaders-react`
- Одинаковые параметры для консистентности
- Абсолютное позиционирование для наложения контента

## Ассеты

### Иконки:
- `email-blue.svg`
- `cursor-blue.svg`
- `pen.svg`
- `bot.svg`
- `settings.svg`
- `people.svg`
- `favorite.svg` (heart)
- `flash.svg`
- `chevron-right.svg`
- `chevron-left.svg`
- `plus-circle.svg`
- `minus-circle.svg`
- `checkmark.svg`
- `stars.svg`

### Изображения:
- `kirill.png` - фото автора
- 9 фотографий для отзывов (в папке `reviews/`)
- `avatar-placeholder.svg` - fallback для аватаров

### Видео:
- `basevideo.mp4` - демонстрационное видео

## Внешние ссылки

1. **Живое участие:** `https://kirillgurbanov.getcourse.ru/3day_workshop_ai`
2. **Запись воркшопа:** `https://kirillgurbanov.getcourse.ru/3day_workshop_ai_rec`
3. **Телеграм:** `https://t.me/kgurbanov`
4. **Email:** `human@sfer.ai`

## Навигация по странице

Якорные ссылки (через ID):
- `#programs` - программа воркшопа
- `#speaker` - автор программы
- `#reviews` - отзывы
- `#price` - цены
- `#faq` - часто задаваемые вопросы
- `#contacts` - контакты

## Рекомендации по развитию

### Потенциальные улучшения:

1. **SEO оптимизация:**
   - Добавить meta теги (title, description, og:image)
   - Структурированные данные (Schema.org)
   - Sitemap

2. **Производительность:**
   - Lazy load компонентов через React.lazy()
   - Оптимизация изображений (WebP формат)
   - Code splitting

3. **Аналитика:**
   - Google Analytics / Яндекс.Метрика
   - Event tracking для кнопок и карусели

4. **UX улучшения:**
   - Skeleton loaders для контента
   - Error boundaries
   - Loading states

5. **A/B тестирование:**
   - Разные варианты CTA кнопок
   - Тестирование цен и предложений
