// HeroDemo Component - Telegram bot demo video

import { useState } from 'react';
import heroVideo from '../assets/demos/hero-demo-edited.mp4';

export const HeroDemo = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="flex items-center justify-center w-full">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[9/16]">
                {/* Loading skeleton */}
                {!isLoaded && (
                    <div className="absolute inset-0 bg-white/10 animate-pulse flex items-center justify-center">
                        <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                    </div>
                )}
                <video
                    src={heroVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onCanPlay={() => setIsLoaded(true)}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                />
            </div>
        </div>
    );
};
