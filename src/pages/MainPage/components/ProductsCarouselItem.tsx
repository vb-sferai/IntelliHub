type ProductsCarouselItemProps = {
    title: string;
    text: string;
    list: string[];
};

export const ProductsCarouselItem = ({ title, text, list }: ProductsCarouselItemProps) => {
    return (
        <div className="flex flex-col justify-between w-90 lg:w-96 min-h-90 lg:min-h-106 bg-[#F7F7F5] p-8 flex-shrink-0 gap-8">
            <div className="flex flex-col gap-2">
                <h4 className="text-xl lg:text-2xl font-semibold text-black">{title}</h4>
                <span className="text-gray-500" style={{ lineHeight: '130%' }}>{text}</span>
            </div>
            <div className="flex flex-col gap-3 text-gray-500 ml-5">
                {list.map((listItem) => (
                    <li style={{ lineHeight: '130%' }}>{listItem}</li>
                ))}
            </div>
        </div>
    );
};
