import React from 'react';
import { MeshGradient } from '@paper-design/shaders-react';

interface ReviewsHeroProps {
  title?: string;
  gradientColors?: string[];
}

/**
 * Hero секция страницы отзывов с MeshGradient фоном
 */
export const ReviewsHero: React.FC<ReviewsHeroProps> = ({
  title = 'Отзывы выпускников программ sfer.ai',
  gradientColors = ['#80C2FF', '#061346', '#3A83E8'],
}) => {
  return (
    <div className="relative flex h-[50vh] min-h-[320px] w-full items-center justify-center">
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
      <div className="relative z-10 flex w-full flex-col items-center gap-4 px-4 text-center text-white sm:px-12 lg:px-16 xl:max-w-[1408px] xl:px-0">
        {/* Star Icons */}
        <div className="mb-2 text-3xl flex gap-1">⭐⭐⭐⭐⭐</div>

        <h1 className="text-2xl font-semibold xs:text-3xl md:text-[42px] lg:text-[48px] xl:text-[56px]">
          {title}
        </h1>
      </div>
    </div>
  );
};
