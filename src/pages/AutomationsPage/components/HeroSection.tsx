import { useState, useEffect } from 'react';
import { Dithering } from '@paper-design/shaders-react';

const HEADER_HEIGHT = 80;

const scrollToAnchor = (href: string) => {
    const targetId = href.startsWith('#') ? href.slice(1) : href;
    const element = document.getElementById(targetId);
    if (!element) return;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: elementPosition - HEADER_HEIGHT, behavior: 'smooth' });
};

// ═══════════════════════════════════════════════════════════════════
// VARIANT A: Centered minimalism
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
            {/* Headline: 2 lines */}
            <h1
                className="max-w-4xl text-[36px] font-semibold leading-[1.1] xs:text-[44px] md:text-[64px] lg:text-[80px]"
                style={{ letterSpacing: '-1px' }}
            >
                AI Automations
                <br />
                for Business
            </h1>

            {/* Subtitle: 1 sentence */}
            <p className="mt-6 max-w-xl text-lg opacity-80 md:text-xl">
                We deliver solutions with measurable ROI — from analysis to launch
            </p>

            {/* CTA */}
            <button
                type="button"
                onClick={() => scrollToAnchor('#cta')}
                className="mt-10 rounded-full bg-white px-10 py-4 text-lg font-semibold text-[#061346] transition-all hover:scale-105"
            >
                Discuss Project
            </button>
        </div>
    </section>
);

// ═══════════════════════════════════════════════════════════════════
// VARIANT B: Asymmetric, shorter
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
                AI Automations
                <br />
                for&nbsp;Business
            </h1>

            {/* Right: CTA */}
            <button
                type="button"
                onClick={() => scrollToAnchor('#cta')}
                className="w-full rounded-full bg-white px-10 py-4 text-lg font-semibold text-[#061346] transition-all hover:scale-105 md:w-auto"
            >
                Discuss Project
            </button>
        </div>
    </section>
);

// ═══════════════════════════════════════════════════════════════════
// EXPORT: Change variant to 'A' or 'B' to compare
// ═══════════════════════════════════════════════════════════════════
type HeroVariant = 'A' | 'B';
const CURRENT_VARIANT: HeroVariant = 'A'; // ← CHANGE HERE

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
