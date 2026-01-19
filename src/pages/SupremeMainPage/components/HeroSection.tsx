import MtsLogo from '../../../assets/imgs/logo-mts.svg';
import TutuLogo from '../../../assets/imgs/Tutu.ru.svg';
import EpicGrowthLogo from '../../../assets/imgs/logo-epic-growth.svg';
import YangoLogo from '../../../assets/imgs/logo-yango.svg';
import HaomLogo from '../../../assets/imgs/logo-haom.svg';
import RLogo from '../../../assets/imgs/logo-r.svg';
import NubesLogo from '../../../assets/imgs/nubes-logo.svg';
import LancetLogo from '../../../assets/imgs/lancet-logo.svg';
import SMStretchingLogo from '../../../assets/imgs/logo-smstretching.svg';
import YandexLogo from '../../../assets/imgs/yandex-logo.svg';
import AliceLogo from '../../../assets/imgs/alice-logo.svg';
import KortrosLogo from '../../../assets/imgs/kortross.png';
import { MeshGradientBackground } from './MeshGradientBackground';
import { MENU_ITEMS } from '../data';

const TRUSTED_LOGOS = [
  { alt: 'МТС', src: MtsLogo, height: 'h-8 md:h-9' },
  { alt: 'Tutu', src: TutuLogo, makeWhite: true },
  { alt: 'Epic Growth', src: EpicGrowthLogo },
  { alt: 'Yango', src: YangoLogo },
  { alt: 'HAOM', src: HaomLogo },
  { alt: 'R', src: RLogo },
  { alt: 'Nubes', src: NubesLogo },
  { alt: 'Lancet', src: LancetLogo },
  { alt: 'SMStretching', src: SMStretchingLogo, height: 'h-4 md:h-5' },
  // { alt: 'Яндекс', src: YandexLogo }, // Temporarily hidden
  { alt: 'Алиса', src: AliceLogo },
  { alt: 'КОРТРОС', src: KortrosLogo, height: 'h-8 md:h-9', blendMode: true },
];

export const HeroSection = () => {
  return (
    <section className="relative flex min-h-0 items-center overflow-hidden bg-black md:min-h-screen" id="hero">
      <MeshGradientBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/30" />

      <div className="relative z-10 flex w-full flex-col px-6 pb-16 pt-24 text-white md:pb-24 md:pt-32 md:px-12 lg:px-16 xl:mx-auto xl:max-w-[1280px] xl:px-0">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="flex max-w-full flex-col">
            <h1 className="text-[36px] font-semibold leading-none md:text-6xl md:leading-tight xl:min-h-[320px] xl:text-[80px] xl:leading-none" style={{ letterSpacing: '-0.72px' }}>
              Помогаем&nbsp;людям<br />
              и&nbsp;командам<br />
              использовать&nbsp;AI<br />
              осознанно
            </h1>
          </div>

          <nav className="flex w-full max-w-[386px] flex-col space-y-6 md:space-y-10" aria-label="Primary programs">
            <div className="flex w-full flex-col gap-5 font-medium opacity-90" style={{ letterSpacing: '-0.48px', lineHeight: '1.3' }}>
              <p className="text-base md:text-xl">
                Через 3 года владение AI станет базовым навыком — как умение читать или пользоваться компьютером.
              </p>
              <p className="text-base md:text-xl">
                Этот переход можно сделать прямо сейчас.
              </p>
            </div>
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

        <div className="mt-16 flex flex-col space-y-4 md:mt-40" aria-label="Наши клиенты">
          <p className="text-xl font-medium opacity-45" style={{ letterSpacing: '-0.6px' }}>
            Наши клиенты
          </p>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
            {TRUSTED_LOGOS.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className={`${logo.height || 'h-6 md:h-7'} w-auto`}
                style={{
                  ...(logo.makeWhite && { filter: 'brightness(0) invert(1) brightness(0.7)' }),
                  ...(logo.blendMode && { mixBlendMode: 'lighten', filter: 'grayscale(1) brightness(0.7)' }),
                }}
              />
            ))}
            <span className="text-base font-medium opacity-60 md:text-lg">+20 клиентов</span>
          </div>
        </div>
      </div>
    </section>
  );
};

