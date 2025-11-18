import { DitheringBackground } from './DitheringBackground';

const CTA_MENU_ITEMS = [
  { label: 'Открытые воркшопы', href: '#programs' },
  { label: 'Обучение для команд', href: '/teams' },
];

export const DiscoverCTASection = () => {
  return (
    <section className="bg-white px-6 py-24 md:px-12 lg:px-16" id="discover-cta">
      <div
        className="relative mx-auto flex w-full max-w-[343px] flex-col gap-[50px] overflow-hidden px-6 py-10 md:h-[256px] md:max-w-[1248px] md:flex-row md:items-center md:justify-between md:gap-0 md:px-[60px] md:py-0"
      >
        <DitheringBackground />
        {/* Heading */}
        <h2 className="relative z-10 w-full max-w-[286px] text-4xl font-semibold leading-none tracking-[-0.72px] text-white md:max-w-[429px] md:text-5xl md:leading-[1.2] md:tracking-[-1.44px]">
          Стань AI-native<br />
          уже сегодня
        </h2>

        {/* Menu */}
        <nav className="relative z-10 flex w-full max-w-[286px] flex-col md:ml-auto md:max-w-[416px]">
          {CTA_MENU_ITEMS.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="group relative flex w-full items-center border-b border-white py-5 transition-opacity hover:opacity-80"
            >
              <span className="font-geist text-base font-semibold uppercase leading-[1.2] tracking-[0.8px] text-white">
                {item.label}
              </span>
              <span className="absolute right-0 translate-x-full text-base text-white opacity-50 group-hover:opacity-100 md:static md:ml-auto md:translate-x-0 md:pl-4">
                →
              </span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
};

