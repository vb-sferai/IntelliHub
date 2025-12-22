import type { Review } from '../../../data/reviews/types';
import StarsSvg from '../../../assets/imgs/stars.svg';
import AvatarPlaceholder from '../../../assets/imgs/avatar-placeholder.svg';

type ReviewCardProps = {
  review: Review;
};

export const ReviewCard = ({ review }: ReviewCardProps) => {
  const imageSrc = review.avatarUrl ?? AvatarPlaceholder;

  return (
    <article
      className="bg-[#F7F7F5] p-6 sm:p-8 rounded-xl h-full flex flex-col
                 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      {/* Контент отзыва */}
      <div className="flex-1">
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
          className="text-sm xs:text-base text-gray-500"
          style={{ lineHeight: '130%' }}
        >
          {review.text}
        </p>
      </div>

      {/* Автор (приклеен к низу) */}
      <div className="flex items-center gap-3 pt-4 mt-4 border-t border-gray-200">
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
    </article>
  );
};
