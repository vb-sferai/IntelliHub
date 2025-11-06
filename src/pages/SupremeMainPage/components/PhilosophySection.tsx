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
  },
  {
    icon: TimePlotIcon,
    text: 'Today, you can create products in hours instead of weeks or months',
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
        <div className="flex w-full flex-col gap-[16px] md:flex-row md:gap-[14px]">
          {/* Large card with mission */}
          <div
            className="relative flex h-[388px] w-full flex-col justify-between overflow-hidden px-[20px] py-[24px] md:h-[551px] md:w-[832px] md:p-8"
          >
            <DitheringBackground />
            <div className="relative z-10">
              <p className="text-base font-normal leading-[1.3] tracking-[-0.48px] text-white">
                Our Mission
              </p>
            </div>
            <div className="relative z-10">
              <h3
                className="text-[36px] font-semibold leading-none tracking-[-0.72px] text-white md:text-5xl md:leading-[1.2] md:tracking-[-1.44px]"
              >
                To help people and companies become AI-native
              </h3>
            </div>
          </div>

          {/* Small cards column */}
          <div className="flex flex-1 flex-col gap-[16px] md:gap-4">
            {PHILOSOPHY_CARDS.map((card, index) => (
              <div
                key={index}
                className="flex h-[193px] w-full flex-col justify-between bg-[#f7f7f5] px-[20px] py-[24px] md:h-[173px] md:p-6"
              >
                <img src={card.icon} alt="" className="size-10" />
                <p
                  className="text-base font-normal leading-[1.3] tracking-[-0.48px] text-black"
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



