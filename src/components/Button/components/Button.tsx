import type {ReactElement} from "react";
import { trackGoal } from "../../../utils/analytics";

type ButtonProps = {
    color: 'white' | 'black' | 'blur' | 'blue' | 'primary',
    children: ReactElement | string,
    isInHeader?: boolean,
    fullWidth?: boolean,
    link?: string,
    width?: string,
    onClick?: () => void,
    trackingGoal?: string, // Название цели для Яндекс.Метрики
    trackingParams?: Record<string, any>, // Дополнительные параметры для цели
};

export const Button = ({
    color,
    children,
    isInHeader = false,
    fullWidth = false,
    link,
    width,
    onClick,
    trackingGoal,
    trackingParams,
}: ButtonProps) => {
    const handleClick = () => {
        // Отправляем цель в Яндекс.Метрику, если указана
        if (trackingGoal) {
            trackGoal(trackingGoal, {
                link: link ?? 'https://calendly.com/as-sfer/30min',
                button_text: typeof children === 'string' ? children : 'button',
                ...trackingParams,
            });
        }

        if (onClick) {
            onClick();
        } else {
            const target = link ?? 'https://calendly.com/as-sfer/30min';
            const newWindow = window.open(target, '_blank', 'noopener,noreferrer');
            if (newWindow) newWindow.opener = null;
        }
    };

    return (
        <button
            className={`cursor-pointer rounded-full flex items-center justify-center text-center ${color === 'white' ? 'bg-white text-black' : color === 'black' ? 'bg-black text-white' : color === 'blue' ? 'bg-[#015177] text-white' : color === 'primary' ? 'bg-[#005EE0] text-white' : 'bg-[#FFFFFF33] backdrop-blur-3xl text-white'} ${isInHeader ? 'max-h-13 py-3 lg:py-3.5' : 'py-4.5 md:py-3 lg:py-3.5 xl:py-4.5'} ${fullWidth && 'w-full'} font-geist text-xs sm:text-sm md:text-sm xl:text-base font-semibold px-4 sm:px-5 lg:px-6 xl:px-8 uppercase leading-tight`}
            style={{ width: width ? width : undefined }}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};
