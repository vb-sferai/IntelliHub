import PedestrianIcon from '../../../assets/imgs/supreme/icon-pedestrian.svg';
import GrowthIcon from '../../../assets/imgs/supreme/icon-growth.svg';
import GraphicalDataFlowIcon from '../../../assets/imgs/supreme/icon-graphical-data-flow.svg';

const FEATURES = [
  {
    icon: PedestrianIcon,
    title: 'Small groups with personal guidance',
    description: "We're here to help when something doesn't click",
  },
  {
    icon: GrowthIcon,
    title: 'Real impact',
    description: '96% of participants start using AI at work within a week',
  },
  {
    icon: GraphicalDataFlowIcon,
    title: 'Tailored business solutions',
    description: "Every program adapts to your company's specific needs",
  },
];

export const WhatSetsUsApartSection = () => {
  return (
    <section className="bg-white px-6 py-24 md:px-12 lg:px-16" id="what-sets-us-apart">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-16">
        {/* Heading */}
        <div className="mx-auto flex max-w-[768px] flex-col gap-2 text-center">
          <h2 className="text-5xl font-semibold leading-[1.2] tracking-[-1.44px] text-black">
            What sets us apart
          </h2>
          <p className="text-xl font-normal leading-[30px] text-[#858585]">
            Our programs are built around people, not just technology
          </p>
        </div>

        {/* Feature Cards */}
        <div className="flex w-full flex-col gap-4 md:flex-row">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="flex min-h-[240px] min-w-[320px] flex-1 flex-col justify-between bg-[#f7f7f5] p-8 md:h-[299px]"
            >
              <img src={feature.icon} alt="" className="size-10" />
              <div className="flex flex-col gap-4">
                <h3
                  className="text-2xl font-semibold leading-[30px] text-black"
                >
                  {feature.title}
                </h3>
                <p
                  className="text-base font-normal leading-[1.3] tracking-[-0.48px] text-[#858585]"
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



