/**
 * Утилиты для работы с аналитикой и UTM-параметрами
 */

// Типы UTM-параметров
export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

// Расширенный интерфейс с дополнительными параметрами
export interface TrafficParams extends UTMParams {
  referrer?: string;
  landing_page?: string;
  timestamp?: string;
}

/**
 * Извлекает UTM-параметры из URL
 */
export function getUTMParams(url?: string): UTMParams {
  // Используем текущий URL только если window доступен (не во время SSR)
  const targetUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  if (!targetUrl) return {};

  const urlObj = new URL(targetUrl);
  const params: UTMParams = {};

  const utmKeys: (keyof UTMParams)[] = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content',
  ];

  utmKeys.forEach((key) => {
    const value = urlObj.searchParams.get(key);
    if (value) {
      params[key] = value;
    }
  });

  return params;
}

/**
 * Сохраняет UTM-параметры в sessionStorage
 * Используем sessionStorage, чтобы параметры сохранялись в рамках одной сессии
 */
export function saveUTMParams(): TrafficParams | null {
  // Проверяем, что мы в браузере (не в SSR)
  if (typeof window === 'undefined') {
    return null;
  }

  const utmParams = getUTMParams();

  // Если нет UTM-параметров, не сохраняем
  if (Object.keys(utmParams).length === 0) {
    return null;
  }

  const trafficParams: TrafficParams = {
    ...utmParams,
    referrer: typeof document !== 'undefined' ? (document.referrer || 'direct') : 'direct',
    landing_page: window.location.pathname,
    timestamp: new Date().toISOString(),
  };

  sessionStorage.setItem('traffic_params', JSON.stringify(trafficParams));
  return trafficParams;
}

/**
 * Получает сохраненные UTM-параметры из sessionStorage
 */
export function getSavedUTMParams(): TrafficParams | null {
  // Проверяем, что мы в браузере (не в SSR)
  if (typeof window === 'undefined' || typeof sessionStorage === 'undefined') {
    return null;
  }

  const saved = sessionStorage.getItem('traffic_params');
  return saved ? JSON.parse(saved) : null;
}

/**
 * Очищает сохраненные UTM-параметры
 */
export function clearUTMParams(): void {
  // Проверяем, что мы в браузере (не в SSR)
  if (typeof window === 'undefined' || typeof sessionStorage === 'undefined') {
    return;
  }

  sessionStorage.removeItem('traffic_params');
}

/**
 * Инициализирует дополнительный счетчик Яндекс.Метрики
 * @param metrikaId - ID счетчика для инициализации
 */
export function initMetrika(metrikaId: number): void {
  if (typeof window === 'undefined') {
    return;
  }

  // Функция для инициализации счетчика
  const initCounter = () => {
    try {
      // Проверяем, существует ли уже функция ym
      if (!(window as any).ym) {
        // Создаем функцию ym если её еще нет
        (window as any).ym = (window as any).ym || function() {
          ((window as any).ym.a = (window as any).ym.a || []).push(arguments);
        };
        (window as any).ym.l = 1 * new Date().getTime();
      }

      // Инициализируем счетчик
      (window as any).ym(metrikaId, 'init', {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
        ecommerce: "dataLayer"
      });
      console.log('✅ Метрика инициализирована:', metrikaId);

      // Отправляем событие просмотра страницы
      setTimeout(() => {
        (window as any).ym(metrikaId, 'hit', window.location.href);
      }, 100);
    } catch (e) {
      console.error('❌ Ошибка инициализации метрики', metrikaId, e);
    }
  };

  // Проверяем, загружен ли уже основной скрипт метрики
  const metrikaScript = document.querySelector('script[src*="mc.yandex.ru/metrika/tag.js"]');

  if (metrikaScript) {
    // Если скрипт уже есть в DOM, ждем его загрузки или инициализируем сразу
    if ((window as any).ym && typeof (window as any).ym === 'function') {
      // Скрипт уже загружен, инициализируем сразу
      initCounter();
    } else {
      // Ждем загрузки основного скрипта
      metrikaScript.addEventListener('load', initCounter);
      // Также пробуем через небольшую задержку (на случай если событие load уже прошло)
      setTimeout(() => {
        if ((window as any).ym && typeof (window as any).ym === 'function') {
          initCounter();
        }
      }, 1000);
    }
  } else {
    // Если скрипта нет, загружаем его
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = `https://mc.yandex.ru/metrika/tag.js`;
    script.setAttribute('data-metrika-id', metrikaId.toString());

    script.onload = () => {
      initCounter();
    };

    script.onerror = () => {
      console.error('❌ Не удалось загрузить скрипт Яндекс.Метрики');
    };

    document.head.appendChild(script);
  }
}

/**
 * Отправляет цель в Яндекс.Метрику
 * @param metrikaId - ID счетчика Яндекс.Метрики (обязательный параметр)
 * @param goalName - Название цели
 * @param params - Дополнительные параметры
 */
export function trackGoal(
  metrikaId: number,
  goalName: string,
  params?: Record<string, any>
): void {
  if (typeof window !== 'undefined' && (window as any).ym) {
    (window as any).ym(metrikaId, 'reachGoal', goalName, params);
    console.log('✅ Метрика: цель достигнута', `[${metrikaId}]`, goalName, params);
  } else {
    console.warn('⚠️ Яндекс.Метрика не загружена');
  }
}

/**
 * Отправляет кастомное событие с параметрами
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, any>
): void {
  // Яндекс.Метрика
  if (typeof window !== 'undefined' && (window as any).ym) {
    const metrikaId = 105383064;
    (window as any).ym(metrikaId, 'params', {
      event: eventName,
      ...params,
    });
  }

  // Также можно добавить отправку в dataLayer для Google Analytics
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: eventName,
      ...params,
    });
  }

  console.log('📊 Событие отправлено:', eventName, params);
}

/**
 * Трекает просмотр страницы с UTM-параметрами
 */
export function trackPageView(pagePath: string): void {
  const utmParams = getSavedUTMParams();

  trackEvent('page_view', {
    page_path: pagePath,
    ...utmParams,
  });
}

/**
 * Форматирует UTM-параметры для отображения или отправки в форму
 */
export function formatUTMString(params: TrafficParams | null): string {
  if (!params) return '';

  const utmParts: string[] = [];

  if (params.utm_source) utmParts.push(`source: ${params.utm_source}`);
  if (params.utm_medium) utmParts.push(`medium: ${params.utm_medium}`);
  if (params.utm_campaign) utmParts.push(`campaign: ${params.utm_campaign}`);
  if (params.utm_term) utmParts.push(`term: ${params.utm_term}`);
  if (params.utm_content) utmParts.push(`content: ${params.utm_content}`);

  return utmParts.join(', ');
}

// Типизация для window.ym
declare global {
  interface Window {
    ym?: (id: number, method: string, ...args: any[]) => void;
    dataLayer?: any[];
  }
}
