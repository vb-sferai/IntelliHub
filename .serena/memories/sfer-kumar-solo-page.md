# Страница SFER Kumar&Solo (Vibe Academy)

## Статус: Блок 1 ГОТОВ — ожидает проверки

## Текущий шаг
✅ **Блок 1 ГОТОВ**: Header (SFER × KUMAR&SOLO, размер ×1.5, выравнивание mt-[6px]) + Hero (статичный фон).
Следующее: Features секция (Блок 2).

## Основная информация
- **URL:** `/sfer-kumar-solo`
- **Название:** Vibe Academy
- **Описание:** 2-месячная программа обучения AI-first специалистов
- **Figma:** https://www.figma.com/design/lNegjZpesOMTVka5ZZ3VAM/Untitled?node-id=2-4464

## Решения
- Header: isProductPage режим (как Vibecoding) — навигация по секциям, без CTA кнопки
- Отзывы: Из vibecoding (getReviewsForProduct)
- Ассеты: Placeholder → заменить позже

## Структура
```
src/pages/SferKumarSoloPage/
├── components/
│   ├── SferKumarSoloPage.tsx
│   ├── HeroSection.tsx
│   ├── PartnersLogos.tsx
│   ├── AIFirstSection.tsx
│   ├── FeaturesSection.tsx
│   ├── ProgramSection.tsx
│   ├── CasesSection.tsx
│   ├── SpeakersSection.tsx
│   ├── PricingSection.tsx
│   ├── CTASection.tsx
│   └── ContactsSection.tsx
├── assets/
├── data.ts
└── index.ts
```

## Тарифы
| Тариф | Цена | В месяц |
|-------|------|---------|
| База | 145 770 ₽ | 4 999 ₽/мес |
| Pro | 199 770 ₽ | 16 647 ₽/мес |
| VIP | 398 770 ₽ | 33 230 ₽/мес |

## Блоки реализации
1. Scaffolding + Header + Hero
2. AIFirst + Features
3. Программа курса
4. Кейсы + Спикеры
5. Отзывы (ReviewsGrid)
6. Pricing
7. FAQ + CTA + Контакты

## План файл
`/Users/vadim/.claude/plans/imperative-twirling-melody.md`
