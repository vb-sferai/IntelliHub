# VoiceBotPage Redesign - 26 января 2026

## Изменённые файлы

### 1. `src/pages/VoiceBotPage/data.ts`
- **Hero title**: `"Больше никаких\nголосовых сообщений\nв телеграм"`
- **Hero subtitle**: `"Бот автоматически расшифрует любое голосовое - слушать больше не придётся"`
- Добавлены: `NAV_ITEMS`, `STEPS_NEW`, `COMPARISON_DATA`

### 2. `src/pages/VoiceBotPage/components/VoiceBotPage.tsx`
- Hero секция: 100vh высота, max-w-[1400px], px-6 sm:px-10 lg:px-20
- Заголовок с явными `<br />` переносами
- Размер заголовка: `text-4xl xs:text-5xl sm:text-6xl lg:text-[4.5rem] xl:text-[5rem]`
- Добавлены компоненты: VoiceBotHeader, HeroDemo, HowItWorksSection, ComparisonTable

### 3. `src/pages/VoiceBotPage/components/VoiceBotHeader.tsx`
- **Центрированная навигация**: `absolute left-1/2 -translate-x-1/2`
- Container: `max-w-[1400px]` (совпадает с hero)
- Padding: `px-6 sm:px-10 lg:px-20` (совпадает с hero)
- Nav gap: `gap-6`, font: `text-lg font-medium`
- Logo: `h-7`
- CTA кнопка: `-mr-6` для смещения вправо

### 4. Новые компоненты
- `VoiceBotHeader.tsx` — хедер с якорной навигацией
- `HeroDemo.tsx` — GIF демонстрация бота
- `HowItWorksSection.tsx` — секция "Как это работает" с карточками
- `ComparisonTable.tsx` — таблица сравнения с Telegram Premium
- `VideoPlaceholder.tsx` — плейсхолдер для видео

### 5. Assets
- `assets/demos/demo.gif` — демо-анимация бота

## Ключевые паттерны

### Центрирование хедера
```tsx
<nav className="absolute left-1/2 -translate-x-1/2">
  {/* Nav items */}
</nav>
```

### Выравнивание контейнеров
Hero и Header используют одинаковые значения:
- `max-w-[1400px]`
- `px-6 sm:px-10 lg:px-20`

## Git коммит
```
feat(voice-bot): добавить хедер, демо-GIF, таблицу сравнения и редизайн секций
```
Коммит: `6c89a27` (+ незакоммиченные изменения hero/header)
