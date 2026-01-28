import { MeshGradient } from '@paper-design/shaders-react';
import { INSTRUCTORS } from '../data';

export const InstructorsSection = () => {
  return (
    <div id="speaker" className="flex flex-col gap-8 lg:gap-12 mt-20 xl:mt-37 w-full">
      <h2 className="text-3xl xs:text-4xl lg:text-[42px] xl:text-[48px] font-semibold leading-[1.2] tracking-[-0.03em] text-black">
        Кто преподаёт
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {INSTRUCTORS.map((instructor, index) => (
          <div
            key={index}
            className="bg-[#F7F7F5] p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8"
          >
            {/* Текстовая часть */}
            <div className="flex flex-col justify-between flex-1 order-2 lg:order-1">
              <div>
                <h3 className="text-[20px] font-semibold text-black leading-[1.25]">
                  {instructor.name}
                </h3>
                <p className="text-[14px] text-black mt-3 whitespace-pre-line font-normal leading-[1.7]">
                  {instructor.role}
                </p>
              </div>
              <p className="text-[#858585] text-[14px] leading-[1.4] mt-4 lg:mt-0 font-normal">
                {instructor.description}
              </p>
            </div>

            {/* Кружок с градиентом и фото */}
            <div className="relative w-[160px] h-[160px] lg:w-[239px] lg:h-[239px] rounded-full overflow-hidden shrink-0 self-center lg:self-start order-1 lg:order-2 will-change-transform">
              {/* Градиент заполняет весь кружок */}
              <MeshGradient
                className="absolute inset-0 w-full h-full"
                speed={0.18}
                colors={['#2152ba', '#0e0967', '#f075a6', '#005194']}
                distortion={0.8}
                swirl={0.1}
                grainMixer={0}
              />

              {/* Фото внутри кружка */}
              {instructor.photo && (
                <img
                  src={instructor.photo}
                  alt={instructor.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: instructor.photoPosition }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
