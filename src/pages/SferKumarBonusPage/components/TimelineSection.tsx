import { AI_EVOLUTION } from '../data';

export const TimelineSection = () => {
  return (
    <div className="flex flex-col gap-8 lg:gap-12 mt-20 lg:mt-32">
      {/* Section Title */}
      <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-[48px] font-semibold text-black leading-[1.2] tracking-[-0.03em] text-center">
        {AI_EVOLUTION.sectionTitle}
      </h2>

      {/* Desktop Timeline - Horizontal */}
      <div className="hidden lg:block relative">
        {/* Single continuous line - positioned to align with circles */}
        <div className="absolute left-0 right-0 top-[26px] h-[2px] bg-[#005EE0]">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-[#005EE0]" />
        </div>

        <div className="grid grid-cols-4 gap-6">
          {AI_EVOLUTION.items.map((item) => (
            <div key={item.number} className="flex flex-col">
              {/* Number */}
              <span className="text-sm text-[#005EE0] font-medium h-[20px]">
                {String(item.number).padStart(2, '0')}
              </span>

              {/* Circle */}
              <div className="w-3 h-3 bg-[#005EE0] rounded-full relative z-10 mb-4" />

              {/* Content */}
              <h3 className="text-lg xl:text-xl font-semibold text-black leading-[1.3] mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-[#858585] leading-[1.5]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Timeline - Vertical */}
      <div className="lg:hidden flex flex-col">
        {AI_EVOLUTION.items.map((item, index) => (
          <div key={item.number} className="flex gap-4 relative pb-8">
            {/* Vertical line */}
            {index < AI_EVOLUTION.items.length - 1 && (
              <div className="absolute left-[5px] top-3 bottom-0 w-[2px] bg-[#005EE0]" />
            )}

            {/* Circle */}
            <div className="w-3 h-3 bg-[#005EE0] rounded-full shrink-0 mt-1 z-10" />

            {/* Content */}
            <div className="flex-1">
              <span className="text-sm text-[#005EE0] font-medium">
                {String(item.number).padStart(2, '0')}
              </span>
              <h3 className="text-lg font-semibold text-black leading-[1.3] mt-1 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#858585] leading-[1.5]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
