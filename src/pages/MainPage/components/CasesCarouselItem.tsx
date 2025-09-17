type CaseResult = {
    title: string;
    text: string;
};

type CasesCarouselItemProps = {
    client: string;
    request: string;
    results: CaseResult[];
    stack: string;
};

export const CasesCarouselItem = ({ client, request, results, stack }: CasesCarouselItemProps) => {
    const firstThreeResults = results.slice(0, 3);
    const lastThreeResults = results.slice(-3);
    return (
        <div className={`flex flex-row gap-12 sm:w-[calc(100vw-96px)] lg:w-[calc(100vw-128px)] xl:w-[calc(100vw-224px)] 2xl:w-[calc(100vw-320px)] h-173 bg-[#F7F7F5] pl-6 pt-6 pr-5 pb-11 flex-shrink-0`}>
            <div className="flex flex-col gap-6 w-61">
                <span className="uppercase text-base font-semibold text-gray-400 font-geist">Клиент</span>
                <span className="text-[30px] font-semibold text-black">{client}</span>
            </div>
            <div className="flex flex-col w-full h-full justify-between">
                <div className="flex flex-col">
                    <div className="flex flex-col gap-4 mb-10">
                        <span className="uppercase text-base font-semibold text-gray-400 font-geist">Запрос</span>
                        <span className="text-base font-normal text-gray-500 max-w-148 leading-5">{request}</span>
                    </div>
                    <div className="flex flex-col gap-6 max-w-220.5">
                        <span className="uppercase text-base font-semibold text-gray-400 font-geist">Результат</span>
                        <div className="w-full flex flex-col gap-8">
                            <div className="flex flex-row justify-between gap-5">
                                {firstThreeResults.map((result) => (
                                    <div className="flex flex-col border-t border-gray-400 pt-6 gap-2 max-w-62.5">
                                        <span className="text-3xl font-medium text-black">{result.title}</span>
                                        <span
                                            className="text-base font-normal text-gray-500 leading-5">{result.text}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-row justify-between gap-5">
                                {lastThreeResults.map((result) => (
                                    <div className="flex flex-col border-t border-gray-400 pt-6 gap-2 max-w-62.5">
                                        <span className="text-3xl font-medium text-black">{result.title}</span>
                                        <span
                                            className="text-base font-normal text-gray-500 leading-5">{result.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="uppercase text-base font-semibold text-gray-400 font-geist">Стек</span>
                    <span className="text-base font-normal text-gray-500 max-w-148 leading-5">{stack}</span>
                </div>
            </div>
        </div>
    );
};
