import { MeshGradient } from '@paper-design/shaders-react';

export const FinalCTASection = () => {
  const handleScrollToForm = () => {
    const form = document.getElementById('registration');
    form?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="px-4 sm:px-12 lg:px-16 xl:px-0 flex justify-center mt-16 lg:mt-24">
      <div className="relative w-full max-w-[1277px] py-12 lg:py-16 overflow-hidden rounded-2xl">
        <MeshGradient
          className="absolute inset-0 w-full h-full"
          speed={0.18}
          colors={['#2152ba', '#0e0967', '#f075a6', '#005194']}
          distortion={0.8}
          swirl={0.1}
          grainMixer={0}
        />
        <div className="relative z-10 flex flex-col gap-6 items-start px-6 sm:px-10 lg:px-16 max-w-[700px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold text-white leading-[1.2] tracking-[-0.03em]">
            <span className="lg:whitespace-nowrap">Сделайте AI-инструменты частью своего</span>
            <br className="hidden lg:block" />
            <span> стека и войдите в топ-1% рынка</span>
          </h2>
          <p className="text-base lg:text-lg text-white/90 leading-[1.5]">
            Научитесь создавать проекты любого уровня — от лендингов до прототипов сервисов
          </p>
          <button
            onClick={handleScrollToForm}
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Стать AI-first
          </button>
        </div>
      </div>
    </div>
  );
};
