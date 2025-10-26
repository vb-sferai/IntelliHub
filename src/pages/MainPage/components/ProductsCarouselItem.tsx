type ProductsCarouselItemProps = {
    iconUrl: string;
    title: string;
    text: string;
    list: string[];
};

export const ProductsCarouselItem = ({ iconUrl, title, text, list }: ProductsCarouselItemProps) => {
    return (
        <div className="flex flex-col justify-between max-w-[calc(100vw-56px)] w-90 lg:w-96 min-h-80 xs:min-h-90 lg:min-h-106 bg-[#F7F7F5] p-8 flex-shrink-0 gap-8">
            <div className="flex flex-col gap-4 lg:gap-6">
                <img className="w-8 lg:w-10 h-8 lg:h-10" src={iconUrl} alt={title} />
                <div className="flex flex-col gap-2">
                    <h4 className="text-lg xs:text-xl lg:text-2xl font-semibold text-black">{title}</h4>
                    <span className="text-sm xs:text-base text-gray-500" style={{ lineHeight: '130%' }}>{text}</span>
                </div>
            </div>
            <div className="flex flex-col gap-3 text-gray-500 ml-5 text-sm xs:text-base">
                {list.map((listItem) => (
                    <li style={{ lineHeight: '130%' }}>{listItem}</li>
                ))}
            </div>
        </div>
    );
};
