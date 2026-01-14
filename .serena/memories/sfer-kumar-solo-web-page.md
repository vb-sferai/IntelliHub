# Страница SferKumarSoloWebPage

## Основная информация
- **URL:** `/sfer-kumar-solo-web`
- **Назначение:** Упрощённая landing page с формой регистрации для веб-трафика
- **Статус:** ✅ Активна (деплой на ru.sfer.ai)

## Структура файлов
```
src/pages/SferKumarSoloWebPage/
├── components/
│   ├── SferKumarSoloWebPage.tsx    # Главный компонент
│   ├── SuccessStoriesSection.tsx   # Только цитата + видео (упрощён)
│   └── RegistrationForm/           # Форма регистрации
│       └── components/
│           └── RegistrationForm.tsx
├── hooks/
│   └── useAmoCRMSubmit.ts          # Хук отправки в AmoCRM (с UTM fallback)
├── assets/                         # Изображения и иконки
├── data.ts                         # Данные страницы
└── index.ts
```

## Удалённые блоки (январь 2026)
- ❌ Партнёры (Работаем с: Yandex, Sber, T-Bank, Avito, 500 Global, Techstars)
- ❌ COURSE_STATS (2 месяца, 36 часов, 40+ часов)
- ❌ AGI SECTION (Осталось 4–5 лет до AGI)
- ❌ LIFE PROGRAM FEATURES (Самые актуальные инструменты за счёт life-программы)
- ❌ PRICING (Сколько стоит? — 3 тарифа)
- ❌ FAQ (аккордеон с вопросами)
- ❌ CONTACTS (Задать вопрос — Телеграм + Почта)

## Текущая структура страницы
1. **HERO** — заголовок + форма регистрации
2. **AI-FIRST** — Быть AI-first — это: (3 карточки)
3. **WHO NEEDS CODING** — Мне нужно уметь программировать? (нет)
4. **SUCCESS STORIES** — Цитата + видео на чёрном фоне (упрощён)
5. **PROGRAM MODULES** — Никакого FOMO (5 модулей)
6. **TOOLS LOGOS** — Будем изучать и использовать
7. **INSTRUCTORS** — Кто преподаёт
8. **REVIEWS** — Что говорят участники
9. **CTA** — Форма регистрации на MeshGradient фоне
10. **FOOTER** — Копирайт

## Форма регистрации (RegistrationForm)

### Поля формы
- Имя (обязательное)
- Телефон (обязательное)
- Telegram (опциональное)

### Дизайн
- **Инпуты:** `h-[60px] rounded-xl bg-white/75 text-center`
- **Placeholder:** uppercase (ИМЯ, НОМЕР ТЕЛЕФОНА, НИК В TELEGRAM)
- **Вводимый текст:** обычный регистр (не uppercase)
- **Кнопка:** `rounded-full bg-white` — "ОСТАВИТЬ ЗАЯВКУ"
- **Success popup:** Белый блок с зелёной галочкой

### Интеграции
1. **Google Apps Script** → записывает в Google Sheets + отправляет в AmoCRM
2. **UTM-трекинг** → с fallback на текущий URL

## UTM-трекинг

### Как работает
1. При загрузке страницы `saveUTMParams()` сохраняет UTM в sessionStorage
2. При отправке формы `useAmoCRMSubmit`:
   - Сначала пробует получить UTM из sessionStorage
   - **Fallback:** если пусто — берёт из текущего URL напрямую
3. UTM добавляются в payload и отправляются в Google Apps Script

### Тестовые ссылки
```
# Локально
http://localhost:5173/sfer-kumar-solo-web?utm_source=test&utm_medium=cpc&utm_campaign=debug

# Прод
https://ru.sfer.ai/sfer-kumar-solo-web?utm_source=test_prod&utm_medium=manual&utm_campaign=check_jan9
```

## Google Apps Script

### URL
`https://script.google.com/macros/s/AKfycbyhl-7jAFI2qVzC5a6h0IOJaR5rtjdDPWv8A0Cs3Yvy_OlGCupjxcyLmcNc7ObVA0sF/exec`

### Spreadsheet ID
`1O2CcIr_vllnP076hMlhiZfgBVk7nBTCWE88CCWveAHw`

### AmoCRM интеграция (январь 2026)
- **Эндпоинт:** `/api/v4/leads/complex` (не unsorted/forms!)
- **Воронка:** AI VIBE ACADEMY 1.0 (`pipeline_id: 10453234`)
- **Этап:** Новый лид (`status_id: 82557350`)
- **Файл скрипта:** `docs/google-apps-script-amocrm.js`

## CTA секция
- **Layout:** Двухколоночный (текст слева, форма справа на desktop)
- **Заголовок:** 
  ```
  Сделайте AI-инструменты
  частью своего стека и
  войдите в топ-1% рынка
  ```
- **Переносы:** `<span className="whitespace-nowrap">` + `<br />`
- **Фон:** MeshGradient (синий/розовый)

## Program Modules секция
- **Заголовок:**
  ```
  Никакого FOMO: по полочкам
  разложим всё, что происходит
  в мире нейросетей
  ```
- **Переносы:** `<br />` теги

## Технические особенности
- `overflow-x-clip` на корневом div — предотвращает горизонтальный скролл на мобильных, не ломая sticky header
- Адаптивные размеры шрифтов в CTA: `text-2xl sm:text-3xl md:text-4xl lg:text-[48px]`

## История изменений (январь 2026)
- ✅ Удалены лишние блоки (партнёры, статистика, AGI, life-программа, цены, FAQ, контакты)
- ✅ Упрощён SUCCESS STORIES (только цитата + видео)
- ✅ Добавлена форма в CTA блок
- ✅ Исправлен горизонтальный скролл на мобильных
- ✅ Убран uppercase с полей ввода формы
- ✅ Добавлен UTM fallback из текущего URL
- ✅ Настроена воронка AmoCRM: AI VIBE ACADEMY 1.0 → Новый лид
- ✅ Исправлены переносы текста в заголовках (CTA и Program Modules)
- ✅ UTM-метки проверены и работают на проде