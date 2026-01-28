import { VideoEmbed } from './VideoEmbed';
import { HERO } from '../data';
import HeroBg from '../../SferKumarSoloWebPage/assets/Rectangle 266.png';

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col -mt-14 sm:-mt-20">
      {/* Hero background image */}
      <img
        src={HeroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-12 lg:px-16 xl:px-[calc((100vw-1248px)/2)] py-20 lg:py-24">
        {/* Title */}
        <h1 className="text-3xl xs:text-4xl md:text-5xl lg:text-[56px] xl:text-[64px] font-semibold leading-[1.15] tracking-[-0.03em] text-white text-center mb-10 lg:mb-14">
          <span className="lg:whitespace-nowrap">Главный подарок: урок по интерфейсу</span>
          <br className="hidden lg:block" />
          <span className="lg:hidden"> </span>
          и настройке Cursor
        </h1>

        {/* Video with play button overlay */}
        <div className="w-full max-w-[900px]">
          <VideoEmbed
            videoId={HERO.videoId}
            showPlayButton={true}
            duration={HERO.videoDuration}
          />
        </div>
      </div>
    </div>
  );
};
