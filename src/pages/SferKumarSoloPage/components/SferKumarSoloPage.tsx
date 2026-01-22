import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/Button';
import { MeshGradient } from '@paper-design/shaders-react';
import { saveUTMParams } from '../../../utils/analytics';
import { ApplicationFormPopup } from './ApplicationFormPopup';
import HeroBg from '../assets/Rectangle 266.png';
import { Title } from '../../../components/Title';
import { QuestionsBlockItem } from '../../../components/FAQ/components/QuestionBlockItem';
import { ReviewsGrid } from '../../../components/ReviewsGrid';
import EmailIconBlue from '../../../assets/imgs/email-blue.svg';
import CursorIconBlue from '../../../assets/imgs/cursor-blue.svg';
import LogoGray from '../../../assets/imgs/logo-gray.svg';
import { HERO, AI_FIRST_FEATURES, PRICE, CTA, REVIEWS, COURSE_STATS, LIFE_PROGRAM_FEATURES, WHO_NEEDS_CODING, PROGRAM_MODULES, INSTRUCTORS, FAQ_ITEMS } from '../data';
import { SuccessStoriesSection } from './SuccessStoriesSection';
import LogoYandex from '../assets/logo-yandex.svg';
import LogoSber from '../assets/logo-sber.svg';
import LogoT from '../assets/logo-t.svg';
import LogoAvito from '../assets/logo-avito.svg';
import LogoTechstars from '../assets/logo-techstars.svg';
import Logo500 from '../assets/logo-500.svg';
// Tool logos
import LogoMake from '../assets/logo-make.svg';
import LogoCursor from '../assets/logo-cursor.svg';
import LogoChatGPT from '../assets/logo-chatgpt.svg';
import LogoClaude from '../assets/logo-claude.svg';
import LogoClaudeCode from '../assets/logo-claudecode.svg';
import LogoHiggsfield from '../assets/logo-higgsfield.svg';
import LogoGamma from '../assets/logo-gamma.svg';
import LogoGemini from '../assets/logo-gemini.svg';
import LogoGithub from '../assets/logo-github.svg';
import LogoN8n from '../assets/logo-n8n.svg';
import LogoSupabase from '../assets/logo-supabase.svg';

export const SferKumarSoloPage = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // Сохраняем UTM-параметры при загрузке страницы
    useEffect(() => {
        saveUTMParams();
    }, []);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    return (
        <div className="flex flex-col w-full">
            {/* Custom CSS variables */}
            <style>{`
                .sfer-kumar-solo-primary {
                    color: #005EE0;
                }
            `}</style>

            {/* ========== HERO SECTION ========== */}
            <div className="relative min-h-screen w-full flex items-center justify-center -mt-14 sm:-mt-20">
                {/* Hero background image */}
                <img
                    src={HeroBg}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="relative z-10 flex flex-col w-full text-center items-center gap-6 xl:gap-10 px-4 sm:px-12 lg:px-16 xl:px-0 max-w-[1039px] text-white py-20">
                    <h1 className="text-[44px] xs:text-5xl md:text-[56px] lg:text-[64px] xl:text-[80px] font-semibold leading-[1.1] tracking-[-0.04em]">
                        {HERO.title}
                    </h1>
                    <p className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-semibold opacity-90">
                        {HERO.subtitle}
                    </p>
                    <p className="text-base xs:text-lg sm:text-xl lg:text-lg xl:text-xl font-medium opacity-90 max-w-[725px] leading-[1.3]">
                        {HERO.description}
                    </p>
                    <Button color="white" width="190px" onClick={openPopup}>
                        {HERO.ctaText}
                    </Button>
                </div>
            </div>

            {/* ========== PARTNER LOGOS (placeholder) ========== */}
            <div className="flex flex-col px-4 sm:px-12 lg:px-16 xl:px-0 xl:w-312 xl:mx-auto py-8 lg:py-12">
                <p className="text-center text-gray-500 text-sm mb-6">
                    Работаем с
                </p>
                <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-6 lg:gap-[72px]">
                    <img src={LogoYandex} alt="Yandex" className="hidden w-[85px] h-[20px] lg:w-[141px] lg:h-[34px]" />
                    <img src={LogoT} alt="T-Bank" className="w-[95px] h-[34px] lg:w-[158px] lg:h-[57px]" />
                    <img src={Logo500} alt="500 Global" className="w-[68px] h-[45px] lg:w-[113px] lg:h-[75px]" />
                    <img src={LogoAvito} alt="Avito" className="w-[94px] h-[27px] lg:w-[156px] lg:h-[45px]" />
                    <img src={LogoSber} alt="Sber" className="w-[89px] h-[27px] lg:w-[149px] lg:h-[45px]" />
                    <img src={LogoTechstars} alt="Techstars" className="w-[117px] h-[25px] lg:w-[195px] lg:h-[42px]" />
                </div>
            </div>

            {/* ========== COURSE STATS ========== */}
            <div className="flex flex-col px-4 sm:px-12 lg:px-16 xl:px-0 xl:w-312 xl:mx-auto py-8 lg:py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {COURSE_STATS.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-[#F7F7F5] p-8 flex flex-col justify-between min-h-[186px]"
                        >
                            <h3 className="text-2xl font-semibold text-black text-center leading-[30px]">
                                {stat.value}
                            </h3>
                            <p className="text-[#858585] text-base leading-[1.3] tracking-[-0.48px] text-center">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ========== AGI SECTION ========== */}
            <div className="flex flex-col items-start lg:items-center px-4 sm:px-12 lg:px-16 xl:px-0 xl:w-312 xl:mx-auto py-12 lg:py-16">
                <div className="flex flex-col gap-5 items-start lg:items-center max-w-[768px]">
                    <h2 className="text-3xl md:text-4xl lg:text-[48px] font-semibold text-black text-left lg:text-center leading-[1.2] tracking-[-0.03em]">
                        Осталось 4–5 лет до AGI:<span className="hidden lg:inline"><br /></span><span className="lg:whitespace-nowrap"> окно возможностей уменьшается</span>
                    </h2>
                    <p className="text-lg lg:text-xl text-[#858585] text-left lg:text-center leading-[30px]">
                        AGI — Artificial General Intelligence — способность ИИ к рассуждению, адаптации, самообучению и творчеству
                    </p>
                </div>
            </div>

            {/* ========== MAIN CONTENT ========== */}
            <div className="flex flex-col px-4 sm:px-12 lg:px-16 xl:px-0 xl:w-312 xl:mx-auto pb-16 md:pb-20 lg:pb-24 xl:pb-32">

                {/* ========== AI-FIRST SECTION ========== */}
                <div className="flex flex-col gap-6 lg:gap-12 mt-12 md:mt-16 lg:mt-20 xl:mt-24 items-start sm:items-center">
                    <h2 className="text-3xl md:text-4xl lg:text-[48px] font-semibold text-black text-left sm:text-center leading-[1.2] tracking-[-0.03em] w-full">
                        Быть AI-first — это:
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {AI_FIRST_FEATURES.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-[#F7F7F5] p-8 flex flex-col gap-6 min-h-[286px] justify-between"
                            >
                                <h3 className="text-xl lg:text-2xl font-semibold text-black leading-[1.25]">
                                    {feature.title}
                                </h3>
                                <p className="text-[#858585] text-base leading-[1.3]">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ========== LIFE PROGRAM FEATURES ========== */}
                <div className="relative mt-20 xl:mt-37 py-12 lg:py-16 overflow-hidden">
                    {/* MeshGradient background */}
                    <MeshGradient
                        className="absolute inset-0 w-full h-full"
                        speed={0.18}
                        colors={['#2152ba', '#0e0967', '#f075a6', '#005194']}
                        distortion={0.8}
                        swirl={0.1}
                        grainMixer={0}
                    />
                    <div className="relative z-10 px-4 sm:px-8 lg:px-12">
                        <h2 className="text-2xl md:text-3xl lg:text-[38px] font-semibold text-white text-center leading-[1.2] mb-8 lg:mb-12">
                            Самые актуальные инструменты за счёт life-программы
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {LIFE_PROGRAM_FEATURES.map((feature, index) => (
                                <div key={index} className="bg-[#F7F7F5] p-8 flex items-center justify-center min-h-[118px]">
                                    <p className="text-base text-black text-center leading-[1.3]">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ========== WHO NEEDS CODING ========== */}
                <div className="flex flex-col gap-8 lg:gap-16 mt-20 xl:mt-37 w-full">
                    <div className="flex flex-col gap-8 items-center max-w-[768px] mx-auto">
                        <h2 className="text-3xl xs:text-4xl lg:text-[42px] xl:text-[48px] font-semibold leading-[1.2] tracking-[-0.03em] text-black text-left sm:text-center w-full">
                            Мне нужно уметь программировать? (нет)
                        </h2>
                        <p className="text-base lg:text-lg xl:text-xl font-normal leading-[1.5] text-[#858585] text-left sm:text-center w-full max-w-[642px]">
                            Мы спроектировали курс так, чтобы он подходил специалистам с разным бэкграундом и без знаний программирования
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4 w-full">
                        {WHO_NEEDS_CODING.map((item, index) => (
                            <div key={index} className="flex-1 min-w-0 bg-[#F7F7F5] p-8 flex flex-col justify-between h-auto lg:h-[398px]">
                                <div className="flex flex-col gap-6">
                                    <img src={item.iconUrl} alt={item.title} className="w-10 h-10" />
                                    <h3 className="text-2xl font-semibold leading-[1.25] text-black whitespace-pre-line">
                                        {item.title}
                                    </h3>
                                </div>
                                <ul className="flex flex-col gap-3 mt-6">
                                    {item.list.map((listItem, listIndex) => (
                                        <li key={listIndex} className="flex items-start gap-3 text-base font-normal leading-[1.3] tracking-[-0.03em] text-[#858585]">
                                            <span className="w-1.5 h-1.5 bg-[#858585] rounded-full mt-2 shrink-0"></span>
                                            {listItem}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ========== PROGRAM MODULES ========== */}
                <div id="programs" className="flex flex-col gap-8 lg:gap-16 mt-20 xl:mt-37 w-full">
                    {/* Header */}
                    <div className="flex flex-col gap-8 items-center max-w-[900px] mx-auto">
                        <h2 className="text-3xl xs:text-4xl lg:text-[42px] xl:text-[48px] font-semibold leading-[1.2] tracking-[-0.03em] text-black text-left sm:text-center w-full">
                            Никакого FOMO: по полочкам разложим всё, что происходит в мире нейросетей
                        </h2>
                        <p className="text-base lg:text-lg xl:text-xl font-normal leading-[1.5] text-[#858585] text-left sm:text-center w-full">
                            Подробный обзор инструментов и решение кейсов прямо в Zoom
                        </p>
                    </div>

                    {/* Module Cards - Responsive 1/2/3 columns grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
                        {PROGRAM_MODULES.map((module, index) => (
                            <div
                                key={index}
                                className="bg-[#F7F7F5] p-6 sm:p-8 flex flex-col rounded-lg"
                            >
                                {/* Module Header */}
                                <div className="flex flex-col gap-3">
                                    <span className="text-sm font-medium text-[#858585]">
                                        {module.module}
                                    </span>
                                    <h3 className="text-lg lg:text-xl xl:text-2xl font-semibold text-black leading-[1.3]">
                                        {module.title}
                                    </h3>
                                    {/* Duration Badges */}
                                    {module.duration && (
                                        <div className="flex flex-wrap gap-2 mt-1">
                                            {module.duration.split(' | ').map((part, i) => (
                                                <span
                                                    key={i}
                                                    className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#E8E8E6] text-[#666]"
                                                >
                                                    {part}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Module Items */}
                                <ul className="flex flex-col gap-2.5 mt-5">
                                    {module.items.map((item, itemIndex) => (
                                        <li
                                            key={itemIndex}
                                            className="flex items-start gap-2.5 text-xs sm:text-sm text-[#858585] leading-[1.5]"
                                        >
                                            <span className="w-1 h-1 bg-[#858585] rounded-full mt-2 shrink-0"></span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ========== TOOLS LOGOS ========== */}
                <div className="flex flex-col gap-6 mt-16 lg:mt-20 w-full items-center">
                    <p className="text-sm text-[#858585]">Будем изучать и использовать</p>

                    {/* Desktop Layout (lg+) - 1274x256px container */}
                    <div className="hidden lg:flex flex-col gap-8 w-full max-w-[1274px] h-[256px] items-center justify-center">
                        {/* First Row - 6 logos */}
                        <div className="flex justify-center items-center gap-10 w-full">
                            <img src={LogoMake} alt="Make" className="h-[72px]" />
                            <img src={LogoCursor} alt="Cursor" className="h-[60px]" />
                            <img src={LogoChatGPT} alt="ChatGPT" className="h-[72px]" />
                            <img src={LogoClaude} alt="Claude" className="h-[60px]" />
                            <img src={LogoClaudeCode} alt="Claude Code" className="h-[60px]" />
                            <img src={LogoHiggsfield} alt="Higgsfield" className="h-[60px]" />
                        </div>
                        {/* Second Row - 5 logos */}
                        <div className="flex justify-center items-center gap-10 w-full">
                            <img src={LogoGamma} alt="Gamma" className="h-[60px]" />
                            <img src={LogoGemini} alt="Gemini" className="h-[60px]" />
                            <img src={LogoGithub} alt="GitHub" className="h-[60px]" />
                            <img src={LogoN8n} alt="n8n" className="h-[60px]" />
                            <img src={LogoSupabase} alt="Supabase" className="h-[60px]" />
                        </div>
                    </div>

                    {/* Mobile Layout (до lg) - 3-3-3-2 arrangement */}
                    <div className="flex lg:hidden flex-col gap-5 w-full items-center">
                        {/* Row 1: Make, Cursor, ChatGPT */}
                        <div className="flex flex-wrap justify-center items-center gap-5">
                            <img src={LogoMake} alt="Make" className="h-10" />
                            <img src={LogoCursor} alt="Cursor" className="h-9" />
                            <img src={LogoChatGPT} alt="ChatGPT" className="h-10" />
                        </div>
                        {/* Row 2: Claude, Claude Code, Higgsfield */}
                        <div className="flex flex-wrap justify-center items-center gap-5">
                            <img src={LogoClaude} alt="Claude" className="h-9" />
                            <img src={LogoClaudeCode} alt="Claude Code" className="h-9" />
                            <img src={LogoHiggsfield} alt="Higgsfield" className="h-9" />
                        </div>
                        {/* Row 3: Gamma, Gemini, GitHub */}
                        <div className="flex flex-wrap justify-center items-center gap-5">
                            <img src={LogoGamma} alt="Gamma" className="h-9" />
                            <img src={LogoGemini} alt="Gemini" className="h-9" />
                            <img src={LogoGithub} alt="GitHub" className="h-9" />
                        </div>
                        {/* Row 4: n8n, Supabase */}
                        <div className="flex flex-wrap justify-center items-center gap-5">
                            <img src={LogoN8n} alt="n8n" className="h-9" />
                            <img src={LogoSupabase} alt="Supabase" className="h-9" />
                        </div>
                    </div>
                </div>

                {/* ========== INSTRUCTORS SECTION ========== */}
                <div className="flex flex-col gap-8 lg:gap-12 mt-20 xl:mt-37 w-full">
                    <h2 className="text-3xl xs:text-4xl lg:text-[42px] xl:text-[48px] font-semibold leading-[1.2] tracking-[-0.03em] text-black">
                        Кто преподаёт
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {INSTRUCTORS.map((instructor, index) => (
                            <div key={index} className="bg-[#F7F7F5] p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8">

                                {/* Текстовая часть */}
                                <div className="flex flex-col justify-between flex-1 order-2 lg:order-1">
                                    <div>
                                        <h3 className="text-[20px] font-semibold text-black leading-[1.25]">
                                            {instructor.name}
                                        </h3>
                                        <p className="text-[14px] text-black mt-3 whitespace-pre-line font-normal leading-[1.7]">
                                            {instructor.role}
                                        </p>
                                    </div>
                                    <p className="text-[#858585] text-[14px] leading-[1.4] mt-4 lg:mt-0 font-normal">
                                        {instructor.description}
                                    </p>
                                </div>

                                {/* Кружок 239px с градиентом, фото 80% внутри */}
                                <div className="relative w-[160px] h-[160px] lg:w-[239px] lg:h-[239px] rounded-full overflow-hidden shrink-0 self-center lg:self-start order-1 lg:order-2 will-change-transform">
                                    {/* Градиент заполняет весь кружок */}
                                    <MeshGradient
                                        className="absolute inset-0 w-full h-full"
                                        speed={0.18}
                                        colors={['#2152ba', '#0e0967', '#f075a6', '#005194']}
                                        distortion={0.8}
                                        swirl={0.1}
                                        grainMixer={0}
                                    />

                                    {/* Фото внутри кружка */}
                                    {instructor.photo && (
                                        <img
                                            src={instructor.photo}
                                            alt={instructor.name}
                                            className="absolute inset-0 w-full h-full object-cover"
                                            style={{ objectPosition: instructor.photoPosition }}
                                        />
                                    )}
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* ========== SUCCESS STORIES SECTION ========== */}
            <SuccessStoriesSection />

            <div className="flex flex-col px-4 sm:px-12 lg:px-16 xl:px-0 xl:w-312 xl:mx-auto pb-16 md:pb-20 lg:pb-24 xl:pb-32">

                {/* ========== REVIEWS SECTION ========== */}
                <div>
                    <h2 className="text-3xl md:text-4xl lg:text-[42px] xl:text-[48px] font-semibold text-black leading-[1.2] tracking-[-0.03em] mt-20 xl:mt-37 mb-8 lg:mb-12">
                        Что говорят участники
                    </h2>
                    <ReviewsGrid
                        reviews={REVIEWS}
                        title=""
                        initialRows={2}
                        accentColor="#005EE0"
                        showAllReviewsLink={false}
                        className=""
                    />
                </div>

                {/* ========== PRICING SECTION ========== */}
                <div id="price" className="mt-20 xl:mt-37">
                    <h2 className="text-3xl md:text-4xl lg:text-[42px] xl:text-[48px] font-semibold text-black leading-[1.2] tracking-[-0.03em] mb-8 lg:mb-12">
                        Сколько стоит?
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {PRICE.map((item, index) => (
                            <div key={index} className="bg-[#F7F7F5] p-8 flex flex-col justify-between min-h-[500px]">
                                {/* Header */}
                                <div className="flex flex-col gap-4">
                                    <span className="text-base text-black">{item.title}</span>
                                    <span className="text-4xl lg:text-5xl font-semibold text-black">
                                        {item.price}
                                    </span>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xl font-semibold text-black">{item.forMonth}</span>
                                        <span className="text-sm text-black">{item.installmentNote}</span>
                                    </div>
                                </div>

                                {/* Features list */}
                                <ul className="flex flex-col gap-3 my-6">
                                    {item.list.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-black leading-[1.4]">
                                            <span className="text-black mt-0.5">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Button */}
                                <Button color="primary" onClick={openPopup} fullWidth>
                                    {item.buttonText}
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ========== FAQ SECTION ========== */}
                <div id="faq" className="mt-20 xl:mt-37 flex flex-col items-center">
                    <h2 className="text-3xl md:text-4xl lg:text-[42px] xl:text-[48px] font-semibold text-black leading-[1.2] tracking-[-0.03em] mb-8 lg:mb-12">
                        FAQ
                    </h2>
                    <div className="flex flex-col w-full lg:w-[768px]">
                        {FAQ_ITEMS.map((item, index) => (
                            <QuestionsBlockItem
                                key={index}
                                question={item.question}
                                answer={item.answer}
                                isLast={index === FAQ_ITEMS.length - 1}
                            />
                        ))}
                    </div>
                </div>

            </div>

            {/* ========== CTA SECTION ========== */}
            <div className="px-4 sm:px-12 lg:px-16 xl:px-0 flex justify-center">
                <div className="relative w-full max-w-[1277px] h-auto lg:h-[464px] py-12 lg:py-0 overflow-hidden flex items-center">
                    <MeshGradient
                        className="absolute inset-0 w-full h-full"
                        speed={0.18}
                        colors={['#2152ba', '#0e0967', '#f075a6', '#005194']}
                        distortion={0.8}
                        swirl={0.1}
                        grainMixer={0}
                    />
                    <div className="relative z-10 flex flex-col gap-8 lg:gap-12 max-w-[1035px] px-6 sm:px-10 lg:px-16">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-semibold text-white leading-[1.2] tracking-[-0.03em]">
                                {CTA.title}
                            </h2>
                            <p className="text-base lg:text-lg text-white leading-[1.5]">
                                {CTA.subtitle}
                            </p>
                        </div>
                        <Button color="white" width="220px" onClick={openPopup}>
                            {CTA.ctaText}
                        </Button>
                    </div>
                </div>
            </div>

            {/* ========== CONTACTS SECTION ========== */}
            <div className="flex flex-col px-4 sm:px-12 lg:px-16 xl:px-0 xl:w-312 xl:mx-auto pb-16 md:pb-20 lg:pb-24 xl:pb-32">
                <div id="contacts"
                     className="flex flex-col gap-8 md:gap-6 lg:gap-10 xl:gap-20 mt-20 xl:mt-37 lg:items-center w-full">
                    <Title title="Задать вопрос"/>
                    <div
                        className="flex flex-col md:flex-row gap-6 md:gap-0 md:justify-around md:gap-5 xl:gap-6 md:h-42 lg:h-50 xl:h-58 w-full">
                        <div
                            className="flex flex-col gap-11.5 md:gap-0 md:justify-between w-full px-6 py-5 md:p-8 xl:p-10 bg-[#F7F7F5]">
                            <img className="w-10 md:w-8 xl:w-10 md:h-8 xl:h-10" src={CursorIconBlue} alt="Телеграм"/>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl lg:text-lg xl:text-xl font-semibold text-black">Телеграм</h3>
                                <a href="https://t.me/kgurbanov" target="_blank" rel="noopener noreferrer" className="text-sm xl:text-base text-gray-700 underline hover:text-primary-200 transition-colors">@kgurbanov</a>
                            </div>
                        </div>
                        <div
                            className="flex flex-col gap-11.5 md:gap-0 md:justify-between w-full px-6 py-5 md:p-8 xl:p-10 bg-[#F7F7F5]">
                            <img className="w-10 md:w-8 xl:w-10 md:h-8 xl:h-10" src={EmailIconBlue} alt="Email"/>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl lg:text-lg xl:text-xl font-semibold text-black">Почта</h3>
                                <span className="text-sm xl:text-base text-gray-700">human@sfer.ai</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ========== FOOTER ========== */}
            <footer className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-12 lg:px-16 xl:px-0 xl:w-312 xl:mx-auto py-8 gap-4">
                <img src={LogoGray} alt="sfer.ai" className="h-6" />
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                    <p className="text-xs text-[#858585] text-center md:text-left">
                        2025 ИП Гурбанов Кирилл Игоревич, ОГРНИП 315774600229281. Все права защищены.
                    </p>
                    <Link to="/privacy-policy" className="text-xs text-[#858585] hover:text-[#275DD8] transition-colors">
                        Политика конфиденциальности
                    </Link>
                </div>
            </footer>

            {/* ========== APPLICATION FORM POPUP ========== */}
            <ApplicationFormPopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
            />
        </div>
    );
};
