import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Review } from '../../../data/reviews/types';
import StarsSvg from '../../../assets/imgs/stars.svg';
import AvatarPlaceholder from '../../../assets/imgs/avatar-placeholder.svg';

type ReviewCardProps = {
  review: Review;
  index: number;
};

export const ReviewCard = ({ review, index }: ReviewCardProps) => {
  const imageSrc = review.avatarUrl ?? AvatarPlaceholder;
  const ref = useRef(null);

  // Отслеживаем видимость карточки в viewport
  const isInView = useInView(ref, {
    once: true, // Анимация только один раз
    margin: '-50px', // Триггер когда карточка на 50px в viewport
  });

  // Stagger задержка по колонкам (0, 1, 2 -> 0ms, 100ms, 200ms)
  const staggerDelay = (index % 3) * 0.1;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.5,
        delay: staggerDelay,
        ease: 'easeOut',
      }}
      className="bg-[#F7F7F5] p-6 sm:p-8 rounded-xl
                 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      {/* Звёзды рейтинга */}
      <div className="mb-3">
        <img className="w-24" src={StarsSvg} alt="Рейтинг 5 звёзд" />
      </div>

      {/* Заголовок */}
      <h4 className="text-lg xs:text-xl lg:text-2xl font-semibold text-black mb-2">
        {review.title}
      </h4>

      {/* Текст отзыва (полный, без обрезки) */}
      <p
        className="text-sm xs:text-base text-gray-500 mb-4"
        style={{ lineHeight: '130%' }}
      >
        {review.text}
      </p>

      {/* Автор */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
        <img
          src={imageSrc}
          alt={review.author}
          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
        />
        <div className="min-w-0">
          <p className="font-medium text-sm text-black truncate">
            {review.author}
          </p>
          {review.role && (
            <p className="text-xs text-gray-500 truncate">{review.role}</p>
          )}
        </div>
      </div>
    </motion.article>
  );
};
