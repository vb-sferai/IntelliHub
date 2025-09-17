import ListIcon from '../../../assets/imgs/list-checked.svg';

export const ProductsCarouselItem = () => {
    return (
        <div className="flex flex-col justify-between w-90 lg:w-96 h-90 lg:h-106 bg-[#F7F7F5] p-8 flex-shrink-0">
            <div className="flex flex-col gap-4 lg:gap-6">
                <img className="w-8 lg:w-10 h-8 lg:h-10" src={ListIcon} alt="Список" />
                <div className="flex flex-col gap-2">
                    <h4 className="text-xl lg:text-2xl font-semibold text-black">Диагностика</h4>
                    <span className="text-gray-500">Быстрый аудит задач, команд и процессов</span>
                </div>
            </div>
            <div className="flex flex-col gap-3 text-gray-500 ml-5">
                <li>Буст эффективности до 30%</li>
                <li>Ускоренный запуск MVP</li>
                <li>Роадмэп внедрения ИИ</li>
            </div>
        </div>
    );
};
