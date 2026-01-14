# SferKumarSoloWebPage — Форма регистрации с amoCRM

## Обзор

Страница `/sfer-kumar-solo-web` — независимая копия `/sfer-kumar-solo` с формой регистрации, интегрированной с amoCRM и Google Sheets.

## Архитектура интеграции

```
┌──────────────────┐       ┌─────────────────────┐       ┌──────────────┐
│  Сайт (React)    │ ───▶  │  Google Apps Script │ ───▶  │   amoCRM     │
│  RegistrationForm│       │  (proxy + sheets)   │       │  Unsorted    │
└──────────────────┘       └─────────────────────┘       └──────────────┘
                                    │
                                    ▼
                           ┌──────────────────┐
                           │  Google Sheets   │
                           │  (backup данных) │
                           └──────────────────┘
```

## Ключевые файлы

### Компоненты
- `src/pages/SferKumarSoloWebPage/components/SferKumarSoloWebPage.tsx` — главный компонент страницы
- `src/pages/SferKumarSoloWebPage/components/RegistrationForm/components/RegistrationForm.tsx` — форма регистрации
- `src/pages/SferKumarSoloWebPage/components/Button/components/Button.tsx` — кастомная кнопка

### Хуки
- `src/pages/SferKumarSoloWebPage/hooks/useAmoCRMSubmit.ts` — логика отправки в amoCRM

### Данные
- `src/pages/SferKumarSoloWebPage/data.ts` — контент страницы (HERO, PRICE, FAQ и т.д.)

## Форма регистрации

### Поля
1. **ИМЯ** — обязательное
2. **НОМЕР ТЕЛЕФОНА** — обязательное
3. **НИК В TELEGRAM** — необязательное

### Стили полей (Tailwind)
```css
bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-6 py-4
text-white placeholder:text-white/50 uppercase tracking-wider text-sm
```

### Стили кнопки
```css
bg-white text-black rounded-full h-[60px] px-8 py-5 uppercase tracking-wider text-sm font-semibold
```

### Состояния
- **Обычное** — форма активна
- **Загрузка** — кнопка "ОТПРАВКА...", поля disabled
- **Успех** — сообщение "Заявка отправлена!" + кнопка повторной отправки

## Hero секция

### Layout
- **Desktop (lg+)**: две колонки — текст слева, форма справа
- **Mobile**: одна колонка — текст сверху, форма снизу

### Типографика заголовка (из Figma)
```css
font-size: 80px (xl), 64px (lg), 56px (md), 44px (base)
font-weight: 600
line-height: 100%
letter-spacing: -3.2px (xl)
```

### Типографика подзаголовка
```css
font-size: 20px (lg), 18px (base)
font-weight: 500
line-height: 130%
letter-spacing: -0.6px
```

### Важно: неразрывный пробел
В заголовке используется `\u00A0` между "Vibe" и "Academy:" чтобы они не разделялись при переносе:
```typescript
title: 'Vibe\u00A0Academy:\nнабор открыт\nдо 4 февраля'
```

## Google Apps Script

### URL
```
https://script.google.com/macros/s/AKfycbyhl-7jAFI2qVzC5a6h0IOJaR5rtjdDPWv8A0Cs3Yvy_OlGCupjxcyLmcNc7ObVA0sF/exec
```

### amoCRM домен
`solokumipro.amocrm.ru`

### Google Sheets ID
`1O2CcIr_vllnP076hMlhiZfgBVk7nBTCWE88CCWveAHw`

### Поля amoCRM (ID)
- Telegram (в Leads): `1038321`
- utm_source: `825925`
- utm_medium: `825921`
- utm_campaign: `825923`
- utm_content: `825919`
- utm_term: `825927`

## Роутинг

Маршрут определён в `src/constants/routes.ts`:
```typescript
sferKumarSoloWeb: '/sfer-kumar-solo-web'
```

Страница без Header и Footer (настроено в `Layout.tsx`).
