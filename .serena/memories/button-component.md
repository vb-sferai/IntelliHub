# Компонент Button — Паттерны использования

**Путь**: `src/components/Button/components/Button.tsx`

## Props
```typescript
interface ButtonProps {
    color: 'white' | 'black' | 'blue' | 'primary' | 'transparent';
    children: ReactNode;
    isInHeader?: boolean;
    fullWidth?: boolean;
    link?: string;           // URL для открытия в новой вкладке
    width?: string;
    height?: string;
    onClick?: () => void;    // Callback при клике
    metrikaId?: number;
    trackingGoal?: string;
    trackingParams?: object;
}
```

## Поведение handleClick

```typescript
const handleClick = () => {
    // 1. Добавляет UTM-параметры к ссылке
    // 2. Отправляет цель в Яндекс.Метрику (если настроено)
    // 3. Выполняет действие:
    
    if (onClick) {
        onClick();  // Вызывает callback
    } else {
        window.open(targetUrl, '_blank');  // Открывает ссылку в новой вкладке
    }
};
```

## Правила использования

### ✅ Для открытия popup/модального окна
```tsx
<Button color="primary" onClick={openPopup}>
    Забронировать место
</Button>
```

### ✅ Для внешних ссылок (Calendly, GetCourse)
```tsx
<Button color="white" link="https://calendly.com/...">
    Записаться
</Button>
```

### ❌ НЕ делать так (откроет текущую страницу в новой вкладке)
```tsx
<Button color="primary" link="#">
    Забронировать место
</Button>
```

## Цвета
- `primary` — синий `#005EE0`
- `white` — белый фон, чёрный текст
- `black` — чёрный фон, белый текст
- `blue` — `#015177`
- по умолчанию — полупрозрачный с backdrop-blur
