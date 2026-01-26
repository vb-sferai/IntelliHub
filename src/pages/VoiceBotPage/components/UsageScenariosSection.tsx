/**
 * UsageScenariosSection - Usage scenarios with video demonstrations
 *
 * Replaces the old HowItWorksSection with a more engaging format.
 * Features zigzag layout on desktop and vertical stack on mobile.
 *
 * Key feature: Bot works with Telegram Business (Premium) -
 * after connection it automatically transcribes all new voice messages.
 */
import { ScenarioCard } from './ScenarioCard';
import { USAGE_SCENARIOS } from '../data';

export const UsageScenariosSection = () => {
    return (
        <section
            id="usage-scenarios"
            className="flex flex-col items-center px-6 sm:px-10 lg:px-20 py-16 lg:py-24"
        >
            {/* Section header */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black text-center mb-12 lg:mb-16">
                Сценарии использования
            </h2>

            {/* Scenarios list */}
            <div className="w-full max-w-[1200px]">
                {USAGE_SCENARIOS.map((scenario, index) => (
                    <ScenarioCard
                        key={scenario.number}
                        scenario={scenario}
                        isReversed={index % 2 === 1}
                    />
                ))}
            </div>
        </section>
    );
};
