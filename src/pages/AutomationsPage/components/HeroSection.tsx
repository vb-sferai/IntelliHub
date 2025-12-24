import { useState, useEffect } from 'react';
import { Dithering } from '@paper-design/shaders-react';

// Client logos for "Trusted by"
import stoneLogo from '../assets/logos/stone.png';
import pikLogo from '../assets/logos/pik.png';
import sberEduLogo from '../assets/logos/sber_edu.png';
import blablaLogo from '../assets/logos/blabla.svg';
import setlLogo from '../assets/logos/setl.png';

const TRUSTED_LOGOS: { alt: string; src: string; className?: string }[] = [
    { alt: 'STONE', src: stoneLogo },
    { alt: 'ПИК', src: pikLogo },
    { alt: 'СберОбразование', src: sberEduLogo },
    { alt: 'BlaBlaCar', src: blablaLogo },
    { alt: 'Setl Group', src: setlLogo, className: 'h-8 md:h-10' },
];

const HEADER_HEIGHT = 80;

const scrollToAnchor = (href: string) => {
    const targetId = href.startsWith('#') ? href.slice(1) : href;
    const element = document.getElementById(targetId);
    if (!element) return;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: elementPosition - HEADER_HEIGHT, behavior: 'smooth' });
};

// ═══════════════════════════════════════════════════════════════════
// ВАРИАНТ A: Центрированный минимализм
// ═══════════════════════════════════════════════════════════════════
const HeroVariantA = ({ isMobile: _isMobile }: { isMobile: boolean }) => (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black">
        <Dithering
            colorBack="#000000"
            colorFront="#0a5271"
            shape="swirl"
            type="4x4"
            size={5}
            speed={0.04}
            scale={1.84}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        />

        <div className="relative z-10 flex flex-col items-center px-6 text-center text-white">
            {/* Headline: 2 строки */}
            <h1
                className="max-w-4xl text-[36px] font-semibold leading-[1.1] xs:text-[44px] md:text-[64px] lg:text-[80px]"
                style={{ letterSpacing: '-1px' }}
            >
                AI-автоматизации
                <br />
                для бизнеса
            </h1>

            {/* Подзаголовок: 1 предложение */}
            <p className="mt-6 max-w-xl text-lg opacity-80 md:text-xl">
                Внедряем решения с измеримым ROI — от анализа до запуска
            </p>

            {/* CTA */}
            <button
                type="button"
                onClick={() => scrollToAnchor('#cta')}
                className="mt-10 rounded-full bg-white px-10 py-4 text-lg font-semibold text-[#061346] transition-all hover:scale-105"
            >
                Обсудить проект
            </button>

            {/* Trusted by */}
            <div className="mt-20 flex flex-col items-center gap-4">
                <p className="text-sm uppercase tracking-widest opacity-40">Нам доверяют</p>
                <div className="flex flex-wrap items-center justify-center gap-6">
                    {TRUSTED_LOGOS.map((logo) => (
                        <img
                            key={logo.alt}
                            src={logo.src}
                            alt={logo.alt}
                            className={`brightness-0 invert opacity-70 ${logo.className ?? 'h-6 md:h-7'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    </section>
);

// ═══════════════════════════════════════════════════════════════════
// ВАРИАНТ B: Асимметрия, но короче
// ═══════════════════════════════════════════════════════════════════
const HeroVariantB = ({ isMobile: _isMobile }: { isMobile: boolean }) => (
    <section className="relative flex min-h-screen w-full items-end overflow-hidden bg-black pb-16 md:items-center md:pb-0">
        <Dithering
            colorBack="#000000"
            colorFront="#0a5271"
            shape="swirl"
            type="4x4"
            size={5}
            speed={0.04}
            scale={1.84}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        />

        <div className="relative z-10 flex w-full flex-col gap-12 px-6 pt-24 text-white md:flex-row md:items-end md:justify-between md:px-12 lg:px-16 xl:mx-auto xl:max-w-[1280px] xl:px-0">
            {/* Left: Headline */}
            <h1
                className="text-[36px] font-semibold leading-[1.05] xs:text-[44px] md:text-[64px] lg:text-[80px]"
                style={{ letterSpacing: '-1px' }}
            >
                AI-автоматизации
                <br />
                для&nbsp;бизнеса
            </h1>

            {/* Right: CTA + Trusted */}
            <div className="flex flex-col gap-8 md:items-end md:text-right">
                <button
                    type="button"
                    onClick={() => scrollToAnchor('#cta')}
                    className="w-full rounded-full bg-white px-10 py-4 text-lg font-semibold text-[#061346] transition-all hover:scale-105 md:w-auto"
                >
                    Обсудить проект
                </button>

                <div className="flex flex-col gap-3 md:items-end">
                    <p className="text-sm uppercase tracking-widest opacity-40">Нам доверяют</p>
                    <div className="flex flex-wrap items-center gap-5 md:justify-end">
                        {TRUSTED_LOGOS.map((logo) => (
                            <img
                                key={logo.alt}
                                src={logo.src}
                                alt={logo.alt}
                                className={`brightness-0 invert opacity-70 ${logo.className ?? 'h-5 md:h-6'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// ═══════════════════════════════════════════════════════════════════
// ЭКСПОРТ: Измените variant на 'A' или 'B' для сравнения
// ═══════════════════════════════════════════════════════════════════
type HeroVariant = 'A' | 'B';
const CURRENT_VARIANT: HeroVariant = 'A'; // ← МЕНЯЙТЕ ЗДЕСЬ

export const HeroSection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return CURRENT_VARIANT === 'A' ? (
        <HeroVariantA isMobile={isMobile} />
    ) : (
        <HeroVariantB isMobile={isMobile} />
    );
};
