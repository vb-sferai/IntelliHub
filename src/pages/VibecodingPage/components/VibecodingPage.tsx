import { Dithering as Dithering1 } from '@paper-design/shaders-react';
import {Button} from "../../../components/Button";
import {Title} from "../../../components/Title";
import {Questions} from "../../../components/FAQ";
import EmailIconBlue from '../assets/imgs/email-blue.svg';
import CursorIconBlue from '../assets/imgs/cursor-blue.svg';
import {Carousel} from "./Carousel";
import {METRICS, WHO_NEEDS_CODING, WEBINAR_SESSIONS, SPEAKERS, PRICE, REVIEWS} from "../data";
import {CarouselPriceItem} from "./CarouselPriceItem";
import {CarouselReviewsItem} from "./CarouselReviewsItem";

export const VibecodingPage = () => {
    return (
        <div className="flex flex-col w-full">
            <style>{`
                .base-page-primary {
                    color: #005EE0;
                }
            `}</style>
            <Dithering1 colorBack="#00000000" colorFront="#262559" speed={0.11} shape="warp" type="4x4" size={3.3} scale={1.66} frame={52277.68800003016} style={{ position: 'relative', height: '100vh', width: '100%', backgroundColor: '#16151F' }} className="-top-14 sm:-top-20" />
            <div
                className="absolute top-[23vh] xs:top-[35vh] sm:top-[40vh] lg:top-[30vh] left-4 sm:left-12 lg:left-16 xl:left-[calc(calc(100vw-1408px)/2)] w-[calc(100vw-32px)] sm:w-[calc(100vw-96px)] lg:w-[calc(100vw-128px)] xl:w-352 flex flex-col md:flex-row gap-3 xs:gap-5 md:gap-2 md:justify-between text-white">
                <div className="flex flex-col w-full text-center items-center gap-3 xs:gap-4 xl:gap-10">
                    <h2 className="text-3xl xs:text-4xl md:text-[56px] lg:text-[64px] xl:text-[80px] font-semibold leading-[110%]">
                        Введение в Cursor: сделай<br/>свой первый вайб-проект<br/>за 2 недели
                    </h2>
                    <span className="max-w-[725px] text-center text-sm xs:text-base lg:text-lg xl:text-xl font-medium mb-2.5">
                        Пошагово изучим инструменты вайбкодинга<br className="hidden md:block"/>и начнём собирать прототипы и продукты без команды и разработчика
                    </span>
                    <Button color="white" width="190px" link="https://kirillgurbanov.getcourse.ru/vibecoding_workshop">Записаться</Button>
                </div>
            </div>
            <div className="flex flex-col px-4 sm:px-12 lg:px-16 xl:px-0 xl:w-312 xl:mx-auto -mt-4 lg:mt-5">
                <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-15 lg:items-center lg:justify-center">
                    {METRICS.map((metric, index) => (
                        <div key={index} className="lg:w-104 flex flex-col gap-5 lg:text-center lg:items-center">
                            <span className="text-[72px] xs:text-[80px] md:text-7xl lg:text-8xl xl:text-[140px] font-normal leading-none tracking-[-0.06em] base-page-primary">
                                {metric.value}
                            </span>
                            <span className="text-base lg:text-lg xl:text-xl font-medium leading-[1.2] tracking-[-0.03em] text-[#AEB0B3]">
                                {metric.description}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="w-full mt-20 xl:mt-37">
                    <h2 className="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl font-semibold text-black mb-6 lg:mb-8 xl:mb-10 text-center lg:text-left">
                        Фрагменты с буткемпа
                    </h2>
                    <div className="relative w-full" style={{ paddingBottom: '64.93975903614458%', height: 0 }}>
                        <iframe
                            src="https://www.loom.com/embed/936d3985e0934e8a971c64b12d2be6ff"
                            frameBorder="0"
                            webkitallowfullscreen="true"
                            mozallowfullscreen="true"
                            allowFullScreen
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            className="rounded-lg"
                        />
                    </div>
                    <p className="text-sm xs:text-base lg:text-lg text-gray-500 mt-4 lg:mt-6 text-center lg:text-left">
                        за несколько минут копируем любой лендинг и адаптируем блоки под себя
                    </p>
                </div>
                <div className="flex flex-col gap-8 lg:gap-16 mt-20 xl:mt-37 w-full">
                    <div className="flex flex-col gap-8 items-center max-w-[768px] mx-auto">
                        <h2 className="text-3xl xs:text-4xl lg:text-[42px] xl:text-[48px] font-semibold leading-[1.2] tracking-[-0.03em] text-black text-center w-full">
                            Мне нужно уметь программировать? (нет)
                        </h2>
                        <p className="text-base lg:text-lg xl:text-xl font-normal leading-[1.5] text-[#858585] text-center w-full max-w-[642px]">
                            Мы спроектировали курс так, чтобы он подходил специалистам с разным бэкграундом и без знаний программирования
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4 w-full">
                        {WHO_NEEDS_CODING.map((item, index) => (
                            <div key={index} className="flex-1 min-w-[320px] bg-[#F7F7F5] p-8 flex flex-col justify-between h-auto lg:h-[398px]">
                                <div className="flex flex-col gap-6">
                                    <img src={item.iconUrl} alt={item.title} className="w-10 h-10" />
                                    <h3 className="text-2xl font-semibold leading-[1.25] text-black whitespace-pre-line">
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
                <div className="w-full mt-20 xl:mt-37">
                    <div className="relative w-full" style={{ paddingBottom: '64.93975903614458%', height: 0 }}>
                        <iframe
                            src="https://www.loom.com/embed/9e8890c5003446f2857c93c265fbe197"
                            frameBorder="0"
                            webkitallowfullscreen="true"
                            mozallowfullscreen="true"
                            allowFullScreen
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            className="rounded-lg"
                        />
                    </div>
                    <p className="text-sm xs:text-base lg:text-lg text-gray-500 mt-4 lg:mt-6 text-center lg:text-left">
                        Легко создаём сервисы и приложения и проверяем гипотезы
                    </p>
                </div>
                <div id="programs" className="flex flex-col gap-8 lg:gap-16 mt-20 xl:mt-37 w-full">
                    <div className="flex flex-col gap-8 items-center max-w-[768px] mx-auto">
                        <h2 className="text-3xl xs:text-4xl lg:text-[42px] xl:text-[48px] font-semibold leading-[1.2] tracking-[-0.03em] text-black text-center w-full">
                            5 вебинаров по 2,5 часа
                        </h2>
                        <p className="text-base lg:text-lg xl:text-xl font-normal leading-[1.5] text-[#858585] text-center w-full">
                            Подробный обзор инструмента прямо в Zoom
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <div className="flex flex-col lg:flex-row gap-4 w-full">
                            {WEBINAR_SESSIONS.slice(0, 3).map((session, index) => (
                                <div key={index} className="flex-1 min-w-[320px] bg-[#F7F7F5] p-8 flex flex-col justify-between h-auto lg:h-[400px]">
                                    <div className="flex flex-col gap-6">
                                        <div className="flex flex-col gap-2">
                                            <p className="text-base font-normal leading-[1.3] tracking-[-0.03em] text-black">
                                                {session.day}
                                            </p>
                                            <h3 className="text-2xl font-semibold leading-[1.25] text-black whitespace-pre-line">
                                                {session.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3 mt-6">
                                        {session.items.map((item, itemIndex) => (
                                            <div key={itemIndex} className="flex gap-6 items-start">
                                                <div className="w-[5px] h-[5px] bg-[#858585] rounded-full shrink-0 mt-2" />
                                                <p className="text-base font-normal leading-[1.3] tracking-[-0.03em] text-[#858585] flex-1">
                                                    {item}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4 w-full">
                            {WEBINAR_SESSIONS.slice(3, 5).map((session, index) => (
                                <div key={index} className="flex-1 min-w-[320px] bg-[#F7F7F5] p-8 flex flex-col justify-between h-auto lg:h-[400px]">
                                    <div className="flex flex-col gap-6">
                                        <div className="flex flex-col gap-2">
                                            <p className="text-base font-normal leading-[1.3] tracking-[-0.03em] text-black">
                                                {session.day}
                                            </p>
                                            <h3 className="text-2xl font-semibold leading-[1.25] text-black whitespace-pre-line">
                                                {session.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3 mt-6">
                                        {session.items.map((item, itemIndex) => (
                                            <div key={itemIndex} className="flex gap-6 items-start">
                                                <div className="w-[5px] h-[5px] bg-[#858585] rounded-full shrink-0 mt-2" />
                                                <p className="text-base font-normal leading-[1.3] tracking-[-0.03em] text-[#858585] flex-1">
                                                    {item}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
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
                                    <Dithering1 className="w-[250px] h-[250px] lg:w-[239px] lg:h-[239px] rounded-full" colorBack="#00000000" colorFront="#262559" speed={0.11} shape="warp" type="4x4" size={3.3} scale={1.66} frame={52277.68800003016} style={{ backgroundColor: '#16151F' }} />
                                    <img
                                        className="absolute top-0 w-[250px] h-[250px] lg:w-[239px] lg:h-[239px] rounded-full object-cover"
                                        src={speaker.photo}
                                        alt={speaker.name}
                                        style={{
                                            transform: index === 1 ? 'scaleX(-1)' : 'none'
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
                <div id="reviews" className="mt-20 xl:mt-37">
                    <Carousel title="Что говорят участники" cardsLength={REVIEWS.length} cardWidth={360}>
                        {REVIEWS.map((review) => (
                            <CarouselReviewsItem title={review.title} text={review.text} author={review.author}
                                                 role={review.role} avatarUrl={review.avatarUrl}/>
                        ))}
                    </Carousel>
                </div>
                <div id="price" className="mt-20 xl:mt-37">
                    <Carousel title="Сколько стоит?" cardsLength={PRICE.length} cardWidth={612}>
                        {PRICE.map((item) => (
                            <CarouselPriceItem title={item.title} price={item.price} forMonth={item.forMonth}
                                               list={item.list} buttonText={item.buttonText} link={item.link}/>
                        ))}
                    </Carousel>
                </div>
                <div id="faq" className="flex flex-col gap-6 lg:gap-16 xl:gap-26 mt-20 xl:mt-37 lg:items-center">
                    <Title title="FAQ"/>
                    <Questions/>
                </div>
                <div className="flex relative w-full mt-20 xl:mt-37 min-h-[586px] lg:h-[454px] items-center justify-center py-12 lg:py-0">
                    <Dithering1 colorBack="#00000000" colorFront="#262559" speed={0.11} shape="warp" type="4x4" size={3.3} scale={1.66} frame={52277.68800003016} style={{ position: 'absolute', inset: 0, backgroundColor: '#16151F' }} />
                    <div className="relative flex flex-col gap-10 lg:gap-15 w-full max-w-[323px] lg:max-w-[1012px] px-6 lg:px-0 z-10">
                        <div className="flex flex-col gap-6 text-white">
                            <h2 className="text-3xl xs:text-4xl lg:text-5xl font-semibold leading-[1.2] tracking-[-0.03em]">
                                Освоив Cursor, вы начнёте понимать логику работы других вайб-инструментов
                            </h2>
                            <p className="text-base font-normal leading-[1.5]">
                                И сможете создавать проекты любого уровня — от лендингов до прототипов сервисов.
                            </p>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                            <Button color="white" width="267px" link="https://kirillgurbanov.getcourse.ru/vibecoding_workshop">Участвовать вживую</Button>
                            <Button color="blur" width="221px" link="https://kirillgurbanov.getcourse.ru/vibecoding_only_record">Купить запись</Button>
                        </div>
                    </div>
                </div>
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
        </div>
    );
};


