import { MeshGradient as MeshGradient1 } from '@paper-design/shaders-react';
import {Button} from "../../../components/Button";
import {Title} from "../../../components/Title";
import {Questions} from "../../../components/FAQ";
import EmailIconBlue from '../assets/imgs/email-blue.svg';
import CursorIconBlue from '../assets/imgs/cursor-blue.svg';
import KirillImg from '../assets/imgs/kirill.png';
import {Carousel} from "./Carousel";
import {METRICS, WHO_NEEDS_CODING, WEBINAR_SESSIONS, PRICE, REVIEWS} from "../data";
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
            <MeshGradient1 speed={0.38} colors={['#80C2FF', '#061346', '#3A83E8']} distortion={0.79} swirl={0.4} grainMixer={0.3} grainOverlay={0} frame={32579.315000002767} style={{ position: 'relative', height: '100vh', width: '100%' }} className="-top-14 sm:-top-20" />
            <div
                className="absolute top-[23vh] xs:top-[35vh] sm:top-[40vh] lg:top-[30vh] left-4 sm:left-12 lg:left-16 xl:left-[calc(calc(100vw-1408px)/2)] w-[calc(100vw-32px)] sm:w-[calc(100vw-96px)] lg:w-[calc(100vw-128px)] xl:w-352 flex flex-col md:flex-row gap-3 xs:gap-5 md:gap-2 md:justify-between text-white">
                <div className="flex flex-col w-full text-center items-center gap-3 xs:gap-4 xl:gap-10">
                    <h2 className="text-3xl xs:text-4xl md:text-[56px] lg:text-[64px] xl:text-[80px] font-semibold leading-[110%]">
                        Введение в Cursor: сделай<br/>свой первый вайб-проект<br/>за 2 недели
                    </h2>
                    <span className="max-w-[725px] text-center text-sm xs:text-base lg:text-lg xl:text-xl font-medium mb-2.5">
                        Пошагово изучим инструменты вайбкодинга<br className="hidden md:block"/>и начнём собирать прототипы и продукты без команды и разработчика
                    </span>
                    <Button color="white" width="190px" link="https://kirillgurbanov.getcourse.ru/3day_workshop_ai">Записаться</Button>
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
                <div className="flex flex-col gap-8 lg:gap-16 mt-20 xl:mt-37 w-full">
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
                <h3 className="lg:hidden flex text-[30px] font-semibold text-black mt-20 mb-6">
                    Автор и ведущий программы
                </h3>
                <div id="speaker"
                     className="w-full flex flex-col lg:flex-row justify-between pl-8 lg:pl-15 py-6 lg:py-10.5 pr-8 lg:pr-20 bg-[#F7F7F5] lg:mt-20 xl:mt-37 gap-4 lg:gap-0">
                    <div className="flex flex-col justify-between my-2 lg:my-4.5">
                        <h3 className="hidden lg:flex text-2xl lg:text-[42px] xl:text-5xl font-semibold text-black">
                            Автор и ведущий программы
                        </h3>
                        <div className="relative lg:hidden block mb-10">
                            <MeshGradient1 className="w-full lg:w-103 h-[calc(100vw-96px)] max-h-[500px] lg:h-103 rounded-full" speed={0.38}
                                           colors={['#80C2FF', '#061346', '#3A83E8']} distortion={0.79} swirl={0.4}
                                           grainMixer={0.3} grainOverlay={0} frame={32579.315000002767}/>
                            <img className="absolute top-0 w-full lg:w-103 h-[calc(100vw-96px)] max-h-[500px] object-cover rounded-full" src={KirillImg}
                                 alt="Кирилл Гурбанов"/>
                        </div>
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-2">
                                <span className="text-lg lg:text-2xl font-semibold">Кирилл Гурбанов</span>
                                <span className="text-base leading-[130%]">Основатель sfer.ai, ex CPO в Сбере и МТС, CEO в банке группы Самолет</span>
                            </div>
                            <span className="text-base text-gray-500 leading-[24px] max-w-139">Основатель sfer.ai, практик с 9-летним опытом на топ-позициях в крупнейших компаниях России: со-основатель и член СД банка СМЛТ (группа «Самолет»), Chief Digital Officer МТС Банк, CPO Сбер Бизнес Мобайл</span>
                        </div>
                    </div>
                    <div className="relative hidden lg:block">
                        <MeshGradient1 className="w-80 h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 rounded-full" speed={0.38}
                                       colors={['#80C2FF', '#061346', '#3A83E8']} distortion={0.79} swirl={0.4}
                                       grainMixer={0.3} grainOverlay={0} frame={32579.315000002767}/>
                        <img className="absolute top-0 w-80 h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 rounded-full object-cover" src={KirillImg}
                             alt="Кирилл Гурбанов"/>
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
                <div className="flex relative w-full mt-20 xl:mt-37 lg:items-center">
                    <MeshGradient1
                        speed={0.38}
                        colors={['#80C2FF', '#061346', '#3A83E8']}
                        distortion={0.79}
                        swirl={0.4}
                        grainMixer={0.3}
                        grainOverlay={0}
                        frame={32579.315000002767}
                        style={{width: '100%'}}
                        className="h-96 sm:h-92 lg:h-64"
                    />
                    <div
                        className="absolute flex flex-col lg:flex-row lg:justify-between w-full h-96 sm:h-92 lg:h-64 p-6 xs:p-8 sm:p-10 lg:p-15 lg:items-center gap-12 lg:gap-0">
                        <span
                            className="text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] xl:text-5xl font-semibold text-white leading-[120%] z-10 relative max-w-xs xs:max-w-sm sm:max-w-md">Готовы посмотреть{' '}<br className="hidden lg:block"/>на AI по-новому?</span>
                        <div className="hidden lg:flex flex-row gap-8">
                            <Button color="white" width="240px" link="https://kirillgurbanov.getcourse.ru/3day_workshop_ai">Участвовать вживую</Button>
                            <Button color="blur" width="240px" link="https://kirillgurbanov.getcourse.ru/3day_workshop_ai_rec">Купить запись</Button>
                        </div>
                        <div className="lg:hidden flex flex-col gap-4">
                            <Button color="white" width="100%" link="https://kirillgurbanov.getcourse.ru/3day_workshop_ai">Участвовать вживую</Button>
                            <Button color="blur" width="100%" link="https://kirillgurbanov.getcourse.ru/3day_workshop_ai_rec">Купить запись</Button>
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
                                <span className="text-sm xl:text-base text-gray-700">info@sfer.ai</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


