import React, { useEffect } from 'react';
import { MeshGradient } from '@paper-design/shaders-react';

export const OrderSuccessPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Успешно! - sfer.ai';
    return () => {
      document.title = 'sfer.ai';
    };
  }, []);

  const calendarUrl = 'https://cal.com/artem-frolov/ai-agents';
  const artemTelegramUrl = 'https://t.me/ArtemFrol';
  const supportBotUrl = 'https://t.me/gurbanov_care_bot?start=dl-1746723554214';

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <MeshGradient
          speed={0.15}
          color1="#0066FF"
          color2="#00AAFF"
          color3="#005EE0"
          color4="#0080FF"
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center overflow-hidden py-8 sm:py-12">
        {/* Success Card */}
        <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6 sm:p-10 lg:p-12 max-w-3xl mx-4 text-left">
          {/* Success Icon */}
          <div className="mb-6 text-center">
            <svg
              className="w-16 h-16 sm:w-20 sm:h-20 mx-auto text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 text-center">
            Успешно!
          </h1>

          {/* Intro Text */}
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Рады, что вас так захватила тема AI-агентов (и надеемся, что вы успешно создадите собственного)
          </p>

          {/* Instructions Header */}
          <p className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
            После оплаты вам нужно:
          </p>

          {/* Numbered List */}
          <ol className="list-decimal list-outside ml-5 space-y-3 text-base sm:text-lg text-gray-700 mb-6">
            <li>
              Определиться с датой и временем консультации{' '}
              <a
                href={calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#005EE0] hover:underline font-medium"
              >
                по этой ссылке
              </a>
            </li>
            <li>
              Выбрать удобный слот и указать в описании ваше имя (в формате <span className="font-medium">InForce / Имя Фамилия</span>)
            </li>
            <li>
              Добавить ваш адрес электронной почты (желательно Gmail)
            </li>
            <li>
              Ура! Встреча автоматически окажется в вашем календаре (вместе со ссылкой на Zoom), а на почту придёт подтверждение (тоже вместе со ссылкой на встречу)
            </li>
          </ol>

          {/* Additional Info */}
          <div className="space-y-3 text-base sm:text-lg text-gray-700 mb-8 border-t border-gray-200 pt-6">
            <p>
              Если у вас есть контекст, который важно передать Артёму перед встречей — пожалуйста, напишите ему{' '}
              <a
                href={artemTelegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#005EE0] hover:underline font-medium"
              >
                в Telegram
              </a>
            </p>
            <p>
              Если появились вопросы или что-то не получается — напишите{' '}
              <a
                href={supportBotUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#005EE0] hover:underline font-medium"
              >
                в бот поддержки
              </a>
            </p>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href={calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#005EE0] text-white rounded-full hover:bg-blue-700 transition-colors font-medium text-base sm:text-lg"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Записаться на консультацию
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};
