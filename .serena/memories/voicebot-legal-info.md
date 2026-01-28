# VoiceBotPage — Юридическая информация

## Обновление от 2026-01-22

Обновлены юридические данные на странице `/voicebot`:

### Данные ИП
- **Название**: ИП Гурбанов Кирилл Игоревич
- **ОГРНИП**: 315774600229281

### Файлы
- `src/pages/VoiceBotPage/data.ts` — объект `LEGAL` с данными
- `src/pages/VoiceBotPage/components/VoiceBotPage.tsx` — футер с отображением

### Структура LEGAL объекта
```typescript
export const LEGAL = {
    companyName: 'ИП Гурбанов Кирилл Игоревич',
    ogrnip: '315774600229281',
    address: 'г. Москва', // TODO: указать полный юр. адрес
    offerLink: '/offer',
    privacyLink: '/privacy-policy',
};
```

### Отображение в футере
```
{LEGAL.companyName}, ОГРНИП {LEGAL.ogrnip}
```
