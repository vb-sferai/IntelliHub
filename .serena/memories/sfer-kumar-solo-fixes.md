# SferKumarSolo Pages - Исправления (Январь 2026)

## Страницы
- `/sfer-kumar-solo` — SferKumarSoloPage
- `/sfer-kumar-solo-web` — SferKumarSoloWebPage (независимая копия)

## Исправление сетки модулей программы

### Проблема
Модули программы отображались в неправильном порядке — контент тёк сверху вниз по колонкам (газетный стиль), вместо слева направо по рядам.

### Причина
Использовался CSS `columns-*` вместо CSS Grid:
```css
/* Было (неправильно) */
columns-1 md:columns-2 xl:columns-3

/* Стало (правильно) */
grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3
```

### Файлы
- `src/pages/SferKumarSoloPage/components/SferKumarSoloPage.tsx` (строка ~222)
- `src/pages/SferKumarSoloWebPage/components/SferKumarSoloWebPage.tsx` (строка ~145)

### Разница между columns и grid
- `columns-*` — контент течёт вертикально (masonry/газетный стиль)
- `grid grid-cols-*` — элементы идут по рядам слева направо

## Обновление количества занятий

### Изменение
`18 life-занятий по 2 часа` → `21 life-занятий по 2 часа`

### Файлы
- `src/pages/SferKumarSoloPage/data.ts` — LIFE_PROGRAM_FEATURES
- `src/pages/SferKumarSoloWebPage/data.ts` — LIFE_PROGRAM_FEATURES и PRICE list

## Коммит
```
fix(sfer-kumar-solo): исправить сетку модулей и обновить количество занятий
```
