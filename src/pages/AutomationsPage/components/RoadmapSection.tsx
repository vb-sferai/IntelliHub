import { ROADMAP_STEPS } from '../data';

/**
 * RoadmapSection — Горизонтальный timeline процесса работы
 * Без Framer Motion анимаций (fix мерцания в Firefox)
 */
export const RoadmapSection = () => {
    return (
        <section id="roadmap" className="bg-white py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-12 text-center md:mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
                        Как мы работаем
                    </h2>
                </div>

                {/* Desktop Timeline (horizontal) */}
                <div className="hidden md:block">
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-0 right-0 top-6 h-0.5 bg-[#0A5271]/20" />

                        {/* Steps */}
                        <div className="relative grid grid-cols-4 gap-8">
                            {ROADMAP_STEPS.map((step) => (
                                <div
                                    key={step.number}
                                    className="relative flex flex-col items-center text-center"
                                >
                                    {/* Step number circle */}
                                    <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0A5271] text-lg font-bold text-white shadow-lg shadow-[#0A5271]/30">
                                        {step.number}
                                    </div>

                                    {/* Step content */}
                                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Timeline (vertical) */}
                <div className="md:hidden">
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute bottom-0 left-6 top-0 w-0.5 bg-[#0A5271]/20" />

                        {/* Steps */}
                        <div className="space-y-8">
                            {ROADMAP_STEPS.map((step) => (
                                <div
                                    key={step.number}
                                    className="relative flex items-start gap-4"
                                >
                                    {/* Step number circle */}
                                    <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#0A5271] text-lg font-bold text-white shadow-lg shadow-[#0A5271]/30">
                                        {step.number}
                                    </div>

                                    {/* Step content */}
                                    <div className="pt-1">
                                        <h3 className="mb-1 text-lg font-semibold text-gray-900">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
