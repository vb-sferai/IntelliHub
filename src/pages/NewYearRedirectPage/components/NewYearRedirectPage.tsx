import { useEffect } from 'react';

export const NewYearRedirectPage = () => {
  useEffect(() => {
    // Редирект на внешний сайт новогоднего мероприятия
    window.location.href = 'https://sferainewyear.netlify.app/';
  }, []);

  // Показываем минимальный контент пока происходит редирект
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="mb-4 text-2xl font-bold text-white">
          Перенаправление...
        </h1>
        <p className="text-gray-400">
          Вы будете перенаправлены на страницу новогоднего мероприятия
        </p>
      </div>
    </div>
  );
};