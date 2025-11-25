type ProgramCardProps = {
    day: string;
    date: string;
    title: string;
    list: string[];
};

export const ProgramCard = ({ day, date, title, list }: ProgramCardProps) => {
    return (
        <div className="bg-[#F7F7F5] p-6 lg:p-8 flex flex-col justify-between min-h-[280px] lg:min-h-[431px]">
            <div className="flex flex-col gap-2">
                <span className="text-sm text-[#858585]">
                    {day}
                </span>
                <h3 className="text-xl lg:text-2xl font-semibold text-black leading-[1.25]">
                    {title}
                </h3>
                <span className="font-geist font-semibold text-sm lg:text-base text-[#08228D] tracking-[0.05em]">
                    {date}
                </span>
            </div>
            <div className="flex flex-col gap-3 mt-6">
                {list.map((item, index) => (
                    <div key={index} className="flex gap-4 items-start">
                        <div className="w-[5px] h-[5px] bg-[#858585] rounded-full mt-2 shrink-0" />
                        <p className="text-sm lg:text-base text-[#858585] leading-[1.3] tracking-[-0.03em]">
                            {item}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
