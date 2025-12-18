import { useState, useCallback, useEffect, useRef } from 'react';
import {
  motion,
  useSpring,
  useMotionValue,
  useInView,
  useTransform,
} from 'framer-motion';
import { Link } from 'react-router-dom';
import type { CaseStudy } from '../../../data/cases/types';

// =============================================================================
// Animated Counter Component
// =============================================================================

type AnimatedCounterProps = {
  value: string;
  isActive: boolean;
};

/**
 * Парсит строку с числом и возвращает числовую часть + prefix/suffix
 * Примеры: "11 000" → {num: 11000, suffix: ""}, "85%" → {num: 85, suffix: "%"}
 */
const parseNumericValue = (
  value: string
): { num: number; prefix: string; suffix: string; hasSpace: boolean } => {
  // Убираем пробелы внутри числа для парсинга (11 000 → 11000)
  const hasSpace = /\d\s+\d/.test(value);
  const cleanValue = value.replace(/\s+/g, '');

  // Ищем число в строке (включая десятичные)
  const match = cleanValue.match(/^([^\d]*)(\d+(?:[.,]\d+)?)(.*)$/);

  if (!match) {
    return { num: 0, prefix: '', suffix: value, hasSpace: false };
  }

  const [, prefix, numStr, suffix] = match;
  const num = parseFloat(numStr.replace(',', '.'));

  return { num, prefix: prefix || '', suffix: suffix || '', hasSpace };
};

/**
 * Форматирует число с пробелами (11000 → "11 000")
 */
const formatWithSpaces = (num: number): string => {
  return Math.round(num)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

const AnimatedCounter = ({ value, isActive }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: '-50px' });
  const [hasAnimated, setHasAnimated] = useState(false);

  const { num, prefix, suffix, hasSpace } = parseNumericValue(value);
  const isDecimal = value.includes(',') || value.includes('.');

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 50,
    damping: 20,
    mass: 1,
  });

  const displayValue = useTransform(springValue, (latest) => {
    if (isDecimal) {
      return latest.toFixed(1).replace('.', ',');
    }
    if (hasSpace) {
      return formatWithSpaces(latest);
    }
    return Math.round(latest).toString();
  });

  const [displayed, setDisplayed] = useState(prefix + '0' + suffix);

  useEffect(() => {
    const unsubscribe = displayValue.on('change', (latest) => {
      setDisplayed(prefix + latest + suffix);
    });
    return unsubscribe;
  }, [displayValue, prefix, suffix]);

  useEffect(() => {
    if (isInView && isActive && !hasAnimated) {
      motionValue.set(num);
      setHasAnimated(true);
    }
  }, [isInView, isActive, num, motionValue, hasAnimated]);

  // Сброс при смене слайда
  useEffect(() => {
    if (!isActive) {
      setHasAnimated(false);
      motionValue.jump(0);
    }
  }, [isActive, motionValue]);

  return (
    <motion.span
      ref={ref}
      className="text-2xl md:text-3xl font-bold text-primary-200 leading-none tabular-nums"
    >
      {displayed}
    </motion.span>
  );
};

// =============================================================================
// Navigation Arrow Button
// =============================================================================

type NavButtonProps = {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled?: boolean;
};

const NavButton = ({ direction, onClick, disabled }: NavButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative flex items-center justify-center
        w-12 h-12 md:w-14 md:h-14
        rounded-full
        bg-white
        border-2 border-gray-200
        shadow-lg shadow-black/5
        transition-all duration-300
        ${disabled ? 'opacity-30 cursor-not-allowed' : 'hover:border-primary-200 hover:shadow-primary-200/20 cursor-pointer'}
        group
      `}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
    >
      <motion.svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`
          transition-colors duration-300
          ${disabled ? 'text-gray-300' : 'text-gray-600 group-hover:text-primary-200'}
          ${direction === 'left' ? 'rotate-180' : ''}
        `}
      >
        <path
          d="M7.5 4L13.5 10L7.5 16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </motion.button>
  );
};

type CasesStoriesProps = {
  cases: CaseStudy[];
};

/**
 * Блок "Кейсы" — бесшовная карусель
 * - Вертикальный layout на всех экранах
 * - Плавная tween анимация
 * - Размеры как у CasesCarouselItem
 */
export const CasesStories = ({ cases }: CasesStoriesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  // Responsive card width
  useEffect(() => {
    const updateWidth = () => {
      const vw = window.innerWidth;
      if (vw >= 1024) {
        setCardWidth(1200); // desktop: широкие карточки для вертикального layout
      } else if (vw >= 640) {
        setCardWidth(Math.min(vw - 96, 700)); // tablet
      } else {
        setCardWidth(vw - 32); // mobile
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const gap = 24;

  const goToNext = useCallback(() => {
    if (currentIndex < cases.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, cases.length]);

  const goToPrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  const goToIndex = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Drag/swipe handling
  const dragStartXRef = useRef(0);
  const isDraggingRef = useRef(false);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    dragStartXRef.current = x;
    isDraggingRef.current = true;
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDraggingRef.current) return;

    isDraggingRef.current = false;
    const endX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = dragStartXRef.current - endX;

    // Меньший threshold для мобильных (50px), больший для desktop (80px)
    const threshold = 'changedTouches' in e ? 50 : 80;

    if (diff > threshold) goToNext();
    else if (diff < -threshold) goToPrev();
  };

  const handleDragCancel = () => {
    isDraggingRef.current = false;
  };

  // Плавная анимация (не spring!)
  const smoothTransition = {
    type: 'tween' as const,
    duration: 0.5,
    ease: [0.25, 0.1, 0.25, 1],
  };

  if (cardWidth === 0) return null; // SSR safety

  return (
    <section
      id="cases"
      className="flex flex-col gap-6 md:gap-8 mt-20 md:mt-24 lg:mt-40 xl:mt-50"
    >
      {/* Заголовок */}
      <h2 className="text-3xl md:text-4xl lg:text-[42px] xl:text-5xl font-semibold text-black">
        Кейсы
      </h2>

      {/* Прогресс-бар — НАД карточками */}
      <div
        className="flex gap-2 mx-auto"
        style={{ width: Math.min(cardWidth, 800) }}
      >
        {cases.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`
              flex-1 h-1.5 md:h-2 rounded-full transition-all duration-300
              ${index <= currentIndex ? 'bg-primary-200' : 'bg-gray-300'}
              hover:bg-primary-100 cursor-pointer
            `}
            aria-label={`Перейти к кейсу ${index + 1}`}
          />
        ))}
      </div>

      {/* Карусель с кнопками по бокам */}
      <div className="relative flex items-center justify-center">
        {/* Кнопка ВЛЕВО — слева от карточек (desktop) */}
        <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20">
          <NavButton
            direction="left"
            onClick={goToPrev}
            disabled={currentIndex === 0}
          />
        </div>

        {/* Карусель */}
        <div
          className="relative w-full overflow-hidden touch-pan-y"
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragCancel}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
          onTouchCancel={handleDragCancel}
        >
          <motion.div
            className="flex"
            style={{ gap }}
            animate={{
              x: `calc(50% - ${(cardWidth + gap) * currentIndex + cardWidth / 2}px)`,
            }}
            transition={smoothTransition}
          >
            {cases.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                className="flex-shrink-0"
                style={{ width: cardWidth }}
                animate={{
                  scale: index === currentIndex ? 1 : 0.95,
                  opacity: index === currentIndex ? 1 : 0.4,
                }}
                transition={smoothTransition}
              >
                <StoryCard
                  caseStudy={caseStudy}
                  isActive={index === currentIndex}
                  onClick={() => goToIndex(index)}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Тап-зоны для переключения (mobile + desktop) */}
          <div
            className="absolute left-0 top-0 w-1/3 h-full z-10 cursor-pointer"
            onClick={goToPrev}
            aria-label="Предыдущий кейс"
          />
          <div
            className="absolute right-0 top-0 w-1/3 h-full z-10 cursor-pointer"
            onClick={goToNext}
            aria-label="Следующий кейс"
          />
        </div>

        {/* Кнопка ВПРАВО — справа от карточек (desktop) */}
        <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20">
          <NavButton
            direction="right"
            onClick={goToNext}
            disabled={currentIndex === cases.length - 1}
          />
        </div>
      </div>

      {/* Навигационные кнопки — mobile (под каруселью) */}
      <div className="flex md:hidden items-center justify-center gap-4 mt-2">
        <NavButton
          direction="left"
          onClick={goToPrev}
          disabled={currentIndex === 0}
        />
        <span className="text-sm font-medium text-gray-500 font-geist tabular-nums">
          {currentIndex + 1} / {cases.length}
        </span>
        <NavButton
          direction="right"
          onClick={goToNext}
          disabled={currentIndex === cases.length - 1}
        />
      </div>
    </section>
  );
};

// =============================================================================
// Story Card — Вертикальный layout
// =============================================================================

type StoryCardProps = {
  caseStudy: CaseStudy;
  isActive: boolean;
  onClick: () => void;
};

const StoryCard = ({ caseStudy, isActive, onClick }: StoryCardProps) => {
  const { client, logoUrl, request, results, stack, link } = caseStudy;

  return (
    <div
      onClick={!isActive ? onClick : undefined}
      className={`
        flex flex-col gap-6 md:gap-8
        w-full
        bg-[#F7F7F5]
        rounded-2xl
        p-6 md:p-8 lg:p-10
        ${!isActive ? 'cursor-pointer' : ''}
      `}
    >
      {/* КЛИЕНТ — сверху по центру */}
      <div className="flex flex-col items-center gap-3">
        <span className="uppercase text-xs md:text-sm font-semibold text-gray-400 font-geist tracking-widest">
          Клиент
        </span>
        {logoUrl ? (
          <img
            src={logoUrl}
            alt={`${client} logo`}
            className="h-10 md:h-12 w-auto object-contain"
          />
        ) : (
          <span className="text-xl md:text-2xl font-semibold text-gray-700 text-center">
            {client}
          </span>
        )}
      </div>

      {/* ЗАПРОС */}
      <div className="flex flex-col gap-3">
        <span className="uppercase text-xs md:text-sm font-semibold text-gray-400 font-geist tracking-widest">
          Запрос
        </span>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          {request}
        </p>
      </div>

      {/* РЕЗУЛЬТАТЫ — квадратики в 2 ряда с анимированными счётчиками */}
      <div className="flex flex-col gap-4">
        <span className="uppercase text-xs md:text-sm font-semibold text-gray-400 font-geist tracking-widest">
          Результаты
        </span>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {results.map((result, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-2 p-4 md:p-5 bg-white/70 rounded-xl border border-gray-100"
              initial={{ opacity: 0, y: 10 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 0 }}
              transition={{
                delay: isActive ? index * 0.1 : 0,
                duration: 0.4,
                ease: 'easeOut',
              }}
            >
              <AnimatedCounter value={result.title} isActive={isActive} />
              <span className="text-[11px] md:text-xs text-gray-500 leading-tight">
                {result.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* СТЕК */}
      <div className="flex flex-col gap-3 text-center">
        <span className="uppercase text-xs md:text-sm font-semibold text-gray-400 font-geist tracking-widest">
          Стек
        </span>
        <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
          {stack}
        </p>
      </div>

      {/* КНОПКА — внизу по центру (всегда видна если есть link) */}
      {link && (
        <div className="flex justify-center mt-2">
          <Link
            to={link}
            state={{ from: '/' }}
            className="
              inline-flex items-center justify-center gap-2
              px-6 py-3.5
              rounded-full bg-black text-white
              font-geist text-sm font-semibold uppercase tracking-wide
              hover:bg-gray-800 active:scale-[0.98]
              transition-all duration-200
            "
            onClick={(e) => e.stopPropagation()}
          >
            Подробнее о кейсе
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CasesStories;
