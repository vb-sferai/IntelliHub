/**
 * HowItWorksSection - Modern card-based steps with Lucide icons
 *
 * Desktop: Horizontal row of cards with ChevronRight arrows between them
 * Mobile: Vertical stack of cards
 *
 * Design: Cards with beige background, icon badges, hover effects, and shadows
 */
import { Send, Bot, FileText, ChevronRight } from 'lucide-react';
import type { ComponentType } from 'react';

type Step = {
    step: number;
    title: string;
    description: string;
    icon: string;
};

type HowItWorksSectionProps = {
    steps: Step[];
};

// Map icon string keys to Lucide components
const ICON_MAP: Record<string, ComponentType<{ className?: string }>> = {
    send: Send,
    bot: Bot,
    'file-text': FileText,
};

const StepCard = ({ step }: { step: Step }) => {
    const IconComponent = ICON_MAP[step.icon] || Send;

    return (
        <div className="flex-1 bg-[#f7f7f5] rounded-2xl p-6 lg:p-8 hover:bg-[#f0f0ed] hover:shadow-md transition-all duration-300 cursor-default">
            {/* Icon badge */}
            <div className="w-12 h-12 rounded-xl bg-[#005EE0]/10 flex items-center justify-center mb-4">
                <IconComponent className="w-6 h-6 text-[#005EE0]" />
            </div>
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
            </h3>
            {/* Description */}
            <p className="text-sm text-gray-500 leading-relaxed">
                {step.description}
            </p>
        </div>
    );
};

const ArrowConnector = () => (
    <div className="hidden md:flex items-center justify-center px-2 lg:px-4 flex-shrink-0">
        <ChevronRight className="w-8 h-8 text-gray-300" />
    </div>
);

export const HowItWorksSection = ({ steps }: HowItWorksSectionProps) => {
    return (
        <div className="w-full">
            {/* Desktop: Horizontal layout */}
            <div className="hidden md:flex flex-row items-stretch gap-0">
                {steps.map((step, index) => (
                    <div key={step.step} className="flex items-center flex-1">
                        <StepCard step={step} />
                        {/* Arrow connector (not after last item) */}
                        {index < steps.length - 1 && <ArrowConnector />}
                    </div>
                ))}
            </div>

            {/* Mobile: Vertical layout */}
            <div className="md:hidden flex flex-col gap-4">
                {steps.map((step) => (
                    <StepCard key={step.step} step={step} />
                ))}
            </div>
        </div>
    );
};
