import { CheckSquare } from 'lucide-react';
import { SKILLS_CHECKLIST } from '../data';

export const SkillsChecklistSection = () => {
  return (
    <div className="flex flex-col gap-10 lg:gap-14 mt-20 lg:mt-32">
      {/* Section Title */}
      <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-[42px] font-semibold text-black leading-[1.2] tracking-[-0.03em] text-center max-w-[900px] mx-auto whitespace-pre-line">
        {SKILLS_CHECKLIST.title}
      </h2>

      {/* Checklist Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 lg:gap-y-8">
        {SKILLS_CHECKLIST.items.map((item, index) => (
          <div key={index} className="flex gap-4 items-start">
            {/* Checkbox Icon */}
            <CheckSquare
              className="w-6 h-6 shrink-0 mt-0.5"
              style={{ color: '#005EE0' }}
              strokeWidth={2}
            />

            {/* Text Content */}
            <p className="text-base lg:text-lg text-black leading-[1.5]">
              {item.text}
              {item.highlight && (
                <span className="font-semibold" style={{ color: '#005EE0' }}>
                  {item.highlight}
                </span>
              )}
              {item.suffix}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
