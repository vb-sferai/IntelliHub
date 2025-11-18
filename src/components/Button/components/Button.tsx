import type {ReactElement} from "react";
import { trackGoal, getSavedUTMParams } from "../../../utils/analytics";

type ButtonProps = {
    color: 'white' | 'black' | 'blur' | 'blue' | 'primary',
    children: ReactElement | string,
    isInHeader?: boolean,
    fullWidth?: boolean,
    link?: string,
    width?: string,
    onClick?: () => void,
    metrikaId?: number, // ID счетчика Яндекс.Метрики
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
    metrikaId,
    trackingGoal,
    trackingParams,
}: ButtonProps) => {
    const handleClick = () => {
        // Получаем сохранённые UTM-параметры
        const utmParams = getSavedUTMParams();

        // Формируем финальную ссылку с UTM-параметрами
        let targetUrl = link ?? 'https://calendly.com/as-sfer/30min';

        // Добавляем UTM к ссылке, если они есть
        if (utmParams && Object.keys(utmParams).length > 0) {
            try {
                const url = new URL(targetUrl);

                // Добавляем UTM-параметры
                if (utmParams.utm_source) url.searchParams.set('utm_source', utmParams.utm_source);
                if (utmParams.utm_medium) url.searchParams.set('utm_medium', utmParams.utm_medium);
                if (utmParams.utm_campaign) url.searchParams.set('utm_campaign', utmParams.utm_campaign);
                if (utmParams.utm_term) url.searchParams.set('utm_term', utmParams.utm_term);
                if (utmParams.utm_content) url.searchParams.set('utm_content', utmParams.utm_content);

                targetUrl = url.toString();
            } catch (e) {
                // Если URL невалидный, используем оригинальный
                console.warn('Failed to append UTM params to URL:', e);
            }
        }

        // Отправляем цель в Яндекс.Метрику, если указаны metrikaId и trackingGoal
        if (metrikaId && trackingGoal) {
            trackGoal(metrikaId, trackingGoal, {
                link: targetUrl,
                button_text: typeof children === 'string' ? children : 'button',
                ...trackingParams,
            });
        }

        if (onClick) {
            onClick();
        } else {
            const newWindow = window.open(targetUrl, '_blank', 'noopener,noreferrer');
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
