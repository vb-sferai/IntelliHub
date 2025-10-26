import type {ReactElement} from "react";

type StatisticBlockProps = {
    title: string;
    text: string;
    icon: ReactElement;
};

export const StatisticBlock = ({ title, text, icon }: StatisticBlockProps) => {
    return (
        <div className="flex flex-col md:gap-4 xl:gap-5 md:w-100 lg:w-122">
            <span className="text-[72px] xs:text-[80px] md:text-7xl lg:text-8xl xl:text-[140px] text-primary-200">{title}</span>
            <div className="flex flex-row gap-3 lg:gap-4 items-start text-gray-400">
                {icon}
                <span className="text-base lg:text-lg xl:text-xl font-medium">{text}</span>
            </div>
        </div>
    );
};
