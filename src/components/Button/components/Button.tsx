import type {ReactElement} from "react";

type ButtonProps = {
    color: 'white' | 'black' | 'blur',
    children: ReactElement | string,
    isInHeader?: boolean,
    fullWidth?: boolean,
};

export const Button = ({
    color,
    children,
    isInHeader = false,
    fullWidth = false,
}: ButtonProps) => {
    return (
        <button
            className={`cursor-pointer rounded-full ${color === 'white' ? 'bg-white text-black' : color === 'black' ? 'bg-black text-white' : 'bg-[#FFFFFF33] backdrop-blur-3xl text-white'} ${isInHeader ? 'max-h-13 py-3 lg:py-3.5' : 'py-4.5 md:py-3 lg:py-3.5 xl:py-4.5 max-h-15'} ${fullWidth && 'w-full'} font-geist text-sm xs:text-base md:text-sm xl:text-base font-semibold px-5 lg:px-6 xl:px-8 uppercase`}
            onClick={() => {
                const newWindow = window.open('https://calendly.com/as-sfer/30min', '_blank', 'noopener,noreferrer');
                if (newWindow) newWindow.opener = null;
            }}
        >
            {children}
        </button>
    );
};
