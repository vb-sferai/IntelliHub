import { VideoEmbed } from './VideoEmbed';
import { MORE_EXAMPLES } from '../data';

export const MoreExamplesSection = () => {
  return (
    <div className="flex flex-col gap-8 lg:gap-12 mt-20 lg:mt-32">
      {/* Section Title */}
      <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-[48px] font-semibold text-black leading-[1.2] tracking-[-0.03em] text-center">
        Что ещё можно сделать в Cursor<br />
        в связке с Claude Code?
      </h2>

      {/* Videos */}
      <div className="flex flex-col gap-12 lg:gap-16 items-center">
        {MORE_EXAMPLES.videos.map((video) => (
          <div key={video.id} className="flex flex-col gap-4 w-full max-w-[700px]">
            <VideoEmbed
              videoId={video.videoId}
              showPlayButton={true}
              duration={video.duration}
            />
            <p className="text-[#858585] text-sm md:text-base text-center">
              {video.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
