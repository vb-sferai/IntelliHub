# Настройка целей Яндекс.Метрики для воркшопов

Этот документ содержит пошаговую инструкцию по настройке целей в Яндекс.Метрике для отслеживания конверсий на страницах воркшопов.

## Обзор

**Дата**: 2025-01-18
**Автор**: Vadim (via Claude Code)

### Счетчики Яндекс.Метрики

В проекте используются **3 счетчика** Яндекс.Метрики:

1. **105383064** — Основной счетчик для всего сайта (в `index.html`)
2. **105383668** — Счетчик для страницы AI Base (`/baza`)
3. **105367822** — Счетчик для страницы Vibecoding (`/vibecoding`)

### Архитектура отслеживания

```
Пользователь → Открывает /baza
             ↓
             BasePage.tsx → useEffect → initMetrika(105383668)
             ↓
             Кликает кнопку "Забронировать место"
             ↓
             Button.tsx → trackGoal(105383668, 'workshop_purchase_click', params)
             ↓
             Яндекс.Метрика регистрирует цель
             ↓
             UTM-параметры добавляются к ссылке GetCourse
             ↓
             Пользователь переходит на GetCourse
```

---

## Шаг 1: Доступ к интерфейсу Яндекс.Метрики

1. Откройте [https://metrika.yandex.ru/](https://metrika.yandex.ru/)
2. Войдите в аккаунт Яндекс
3. Выберите нужный счетчик из списка

---

## Шаг 2: Настройка целей для счетчика 105383668 (AI Base)

### 2.1 Перейдите в раздел настроек

1. Выберите счетчик **105383668** в списке
2. Нажмите **Настройки** → **Цели**
3. Нажмите кнопку **+ Добавить цель**

### 2.2 Создайте ДВЕ цели для разных типов участия

#### Цель 1: Клик по кнопке живого участия

| Поле | Значение |
|------|----------|
| **Название** | Покупка живого участия - AI Base |
| **Тип условия** | JavaScript-событие |
| **Идентификатор цели** | `workshop_live_click` |

#### Цель 2: Клик по кнопке записи

| Поле | Значение |
|------|----------|
| **Название** | Покупка записи - AI Base |
| **Тип условия** | JavaScript-событие |
| **Идентификатор цели** | `workshop_record_click` |

**Как это работает в коде:**

```typescript
// src/pages/BasePage/components/CarouselPriceItem.tsx
// Автоматически определяет тип по названию тарифа
const isLive = title.toLowerCase().includes('живое') || title.toLowerCase().includes('участие');
const trackingGoal = isLive ? 'workshop_live_click' : 'workshop_record_click';

<Button
  metrikaId={105383668}
  trackingGoal={trackingGoal}  // 'workshop_live_click' или 'workshop_record_click'
  trackingParams={{
    workshop: 'base',
    tier: title.toLowerCase(),
    price: price,
  }}
>
```

### 2.3 Сохраните обе цели

1. Нажмите **Добавить цель** для каждой цели
2. Убедитесь, что обе цели появились в списке

---

## Шаг 3: Настройка целей для счетчика 105367822 (Vibecoding)

### 3.1 Перейдите в раздел настроек

1. Выберите счетчик **105367822** в списке
2. Нажмите **Настройки** → **Цели**
3. Нажмите кнопку **+ Добавить цель**

### 3.2 Создайте ДВЕ цели для разных типов участия

#### Цель 1: Клик по кнопке живого участия

| Поле | Значение |
|------|----------|
| **Название** | Покупка живого участия - Vibecoding |
| **Тип условия** | JavaScript-событие |
| **Идентификатор цели** | `workshop_live_click` |

#### Цель 2: Клик по кнопке записи

| Поле | Значение |
|------|----------|
| **Название** | Покупка записи - Vibecoding |
| **Тип условия** | JavaScript-событие |
| **Идентификатор цели** | `workshop_record_click` |

**Как это работает в коде:**

```typescript
// src/pages/VibecodingPage/components/CarouselPriceItem.tsx
// Автоматически определяет тип по названию тарифа
const isLive = title.toLowerCase().includes('живое') || title.toLowerCase().includes('участие');
const trackingGoal = isLive ? 'workshop_live_click' : 'workshop_record_click';

<Button
  metrikaId={105367822}
  trackingGoal={trackingGoal}  // 'workshop_live_click' или 'workshop_record_click'
  trackingParams={{
    workshop: 'vibecoding',
    tier: title.toLowerCase(),
    price: price,
  }}
>
```

### 3.3 Сохраните обе цели

1. Нажмите **Добавить цель** для каждой цели
2. Убедитесь, что обе цели появились в списке

---

## Шаг 4: Проверка работы целей

### 4.1 Тестирование в браузере

1. Откройте сайт в режиме разработки:
   ```bash
   npm run dev
   ```

2. Откройте консоль браузера (F12 → Console)

3. Перейдите на страницу `/baza` или `/vibecoding`

4. В консоли должно появиться сообщение:
   ```
   ✅ Метрика инициализирована: 105383668
   ```
   или
   ```
   ✅ Метрика инициализирована: 105367822
   ```

5. Кликните по кнопке "Забронировать место" или "Получить запись"

6. В консоли должно появиться:
   ```
   ✅ Метрика: цель достигнута [105383668] workshop_purchase_click {workshop: 'base', tier: 'живое участие', price: '24 990 ₽', link: '...', button_text: '...'}
   ```

### 4.2 Проверка в интерфейсе Яндекс.Метрики

1. Откройте [https://metrika.yandex.ru/](https://metrika.yandex.ru/)
2. Выберите нужный счетчик (105383668 или 105367822)
3. Перейдите в раздел **Отчеты** → **Стандартные отчеты** → **Конверсии** → **Цели**
4. Убедитесь, что цель `workshop_purchase_click` отображается и регистрирует конверсии

**Примечание:** Данные в Яндекс.Метрике обновляются с задержкой до 3-5 минут.

---

## Шаг 5: Анализ UTM-параметров

### 5.1 Проверка передачи UTM в GetCourse

1. Добавьте UTM-параметры к URL сайта:
   ```
   http://localhost:5173/baza?utm_source=yandex_direct&utm_medium=cpc&utm_campaign=base_workshop_nov
   ```

2. Откройте консоль браузера (F12 → Console)

3. Кликните по кнопке покупки

4. Проверьте, что в консоли отображается:
   ```
   ✅ Метрика: цель достигнута [105383668] workshop_purchase_click {
     workshop: 'base',
     tier: 'живое участие',
     price: '24 990 ₽',
     link: 'https://kirillgurbanov.getcourse.ru/3day_workshop_ai?utm_source=yandex_direct&utm_medium=cpc&utm_campaign=base_workshop_nov',
     button_text: 'Забронировать место 25-27 ноября'
   }
   ```

5. Убедитесь, что UTM-параметры добавлены к ссылке на GetCourse

### 5.2 Просмотр параметров целей в Метрике

1. Откройте счетчик в Яндекс.Метрике
2. Перейдите в **Отчеты** → **Стандартные отчеты** → **Конверсии** → **Цели**
3. Выберите цель `workshop_purchase_click`
4. Нажмите **Детализация** → **Параметры визита**
5. Выберите **UTM-метки** → **utm_source**, **utm_campaign**, и т.д.
6. Проанализируйте, какие UTM-метки привели к конверсиям

---

## Шаг 6: Настройка дополнительных целей (опционально)

### 6.1 Цель "Просмотр секции с ценами"

Для отслеживания скролла до секции с ценами:

**Добавьте в код BasePage.tsx:**

```typescript
import { trackGoal } from '../../../utils/analytics';

useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        trackGoal(105383668, 'price_section_view');
      }
    });
  }, { threshold: 0.5 });

  const priceSection = document.getElementById('price');
  if (priceSection) {
    observer.observe(priceSection);
  }

  return () => observer.disconnect();
}, []);
```

**Создайте цель в Яндекс.Метрике:**

- **Название**: `price_section_view`
- **Тип**: JavaScript событие
- **Идентификатор**: `price_section_view`

### 6.2 Цель "Просмотр видео"

Для отслеживания просмотра видео на странице:

```typescript
<video
  onPlay={() => trackGoal(105383668, 'video_play')}
  onEnded={() => trackGoal(105383668, 'video_complete')}
>
  <source src={BaseVideo} type="video/mp4" />
</video>
```

---

## Шаг 7: Мониторинг и анализ

### 7.1 Ключевые метрики для отслеживания

**Для страницы /baza (счетчик 105383668):**

1. **Конверсия в клик по кнопке покупки**
   - Отчет: Конверсии → Цели → `workshop_purchase_click`
   - Формула: (Количество достижений цели / Визиты) × 100%

2. **Источники трафика с лучшей конверсией**
   - Отчет: Источники → Источники трафика
   - Фильтр: Цель `workshop_purchase_click`

3. **Эффективность UTM-кампаний**
   - Отчет: Источники → UTM-метки
   - Группировка: utm_source, utm_campaign

**Для страницы /vibecoding (счетчик 105367822):**

Аналогичные метрики с тем же названием цели `workshop_purchase_click`.

### 7.2 Сегментация аудитории

Создайте сегменты в Яндекс.Метрике:

1. **Пользователи, которые кликнули на покупку**
   - Условие: Достигли цели `workshop_purchase_click`

2. **Пользователи с определенным источником**
   - Условие: utm_source = "yandex_direct"

3. **Пользователи, которые просмотрели цены, но не купили**
   - Условие 1: Достигли цели `price_section_view`
   - Условие 2: НЕ достигли цели `workshop_purchase_click`

---

## Часто задаваемые вопросы (FAQ)

### Q: Цель не срабатывает, что делать?

**A:** Проверьте:

1. **Инициализирован ли счетчик?** — Откройте консоль браузера и убедитесь, что видите сообщение "✅ Метрика инициализирована: [ID]"
2. **Правильно ли указан ID счетчика?** — Проверьте, что в `CarouselPriceItem.tsx` указан правильный `metrikaId`
3. **Совпадает ли название цели?** — Идентификатор цели в интерфейсе Метрики должен точно совпадать с `trackingGoal` в коде
4. **Загружен ли скрипт Метрики?** — Проверьте, что `window.ym` доступен в консоли

### Q: UTM-параметры не передаются в GetCourse

**A:** Проверьте:

1. **Сохранены ли UTM-параметры в sessionStorage?** — Откройте DevTools → Application → Session Storage и проверьте ключ `traffic_params`
2. **Правильно ли формируется URL?** — В консоли должно быть сообщение с финальной ссылкой, включающей UTM-параметры

### Q: Как проверить, что цель работает в production?

**A:**

1. Откройте сайт в браузере
2. Откройте консоль (F12)
3. Выполните команду:
   ```javascript
   ym(105383668, 'reachGoal', 'workshop_purchase_click', {test: true})
   ```
4. Проверьте в интерфейсе Метрики через 3-5 минут

### Q: Можно ли использовать один счетчик для обеих страниц?

**A:** Да, но это не рекомендуется. Использование отдельных счетчиков позволяет:

- Получить изолированную статистику для каждого воркшопа
- Настроить разные цели и параметры для каждой страницы
- Упростить анализ конверсий

---

## Техническая документация

### Файлы, связанные с отслеживанием

**Утилиты аналитики:**
- `/src/utils/analytics.ts` — Функции для работы с Метрикой и UTM

**Компоненты:**
- `/src/components/Button/components/Button.tsx` — Компонент кнопки с поддержкой отслеживания
- `/src/pages/BasePage/components/CarouselPriceItem.tsx` — Кнопки на странице Base
- `/src/pages/VibecodingPage/components/CarouselPriceItem.tsx` — Кнопки на странице Vibecoding

**Инициализация:**
- `/src/pages/BasePage/components/BasePage.tsx:22-24` — useEffect для инициализации счетчика
- `/src/pages/VibecodingPage/components/VibecodingPage.tsx:19-21` — useEffect для инициализации счетчика

**Основной счетчик:**
- `/index.html:12-24` — Скрипт инициализации основного счетчика 105383064

### API функций

#### `initMetrika(metrikaId: number): void`

Динамически инициализирует дополнительный счетчик Яндекс.Метрики.

**Параметры:**
- `metrikaId` — ID счетчика для инициализации

**Пример использования:**
```typescript
import { initMetrika } from '../../../utils/analytics';

useEffect(() => {
  initMetrika(105383668);
}, []);
```

#### `trackGoal(metrikaId: number, goalName: string, params?: Record<string, any>): void`

Отправляет цель в Яндекс.Метрику.

**Параметры:**
- `metrikaId` — ID счетчика Метрики (обязательный)
- `goalName` — Название цели (обязательный)
- `params` — Дополнительные параметры (опциональный)

**Пример использования:**
```typescript
import { trackGoal } from '../../../utils/analytics';

trackGoal(105383668, 'workshop_purchase_click', {
  workshop: 'base',
  tier: 'живое участие',
  price: '24 990 ₽',
});
```

#### `getSavedUTMParams(): TrafficParams | null`

Получает сохраненные UTM-параметры из sessionStorage.

**Возвращает:**
- Объект с UTM-параметрами или `null`, если параметры не сохранены

**Пример использования:**
```typescript
import { getSavedUTMParams } from '../../../utils/analytics';

const utmParams = getSavedUTMParams();
console.log(utmParams);
// { utm_source: 'yandex_direct', utm_campaign: 'base_workshop', ... }
```

---

## Дополнительные ресурсы

- [Официальная документация Яндекс.Метрики](https://yandex.ru/support/metrica/)
- [Справка по JavaScript-целям](https://yandex.ru/support/metrica/general/goals.html)
- [UTM-метки в Яндекс.Метрике](https://yandex.ru/support/metrica/reports/tags.html)

---

**Последнее обновление:** 2025-01-18
**Версия документа:** 1.0
