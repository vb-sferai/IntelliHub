import EpicGrowthLogo from '../../../assets/imgs/logo-epic-growth.svg';
import YangoLogo from '../../../assets/imgs/logo-yango.svg';
import HaomLogo from '../../../assets/imgs/logo-haom.svg';
import SMStretchingLogo from '../../../assets/imgs/logo-smstretching.svg';
import { MeshGradientBackground } from './MeshGradientBackground';
import { MENU_ITEMS } from '../data';

const TRUSTED_LOGOS = [
  { alt: 'Epic Growth', src: EpicGrowthLogo },
  { alt: 'Yango', src: YangoLogo },
  { alt: 'HAOM', src: HaomLogo },
  { alt: 'SMStretching', src: SMStretchingLogo },
];

export const HeroSection = () => {
  return (
    <section className="relative flex min-h-0 items-center overflow-hidden bg-black md:min-h-screen" id="hero">
      <MeshGradientBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/30" />

      <div className="relative z-10 flex w-full flex-col px-6 pb-16 pt-24 text-white md:pb-24 md:pt-32 md:px-12 lg:px-16 xl:mx-auto xl:max-w-[1280px] xl:px-0">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="flex max-w-[586px] flex-col">
            <h1 className="text-4xl font-semibold md:text-6xl xl:text-[80px] xl:leading-none" style={{ letterSpacing: '-3.2px' }}>
              Helping people and teams use AI mindfully
            </h1>
          </div>

          <nav className="flex w-full max-w-[386px] flex-col space-y-6 md:space-y-10" aria-label="Primary programs">
            <p
              className="w-full text-xl font-medium opacity-90"
              style={{ letterSpacing: '-0.6px', lineHeight: '1.3' }}
            >
              In three years, AI literacy will be as essential as reading or using a computer. You can start making that shift today.
            </p>
            <div className="flex flex-col border-y border-white/20">
              {MENU_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center justify-between border-b border-white/20 py-5 font-geist text-base font-semibold uppercase tracking-[0.8px] transition-all duration-200 last:border-b-0 hover:text-white"
                >
                  <span>{item.label}</span>
                  <span className="translate-x-0 opacity-50 transition-transform group-hover:translate-x-1" aria-hidden>
                    →
                  </span>
                </a>
              ))}
            </div>
          </nav>
        </div>

        <div className="mt-16 flex flex-col space-y-4 md:mt-40" aria-label="Trusted by">
          <p className="text-xl font-medium opacity-45" style={{ letterSpacing: '-0.6px' }}>
            Trusted by
          </p>
          <div className="flex flex-wrap items-center gap-[28px]">
            {TRUSTED_LOGOS.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="h-7 w-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

