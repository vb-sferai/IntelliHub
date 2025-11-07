import React from 'react';
import { MeshGradient } from '@paper-design/shaders-react';
import { Button } from '../../../../components/Button';
import { JOB_DATA } from '../data';
import kirill from '../../../../assets/imgs/kirill.png';
import LogoImg from '../../../../assets/imgs/logo.svg';

export const PmJobPage: React.FC = () => {
  const handleApply = () => {
    // For now, just a placeholder - will need to be connected to actual form
    window.open(JOB_DATA.cta.formUrl, '_blank');
  };

  return (
    <div className="flex flex-col w-full">
      <style>{`
        .pm-job-page-primary {
          color: #005EE0;
        }
      `}</style>

      {/* Hero Section with Gradient - like BasePage */}
      <MeshGradient
        speed={0.38}
        colors={['#80C2FF', '#061346', '#3A83E8']}
        distortion={0.79}
        swirl={0.4}
        grainMixer={0.3}
        grainOverlay={0}
        frame={32579.315000002767}
        style={{ position: 'relative', height: '50vh', width: '100%' }}
        className="-top-14 sm:-top-20"
      />

      <div className="absolute top-[15vh] xs:top-[18vh] sm:top-[20vh] left-4 sm:left-12 lg:left-16 xl:left-[calc(calc(100vw-1408px)/2)] w-[calc(100vw-32px)] sm:w-[calc(100vw-96px)] lg:w-[calc(100vw-128px)] xl:w-352 flex flex-col md:flex-row gap-3 xs:gap-5 md:gap-2 md:justify-between text-white">
        <div className="flex flex-col w-full text-center items-center gap-3 xs:gap-4 xl:gap-4">
          <h1 className="text-2xl xs:text-3xl md:text-[42px] lg:text-[48px] xl:text-[56px] font-semibold">
            Вакансия бизнес-ассистента /<br/>руководителя проектов
          </h1>
          <span className="md:max-w-95 text-center text-sm xs:text-base lg:text-base xl:text-lg font-medium mb-2.5">
            Удаленная работа в sfer.ai
          </span>
        </div>
      </div>

      <div className="flex flex-col px-4 sm:px-12 lg:px-16 xl:px-0 xl:w-250 2xl:w-260 xl:mx-auto -mt-4 lg:mt-5">

        {/* Introduction Section */}
        <section className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start mt-8 lg:mt-12">
          <div className="md:w-auto flex-shrink-0">
            <img
              src={kirill}
              alt="Кирилл"
              className="w-48 h-48 lg:w-56 lg:h-56 rounded-full object-cover mx-auto md:mx-0"
            />
          </div>
          <div className="flex-1 space-y-4">
            <p className="text-lg lg:text-xl font-semibold text-black">{JOB_DATA.intro.greeting}</p>
            <p className="text-base text-gray-500 leading-[150%]">{JOB_DATA.intro.background}</p>
            <p className="text-base text-gray-500 leading-[150%]">{JOB_DATA.intro.currentRole}</p>
            <p className="text-base text-gray-500 leading-[150%]">{JOB_DATA.intro.context}</p>
          </div>
        </section>

        {/* Company Section */}
        <section className="flex flex-col gap-4 mt-16 lg:mt-20">
          <div className="flex flex-col gap-2">
            <img src={LogoImg} alt="sfer.ai" className="h-10 lg:h-12 mb-4 self-start" style={{ filter: 'brightness(0)' }} />
            <h3 className="text-lg lg:text-xl pm-job-page-primary mb-4">{JOB_DATA.company.tagline}</h3>
            <p className="text-base text-gray-500 leading-[150%] mb-2">{JOB_DATA.company.description}</p>
            <p className="text-base text-gray-500 leading-[150%] mb-6">{JOB_DATA.company.achievements}</p>

            <div className="bg-[#F7F7F5] p-6 lg:p-10 rounded-lg">
              <h3 className="text-xl lg:text-2xl font-semibold mb-4">{JOB_DATA.company.mission.title}</h3>
              <p className="text-base text-gray-500 leading-[150%]">{JOB_DATA.company.mission.description}</p>
            </div>
          </div>
        </section>

        {/* Role Description Section */}
        <section className="flex flex-col gap-6 lg:gap-8 mt-16 lg:mt-20">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] xl:text-5xl font-semibold text-black">
              {JOB_DATA.role.title}
            </h2>
            <p className="text-base text-gray-500 leading-[24px] mb-4">{JOB_DATA.role.description}</p>

            <h3 className="text-xl lg:text-2xl font-semibold mb-4">Чем нужно будет заниматься:</h3>
            <div className="space-y-4">
              {JOB_DATA.role.responsibilities.map((resp, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <span className="text-blue-600 text-2xl leading-5">•</span>
                  <div>
                    <span className="font-semibold">{resp.title}:</span>{' '}
                    <span className="text-base text-gray-500">{resp.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="flex flex-col gap-6 lg:gap-8 mt-16 lg:mt-20 -mx-4 sm:-mx-12 lg:-mx-16 xl:mx-0 px-4 sm:px-12 lg:px-16 xl:px-0 xl:w-[100vw] xl:relative xl:left-[calc(-50vw+50%)] bg-[#F7F7F5]">
          <div className="px-4 sm:px-12 lg:px-16 xl:px-0 xl:w-250 2xl:w-260 xl:mx-auto py-8 lg:py-15">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] xl:text-5xl font-semibold text-black">
                Вы идеально подходите, если:
              </h2>

              <div className="space-y-3 mb-8">
                {JOB_DATA.requirements.mustHave.map((req, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <svg
                      className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base text-gray-700">{req}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white p-6 lg:p-10 rounded-lg">
                <h3 className="text-xl lg:text-2xl font-semibold mb-4">{JOB_DATA.requirements.niceToHave.title}:</h3>
                <div className="space-y-2">
                  {JOB_DATA.requirements.niceToHave.items.map((item, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <span className="text-blue-600 text-2xl leading-5">•</span>
                      <span className="text-base text-gray-500">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions Section */}
        <section className="flex flex-col gap-6 lg:gap-8 mt-16 lg:mt-20">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] xl:text-5xl font-semibold text-black">
              Что мы предлагаем
            </h2>
            <h3 className="text-xl lg:text-2xl font-semibold">Условия:</h3>
            <div className="space-y-3">
              {JOB_DATA.conditions.items.map((item, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <span className="text-blue-600 text-2xl leading-5">•</span>
                  <span className="text-base text-gray-500">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with gradient background */}
        <div className="flex relative w-full mt-16 lg:mt-20 lg:items-center">
          <MeshGradient
            speed={0.38}
            colors={['#80C2FF', '#061346', '#3A83E8']}
            distortion={0.79}
            swirl={0.4}
            grainMixer={0.3}
            grainOverlay={0}
            frame={32579.315000002767}
            style={{width: '100%'}}
            className="h-80 sm:h-72 lg:h-64"
          />
          <div className="absolute flex flex-col lg:flex-row lg:justify-between w-full h-80 sm:h-72 lg:h-64 p-6 xs:p-8 sm:p-10 lg:p-15 lg:items-center gap-6 lg:gap-0">
            <span className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-semibold text-white leading-[120%] z-10 relative max-w-xs xs:max-w-sm sm:max-w-md">
              Если вам интересно<br className="hidden lg:block"/>поработать вместе,<br className="hidden lg:block"/>заполните небольшую форму
            </span>
            <div className="flex">
              <Button color="white" width="100%" onClick={handleApply}>
                <span className="whitespace-nowrap">{JOB_DATA.cta.buttonText}</span>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};