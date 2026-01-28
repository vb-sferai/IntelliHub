# IntelliHub (SFER.AI Website) — Обзор проекта

## Технологии
- **React 19** + **TypeScript 5.8**
- **Vite 7** (сборка)
- **Tailwind CSS v4** (стили)
- **React Router DOM v7** (роутинг)
- **Framer Motion** (анимации)

## Структура веток
- `supreme_main_ru_products` — русская версия (ru.sfer.ai)
- `supreme_main_eng` — английская версия (sfer.ai)

## Ключевые страницы

### Лендинги курсов
| Страница | URL | Особенности |
|----------|-----|-------------|
| SferKumarSoloPage | `/sfer-kumar-solo` | Popup-форма заявки (ApplicationFormPopup) |
| SferKumarSoloWebPage | `/sfer-kumar-solo-web` | Inline-форма (RegistrationForm), независимая копия |

### Другие страницы
- `/` — SupremeMainPage (EN landing)
- `/teams` — MainPage (RU команда)
- `/edu/baza`, `/edu/vibecoding`, `/edu/agents` — страницы воркшопов
- `/privacy-policy` — политика конфиденциальности

## Команды
```bash
npm run dev      # Dev-сервер (localhost:5173)
npm run build    # TypeScript + Vite build
npm run lint     # ESLint
```

## Git workflow
- Коммиты на русском для RU-ветки
- Формат: `feat(scope): описание` / `fix(scope): описание`
- Push в `origin/supreme_main_ru_products`
