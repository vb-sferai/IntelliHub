import TeamsIcon from '../../../assets/imgs/supreme/icon-teams.svg';
import FlashIcon from '../../../assets/imgs/supreme/icon-flash.svg';
import { Button } from '../../../components/Button';

const SERVICES = [
  {
    icon: TeamsIcon,
    title: 'Открытые программы',
    description: 'Воркшопы и практикумы для всех, кто хочет применять AI в жизни и работе.',
    buttonText: 'СМОТРЕТЬ ВСЕ ПРОГРАММЫ',
    buttonHref: '/edu',
  },
  {
    icon: FlashIcon,
    title: 'Обучение для команд',
    description: 'Корпоративные программы, консалтинг и стратегические сессии для компаний, которые хотят внедрить AI в свои процессы.',
    buttonText: 'ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ',
    buttonHref: '/teams',
  },
];

export const WhatWeDoSection = () => {
  return (
    <section className="flex flex-col items-center gap-16 bg-white px-6 py-24 md:px-12 lg:px-16" id="what-we-do">
      {/* Title */}
      <div className="w-full max-w-[1280px]">
        <h2 className="text-center text-5xl font-semibold leading-[1.2] tracking-[-1.44px] text-black">
          Что мы делаем
        </h2>
      </div>

      {/* Cards */}
      <div className="flex w-full max-w-[1280px] flex-col gap-6 md:flex-row md:gap-4">
        {SERVICES.map((service, index) => {
          return (
            <div
              key={index}
              className="flex w-full flex-col gap-10 rounded-[40px] bg-[#f7f7f5] p-6 md:h-[521px] md:min-w-[320px] md:flex-1 md:justify-between md:p-8"
            >
              {/* Content */}
              <div className="flex flex-col gap-6">
                <img src={service.icon} alt="" className="size-10" />
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-semibold leading-[30px] text-black md:w-[300px]">
                    {service.title}
                  </h3>
                  <p
                    className="text-base font-normal leading-[1.3] tracking-[-0.48px] text-black"
                    style={{ maxWidth: '367px' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Button */}
              <div className="flex">
                <a href={service.buttonHref} className="w-full">
                  <button
                    className="flex h-[70px] w-full items-center justify-center rounded-[68px] bg-[#005ee0] px-6 py-5 font-geist text-base font-semibold uppercase tracking-[0.8px] text-white shadow-sm transition-colors hover:bg-[#004bb8] md:px-8"
                  >
                    {service.buttonText}
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

