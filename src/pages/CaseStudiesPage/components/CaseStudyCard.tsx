import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { CaseStudy } from '../../../data/cases';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

/**
 * Карточка кейса для страницы /cases
 */
export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
  const { client, logoUrl, request, results, stack, link } = caseStudy;

  // Разбиваем результаты на ряды по 3
  const firstRow = results.slice(0, 3);
  const secondRow = results.slice(3, 6);

  // Обрезаем описание запроса для превью
  const truncatedRequest =
    request.length > 180 ? request.slice(0, 180) + '...' : request;

  return (
    <motion.div
      className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg lg:p-8"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {/* Клиент */}
      <div className="mb-6">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400 font-geist">
          Клиент
        </span>
        {logoUrl ? (
          <img
            src={logoUrl}
            alt={`${client} logo`}
            className="h-8 w-auto object-contain object-left md:h-10"
            loading="lazy"
          />
        ) : (
          <span className="text-xl font-semibold text-gray-900 md:text-2xl">
            {client}
          </span>
        )}
      </div>

      {/* Запрос */}
      <div className="mb-6">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400 font-geist">
          Запрос
        </span>
        <p className="text-sm leading-relaxed text-gray-600 md:text-base">
          {truncatedRequest}
        </p>
      </div>

      {/* Ключевые результаты */}
      <div className="mb-6 flex-grow">
        <span className="mb-3 block text-xs font-semibold uppercase tracking-wider text-gray-400 font-geist">
          Результат
        </span>
        <div className="flex flex-col gap-4">
          {/* Первый ряд */}
          <div className="grid grid-cols-3 gap-3">
            {firstRow.map((result, index) => (
              <div
                key={index}
                className="flex flex-col border-t border-gray-200 pt-3"
              >
                <span className="text-lg font-semibold text-gray-900 md:text-xl lg:text-2xl">
                  {result.title}
                </span>
                <span className="line-clamp-2 text-xs text-gray-500 md:text-sm">
                  {result.text}
                </span>
              </div>
            ))}
          </div>
          {/* Второй ряд (если есть) */}
          {secondRow.length > 0 && (
            <div className="grid grid-cols-3 gap-3">
              {secondRow.map((result, index) => (
                <div
                  key={index}
                  className="flex flex-col border-t border-gray-200 pt-3"
                >
                  <span className="text-lg font-semibold text-gray-900 md:text-xl lg:text-2xl">
                    {result.title}
                  </span>
                  <span className="line-clamp-2 text-xs text-gray-500 md:text-sm">
                    {result.text}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Стек */}
      <div className="mb-6 border-t border-gray-100 pt-4">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400 font-geist">
          Стек
        </span>
        <span className="line-clamp-1 text-sm text-gray-500">{stack}</span>
      </div>

      {/* CTA кнопка */}
      {link && (
        <Link
          to={link}
          state={{ from: '/cases' }}
          className="mt-auto inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-gray-800 font-geist"
        >
          Подробнее о кейсе
        </Link>
      )}
    </motion.div>
  );
};
