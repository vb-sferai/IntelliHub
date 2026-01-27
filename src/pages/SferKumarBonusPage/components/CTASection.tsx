import { RegistrationForm } from '../../SferKumarSoloWebPage/components/RegistrationForm';
import { CTA } from '../data';
import ctaBg from '../../SferKumarSoloPage/assets/Rectangle 266.png';

export const CTASection = () => {
  return (
    <div
      id="registration"
      className="px-4 sm:px-12 lg:px-16 xl:px-0 flex justify-center mt-20 lg:mt-32"
    >
      <div className="relative w-full max-w-[1277px] py-12 lg:py-16 overflow-hidden rounded-2xl">
        <img
          src={ctaBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-between px-6 sm:px-10 lg:px-16">
          {/* Left - Text */}
          <div className="flex flex-col gap-4 max-w-[500px]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-semibold text-white leading-[1.1] tracking-[-0.03em] sm:whitespace-pre-line">
              {CTA.title}
            </h2>
            <p className="text-base lg:text-lg text-white/90 leading-[1.5]">
              {CTA.subtitle}
            </p>
          </div>
          {/* Right - Form */}
          <div className="w-full lg:w-[360px] xl:w-[400px]">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </div>
  );
};
