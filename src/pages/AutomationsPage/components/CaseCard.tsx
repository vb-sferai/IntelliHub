import type { Case } from '../data';

// Логотипы клиентов
import stoneLogo from '../assets/logos/stone.png';
import pikLogo from '../assets/logos/pik.png';

// Изображения кейсов
import aiSearchImg from '../assets/cases/ai-search.png';
import stoneImg from '../assets/cases/stone.png';
import competitorsImg from '../assets/cases/competitors.png';
import pikImg from '../assets/cases/pik.png';

const logoMap: Record<string, string> = {
    'stone.png': stoneLogo,
    'pik.png': pikLogo,
};

const imageMap: Record<string, string> = {
    'ai-search.png': aiSearchImg,
    'stone.png': stoneImg,
    'stone.jpg': stoneImg,
    'competitors.png': competitorsImg,
    'pik.png': pikImg,
};

interface CaseCardProps {
    data: Case;
}

/**
 * CaseCard — карточка кейса (светлая тема)
 * Без Framer Motion анимаций (fix мерцания в Firefox)
 */
export function CaseCard({ data }: CaseCardProps) {
    const { badge, title, subtitle, problem, solution, metrics, client } = data;

    return (
        <article className="rounded-2xl overflow-hidden bg-[#f7f7f5] transition-all duration-300 hover:bg-[#f0f0ed]">
            {/* Header: Бейдж + Заголовок */}
            <div className="p-6 md:p-8 pb-4 md:pb-6 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <span className="inline-block bg-[#0A5271] text-white text-sm font-medium px-4 py-1.5 rounded-full w-fit">
                        {badge}
                    </span>
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                            {title}
                        </h3>
                        <p className="text-gray-500 mt-1">{subtitle}</p>
                    </div>
                </div>
            </div>

            {/* Content: Горизонтальный layout на desktop */}
            <div className="p-6 md:p-8">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                    {/* Левая колонка: Проблема + Решение/Результаты */}
                    <div className="flex-1 space-y-6">
                        {/* Проблема */}
                        <div className="bg-white rounded-xl p-6 border border-gray-100">
                            <h4 className="text-gray-900 font-semibold text-lg mb-3">Проблема</h4>
                            <p className="text-gray-600 leading-relaxed">{problem}</p>
                        </div>

                        {/* Решение + Результаты */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Решение */}
                            <div className="bg-white rounded-xl p-6 border border-gray-100">
                                <h4 className="text-[#0A5271] font-semibold text-lg mb-3">
                                    Решение
                                </h4>
                                <p className="text-gray-600 leading-relaxed">{solution}</p>
                            </div>

                            {/* Результаты */}
                            <div className="bg-white rounded-xl p-6 border border-gray-100">
                                <h4 className="text-[#0A5271] font-semibold text-lg mb-4">
                                    Результаты
                                </h4>
                                <ul className="space-y-3">
                                    {metrics.map((metric, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-[#0A5271] mt-1 text-lg">●</span>
                                            <span className="text-gray-900">
                                                <span className="font-bold text-xl">
                                                    {metric.value}
                                                </span>{' '}
                                                <span className="text-gray-600">
                                                    {metric.label}
                                                </span>
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Правая колонка: Изображение + Клиент */}
                    <div className="lg:w-[360px] flex flex-col gap-4">
                        {/* Изображение кейса */}
                        <div className="bg-gray-200 rounded-xl overflow-hidden flex-1 min-h-[200px]">
                            {data.image && imageMap[data.image] ? (
                                <img
                                    src={imageMap[data.image]}
                                    alt={title}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-400">
                                    Изображение
                                </div>
                            )}
                        </div>

                        {/* Клиент */}
                        <div className="bg-white rounded-xl p-5 border border-gray-100">
                            {client.isNDA ? (
                                <div className="flex items-start gap-4">
                                    <span className="inline-block bg-[#0A5271] text-white text-xs font-bold px-3 py-1.5 rounded shrink-0">
                                        NDA
                                    </span>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {client.description}
                                    </p>
                                </div>
                            ) : (
                                <div className="flex items-center gap-4">
                                    {client.logo && logoMap[client.logo] && (
                                        <img
                                            src={logoMap[client.logo]}
                                            alt={client.name}
                                            className="h-10 w-auto object-contain shrink-0"
                                        />
                                    )}
                                    <div>
                                        <p className="text-gray-900 font-semibold">
                                            {client.name}
                                        </p>
                                        <p className="text-gray-500 text-sm mt-0.5">
                                            {client.industry}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
