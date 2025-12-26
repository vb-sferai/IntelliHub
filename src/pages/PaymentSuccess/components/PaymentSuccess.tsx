export const PaymentSuccess = () => {
    return (
        <div className="flex flex-col w-full min-h-[60vh] items-center justify-center">
            <div className="px-4 sm:px-12 lg:px-16 xl:px-0 xl:max-w-348 mx-auto">
                <div className="flex flex-col gap-8 md:gap-10 items-center text-center py-20 md:py-24 lg:py-32">
                    <div className="flex flex-col gap-6 md:gap-8">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-black">
                            Оплата прошла
                        </h1>
                        <div className="flex flex-col gap-4 text-lg md:text-xl lg:text-2xl text-gray-600">
                            <p>
                                Спасибо, всё успешно! По всем вопросам вы всегда можете написать{' '}
                                <a
                                    href="https://t.me/gurbanov_care_bot?start=dl-1746723554214"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#FF8002] hover:text-[#e67302] underline font-medium transition-colors"
                                >
                                    в Телеграм
                                </a>
                                .
                            </p>
                            <p className="text-base md:text-lg lg:text-xl text-gray-500 mt-4">
                                Кирилл и команда
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
