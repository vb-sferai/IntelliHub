import React from 'react';
import { Link } from 'react-router-dom';
import { MeshGradient } from '@paper-design/shaders-react';
import { ROUTES } from '../../../constants/routes';

interface ReviewsCTAProps {
  title?: string;
  description?: string;
  email?: string;
  gradientColors?: string[];
  primaryButtonTextColor?: string;
}

/**
 * CTA секция страницы отзывов с MeshGradient фоном
 */
export const ReviewsCTA: React.FC<ReviewsCTAProps> = ({
  title = 'Хотите так же?',
  description = 'Запишитесь на воркшоп и получите практические навыки',
  email = 'human@sfer.ai',
  gradientColors = ['#80C2FF', '#061346', '#3A83E8'],
  primaryButtonTextColor = '#005EE0',
}) => {
  return (
    <div className="relative w-full py-16 lg:py-20">
      {/* Mesh Gradient Background */}
      <MeshGradient
        speed={0.38}
        colors={gradientColors}
        distortion={0.79}
        swirl={0.4}
        grainMixer={0.3}
        grainOverlay={0}
        frame={32579.315000002767}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-[1408px] flex-col items-center justify-between gap-8 px-4 sm:px-12 lg:flex-row lg:gap-16 lg:px-16 xl:px-0">
        {/* Text Section */}
        <div className="flex flex-col gap-4 text-center text-white lg:text-left">
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl xl:text-5xl">
            {title}
          </h2>
          <p className="text-base text-white/90 md:text-lg">{description}</p>
        </div>

        {/* Buttons Section */}
        <div className="flex min-w-[240px] flex-col gap-4 lg:min-w-[280px]">
          {/* Primary Button - Link to /edu */}
          <Link
            to={ROUTES.edu}
            className="rounded-full bg-white px-8 py-4 text-center text-base font-semibold transition-colors hover:bg-gray-100 md:text-lg"
            style={{ color: primaryButtonTextColor }}
          >
            Записаться на воркшоп
          </Link>

          {/* Secondary Button - Email */}
          <a
            href={`mailto:${email}`}
            className="rounded-full border-2 border-white bg-transparent px-8 py-4 text-center text-base font-semibold text-white transition-colors hover:bg-white/10 md:text-lg"
          >
            Написать нам
          </a>
        </div>
      </div>
    </div>
  );
};
