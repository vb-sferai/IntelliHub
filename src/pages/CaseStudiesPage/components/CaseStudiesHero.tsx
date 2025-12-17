import React from 'react';
import { MeshGradient } from '@paper-design/shaders-react';

interface CaseStudiesHeroProps {
  title?: string;
  subtitle?: string;
  gradientColors?: string[];
}

/**
 * Hero секция страницы кейсов с MeshGradient фоном
 */
export const CaseStudiesHero: React.FC<CaseStudiesHeroProps> = ({
  title = 'Наши кейсы',
  subtitle = 'Реальные истории трансформации бизнеса с помощью ИИ',
  gradientColors = ['#80C2FF', '#061346', '#3A83E8'],
}) => {
  return (
    <div className="relative flex w-full items-center justify-center py-16 md:py-20 lg:py-24">
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
      <div className="relative z-10 flex w-full flex-col items-center gap-3 px-4 text-center text-white sm:px-12 lg:px-16 xl:max-w-[1408px] xl:px-0">
        <h1 className="text-2xl font-semibold xs:text-3xl md:text-4xl lg:text-5xl">
          {title}
        </h1>

        {subtitle && (
          <p className="max-w-2xl text-base text-white/90 md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
