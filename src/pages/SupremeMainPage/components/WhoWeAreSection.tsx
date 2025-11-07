import EducationIcon from '../../../assets/imgs/supreme/icon-education.svg';
import GroupIcon from '../../../assets/imgs/supreme/icon-group.svg';
import StarIcon from '../../../assets/imgs/supreme/icon-star.svg';
import BatchIcon from '../../../assets/imgs/supreme/icon-batch.svg';

const STATISTICS = [
  {
    value: '1,600+',
    icon: EducationIcon,
    description: (
      <>
        участников прошли<br />
        обучение
      </>
    ),
  },
  {
    value: '200+',
    icon: GroupIcon,
    description: (
      <>
        компаний внедрили<br />
        искусственный интеллект в свои<br />
        процессы с нашей помощью
      </>
    ),
  },
  {
    value: '9.4/10',
    icon: StarIcon,
    description: (
      <>
        средняя оценка наших<br />
        воркшопов
      </>
    ),
  },
  {
    value: '96%',
    icon: BatchIcon,
    description: (
      <>
        сотрудников начинают применять<br />
        AI-решения в последующие 7 дней<br />
        после обучения
      </>
    ),
  },
];

export const WhoWeAreSection = () => {
  return (
    <section className="bg-white px-6 py-24 md:px-12 lg:px-16 xl:px-[112px]" id="who-we-are">
      <div className="mx-auto flex w-full max-w-[1216px] flex-col gap-12 md:flex-row md:gap-[276px]">
        {/* Left column - Title and description */}
        <div className="flex w-full max-w-[458px] flex-col gap-4">
          <h2 className="text-5xl font-semibold leading-[1.2] tracking-[-1.44px] text-black">
            Кто мы
          </h2>
          <p
            className="w-full text-xl font-normal leading-[1.4] tracking-[-0.6px] text-[#676767] opacity-70"
          >
            Мы создаём образовательные решения и практические инструменты для работы с AI для людей и компаний: от воркшопов до корпоративных программ и SaaS.
          </p>
        </div>

        {/* Right column - Statistics */}
        <div className="flex w-full max-w-[488px] flex-col gap-10 md:gap-[60px]">
          {STATISTICS.map((stat, index) => (
            <div key={index} className="flex flex-col gap-5">
              <p
                  className="text-[80px] font-normal leading-none tracking-[-4.8px] text-[#005ee0] md:text-[140px] md:tracking-[-8.4px]"
                style={{ fontFamily: 'Inter' }}
              >
                {stat.value}
              </p>
              <div className="flex items-start gap-4">
                <img src={stat.icon} alt="" className="size-7 flex-shrink-0" />
                <p className="text-xl font-medium leading-[1.2] tracking-[-0.6px] text-[#aeb0b3]">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

