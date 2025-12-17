import React from 'react';
import { MeshGradient } from '@paper-design/shaders-react';

interface CaseStudiesCTAProps {
  title?: string;
  description?: string;
  calendlyUrl?: string;
  email?: string;
  gradientColors?: string[];
  primaryButtonTextColor?: string;
}

/**
 * CTA секция страницы кейсов с MeshGradient фоном
 */
export const CaseStudiesCTA: React.FC<CaseStudiesCTAProps> = ({
  title = 'Готовы к трансформации?',
  description = 'Обсудим, как ИИ может помочь вашему бизнесу достичь подобных результатов',
  calendlyUrl = 'https://calendly.com/as-sfer/30min',
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
        {/* Text */}
        <div className="flex flex-col gap-4 text-center text-white lg:text-left">
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl xl:text-5xl">
            {title}
          </h2>
          <p className="max-w-xl text-base text-white/90 md:text-lg">
            {description}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex min-w-[240px] flex-col gap-4 lg:min-w-[280px]">
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-8 py-4 text-center text-base font-semibold transition-colors hover:bg-gray-100 md:text-lg"
            style={{ color: primaryButtonTextColor }}
          >
            Запланировать звонок
          </a>

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
