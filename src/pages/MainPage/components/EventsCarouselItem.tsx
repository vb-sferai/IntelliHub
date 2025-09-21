type EventsCarouselItemProps = {
    date: string;
    title: string;
    text: string;
    speaker: string;
    speakerRole: string;
    speakerPhotoUrl: string;
    link: string;
};

export const EventsCarouselItem = ({ date, title, text, speaker, speakerRole, speakerPhotoUrl, link }: EventsCarouselItemProps) => {
    return (
        <div className="flex flex-col justify-between bg-[#F7F7F5] w-90 lg:w-96 min-h-77 p-8 gap-8">
            <div className="flex flex-col gap-4">
                <span className="text-base font-normal text-gray-500">{date}</span>
                <div className="flex flex-col gap-2">
                    <span className="text-2xl font-semibold text-black">{title}</span>
                    <span className="text-base font-normal text-gray-500">{text}</span>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-3">
                    <img className="w-10 h-10 rounded-full border border-gray-500" src={speakerPhotoUrl} alt={speaker}/>
                    <div className="flex flex-col gap-0.5">
                        <span className="text-sm font-semibold text-black">{speaker}</span>
                        <span className="text-sm font-normal text-gray-500">{speakerRole}</span>
                    </div>
                </div>
                {link !== '' && (
                    <span
                        className="text-base font-medium text-gray-600 w-full text-center p-2 cursor-pointer"
                        onClick={() => {
                            const newWindow = window.open(link, '_blank', 'noopener,noreferrer');
                            if (newWindow) newWindow.opener = null;
                        }}
                    >
                        Зарегистрироваться
                    </span>
                )}
            </div>
        </div>
    );
};
