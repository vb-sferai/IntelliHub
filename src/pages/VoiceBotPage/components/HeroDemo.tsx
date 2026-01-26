// HeroDemo Component - Telegram bot demo GIF

import demoGif from '../assets/demos/demo.gif';

export const HeroDemo = () => {
    return (
        <div className="flex items-center justify-center w-full">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                    src={demoGif}
                    alt="Демонстрация работы бота — голосовое сообщение превращается в структурированный текст"
                    className="w-full h-auto"
                />
            </div>
        </div>
    );
};
