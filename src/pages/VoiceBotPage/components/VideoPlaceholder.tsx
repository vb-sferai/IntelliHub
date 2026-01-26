/**
 * VideoPlaceholder - Красивый плейсхолдер для видео-демо
 *
 * Показывает анимированную кнопку Play с градиентным фоном.
 * Будет заменён на реальное видео/GIF когда контент будет готов.
 */
export const VideoPlaceholder = () => {
    return (
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#7B2FF7]/20 via-[#A855F7]/15 to-[#3B0764]/20 border border-[#7B2FF7]/10">
            {/* Decorative background circles */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-[#7B2FF7]/10 blur-3xl" />
                <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-[#A855F7]/10 blur-3xl" />
            </div>

            {/* Animated play button */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                    {/* Pulse ring animation */}
                    <div className="absolute inset-0 w-20 h-20 rounded-full bg-[#7B2FF7]/20 animate-ping" />
                    {/* Main button */}
                    <div className="relative w-20 h-20 rounded-full bg-white/95 flex items-center justify-center shadow-lg shadow-[#7B2FF7]/20 backdrop-blur-sm">
                        <span className="text-[#7B2FF7] text-3xl ml-1">▶</span>
                    </div>
                </div>
            </div>

            {/* Label */}
            <div className="absolute bottom-4 left-0 right-0 text-center">
                <span className="text-sm text-gray-500 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm">
                    🎬 Демо скоро
                </span>
            </div>
        </div>
    );
};
