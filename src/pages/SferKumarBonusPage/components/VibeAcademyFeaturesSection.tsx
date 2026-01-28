import {
  CalendarClock,
  Wrench,
  CircleUser,
  Pencil,
  MessageSquareText,
  Bookmark,
  Presentation,
  LayoutGrid,
  type LucideIcon,
} from 'lucide-react';
import { VIBE_ACADEMY_FEATURES } from '../data';

// Map icon names to Lucide components
const iconMap: Record<string, LucideIcon> = {
  CalendarClock,
  Wrench,
  CircleUser,
  Pencil,
  MessageSquareText,
  Bookmark,
  Presentation,
  LayoutGrid,
};

interface FeatureCardProps {
  icon: string;
  text: string;
}

const FeatureCard = ({ icon, text }: FeatureCardProps) => {
  const IconComponent = iconMap[icon];

  return (
    <div className="bg-[#F5F5F5] rounded-2xl p-6 lg:p-8 flex flex-col gap-4">
      {IconComponent && (
        <IconComponent
          className="w-7 h-7 shrink-0"
          style={{ color: '#005EE0' }}
          strokeWidth={1.5}
        />
      )}
      <p className="text-base lg:text-lg text-black leading-[1.4] font-medium">
        {text}
      </p>
    </div>
  );
};

export const VibeAcademyFeaturesSection = () => {
  // Split items: first 6 for 3-column grid, last 2 for 2-column grid
  const topItems = VIBE_ACADEMY_FEATURES.items.slice(0, 6);
  const bottomItems = VIBE_ACADEMY_FEATURES.items.slice(6);

  return (
    <div id="programs" className="flex flex-col gap-10 lg:gap-14 mt-20 lg:mt-32 scroll-mt-24">
      {/* Section Title */}
      <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-[42px] font-semibold text-black leading-[1.2] tracking-[-0.03em] text-center">
        {VIBE_ACADEMY_FEATURES.title}
      </h2>

      {/* Top Grid: 3 columns on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {topItems.map((item, index) => (
          <FeatureCard key={index} icon={item.icon} text={item.text} />
        ))}
      </div>

      {/* Bottom Grid: 2 columns on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 -mt-6 lg:-mt-10">
        {bottomItems.map((item, index) => (
          <FeatureCard key={index + 6} icon={item.icon} text={item.text} />
        ))}
      </div>
    </div>
  );
};
