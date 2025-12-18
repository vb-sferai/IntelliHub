import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type ProductCardProps = {
  iconUrl: string;
  title: string;
  text: string;
  list: string[];
  onClick?: () => void;
};

export const ProductCard = ({
  iconUrl,
  title,
  text,
  list,
  onClick,
}: ProductCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    // На мобильном переключаем accordion, на десктопе вызываем onClick если есть
    if (window.innerWidth < 1024) {
      setIsExpanded(!isExpanded);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className="group flex flex-col bg-[#F7F7F5] rounded-2xl p-5 sm:p-6 lg:p-8
                 transition-all duration-300 ease-out
                 lg:hover:scale-[1.02] lg:hover:shadow-xl lg:hover:shadow-black/5
                 cursor-pointer lg:h-full"
      onClick={handleToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleToggle()}
    >
      {/* Header: Icon + Title (always visible) */}
      <div className="flex items-start gap-4 lg:flex-col lg:gap-0">
        <img
          className="w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0 lg:mb-6
                     group-hover:scale-110 transition-transform duration-300"
          src={iconUrl}
          alt=""
        />
        <div className="flex-1 flex items-center justify-between lg:block">
          <h4
            className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-black
                       leading-tight lg:mb-3"
          >
            {title}
          </h4>
          {/* Chevron indicator for mobile */}
          <motion.svg
            className="w-5 h-5 text-gray-400 lg:hidden flex-shrink-0 ml-2"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </motion.svg>
        </div>
      </div>

      {/* Expandable content for mobile */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="lg:hidden overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="pt-4">
              {text && (
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                  {text}
                </p>
              )}
              <ul className="flex flex-col gap-2">
                {list.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 leading-relaxed"
                  >
                    <span className="text-[#FF8002] mt-0.5 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop: always visible content */}
      <div className="hidden lg:block">
        {text && (
          <p className="text-base text-gray-500 mb-4 leading-relaxed">
            {text}
          </p>
        )}
        <ul className="flex flex-col gap-2.5 mt-auto pt-2">
          {list.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-base text-gray-600 leading-relaxed"
            >
              <span className="text-[#FF8002] mt-0.5 flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
