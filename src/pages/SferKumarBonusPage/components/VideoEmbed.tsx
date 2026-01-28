import { useState } from 'react';

interface VideoEmbedProps {
  videoId: string;
  caption?: string;
  className?: string;
  showPlayButton?: boolean;
  duration?: string;
  thumbnail?: string;
}

/**
 * Переиспользуемый компонент для Kinescope video embed
 * Отображает видео с соотношением сторон 16:9
 * При showPlayButton=true показывает превью с кнопкой play
 */
export const VideoEmbed = ({
  videoId,
  caption,
  className = '',
  showPlayButton = false,
  duration,
  thumbnail,
}: VideoEmbedProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const isPlaceholder = videoId.startsWith('TODO');

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <div
        className="relative w-full bg-[#1a1a1a] rounded-xl overflow-hidden shadow-2xl"
        style={{ paddingTop: '56.25%' }} // 16:9 aspect ratio
      >
        {isPlaceholder ? (
          // Placeholder с Zoom-стилем сеткой участников
          <div className="absolute inset-0 flex items-center justify-center bg-[#2a2a2a]">
            {/* Имитация Zoom сетки */}
            <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 gap-0.5 p-1 opacity-60">
              {Array.from({ length: 25 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-sm"
                />
              ))}
            </div>

            {/* Кнопка Play с длительностью */}
            {showPlayButton && (
              <button
                onClick={handlePlay}
                className="relative z-10 flex items-center gap-2 bg-white rounded-full px-5 py-3 shadow-lg hover:scale-105 transition-transform cursor-pointer"
              >
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 7.268a2 2 0 010 3.464L3 17.856A2 2 0 010 16.124V1.876A2 2 0 013 .144L15 7.268z"
                    fill="#005EE0"
                  />
                </svg>
                {duration && (
                  <span className="text-[#005EE0] font-semibold text-lg">
                    {duration}
                  </span>
                )}
              </button>
            )}

            {/* Fallback если нет кнопки play */}
            {!showPlayButton && (
              <div className="flex flex-col items-center gap-3 text-white/60">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M10 8.5V15.5L16 12L10 8.5Z" fill="currentColor" />
                </svg>
                <span className="text-sm">Видео: {videoId}</span>
              </div>
            )}
          </div>
        ) : showPlayButton && !isPlaying && thumbnail ? (
          // Thumbnail с кнопкой play только если есть thumbnail
          <div className="absolute inset-0">
            <img
              src={thumbnail}
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />

            {/* Кнопка Play */}
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="flex items-center gap-2 bg-white rounded-full px-5 py-3 shadow-lg hover:scale-105 transition-transform">
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 7.268a2 2 0 010 3.464L3 17.856A2 2 0 010 16.124V1.876A2 2 0 013 .144L15 7.268z"
                    fill="#005EE0"
                  />
                </svg>
                {duration && (
                  <span className="text-[#005EE0] font-semibold text-lg">
                    {duration}
                  </span>
                )}
              </div>
            </button>
          </div>
        ) : (
          // Kinescope iframe embed
          <iframe
            src={`https://kinescope.io/embed/${videoId}?autoplay=${isPlaying ? '1' : '0'}`}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write"
            frameBorder="0"
            allowFullScreen
          />
        )}
      </div>
      {caption && (
        <p className="text-[#858585] text-sm text-center">{caption}</p>
      )}
    </div>
  );
};
