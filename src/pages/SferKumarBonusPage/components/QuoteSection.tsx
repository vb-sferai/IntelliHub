import { QUOTE_SECTION } from '../data';

export const QuoteSection = () => {
  return (
    <div className="flex flex-col gap-6 mt-20 lg:mt-32 items-center text-center max-w-[900px] mx-auto">
      <h2 className="text-2xl md:text-3xl lg:text-[42px] font-semibold text-black leading-[1.2] tracking-[-0.03em] lg:whitespace-pre-line">
        {QUOTE_SECTION.title}
      </h2>
      <p className="text-[#858585] text-base lg:text-lg leading-[1.6] max-w-[600px]">
        {QUOTE_SECTION.subtitle}
      </p>
    </div>
  );
};
