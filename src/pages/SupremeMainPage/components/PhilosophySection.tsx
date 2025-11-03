import PedestrianIcon from '../../../assets/imgs/supreme/icon-pedestrian.svg';
import UnlockedIcon from '../../../assets/imgs/supreme/icon-unlocked.svg';
import TimePlotIcon from '../../../assets/imgs/supreme/icon-time-plot.svg';
import { DitheringBackground } from './DitheringBackground';

const PHILOSOPHY_CARDS = [
  {
    icon: PedestrianIcon,
    text: "We believe AI isn't here to replace humans — it's a partner that gives you access to the skills of an entire team at almost no cost",
  },
  {
    icon: UnlockedIcon,
    text: 'For businesses, AI unlocks automation and drives higher margins',
    textWidth: '368px',
  },
  {
    icon: TimePlotIcon,
    text: 'Today, you can create products in hours instead of weeks or months',
    textWidth: '351px',
  },
];

export const PhilosophySection = () => {
  return (
    <section className="bg-white px-6 py-24 md:px-12 lg:px-16" id="philosophy">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
        {/* Title */}
        <h2 className="text-2xl font-semibold leading-[30px] text-black">
          The sfer.ai philosophy
        </h2>

        {/* Content */}
        <div className="flex w-full flex-col gap-[14px] md:flex-row">
          {/* Large card with mission */}
          <div
            className="relative flex h-[551px] min-w-[320px] flex-col justify-between overflow-hidden p-8"
            style={{ width: '832px' }}
          >
            <DitheringBackground />
            <div className="relative z-10 flex flex-col gap-6">
              <p className="text-base font-normal leading-[1.3] tracking-[-0.48px] text-white">
                Our Mission
              </p>
            </div>
            <div className="relative z-10">
              <h3
                className="text-5xl font-semibold leading-[1.2] tracking-[-1.44px] text-white"
                style={{ width: '459px' }}
              >
                To help people and companies become AI-native
              </h3>
            </div>
          </div>

          {/* Small cards column */}
          <div className="flex flex-1 flex-col gap-4">
            {PHILOSOPHY_CARDS.map((card, index) => (
              <div
                key={index}
                className="flex h-[173px] min-w-[320px] flex-col justify-between bg-[#f7f7f5] p-6"
              >
                <img src={card.icon} alt="" className="size-10" />
                <p
                  className="text-base font-normal leading-[1.3] tracking-[-0.48px] text-black"
                  style={{ width: card.textWidth || 'auto' }}
                >
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};



