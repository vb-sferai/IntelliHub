# Страницы SferKumarSolo — Архитектура

## SferKumarSoloPage (`/sfer-kumar-solo`)

**Путь**: `src/pages/SferKumarSoloPage/`

### Структура компонентов
```
SferKumarSoloPage/
├── components/
│   ├── SferKumarSoloPage.tsx      # Главный компонент
│   ├── ApplicationFormPopup/      # Popup-форма заявки
│   │   └── components/
│   │       └── ApplicationFormPopup.tsx
│   └── SuccessStoriesSection/
├── assets/                        # Логотипы, изображения
├── data.ts                        # Данные (HERO, PRICE, FAQ_ITEMS, etc.)
└── index.ts
```

### Формы заявок
- **ApplicationFormPopup** — модальное окно с формой
- Поля: name, phone, telegram
- Отправка: AmoCRM через `useAmoCRMSubmit` хук
- После успеха: открывает Telegram-бота

### Кнопки CTA
Все кнопки "Забронировать место" и аналогичные используют:
```tsx
<Button color="primary" onClick={openPopup} fullWidth>
```
**НЕ** использовать `link={...}` — это открывает URL в новой вкладке!

### Спикеры (INSTRUCTORS)
В массиве `INSTRUCTORS` в `data.ts` — 6 спикеров:
1. Роман Кумар-Виас (kumar.png)
2. Кирилл Гурбанов (kirill.png)
3. Эдуард Эпштейн (epstein.png)
4. Артем Фролов (artem.png)
5. Всеволод Устинов (ustinov.png)
6. Николай Кожемякин (nikolai.png)

Фото хранятся в `assets/`. Условный рендеринг: `{instructor.photo && <img ... />}`

### VideoPlayer (SuccessStoriesSection)
- Используется **Kinescope** embed (не Loom!)
- URL: `https://kinescope.io/embed/5hLbGMyiEqAubeTANqrZro`
- Компонент: `SuccessStoriesSection.tsx`

### Footer
```tsx
<footer className="flex flex-col md:flex-row items-center justify-between ...">
    <img src={LogoGray} alt="sfer.ai" className="h-6" />
    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
        <p className="text-xs text-[#858585]">© 2025 ИП Гурбанов...</p>
        <Link to="/privacy-policy" className="text-xs text-[#858585] hover:text-[#275DD8]">
            Политика конфиденциальности
        </Link>
    </div>
</footer>
```

---

## SferKumarSoloWebPage (`/sfer-kumar-solo-web`)

**Путь**: `src/pages/SferKumarSoloWebPage/`

### Отличия от SferKumarSoloPage
- **Независимая копия** — можно менять без влияния на оригинал
- Inline-форма `RegistrationForm` вместо popup
- Свои ассеты в `assets/`
- Нет секций: Тарифы, FAQ (убраны из хедера)

### RegistrationForm
- Белый фон → текст `text-black/50` (не white!)
- Та же логика отправки через AmoCRM
