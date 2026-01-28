# Политика конфиденциальности — Реализация

## Страница политики
**URL**: `/privacy-policy`  
**Роут**: `ROUTES.privacyPolicy` в `src/constants/routes.ts`

## Где добавлены ссылки

### 1. Footer страниц SferKumarSolo
**Файлы**:
- `src/pages/SferKumarSoloPage/components/SferKumarSoloPage.tsx`
- `src/pages/SferKumarSoloWebPage/components/SferKumarSoloWebPage.tsx`

```tsx
import { Link } from 'react-router-dom';

<Link to="/privacy-policy" className="text-xs text-[#858585] hover:text-[#275DD8] transition-colors">
    Политика конфиденциальности
</Link>
```

### 2. Текст согласия в формах
**Файлы**:
- `ApplicationFormPopup.tsx` — тёмный фон → `text-white/50`
- `RegistrationForm.tsx` — белый фон → `text-black/50`

```tsx
<p className="text-xs text-white/50 text-center mt-2">
    Нажимая кнопку, вы соглашаетесь с{' '}
    <a
        href="/privacy-policy"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-white/70 transition-colors"
    >
        политикой обработки персональных данных
    </a>
</p>
```

### 3. Глобальный Footer
**Файл**: `src/modules/Footer/components/Footer.tsx`

```tsx
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';

<Link to={ROUTES.privacyPolicy} className="text-gray-500 text-sm hover:text-gray-700">
    Политика конфиденциальности
</Link>
```

### 4. SupremeMainPage (ContactsSection)
**Файл**: `src/pages/SupremeMainPage/components/ContactsSection.tsx`

## Cookie Banner
**Компонент**: `src/components/CookieBanner/`  
**Подключение**: `src/modules/App/components/App.tsx`

Показывается глобально на всех страницах.
