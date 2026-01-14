import { CASES } from '../data';
import { CaseCard } from './CaseCard';

/**
 * CasesSection — блок кейсов AI-автоматизаций
 * Без Framer Motion анимаций (fix мерцания в Firefox)
 */
export const CasesSection = () => {
    return (
        <section id="cases" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Заголовок секции */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                        Кейсы
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
                        Реальные результаты внедрения AI-автоматизаций для бизнеса
                    </p>
                </div>

                {/* Stack: 1 карточка на строку */}
                <div className="flex flex-col gap-8 md:gap-10">
                    {CASES.map((caseItem) => (
                        <CaseCard key={caseItem.id} data={caseItem} />
                    ))}
                </div>
            </div>
        </section>
    );
};
