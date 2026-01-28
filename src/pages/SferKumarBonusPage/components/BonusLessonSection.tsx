import { VideoEmbed } from './VideoEmbed';
import { BONUS_LESSON } from '../data';

export const BonusLessonSection = () => {
  return (
    <div className="flex flex-col gap-8 lg:gap-12 mt-16 lg:mt-24">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl lg:text-[48px] font-semibold text-black leading-[1.2] tracking-[-0.03em] text-center">
        Бонусный урок
      </h2>

      {/* Card */}
      <div className="bg-[#F7F7F5] p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row gap-6 lg:gap-10">
        {/* Left - Text */}
        <div className="flex flex-col justify-between lg:w-[40%] lg:min-w-[300px]">
          <h3 className="text-xl md:text-2xl lg:text-[28px] font-semibold text-black leading-[1.25] whitespace-pre-line">
            {BONUS_LESSON.title}
          </h3>
          <p className="text-sm md:text-base text-[#858585] leading-[1.5] mt-6 lg:mt-0">
            {BONUS_LESSON.subtitle}
          </p>
        </div>

        {/* Right - Video */}
        <div className="lg:flex-1">
          <VideoEmbed
            videoId={BONUS_LESSON.videoId}
            showPlayButton={true}
            duration={BONUS_LESSON.videoDuration}
          />
        </div>
      </div>
    </div>
  );
};
