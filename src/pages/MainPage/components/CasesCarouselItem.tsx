import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";

type CaseResult = {
    title: string;
    text: string;
};

type CasesCarouselItemProps = {
    client: string;
    logoUrl?: string;
    request: string;
    results: CaseResult[];
    stack: string;
    link?: string;
};

export const CasesCarouselItem = ({ client, logoUrl, request, results, stack, link }: CasesCarouselItemProps) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) {
                setIsScrolled(scrollRef.current.scrollLeft > 10);
            }
        };
        const currentRef = scrollRef.current;
        if (currentRef) {
            currentRef.addEventListener('scroll', handleScroll);
            handleScroll();
        }
        return () => {
            if (currentRef) {
                currentRef.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const firstThreeResults = results.slice(0, 3);
    const lastThreeResults = results.slice(3);
    return (
        <div className={`flex flex-col md:flex-row gap-8 md:gap-12 w-[calc(100vw-32px)] sm:w-[calc(100vw-96px)] lg:w-[calc(100vw-128px)] xl:w-340 md:h-173 bg-[#F7F7F5] pl-6 pt-6 pr-5 pb-11 flex-shrink-0`}>
            <div className="flex flex-col gap-2 md:gap-6 w-61">
                <span className="uppercase text-sm md:text-base font-semibold text-gray-400 font-geist">Клиент</span>
                {logoUrl && (
                    <img src={logoUrl} alt={`${client} logo`} className="h-8 md:h-10 w-auto object-contain object-left mb-2" />
                )}
                <span className="text-xl md:text-[30px] font-semibold text-black">{client}</span>
            </div>
            <div className="flex flex-col w-full h-full justify-between">
                <div className="flex flex-col">
                    <div className="flex flex-col gap-2 md:gap-4 mb-8 md:mb-10">
                        <span className="uppercase text-sm md:text-base font-semibold text-gray-400 font-geist">Запрос</span>
                        <span className="text-base font-normal text-gray-500 max-w-148 leading-5">{request}</span>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-6 max-w-220.5">
                        <span
                            className="uppercase text-sm md:text-base font-semibold text-gray-400 font-geist">Результат</span>
                        <div className="w-full hidden md:flex flex-col gap-8">
                            <div className="grid grid-cols-3 gap-5">
                                {firstThreeResults.map((result, index) => (
                                    <div key={index} className="flex flex-col border-t border-gray-400 pt-6 gap-2">
                                        <span className="text-3xl font-medium text-black">{result.title}</span>
                                        <span
                                            className="text-base font-normal text-gray-500 leading-5">{result.text}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-3 gap-5">
                                {lastThreeResults.map((result, index) => (
                                    <div key={index} className="flex flex-col border-t border-gray-400 pt-6 gap-2">
                                        <span className="text-3xl font-medium text-black">{result.title}</span>
                                        <span
                                            className="text-base font-normal text-gray-500 leading-5">{result.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative flex md:hidden w-full">
                            <div
                                ref={scrollRef}
                                className="w-full flex md:hidden flex-row justify-between gap-4 overflow-x-auto scrollbar-hide"
                                style={{ touchAction: 'pan-x' }}
                            >
                                {results.map((result, index) => (
                                    <div key={index}
                                         className={`flex flex-col border-t border-gray-400 pt-6 gap-2 w-56 flex-shrink-0 ${(!isScrolled && index !== 0) ? 'opacity-50' : 'opacity-100'} transition-opacity duration-200`}>
                                        <span
                                            className="text-xl md:text-3xl font-medium text-black">{result.title}</span>
                                        <span
                                            className="text-base font-normal text-gray-500 leading-5">{result.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 mt-8 md:hidden">
                    <span className="uppercase text-sm font-semibold text-gray-400 font-geist">Стек</span>
                    <span className="text-base font-normal text-gray-500 leading-5">{stack}</span>
                    {link && (
                        <Link
                            to={link}
                            className="self-end inline-flex items-center justify-center rounded-full bg-black text-white font-geist text-sm font-semibold uppercase px-5 py-3 hover:bg-[#1A1A1A] transition-colors"
                        >
                            Подробнее о кейсе
                        </Link>
                    )}
                </div>
                <div className="hidden md:flex items-end justify-between gap-6">
                    <div className="flex flex-col gap-4">
                        <span className="uppercase text-base font-semibold text-gray-400 font-geist">Стек</span>
                        <span className="text-base font-normal text-gray-500 max-w-148 leading-5">{stack}</span>
                    </div>
                    {link && (
                        <Link
                            to={link}
                            className="inline-flex items-center justify-center rounded-full bg-black text-white font-geist text-sm font-semibold uppercase px-6 py-3 hover:bg-[#1A1A1A] transition-colors"
                        >
                            Подробнее о кейсе
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};
