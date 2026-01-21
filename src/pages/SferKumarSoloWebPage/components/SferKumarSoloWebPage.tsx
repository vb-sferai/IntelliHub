import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MeshGradient } from '@paper-design/shaders-react';
import { saveUTMParams } from '../../../utils/analytics';
import HeroBg from '../assets/Rectangle 266.png';
import { ReviewsGrid } from '../../../components/ReviewsGrid';
import LogoGray from '../assets/logo-gray.svg';
import { HERO, AI_FIRST_FEATURES, CTA, REVIEWS, WHO_NEEDS_CODING, PROGRAM_MODULES, INSTRUCTORS } from '../data';
import { SuccessStoriesSection } from './SuccessStoriesSection';
import { RegistrationForm } from './RegistrationForm';
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

export const SferKumarSoloWebPage = () => {
    // Сохраняем UTM-параметры при загрузке страницы
    useEffect(() => {
        saveUTMParams();
    }, []);

    return (
        <div className="flex flex-col w-full overflow-x-clip">
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

                <div className="relative z-10 flex flex-col lg:flex-row lg:justify-between lg:items-center w-full gap-8 lg:gap-12 px-4 sm:px-12 lg:px-16 xl:px-[calc((100vw-1248px)/2)] text-white py-20 lg:py-0">
                    {/* Left side - Title and Subtitle */}
                    <div className="flex flex-col gap-6 lg:gap-8 lg:max-w-[650px] xl:max-w-[700px]">
                        <h1 className="text-[56px] xs:text-[64px] md:text-[72px] lg:text-[80px] xl:text-[96px] font-semibold leading-[1] tracking-[-0.04em] xl:tracking-[-3.2px] whitespace-pre-line">
                            {HERO.title}
                        </h1>
                        <p className="text-lg xs:text-xl lg:text-2xl xl:text-[24px] font-medium leading-[1.3] lg:leading-[130%] tracking-[-0.6px] opacity-90 whitespace-pre-line">
                            {HERO.subtitle}
                        </p>
                    </div>

                    {/* Right side - Registration Form */}
                    <div className="w-full lg:w-[360px] xl:w-[400px]">
                        <RegistrationForm />
                    </div>
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

            </div>

            {/* ========== SUCCESS STORIES SECTION ========== */}
            <SuccessStoriesSection />

            <div className="flex flex-col px-4 sm:px-12 lg:px-16 xl:px-0 xl:w-312 xl:mx-auto pb-16 md:pb-20 lg:pb-24 xl:pb-32">

                {/* ========== PROGRAM MODULES ========== */}
                <div id="programs" className="flex flex-col gap-8 lg:gap-16 mt-20 xl:mt-37 w-full">
                    {/* Header */}
                    <div className="flex flex-col gap-8 items-center max-w-[900px] mx-auto">
                        <h2 className="text-3xl xs:text-4xl lg:text-[42px] xl:text-[48px] font-semibold leading-[1.2] tracking-[-0.03em] text-black text-left sm:text-center w-full">
                            Никакого FOMO: по полочкам<br />
                            разложим всё, что происходит<br />
                            в мире нейросетей
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
                <div id="speaker" className="flex flex-col gap-8 lg:gap-12 mt-20 xl:mt-37 w-full">
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

                                    {/* Фото внутри кружка, прижато к низу */}
                                    <div className="absolute inset-0 flex items-end justify-center">
                                        <img
                                            src={instructor.photo}
                                            alt={instructor.name}
                                            className="max-w-full max-h-full object-contain"
                                        />
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <div className="flex flex-col px-4 sm:px-12 lg:px-16 xl:px-0 xl:w-312 xl:mx-auto pb-16 md:pb-20 lg:pb-24 xl:pb-32">

                {/* ========== REVIEWS SECTION ========== */}
                <div id="reviews">
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

            </div>

            {/* ========== CTA SECTION ========== */}
            <div className="px-4 sm:px-12 lg:px-16 xl:px-0 flex justify-center">
                <div className="relative w-full max-w-[1277px] py-12 lg:py-16 overflow-hidden">
                    <MeshGradient
                        className="absolute inset-0 w-full h-full"
                        speed={0.18}
                        colors={['#2152ba', '#0e0967', '#f075a6', '#005194']}
                        distortion={0.8}
                        swirl={0.1}
                        grainMixer={0}
                    />
                    <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-between px-6 sm:px-10 lg:px-16">
                        {/* Left - Text */}
                        <div className="flex flex-col gap-4 max-w-[600px]">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold text-white leading-[1.2] tracking-[-0.03em]">
                                <span className="whitespace-nowrap">Сделайте AI-инструменты</span><br />
                                частью своего стека и<br />
                                войдите в топ-1% рынка
                            </h2>
                            <p className="text-base lg:text-lg text-white leading-[1.5]">
                                {CTA.subtitle}
                            </p>
                        </div>
                        {/* Right - Form */}
                        <div className="w-full lg:w-[360px] xl:w-[400px]">
                            <RegistrationForm />
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
        </div>
    );
};
