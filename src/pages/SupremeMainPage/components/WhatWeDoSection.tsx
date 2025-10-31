import TeamsIcon from '../../../assets/imgs/supreme/icon-teams.svg';
import FlashIcon from '../../../assets/imgs/supreme/icon-flash.svg';
import { Button } from '../../../components/Button';

const SERVICES = [
  {
    icon: TeamsIcon,
    title: 'For teams',
    description: 'AI programs, consulting, and strategy sessions for teams ready to bring AI into their everyday work.',
    buttonText: 'TEAM TRAINING',
    buttonHref: '#team-training',
  },
  {
    icon: FlashIcon,
    title: 'Custom AI automations',
    description: 'End-to-end AI solutions tailored to your business needs.',
    buttonText: 'CUSTOM AI AUTOMATIONS',
    buttonHref: '#custom-ai-automations',
  },
];

export const WhatWeDoSection = () => {
  return (
    <section className="flex flex-col items-center gap-16 bg-white px-6 py-24 md:px-12 lg:px-16" id="what-we-do">
      {/* Title */}
      <div className="w-full max-w-[1280px]">
        <h2 className="text-center text-5xl font-semibold leading-[1.2] tracking-[-1.44px] text-black">
          What we do
        </h2>
      </div>

      {/* Cards */}
      <div className="flex w-full max-w-[1280px] flex-col gap-4 md:flex-row">
        {SERVICES.map((service, index) => (
          <div
            key={index}
            className="flex h-[521px] min-w-[320px] flex-1 flex-col justify-between bg-[#f7f7f5] p-8"
          >
            {/* Content */}
            <div className="flex flex-col gap-6">
              <img src={service.icon} alt="" className="size-10" />
              <div className="flex flex-col gap-2">
                <h3 className="w-[300px] text-2xl font-semibold leading-[30px] text-black">
                  {service.title}
                </h3>
                <p 
                  className="text-base font-normal leading-[1.3] tracking-[-0.48px] text-black"
                  style={{ width: index === 0 ? '367px' : '239px' }}
                >
                  {service.description}
                </p>
              </div>
            </div>

            {/* Button */}
            <div>
              <a href={service.buttonHref}>
                <button
                  className="flex h-[70px] items-center justify-center rounded-[68px] bg-[#005ee0] px-8 py-5 font-['Geist_Mono'] text-base font-semibold leading-[1.2] tracking-[0.8px] text-white shadow-sm transition-colors hover:bg-[#0051c4]"
                  style={{ width: index === 0 ? '240px' : '308px' }}
                >
                  {service.buttonText}
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

