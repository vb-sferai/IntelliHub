# Страница mensclub-gifts (AI SEO для Мужского клуба)

## Расположение
- **Исходники**: `public/for/mk/gifts/`
- **Также копия в**: `mensclub-gifts/` (для локальной разработки)
- **URL на проде**: https://ru.sfer.ai/for/mk/gifts/

## Структура файлов
```
public/for/mk/gifts/
├── css/
│   ├── reset.css
│   └── styles.css
├── images/
│   ├── denis-photo.png
│   ├── logo-sfer.svg
│   ├── yandex-logo.svg
│   └── ... (другие логотипы партнёров)
├── js/
│   └── main.js
└── index.html
```

## Контент страницы
- **Тема**: Запись эфира про AI SEO
- **Спикер**: Денис Лазаренков (основатель ESA Digital, топ-10 SEO мира)
- **Видео**: Kinescope embed (https://kinescope.io/embed/a9cmr6WrNzZZJSECKeA9Cn)
- **Дополнительные материалы**: 
  - Статья Semrush про ChatGPT
  - Презентация от Дениса

## Хостинг
- **Платформа**: Timeweb Cloud App
- **Деплой**: Автоматический при пуше в `supreme_main_ru_products`
- **Сборка**: Vite копирует `public/` в `dist/`

## Связанная страница
- **Основная страница МК**: https://ru.sfer.ai/for/mk/
- **Исходники**: `public/for/mk/index.html`

## Стилизация карточки спикера (обновлено 2026-01-20)
- Фото: 80×80px (было 64px, увеличено в 1.25x)
- Имя: 22px (было 18px)
- Должность: 18px (было 14px)
- На мобильных: `<br>` скрыты через CSS, шрифт должности 14px

## Хедер
- Логотип sfer.ai: SVG (`images/logo-sfer.svg`), высота 22px
- Формат: `[лого] × Мужской клуб`

## Коммиты
- `8bf07f8` - feat(mensclub-gifts): добавить лого sfer.ai в хедер и увеличить карточку спикера
- `d0afac5` - feat: добавить страницу gifts в public/for/mk/
- `5b5a8d4` - chore: force redeploy gifts page
