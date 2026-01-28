# Лендинг mensclub-gifts (AI SEO для Мужского клуба)

## Расположение
**Путь**: `/Users/vadim/Desktop/Projects/IntelliHub/mensclub-gifts/`
**URL для деплоя**: `ru.sfer.ai/for/mk/gifts`

## Структура проекта
```
mensclub-gifts/
├── index.html              # Главная страница
├── css/
│   ├── reset.css           # CSS reset (из mensclub-main)
│   └── styles.css          # Стили с дизайн-токенами
├── js/
│   └── main.js             # Smooth scroll + analytics
└── images/
    ├── favicon.svg
    ├── denis-photo.png     # Фото спикера Дениса Лазаренкова
    ├── logo-epic-growth.svg
    ├── logo-haom.svg
    ├── logo-smstretching.svg
    ├── nubes-logo.svg
    └── yandex-logo.svg
```

## Секции страницы
1. **Header** — логотип "sfer.ai × Мужской клуб"
2. **Hero** — заголовок "Всё, что вы хотели знать про AI SEO" (#6DD0FF) + спикер Денис Лазаренков (ESA Digital)
3. **Video** — Kinescope embed (`a9cmr6WrNzZZJSECKeA9Cn`)
4. **Дополнительные материалы** — 2 карточки:
   - Статья Semrush (https://www.semrush.com/blog/chatgpt-search-insights/)
   - Презентация от Дениса (Google Docs)
5. **Solution** — 4 карточки с преимуществами программы МК
6. **About sfer.ai** — статистика (2500+, 32%, 9.4/10, 96%)
7. **Partners marquee** — логотипы партнёров
8. **Final CTA** — кнопки "Узнать о программе" + "Задать вопрос"
9. **Footer**

## Дизайн-токены (из Figma)
- Background: `#000000`
- Primary accent: `#6DD0FF`
- Text primary: `#FFFFFF`
- Text secondary: `#AEB0B3`
- Card background: `#0E1218`
- Card border: `#22242B`
- Card border highlight: `#0FA4E9`
- Button blue: `#005EE0`

## Ключевые ссылки
- Видео Kinescope: `https://kinescope.io/embed/a9cmr6WrNzZZJSECKeA9Cn`
- Статья Semrush: `https://www.semrush.com/blog/chatgpt-search-insights/`
- Презентация: `https://docs.google.com/presentation/d/1po9_tKTzpP3B8-w5ohgri1p-vqef2qviU5qm1bKq6E8/`

## Локальный запуск
```bash
cd /Users/vadim/Desktop/Projects/IntelliHub/mensclub-gifts
python3 -m http.server 8001
# Открыть http://localhost:8001/
```

## История изменений
- Создан на основе структуры mensclub-main
- Адаптированы цвета под Figma-макет
- Добавлено фото Дениса Лазаренкова
- Удалены секции: Description (AI-системы), Screenshots (Ключевые слайды)
