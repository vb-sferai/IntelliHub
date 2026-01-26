/**
 * ScenarioCard - Single usage scenario with video or placeholder
 *
 * Desktop: Zigzag layout (alternating video left/right)
 * Mobile: Vertical stack (video on top, text below)
 *
 * Includes Telegram Business badge for scenarios that require it.
 */
import { VideoPlaceholder } from './VideoPlaceholder';

// Import video assets
import scenario1Video from '../assets/demos/scenario-1-direct.mp4';
import scenario2Video from '../assets/demos/scenario-2-direct.mp4';
import scenario3Video from '../assets/demos/scenario-3-groups.mp4';

// Video mapping for dynamic loading
const VIDEO_MAP: Record<string, string> = {
    'scenario-1-direct.mp4': scenario1Video,
    'scenario-2-direct.mp4': scenario2Video,
    'scenario-3-groups.mp4': scenario3Video,
};

type Scenario = {
    number: number;
    title: string;
    description: string;
    requiresBusiness: boolean;
    video?: string | null;
};

type ScenarioCardProps = {
    scenario: Scenario;
    isReversed: boolean;
};

const TelegramBusinessBadge = () => (
    <div className="inline-flex items-center gap-1.5 bg-[#005EE0]/10 text-[#005EE0] text-xs font-medium px-3 py-1.5 rounded-full mt-3">
        <svg
            className="w-3.5 h-3.5"
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
        </svg>
        Telegram Business
    </div>
);

// Parse description and convert @username to clickable Telegram links
const parseDescription = (text: string) => {
    const parts = text.split(/(@\w+)/g);
    return parts.map((part, index) => {
        if (part.startsWith('@')) {
            const username = part.slice(1);
            return (
                <a
                    key={index}
                    href={`https://t.me/${username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#005EE0] hover:underline"
                >
                    {part}
                </a>
            );
        }
        return part;
    });
};

const ScenarioVideo = ({ video }: { video?: string | null }) => {
    if (!video) {
        return <VideoPlaceholder />;
    }

    const videoSrc = VIDEO_MAP[video];

    if (!videoSrc) {
        return <VideoPlaceholder />;
    }

    return (
        <div className="relative w-full flex justify-center">
            <div className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] rounded-3xl overflow-hidden shadow-2xl shadow-black/10 border border-gray-200/50">
                <video
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto"
                />
            </div>
        </div>
    );
};

export const ScenarioCard = ({ scenario, isReversed }: ScenarioCardProps) => {
    return (
        <div
            className={`flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-10 py-8 lg:py-12 ${
                isReversed ? 'lg:flex-row-reverse' : ''
            }`}
        >
            {/* Video or placeholder */}
            <div className="w-full lg:w-1/2 lg:flex-shrink-0">
                <ScenarioVideo video={scenario.video} />
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 flex justify-center">
                <div className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] flex flex-col items-center text-center lg:items-start lg:text-left">
                    {/* Large scenario number */}
                    <span className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-[#005EE0] to-[#3A83E8] bg-clip-text text-transparent mb-4">
                        {scenario.number}
                    </span>

                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-3">
                        {scenario.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                        {parseDescription(scenario.description)}
                    </p>

                    {/* Telegram Business badge */}
                    {scenario.requiresBusiness && <TelegramBusinessBadge />}
                </div>
            </div>
        </div>
    );
};
