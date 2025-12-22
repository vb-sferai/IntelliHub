import { useState, useRef, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Review } from '../../../data/reviews/types';
import { ROUTES } from '../../../constants/routes';
import { ReviewCard } from './ReviewCard';
import { ExpandButton, CollapseButton } from './ShowMoreButton';

type ReviewsGridProps = {
  reviews: Review[];
  title?: string;
  initialRows?: number;
  accentColor?: string;
  showAllReviewsLink?: boolean;
};

export const ReviewsGrid = ({
  reviews,
  title = 'Что говорят участники программ sfer.ai',
  initialRows = 2,
  accentColor = '#005EE0',
  showAllReviewsLink = true,
}: ReviewsGridProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [collapsedHeight, setCollapsedHeight] = useState(600);
  const gridRef = useRef<HTMLDivElement>(null);

  // Вычисляем высоту для свёрнутого состояния
  const calculateCollapsedHeight = useCallback(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll('article');
    if (cards.length === 0) return;

    // Определяем количество колонок по ширине экрана
    const windowWidth = window.innerWidth;
    const columnsCount = windowWidth >= 1024 ? 3 : windowWidth >= 640 ? 2 : 1;
    const cardsToShow = columnsCount * initialRows;

    // Находим максимальную высоту среди первых N карточек
    let maxBottom = 0;
    cards.forEach((card, i) => {
      if (i < cardsToShow) {
        const rect = card.getBoundingClientRect();
        const gridRect = gridRef.current!.getBoundingClientRect();
        const cardBottom = rect.bottom - gridRect.top;
        maxBottom = Math.max(maxBottom, cardBottom);
      }
    });

    setCollapsedHeight(maxBottom + 16); // + небольшой padding
  }, [initialRows]);

  useEffect(() => {
    // Пересчитываем при монтировании и изменении размера окна
    const timeoutId = setTimeout(calculateCollapsedHeight, 100);

    const handleResize = () => {
      calculateCollapsedHeight();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, [calculateCollapsedHeight, reviews]);

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleCollapse = () => {
    setIsExpanded(false);
    // Скроллим к началу секции отзывов
    const reviewsSection = document.getElementById('reviews');
    if (reviewsSection) {
      reviewsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Есть ли что показывать (больше отзывов чем помещается)
  const columnsCount =
    typeof window !== 'undefined'
      ? window.innerWidth >= 1024
        ? 3
        : window.innerWidth >= 640
          ? 2
          : 1
      : 3;
  const canExpand = reviews.length > columnsCount * initialRows;

  return (
    <section id="reviews" className="mt-20 xl:mt-37">
      {/* Заголовок секции */}
      <h2 className="font-geist text-2xl md:text-3xl xl:text-4xl font-semibold mb-8 lg:mb-12">
        {title}
      </h2>

      {/* Контейнер с контролируемой высотой */}
      <div className="relative">
        <motion.div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden"
          animate={{
            maxHeight: isExpanded ? 10000 : collapsedHeight,
          }}
          initial={false}
          transition={{
            duration: 0.7,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </motion.div>

        {/* Градиентная шторка */}
        <AnimatePresence>
          {!isExpanded && canExpand && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-0 left-0 right-0 h-48
                         bg-gradient-to-t from-white via-white/90 to-transparent
                         flex items-end justify-center pb-6 pointer-events-none"
            >
              <div className="pointer-events-auto">
                <ExpandButton onClick={handleExpand} accentColor={accentColor} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Кнопки под grid */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        {/* Кнопка Свернуть (только когда развёрнуто) */}
        <AnimatePresence>
          {isExpanded && canExpand && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <CollapseButton onClick={handleCollapse} accentColor={accentColor} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Ссылка на страницу всех отзывов */}
        {showAllReviewsLink && (
          <Link
            to={ROUTES.reviews}
            className="inline-flex items-center gap-2 py-3 px-6 rounded-full
                       text-white font-geist text-xs sm:text-sm xl:text-base
                       font-semibold uppercase transition-all duration-200
                       hover:opacity-90 hover:shadow-lg"
            style={{ backgroundColor: accentColor }}
          >
            Смотреть все отзывы
            <span className="text-lg">→</span>
          </Link>
        )}
      </div>
    </section>
  );
};
