import { useEffect } from 'react';

// Расширение типов для window с Marquiz API
declare global {
  interface Window {
    Marquiz?: {
      init: (config: Record<string, unknown>) => void;
      add: (args: [string, Record<string, unknown>]) => void;
    };
  }
}

const MARQUIZ_ID = '694bb2e54a3af00019ef5802';

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
    // Добавляем inline-виджет когда Marquiz готов
    const addWidget = () => {
      window.Marquiz?.add(['Inline', WIDGET_CONFIG]);
    };

    // Если Marquiz уже загружен — добавляем сразу
    if (window.Marquiz) {
      addWidget();
    } else {
      // Иначе ждём события marquizLoaded
      document.addEventListener('marquizLoaded', addWidget);
    }

    return () => {
      document.removeEventListener('marquizLoaded', addWidget);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      {/* Контейнер для квиза Marquiz */}
      <div data-marquiz-id={MARQUIZ_ID} className="w-full max-w-3xl" />
    </div>
  );
};
