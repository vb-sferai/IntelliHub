import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MeshGradient } from '@paper-design/shaders-react';
import { Button } from '../../../components/Button';
import { QuestionsBlockItem } from '../../../components/FAQ/components/QuestionBlockItem';
import { saveUTMParams } from '../../../utils/analytics';
import { ROUTES } from '../../../constants/routes';
import LogoGray from '../../../assets/imgs/logo-gray.svg';
import {
    HERO,
    STEPS,
    FEATURES,
    PRICING,
    FAQ_ITEMS,
    LEGAL,
    CONTACTS,
} from '../data';

export const VoiceBotPage = () => {
    // Сохраняем UTM-параметры при загрузке страницы
    useEffect(() => {
        saveUTMParams();
    }, []);

    return (
        <div className="flex flex-col w-full min-h-screen bg-white">
            {/* ========== HERO SECTION ========== */}
            <section className="relative min-h-[85vh] w-full flex items-center justify-center overflow-hidden">
                {/* MeshGradient background */}
                <div className="absolute inset-0 w-full h-full">
                    <MeshGradient
                        speed={0.15}
                        colors={['#2152ba', '#0e0967', '#005194', '#3A83E8']}
                        distortion={0.5}
                        swirl={0.15}
                        grainMixer={0.08}
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>

                {/* Hero content */}
                <div className="relative z-10 flex flex-col w-full text-center items-center gap-6 px-4 sm:px-8 lg:px-16 max-w-[800px] text-white py-20">
                    <h1 className="text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-[-0.03em]">
                        {HERO.title}
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl font-medium opacity-90 max-w-[600px] leading-[1.4]">
                        {HERO.subtitle}
                    </p>
                    <div className="mt-4">
                        <Button color="white" link={HERO.botLink}>
                            {HERO.ctaText}
                        </Button>
                    </div>
                </div>
            </section>

            {/* ========== HOW IT WORKS SECTION ========== */}
            <section className="flex flex-col items-center px-4 sm:px-8 lg:px-16 py-16 lg:py-24">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black text-center mb-12 lg:mb-16">
                    Как это работает
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-[1000px]">
                    {STEPS.map((step, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center gap-4 p-6"
                        >
                            <div className="w-16 h-16 rounded-full bg-[#005EE0] flex items-center justify-center">
                                <span className="text-white font-bold text-xl">
                                    {step.number}
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold text-black">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 text-base leading-relaxed">
                                {step.description}
                            </p>
                            {/* Arrow between steps (hidden on last step and mobile) */}
                            {index < STEPS.length - 1 && (
                                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-gray-300 text-2xl">
                                    →
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* ========== FEATURES SECTION ========== */}
            <section className="flex flex-col items-center px-4 sm:px-8 lg:px-16 py-16 lg:py-24 bg-[#F7F7F5]">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black text-center mb-12 lg:mb-16">
                    Почему выбирают нас
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[900px]">
                    {FEATURES.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl flex flex-col gap-4"
                        >
                            <span className="text-4xl">{feature.emoji}</span>
                            <h3 className="text-xl font-semibold text-black">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 text-base leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ========== PRICING SECTION ========== */}
            <section className="flex flex-col items-center px-4 sm:px-8 lg:px-16 py-16 lg:py-24">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black text-center mb-4">
                    Тарифы
                </h2>
                <p className="text-gray-600 text-center mb-12 lg:mb-16 max-w-[500px]">
                    Выберите подходящий план для ваших задач
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1100px]">
                    {PRICING.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col p-8 rounded-2xl border-2 ${
                                plan.isPopular
                                    ? 'border-[#005EE0] bg-[#005EE0]/5'
                                    : 'border-gray-200 bg-white'
                            }`}
                        >
                            {/* Popular badge */}
                            {plan.isPopular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <span className="bg-[#005EE0] text-white text-xs font-semibold px-4 py-1 rounded-full uppercase">
                                        Популярный
                                    </span>
                                </div>
                            )}

                            <h3 className="text-xl font-semibold text-black mb-2">
                                {plan.name}
                            </h3>
                            <div className="flex items-baseline gap-1 mb-2">
                                <span className="text-4xl font-bold text-black">
                                    {plan.price}
                                </span>
                                {plan.period && (
                                    <span className="text-gray-500">
                                        {plan.period}
                                    </span>
                                )}
                            </div>
                            <p className="text-gray-600 text-sm mb-6">
                                {plan.description}
                            </p>

                            <ul className="flex flex-col gap-3 mb-8 flex-grow">
                                {plan.features.map((feature, featureIndex) => (
                                    <li
                                        key={featureIndex}
                                        className="flex items-start gap-2 text-sm text-gray-700"
                                    >
                                        <span className="text-[#005EE0] mt-0.5">
                                            ✓
                                        </span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                color={plan.isPopular ? 'primary' : 'black'}
                                link={plan.ctaLink}
                                fullWidth
                            >
                                {plan.ctaText}
                            </Button>
                        </div>
                    ))}
                </div>
            </section>

            {/* ========== FAQ SECTION ========== */}
            <section className="flex flex-col items-center px-4 sm:px-8 lg:px-16 py-16 lg:py-24 bg-[#F7F7F5]">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black text-center mb-12 lg:mb-16">
                    Частые вопросы
                </h2>
                <div className="w-full max-w-[768px]">
                    {FAQ_ITEMS.map((item, index) => (
                        <QuestionsBlockItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isLast={index === FAQ_ITEMS.length - 1}
                        />
                    ))}
                </div>
            </section>

            {/* ========== FOOTER SECTION ========== */}
            <footer className="flex flex-col items-center px-4 sm:px-8 lg:px-16 py-12 lg:py-16 bg-black text-white">
                <div className="w-full max-w-[1100px]">
                    {/* Logo and contacts */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                        <Link to={ROUTES.root}>
                            <img
                                src={LogoGray}
                                alt="SFER.AI"
                                className="h-8 brightness-200"
                            />
                        </Link>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm">
                            <a
                                href={`mailto:${CONTACTS.email}`}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                {CONTACTS.email}
                            </a>
                            <a
                                href={`https://t.me/${CONTACTS.telegram.replace('@', '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                {CONTACTS.telegram}
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-4 sm:gap-8 mb-12 text-sm">
                        <Link
                            to={ROUTES.privacyPolicy}
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            Политика конфиденциальности
                        </Link>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            Публичная оферта
                        </a>
                    </div>

                    {/* Legal info (required for YuKassa) */}
                    <div className="border-t border-gray-800 pt-8">
                        <div className="text-xs text-gray-500 space-y-2">
                            <p>{LEGAL.companyName}</p>
                            <p>ИНН: {LEGAL.inn} | ОГРНИП: {LEGAL.ogrnip}</p>
                            <p>Адрес: {LEGAL.address}</p>
                            <p className="mt-4">
                                © {new Date().getFullYear()} SFER.AI. Все права
                                защищены.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
