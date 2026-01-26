/**
 * VideoPlaceholder - Placeholder for video demos in usage scenarios
 *
 * Shows an animated play button with gradient background.
 * Will be replaced with actual video/GIF when content is ready.
 */
export const VideoPlaceholder = () => {
    return (
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#005EE0]/10 via-[#3A83E8]/10 to-[#0e0967]/15 border border-[#005EE0]/10">
            {/* Decorative background circles */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-[#005EE0]/10 blur-3xl" />
                <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-[#3A83E8]/10 blur-3xl" />
            </div>

            {/* Animated play button */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                    {/* Pulse ring animation */}
                    <div className="absolute inset-0 w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#005EE0]/20 animate-ping" />
                    {/* Main button */}
                    <div className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white/95 flex items-center justify-center shadow-lg shadow-[#005EE0]/20 backdrop-blur-sm">
                        <span className="text-[#005EE0] text-2xl lg:text-3xl ml-1">▶</span>
                    </div>
                </div>
            </div>

            {/* Label */}
            <div className="absolute bottom-3 lg:bottom-4 left-0 right-0 text-center">
                <span className="text-xs lg:text-sm text-gray-500 bg-white/90 backdrop-blur-sm px-3 lg:px-4 py-1 lg:py-1.5 rounded-full shadow-sm">
                    Видео скоро
                </span>
            </div>
        </div>
    );
};
