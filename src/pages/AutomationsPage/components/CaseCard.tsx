import type { Case } from '../data';

// Логотипы клиентов
import stoneLogo from '../assets/logos/stone.png';
import pikLogo from '../assets/logos/pik.png';

// Изображения кейсов
import aiSearchImg from '../assets/cases/ai-search.png';
import stoneImg from '../assets/cases/stone.png';
import competitorsImg from '../assets/cases/competitors.png';
import competitorsDetailImg from '../assets/cases/competitors-detail.png';
import pikImg from '../assets/cases/pik.png';
import pikDetailImg from '../assets/cases/pik-detail.png';

const logoMap: Record<string, string> = {
    'stone.png': stoneLogo,
    'pik.png': pikLogo,
};

const imageMap: Record<string, string> = {
    'ai-search.png': aiSearchImg,
    'stone.png': stoneImg,
    'stone.jpg': stoneImg,
    'competitors.png': competitorsImg,
    'competitors-detail.png': competitorsDetailImg,
    'pik.png': pikImg,
    'pik-detail.png': pikDetailImg,
};

interface CaseCardProps {
    data: Case;
}

/**
 * CaseCard — карточка кейса (светлая тема)
 * Без Framer Motion анимаций (fix мерцания в Firefox)
 */
export function CaseCard({ data }: CaseCardProps) {
    const { id, badge, title, subtitle, problem, solution, metrics, client } = data;

    // Карточки 1, 2, 4 и 6 — горизонтальный макет для Решение/Результаты
    const isHorizontalLayout = id === '1' || id === '2' || id === '4' || id === '6';
    // Карточки 3 и 7 — специальный макет (без "Проблема", "Стек" вместо "Решение")
    const isDetailCard = id === '3' || id === '7';

    return (
        <article className="rounded-2xl overflow-hidden bg-[#f7f7f5] transition-all duration-300 hover:bg-[#f0f0ed]">
            {/* Header: Бейдж + Заголовок */}
            <div className="p-6 md:p-8 pb-4 md:pb-6 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <span className="inline-block bg-[#0A5271] text-white text-sm font-medium px-4 py-1.5 rounded-full w-fit">
                        {badge}
                    </span>
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight whitespace-pre-line">
                            {title}
                        </h3>
                        {subtitle && <p className="text-gray-500 mt-1">{subtitle}</p>}
                    </div>
                </div>
            </div>

            {/* Content: Горизонтальный layout на desktop */}
            <div className="p-6 md:p-8">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                    {/* Левая колонка: Проблема + Решение/Результаты */}
                    <div className="flex-1 flex flex-col gap-6">
                        {/* Проблема — без заголовка для карточки 3 */}
                        <div className="bg-white rounded-xl p-6 border border-gray-100">
                            {!isDetailCard && (
                                <h4 className="text-gray-900 font-semibold text-lg mb-3">
                                    Проблема
                                </h4>
                            )}
                            <p className="text-gray-600 leading-relaxed">{problem}</p>
                        </div>

                        {/* Решение + Результаты */}
                        {isHorizontalLayout && metrics.length > 0 ? (
                            // Горизонтальный макет для карточек 1 и 2
                            <div className="flex flex-col md:flex-row gap-4">
                                {/* Решение — отдельный блок */}
                                <div className="bg-white rounded-xl p-6 border border-gray-100 flex-1">
                                    <h4 className="text-[#0A5271] font-semibold text-lg mb-3">
                                        Решение
                                    </h4>
                                    <p className="text-gray-600 leading-relaxed">{solution}</p>
                                </div>
                                {/* Результаты — отдельный блок */}
                                <div className="bg-white rounded-xl p-6 border border-gray-100 flex-1">
                                    <h4 className="text-[#0A5271] font-semibold text-lg mb-4">
                                        Результаты
                                    </h4>
                                    <ul className="space-y-2">
                                        {metrics.map((metric, i) => (
                                            <li key={i} className="flex items-baseline gap-2">
                                                <span className="text-[#0A5271] text-xs">●</span>
                                                <span className="text-gray-900">
                                                    <span className="font-bold text-lg">
                                                        {metric.value}
                                                    </span>{' '}
                                                    <span className="text-gray-600 text-sm">
                                                        {metric.label}
                                                    </span>
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            // Вертикальный макет (по умолчанию)
                            <div
                                className={`bg-white rounded-xl p-6 border border-gray-100 ${isDetailCard ? 'flex-1' : ''}`}
                            >
                                <h4 className="text-[#0A5271] font-semibold text-lg mb-3">
                                    {isDetailCard ? 'Стек' : 'Решение'}
                                </h4>
                                <p className="text-gray-600 leading-relaxed">{solution}</p>

                                {/* Результаты - только если есть */}
                                {metrics.length > 0 && (
                                    <div className="mt-6 pt-6 border-t border-gray-100">
                                        <h4 className="text-[#0A5271] font-semibold text-lg mb-4">
                                            Результаты
                                        </h4>
                                        <ul className="space-y-2">
                                            {metrics.map((metric, i) => (
                                                <li key={i} className="flex items-baseline gap-2">
                                                    <span className="text-[#0A5271] text-xs">●</span>
                                                    <span className="text-gray-900">
                                                        <span className="font-bold text-lg">
                                                            {metric.value}
                                                        </span>{' '}
                                                        <span className="text-gray-600 text-sm">
                                                            {metric.label}
                                                        </span>
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Правая колонка: Изображение + Клиент */}
                    <div className="lg:w-[360px] flex flex-col gap-4">
                        {/* Изображение кейса с лого в углу */}
                        <div className="relative bg-gray-200 rounded-xl overflow-hidden flex-1 min-h-[200px]">
                            {/* Лого клиента — справа вверху */}
                            {!client.isNDA && client.logo && logoMap[client.logo] && (
                                <div className="absolute top-3 right-3 z-10 bg-white rounded-lg px-3 py-2 shadow-sm">
                                    <img
                                        src={logoMap[client.logo]}
                                        alt={client.name}
                                        loading="lazy"
                                        decoding="async"
                                        className="h-6 w-auto object-contain"
                                    />
                                </div>
                            )}
                            {/* NDA бейдж — справа вверху */}
                            {client.isNDA && (
                                <div className="absolute top-3 right-3 z-10">
                                    <span className="inline-block bg-[#0A5271] text-white text-xs font-bold px-3 py-1.5 rounded">
                                        NDA
                                    </span>
                                </div>
                            )}
                            {data.image && imageMap[data.image] ? (
                                <img
                                    src={imageMap[data.image]}
                                    alt={title}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-400">
                                    Изображение
                                </div>
                            )}
                        </div>

                        {/* Описание клиента — под фото */}
                        <div className="bg-white rounded-xl p-4 border border-gray-100">
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {client.description || `${client.name} — ${client.industry}`}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
