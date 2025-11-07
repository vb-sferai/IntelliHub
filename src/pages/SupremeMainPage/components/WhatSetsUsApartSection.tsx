import PedestrianIcon from '../../../assets/imgs/supreme/icon-pedestrian.svg';
import GrowthIcon from '../../../assets/imgs/supreme/icon-growth.svg';
import GraphicalDataFlowIcon from '../../../assets/imgs/supreme/icon-graphical-data-flow.svg';

const FEATURES = [
  {
    icon: PedestrianIcon,
    title: 'Камерные группы с персональным подходом',
    description: 'Мы на связи, помогаем разобраться, если что-то не получается',
  },
  {
    icon: GrowthIcon,
    title: 'Кастомные решения для бизнеса',
    description: 'Подстраиваем программу под задачи вашей компании',
  },
  {
    icon: GraphicalDataFlowIcon,
    title: 'Измеримый результат',
    description: '96% участников начинают применять AI в работе уже через неделю после обучения',
  },
];

export const WhatSetsUsApartSection = () => {
  return (
    <section className="bg-white px-6 py-24 md:px-12 lg:px-16" id="what-sets-us-apart">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 md:gap-16">
        {/* Heading */}
        <div className="flex flex-col gap-4">
          <h2 className="text-[30px] font-semibold leading-[30px] tracking-[-1.2px] text-black md:text-5xl md:leading-[1.2] md:tracking-[-1.44px]">
            Почему Sfer.ai
          </h2>
          <p className="text-base font-medium leading-[1.3] tracking-[-0.48px] text-[#aeb0b3] md:text-xl md:font-normal md:leading-[30px] md:tracking-[0px] md:text-[#858585]">
            Наши программы построены в первую очередь вокруг людей, а не технологий
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mx-auto flex w-full max-w-[343px] flex-col gap-4 md:max-w-full md:flex-row">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="flex h-[240px] w-full flex-1 flex-col gap-4 bg-[#f7f7f5] px-[20px] py-[24px] md:h-[299px] md:justify-between md:gap-0 md:p-8"
            >
              <img src={feature.icon} alt="" className="size-10 shrink-0" />
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold leading-[1.3] tracking-[-0.6px] text-black">
                  {feature.title}
                </h3>
                <p className="text-base font-normal leading-[1.3] tracking-[-0.48px] text-[#858585]">
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



