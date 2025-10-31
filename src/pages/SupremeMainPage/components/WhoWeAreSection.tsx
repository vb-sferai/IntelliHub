import EducationIcon from '../../../assets/imgs/supreme/icon-education.svg';
import GroupIcon from '../../../assets/imgs/supreme/icon-group.svg';
import StarIcon from '../../../assets/imgs/supreme/icon-star.svg';
import BatchIcon from '../../../assets/imgs/supreme/icon-batch.svg';

const STATISTICS = [
  {
    value: '1,600+',
    icon: EducationIcon,
    description: 'people have completed our programs',
  },
  {
    value: '200+',
    icon: GroupIcon,
    description: 'companies have integrated AI into their workflows with our support.',
  },
  {
    value: '9.4/10',
    icon: StarIcon,
    description: 'Average rating based on post-workshop feedback',
  },
  {
    value: '96%',
    icon: BatchIcon,
    description: 'of employees start using AI tools within 7 days of training.',
  },
];

export const WhoWeAreSection = () => {
  return (
    <section className="bg-[#f7f7f5] px-6 py-24 md:px-12 lg:px-16 xl:px-[112px]" id="who-we-are">
      <div className="mx-auto flex w-full max-w-[1216px] flex-col gap-12 md:flex-row md:gap-[276px]">
        {/* Left column - Title and description */}
        <div className="flex w-full max-w-[452px] flex-col gap-20">
          <h2 className="text-5xl font-semibold leading-[1.2] tracking-[-1.44px] text-black">
            Who we are
          </h2>
          <p className="text-xl font-normal leading-[1.4] tracking-[-0.6px] text-[#676767] opacity-70">
            We run educational programs and practical AI tools for individuals and companies — from workshops to
            corporate training and SaaS solutions.
          </p>
        </div>

        {/* Right column - Statistics */}
        <div className="flex w-full max-w-[488px] flex-col gap-[60px]">
          {STATISTICS.map((stat, index) => (
            <div key={index} className="flex flex-col gap-5">
              <p
                className="text-[140px] font-normal leading-none tracking-[-8.4px] text-[#005ee0]"
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

