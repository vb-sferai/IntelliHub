import CalendarIcon from '../../../assets/imgs/calendar-add.svg';
import EmailIcon from '../../../assets/imgs/email.svg';
import CursorIcon from '../../../assets/imgs/cursor.svg';

/**
 * CTASection - секция "Связаться" по аналогии с MainPage
 * Цветовая схема страницы /automations (синий #0A5271)
 */
export const CTASection = () => {
    return (
        <section className="bg-white px-6 py-20 md:px-12 lg:px-16" id="cta">
            <div className="mx-auto flex max-w-[1280px] flex-col gap-8 md:gap-10 lg:gap-12">
                {/* Заголовок */}
                <h2 className="text-black font-semibold text-3xl md:text-4xl">Связаться</h2>

                {/* Карточки контактов */}
                <div className="flex flex-col md:flex-row gap-6 md:h-[200px] lg:h-[220px]">
                    {/* Calendly — синий фон */}
                    <div
                        onClick={() => {
                            const newWindow = window.open(
                                'https://calendly.com/as-sfer/30min',
                                '_blank',
                                'noopener,noreferrer'
                            );
                            if (newWindow) newWindow.opener = null;
                        }}
                        className="flex flex-col gap-12 md:gap-0 md:justify-between w-full px-6 py-5 md:p-8 lg:p-10 bg-[#0A5271] cursor-pointer hover:bg-[#083d54] transition-colors"
                        style={{ userSelect: 'none' }}
                    >
                        <img
                            className="w-10 h-10 brightness-0 invert"
                            src={CalendarIcon}
                            alt="Календарь"
                        />
                        <h3 className="text-xl font-semibold text-white">
                            Записаться на
                            <br className="hidden md:block" /> консультацию
                        </h3>
                    </div>

                    {/* Почта — серый фон */}
                    <div className="flex flex-col gap-12 md:gap-0 md:justify-between w-full px-6 py-5 md:p-8 lg:p-10 bg-[#F7F7F5]">
                        <img
                            className="w-10 h-10"
                            src={EmailIcon}
                            alt="Email"
                            style={{ filter: 'invert(23%) sepia(69%) saturate(609%) hue-rotate(161deg) brightness(93%) contrast(94%)' }}
                        />
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-semibold text-black">Почта</h3>
                            <a
                                href="mailto:as@sfer.ai"
                                className="text-sm lg:text-base text-gray-700 hover:text-[#0A5271] transition-colors"
                            >
                                as@sfer.ai
                            </a>
                        </div>
                    </div>

                    {/* Телеграм — серый фон */}
                    <div className="flex flex-col gap-12 md:gap-0 md:justify-between w-full px-6 py-5 md:p-8 lg:p-10 bg-[#F7F7F5]">
                        <img
                            className="w-10 h-10"
                            src={CursorIcon}
                            alt="Телеграм"
                            style={{ filter: 'invert(23%) sepia(69%) saturate(609%) hue-rotate(161deg) brightness(93%) contrast(94%)' }}
                        />
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-semibold text-black">Телеграм</h3>
                            <span
                                className="text-sm lg:text-base text-gray-700 cursor-pointer hover:text-[#0A5271] underline transition-colors"
                                onClick={() => {
                                    const newWindow = window.open(
                                        'https://t.me/kgurbanov',
                                        '_blank',
                                        'noopener,noreferrer'
                                    );
                                    if (newWindow) newWindow.opener = null;
                                }}
                            >
                                @kgurbanov
                            </span>
                        </div>
                    </div>
                </div>

                {/* Footer с копирайтом */}
                <div className="flex items-center justify-between border-t border-gray-200 pt-8">
                    <p className="text-sm text-gray-500">© 2025 SFER.AI</p>
                </div>
            </div>
        </section>
    );
};
