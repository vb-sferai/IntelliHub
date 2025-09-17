import type {ReactElement} from "react";

type DignitiesBlockItemProps = {
    title: string;
    text: string;
    icon: ReactElement;
};

export const DignitiesBlockItem = ({ title, text, icon }: DignitiesBlockItemProps) => {
    return (
        <div className="flex flex-col gap-4 xl:gap-5 items-center text-center w-72 lg:w-82 xl:w-96">
            {icon}
            <div className="flex flex-col gap-2">
                <h4 className="text-black text-lg lg:text-xl font-semibold">{title}</h4>
                <span className="text-sm xl:text-base text-gray-500">{text}</span>
            </div>
        </div>
    );
};
