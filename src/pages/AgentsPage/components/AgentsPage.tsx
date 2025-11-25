import { MeshGradient as MeshGradient1 } from '@paper-design/shaders-react';
import {Button} from "../../../components/Button";
import {Title} from "../../../components/Title";
import {Questions} from "../../../components/FAQ";
import EmailIconBlue from '../assets/imgs/email-blue.svg';
import CursorIconBlue from '../assets/imgs/cursor-blue.svg';
import {Carousel} from "./Carousel";
import {PROGRAM, WHO_NEEDS, PRICE, REVIEWS, SPEAKERS} from "../data";
import {ProgramCard} from "./ProgramCard";
import {CarouselPriceItem} from "./CarouselPriceItem";
import {CarouselReviewsItem} from "./CarouselReviewsItem";

export const AgentsPage = () => {
    const scrollToPrice = () => {
        const priceSection = document.getElementById('price');
        if (priceSection) {
            priceSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="flex flex-col w-full">
            <style>{`
                .base-page-primary {
                    color: #005EE0;
                }
            `}</style>
            {/* Hero Section */}
            <MeshGradient1 speed={0.38} colors={['#2D1B69', '#0A0A1A', '#1A1A3E']} distortion={0.79} swirl={0.4} grainMixer={0.3} grainOverlay={0} frame={32579.315000002767} style={{ position: 'relative', height: '100vh', width: '100%' }} className="-top-14 sm:-top-20" />
            <div
                className="absolute top-[28vh] sm:top-[40vh] lg:top-[30vh] left-4 sm:left-12 lg:left-16 xl:left-[calc(calc(100vw-1408px)/2)] w-[calc(100vw-32px)] sm:w-[calc(100vw-96px)] lg:w-[calc(100vw-128px)] xl:w-352 flex flex-col md:flex-row gap-3 xs:gap-5 md:gap-2 md:justify-between text-white">
                <div className="flex flex-col w-full text-center items-center gap-3 xs:gap-4 xl:gap-10">
                    <h2 className="text-3xl xs:text-4xl md:text-[56px] lg:text-[64px] xl:text-[80px] font-semibold">
                        Собираем AI-агентов<br/>на n8n
                    </h2>
                    <span className="max-w-[500px] text-center text-sm xs:text-base lg:text-lg xl:text-xl font-medium mb-[18vh] sm:mb-2.5">
                        Настоящий персональный ассистент,<br/>которого вы соберёте самостоятельно
                    </span>
                    <Button color="white" width="317px" height="59px" onClick={scrollToPrice}>Записаться</Button>
                </div>
            </div>
            <div className="flex flex-col px-4 sm:px-12 lg:px-16 xl:px-0 xl:w-312 xl:mx-auto -mt-4 lg:mt-5">
                {/* Статистика */}
                <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-15 lg:items-center lg:justify-center">
                    <div className="lg:w-104 flex flex-col gap-5 lg:text-center lg:items-center">
                        <span
                            className="text-[72px] xs:text-[80px] md:text-7xl lg:text-8xl xl:text-[140px] base-page-primary">&gt;79%</span>
                        <span className="text-base lg:text-lg xl:text-xl font-medium text-gray-400">компаний уже используют AI-агентов для автоматизации процессов</span>
                    </div>
                    <div className="lg:w-104 flex flex-col gap-5 lg:text-center lg:items-center">
                        <span
                            className="text-[72px] xs:text-[80px] md:text-7xl lg:text-8xl xl:text-[140px] base-page-primary">48%</span>
                        <span className="text-base lg:text-lg xl:text-xl font-medium text-gray-400">компаний перераспределяют бюджеты с не-AI направлений в пользу AI</span>
                    </div>
                </div>

                {/* Блок 1: Фрагменты с буткемпа (Loom 1) */}
                <div className="w-full mt-12 md:mt-16 lg:mt-20 xl:mt-24">
                    <h2 className="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl font-semibold text-black mb-6 lg:mb-8 xl:mb-10 text-center lg:text-left">
                        Фрагменты с буткемпа
                    </h2>
                    <div className="relative w-full" style={{ paddingBottom: '65.02%', height: 0 }}>
                        <iframe
                            src="https://www.loom.com/embed/3297393572d34bb0aa7e3594fe58c377"
                            frameBorder="0"
                            allowFullScreen
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            className="rounded-lg"
                        />
                    </div>
                    <p className="text-sm xs:text-base lg:text-lg text-gray-500 mt-4 lg:mt-6 text-center lg:text-left">
                        AI-контент-менеджер, который сам подбирает темы, пишет посты, утверждает их и планирует публикации
                    </p>
                </div>

                {/* Блок 2: Мне нужно уметь программировать? */}
                <div className="flex flex-col gap-8 lg:gap-16 mt-20 xl:mt-37 w-full">
                    <div className="flex flex-col gap-4 lg:gap-8 items-center max-w-[768px] mx-auto">
                        <h2 className="text-3xl xs:text-4xl lg:text-[42px] xl:text-[48px] font-semibold leading-[1.2] tracking-[-0.03em] text-black text-center w-full">
                            Мне нужно уметь программировать? (нет)
                        </h2>
                        <p className="text-base lg:text-lg xl:text-xl font-normal leading-[1.5] text-[#858585] text-center w-full max-w-[642px]">
                            Мы спроектировали курс так, чтобы он подходил специалистам с разным бэкграундом и без знаний программирования
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4 w-full">
                        {WHO_NEEDS.map((item, index) => (
                            <div key={index} className="flex-1 min-w-[320px] bg-[#F7F7F5] p-8 flex flex-col justify-between h-auto lg:h-[320px]">
                                <div className="flex flex-col gap-6">
                                    <img src={item.iconUrl} alt={item.title} className="w-10 h-10" />
                                    <h3 className="text-xl lg:text-2xl font-semibold leading-[1.25] text-black">
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="text-base font-normal leading-[1.3] tracking-[-0.03em] text-[#858585] mt-6">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Блок 3: Второй Loom (бизнес-ассистент) */}
                <div className="w-full mt-20 xl:mt-37">
                    <div className="relative w-full" style={{ paddingBottom: '65.02%', height: 0 }}>
                        <iframe
                            src="https://www.loom.com/embed/eb42c546612845d48741809b9e0a5f47"
                            frameBorder="0"
                            allowFullScreen
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            className="rounded-lg"
                        />
                    </div>
                    <p className="text-sm xs:text-base lg:text-lg text-gray-500 mt-4 lg:mt-6 text-center lg:text-left">
                        Полноценный бизнес-ассистент, который контролирует ваш календарь и почту
                    </p>
                </div>

                {/* Блок 4: 6 встреч по 2 часа (Программа) */}
                <div id="programs" className="flex flex-col gap-6 lg:gap-10 mt-20 xl:mt-37 w-full">
                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-black leading-[1.2] tracking-[-0.03em]">
                            6 встреч по 2.5 часа
                        </h2>
                        <p className="text-base lg:text-xl text-[#AEB0B3] mt-4 lg:mt-6">
                            Подробный обзор платформы n8n прямо в Zoom
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 w-full">
                        {PROGRAM.map((item, index) => (
                            <ProgramCard
                                key={index}
                                day={item.day}
                                date={item.date}
                                title={item.title}
                                list={item.list}
                            />
                        ))}
                    </div>
                </div>

                {/* Блок 5: Ведущие буткэмпа */}
                <div id="speaker" className="flex flex-col gap-8 lg:gap-16 mt-20 xl:mt-37 w-full">
                    <div className="flex flex-col gap-8 items-center max-w-[768px] mx-auto">
                        <h2 className="text-3xl xs:text-4xl lg:text-[42px] xl:text-[48px] font-semibold leading-[1.2] tracking-[-0.03em] text-black text-center w-full">
                            Ведущие буткэмпа
                        </h2>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4 w-full">
                        {SPEAKERS.map((speaker, index) => (
                            <div key={index} className="w-full max-w-[343px] lg:max-w-none mx-auto lg:w-[632px] h-[563px] lg:h-[301px] bg-[#F7F7F5] p-8 flex flex-col lg:flex-row-reverse gap-6 lg:gap-8 items-center lg:items-start">
                                <div className="relative shrink-0">
                                    <MeshGradient1 className="w-[250px] h-[250px] lg:w-[239px] lg:h-[239px] rounded-full" speed={0.38} colors={['#2D1B69', '#0A0A1A', '#1A1A3E']} distortion={0.79} swirl={0.4} grainMixer={0.3} grainOverlay={0} frame={32579.315000002767} />
                                    <img
                                        className="absolute top-0 w-[250px] h-[250px] lg:w-[239px] lg:h-[239px] rounded-full object-cover"
                                        src={speaker.photo}
                                        alt={speaker.name}
                                        style={{
                                            transform: index === 1 ? 'scaleX(-1)' : 'none',
                                            objectPosition: index === 0 ? 'center 20%' : 'center center'
                                        }}
                                    />
                                </div>
                                <div className="flex flex-col gap-4 lg:gap-6 justify-center flex-1">
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-xl lg:text-2xl font-semibold leading-[1.2] text-black">
                                            {speaker.name}
                                        </h3>
                                        <p className="text-base font-normal leading-[1.3] text-black whitespace-pre-line">
                                            {speaker.title}
                                        </p>
                                    </div>
                                    <p className="text-sm lg:text-base font-normal leading-[1.3] tracking-[-0.03em] text-[#858585]">
                                        {speaker.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Блок 6: Отзывы */}
                <div id="reviews" className="mt-20 xl:mt-37">
                    <Carousel title="Что говорят участники программ sfer.ai" cardsLength={REVIEWS.length} cardWidth={360}>
                        {REVIEWS.map((review, index) => (
                            <CarouselReviewsItem key={index} title={review.title} text={review.text} author={review.author}
                                                 role={review.role} avatarUrl={review.avatarUrl}/>
                        ))}
                    </Carousel>
                </div>

                {/* Блок 7: Цены */}
                <div id="price" className="mt-20 xl:mt-37">
                    <Carousel title="Сколько стоит?" cardsLength={PRICE.length} cardWidth={612}>
                        {PRICE.map((item, index) => (
                            <CarouselPriceItem key={index} title={item.title} price={item.price} forMonth={item.forMonth}
                                               list={item.list} buttonText={item.buttonText} link={item.link}/>
                        ))}
                    </Carousel>
                </div>

                {/* Блок 8: FAQ */}
                <div id="faq" className="flex flex-col gap-6 lg:gap-16 xl:gap-26 mt-20 xl:mt-37 lg:items-center">
                    <Title title="FAQ"/>
                    <Questions/>
                </div>

                {/* Блок 9: CTA */}
                <div className="flex relative w-full mt-20 xl:mt-37 lg:items-center">
                    <MeshGradient1
                        speed={0.38}
                        colors={['#2D1B69', '#0A0A1A', '#1A1A3E']}
                        distortion={0.79}
                        swirl={0.4}
                        grainMixer={0.3}
                        grainOverlay={0}
                        frame={32579.315000002767}
                        style={{width: '100%'}}
                        className="h-96 sm:h-92 lg:h-64"
                    />
                    <div
                        className="absolute flex flex-col lg:flex-row justify-between lg:justify-between w-full h-96 sm:h-92 lg:h-64 p-6 xs:p-8 sm:p-10 lg:p-15 items-center lg:items-center">
                        <span
                            className="text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] xl:text-5xl font-semibold text-white leading-[120%] z-10 relative text-center lg:text-left pt-4 lg:pt-0">Готовы собрать{' '}<br className="hidden lg:block"/>своего AI-агента?</span>
                        <Button color="white" width="240px" onClick={scrollToPrice}>Записаться</Button>
                    </div>
                </div>

                {/* Блок 10: Контакты */}
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
                                <span className="text-sm xl:text-base text-gray-700">info@sfer.ai</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
