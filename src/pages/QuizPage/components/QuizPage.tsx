import { useEffect } from 'react';

// Расширение типов для window с Marquiz API
declare global {
  interface Window {
    Marquiz?: {
      init: (config: {
        host: string;
        region: string;
        id: string;
        autoOpen: boolean;
        autoOpenFreq: string;
        openOnExit: boolean;
        disableOnMobile: boolean;
      }) => void;
      add: (args: [string, Record<string, unknown>]) => void;
    };
  }
}

const MARQUIZ_ID = '694bb2e54a3af00019ef5802';

const MARQUIZ_CONFIG = {
  host: '//quiz.marquiz.ru',
  region: 'ru',
  id: MARQUIZ_ID,
  autoOpen: false,
  autoOpenFreq: 'once',
  openOnExit: false,
  disableOnMobile: false,
};

const WIDGET_CONFIG = {
  id: MARQUIZ_ID,
  buttonText: '«Старт»',
  bgColor: '#d34085',
  textColor: '#ffffff',
  rounded: true,
  shadow: false,
  blicked: false,
  fixed: false,
  buttonOnMobile: true,
  disableOnMobile: false,
  fullWidth: false,
};

export const QuizPage = () => {
  useEffect(() => {
    // Создаём скрипт Marquiz
    const script = document.createElement('script');
    script.src = '//script.marquiz.ru/v2.js';
    script.async = true;

    // Инициализация после загрузки скрипта (как в оригинале)
    script.onload = () => {
      if (document.readyState !== 'loading') {
        window.Marquiz?.init(MARQUIZ_CONFIG);
      } else {
        document.addEventListener('DOMContentLoaded', () => {
          window.Marquiz?.init(MARQUIZ_CONFIG);
        });
      }
    };

    // Обработчик события marquizLoaded для добавления виджета
    const handleMarquizLoaded = () => {
      window.Marquiz?.add(['Inline', WIDGET_CONFIG]);
    };

    // Добавляем виджет: сразу если Marquiz готов, иначе ждём событие
    if (window.Marquiz) {
      window.Marquiz.add(['Inline', WIDGET_CONFIG]);
    } else {
      document.addEventListener('marquizLoaded', handleMarquizLoaded);
    }

    document.head.insertBefore(script, document.head.firstElementChild);

    // Cleanup при размонтировании компонента
    return () => {
      script.remove();
      document.removeEventListener('marquizLoaded', handleMarquizLoaded);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      {/* Контейнер для квиза Marquiz */}
      <div data-marquiz-id={MARQUIZ_ID} className="w-full max-w-3xl" />
    </div>
  );
};
