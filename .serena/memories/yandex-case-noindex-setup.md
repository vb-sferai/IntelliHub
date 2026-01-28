# Скрытие страницы кейса Яндекса от индексации

## Дата: 2026-01-20

## Задача
По запросу Яндекса временно скрыть страницу `/cases/yandex` от индексации поисковыми системами.

## Что было сделано

### 1. Добавлен noindex мета-тег (JavaScript)
**Файл:** `src/pages/CaseStudyYandex/components/CaseStudyYandexPage.tsx`

```tsx
useEffect(() => {
  const metaRobots = document.createElement('meta');
  metaRobots.name = 'robots';
  metaRobots.content = 'noindex, nofollow';
  document.head.appendChild(metaRobots);

  return () => {
    document.head.removeChild(metaRobots);
  };
}, []);
```

**Примечание:** JS-метатег не видят инструменты Яндекс.Вебмастера при проверке, но видят при полном рендеринге страницы.

### 2. Добавлен robots.txt
**Файл:** `public/robots.txt`

```
User-agent: *
Disallow: /cases/yandex

User-agent: Yandex
Disallow: /cases/yandex
```

Это основной способ блокировки — работает для всех поисковиков.

### 3. Файлы верификации Яндекс.Вебмастера
- `public/yandex_c60c632a9494707b.html` — для sfer.ai
- `public/yandex_a1dd31bb048ff851.html` — для ru.sfer.ai

## Коммиты
1. `77199a2` — chore(case-yandex): добавить noindex для скрытия от поисковиков
2. `229dd3d` — chore: добавить файл верификации Яндекс.Вебмастера
3. `74b7dd4` — chore: добавить файл верификации для ru.sfer.ai
4. `cf8df27` — chore: добавить robots.txt с запретом индексации /cases/yandex

## Удаление из поисковиков

### Яндекс
1. Верифицировать сайт ru.sfer.ai в Яндекс.Вебмастере
2. **Удаление страниц** → вкладка **"По префиксу"** → `/cases/yandex`
3. Проверка: `site:ru.sfer.ai/cases/yandex` в поиске Яндекса

### Google
1. Верифицировать сайт в Google Search Console
2. **Индекс** → **Удаление URL** → `https://ru.sfer.ai/cases/yandex`
3. Проверка: `site:ru.sfer.ai/cases/yandex` в поиске Google

## Как отменить (когда Яндекс одобрит)
1. Удалить `useEffect` с noindex из `CaseStudyYandexPage.tsx`
2. Удалить строки `Disallow: /cases/yandex` из `public/robots.txt`
3. Запросить переиндексацию в Яндекс.Вебмастере и Google Search Console

## Важные заметки
- robots.txt блокирует **краулинг**, а не индексацию напрямую
- Для SPA (React) JavaScript-метатеги не видны при статической проверке
- Удаление из индекса занимает от нескольких часов до 2 недель
- Файлы верификации НЕ удалять — нужны для доступа к Вебмастеру
