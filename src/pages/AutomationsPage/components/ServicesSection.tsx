import { Bot, Search, BarChart3, Wand2, Plug, MessageSquare, ArrowUpRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SERVICES } from '../data';

// Icon mapping by name
const ICON_MAP: Record<string, LucideIcon> = {
    Bot,
    Search,
    BarChart3,
    Wand2,
    Plug,
    MessageSquare,
};

/**
 * ServicesSection — Feature List with icons
 * Without Framer Motion animations (Firefox flickering fix)
 */
export const ServicesSection = () => {
    return (
        <section id="services" className="bg-white py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
                        What We Do
                    </h2>
                </div>

                {/* Feature List Grid */}
                <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:gap-8">
                    {SERVICES.map((service) => {
                        const Icon = ICON_MAP[service.icon];
                        const isCTA = service.isCTA;

                        return (
                            <div
                                key={service.title}
                                className={`group relative flex items-start gap-4 rounded-2xl p-5 transition-all duration-300 md:p-6 ${
                                    isCTA
                                        ? 'bg-[#f7f7f5] border-2 border-[#0A5271] hover:bg-[#f0f0ed] cursor-pointer'
                                        : 'bg-[#f7f7f5] hover:bg-[#f0f0ed]'
                                }`}
                                onClick={isCTA ? () => window.open('https://t.me/kgurbanov', '_blank') : undefined}
                            >
                                {/* Arrow for CTA */}
                                {isCTA && (
                                    <div className="absolute right-4 top-4 text-[#0A5271] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                        <ArrowUpRight className="h-5 w-5" />
                                    </div>
                                )}

                                {/* Icon */}
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#0A5271]/10 transition-all duration-300 group-hover:bg-[#0A5271]/15 group-hover:scale-105">
                                    <Icon className="h-6 w-6 text-[#0A5271]" />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="mb-1 text-lg font-semibold text-gray-900 md:text-xl">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 md:text-base">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
