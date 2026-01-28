import { MIRO_SECTION } from '../data';

export const MiroSection = () => {
  return (
    <a
      href={MIRO_SECTION.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center text-center mt-16 lg:mt-24 py-8 lg:py-12 hover:opacity-80 transition-opacity cursor-pointer"
    >
      {/* Title */}
      <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-[48px] font-semibold text-black leading-[1.2] tracking-[-0.03em]">
        Дополнительные материалы —<br />
        <span className="underline decoration-2 underline-offset-4 hover:decoration-[#005EE0] transition-colors">в Miro</span>
      </h2>

      {/* Subtitle */}
      <p className="text-sm md:text-base lg:text-lg text-[#858585] leading-[1.5] mt-4 lg:mt-6 max-w-[500px]">
        Инструкции по установке Claude Code в Cursor<br />
        и оплате Cursor с российской карты
      </p>
    </a>
  );
};
