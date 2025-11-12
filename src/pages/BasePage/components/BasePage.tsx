import { MeshGradient as MeshGradient1 } from '@paper-design/shaders-react';
import {Button} from "../../../components/Button";
import {Title} from "../../../components/Title";
import {Questions} from "../../../components/FAQ";
import EmailIconBlue from '../../../assets/imgs/email-blue.svg';
import CursorIconBlue from '../../../assets/imgs/cursor-blue.svg';
import KirillImg from '../../../assets/imgs/kirill.png';
import BaseVideo from '../assets/videos/basevideo.mp4';
import {Carousel} from "./Carousel";
import {CONTENT, AUDIENCE, PRICE, REVIEWS} from "../data";
import {CarouselContentItem} from "./CarouselContentItem";
import {CarouselPriceItem} from "./CarouselPriceItem";
import {CarouselReviewsItem} from "./CarouselReviewsItem";

export const BasePage = () => {
    return (
        <div className="flex flex-col w-full">
            <style>{`
                .base-page-primary {
                    color: #005EE0;
                }
            `}</style>
            <div className="relative min-h-screen w-full flex items-center justify-center -mt-14 sm:-mt-20">
                <MeshGradient1 speed={0.38} colors={['#80C2FF', '#061346', '#3A83E8']} distortion={0.79} swirl={0.4} grainMixer={0.3} grainOverlay={0} frame={32579.315000002767} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
                <div className="relative z-10 flex flex-col w-full text-center items-center gap-3 xs:gap-4 xl:gap-10 px-4 sm:px-12 lg:px-16 xl:px-0 max-w-[1408px] text-white py-20">
                    <span className="text-xl xs:text-[22px] lg:text-2xl font-medium text-white">25-27 ноября</span>
                    <h2 className="text-3xl xs:text-4xl md:text-[56px] lg:text-[64px] xl:text-[80px] font-semibold">
                        AI-база: как эффективно использовать ИИ<br/>в работе и жизни
                    </h2>
                    <span className="md:max-w-95 text-center text-sm xs:text-base lg:text-lg xl:text-xl font-medium mb-2.5">
                        С нуля до продвинутого пользователя
                    </span>
                    <Button color="white" width="190px" link="https://kirillgurbanov.getcourse.ru/3day_workshop_ai">Прокачаться</Button>
                </div>
            </div>
            <div className="flex flex-col px-4 sm:px-12 lg:px-16 xl:px-0 xl:w-312 xl:mx-auto pt-12 md:pt-16 lg:pt-20 xl:pt-24 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
                <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-15 lg:items-center lg:justify-center">
                    <div className="lg:w-104 flex flex-col gap-5 lg:text-center lg:items-center">
                        <span
                            className="text-[72px] xs:text-[80px] md:text-7xl lg:text-8xl xl:text-[140px] base-page-primary">9.4/10</span>
                        <span className="text-base lg:text-lg xl:text-xl font-medium text-gray-400">Средняя оценка по итогам обратной связи после воркшопов</span>
                    </div>
                    <div className="lg:w-104 flex flex-col gap-5 lg:text-center lg:items-center">
                        <span
                            className="text-[72px] xs:text-[80px] md:text-7xl lg:text-8xl xl:text-[140px] base-page-primary">2500+</span>
                        <span className="text-base lg:text-lg xl:text-xl font-medium text-gray-400">Человек начали применять AI в жизни и работе вместе с нами</span>
                    </div>
                </div>
                <div id="programs" className="flex flex-col gap-6 lg:gap-16 mt-12 md:mt-16 lg:mt-20 xl:mt-24 items-center">
                    <Title title="3 онлайн-встречи по 2,5 часа"
                           subTitle="Изучаем теорию и решаем практические кейсы прямо в Zoom"/>
                    <Carousel cardsLength={CONTENT.length} cardWidth={400}>
                        {CONTENT.map((item) => (
                            <CarouselContentItem iconUrl={item.iconUrl} title={item.title} text={item.text}
                                                 list={item.list} date={item.date}/>
                        ))}
                    </Carousel>
                </div>
                <div className="flex flex-col gap-6 lg:gap-16 mt-20 xl:mt-37 items-center">
                    <Title title="Адаптируем каждый воркшоп с учётом последних обновлений AI-инструментов"
                           subTitle="Всё на реальных кейсах участников"/>
                    <video
                        className="w-full max-w-5xl rounded-lg shadow-lg"
                        controls
                        preload="metadata"
                    >
                        <source src={BaseVideo} type="video/mp4" />
                        Ваш браузер не поддерживает видео.
                    </video>
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
                        <MeshGradient1 className="w-72 h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 rounded-full" speed={0.38}
                                       colors={['#80C2FF', '#061346', '#3A83E8']} distortion={0.79} swirl={0.4}
                                       grainMixer={0.3} grainOverlay={0} frame={32579.315000002767}/>
                        <img className="absolute top-0 w-72 h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 rounded-full object-cover" src={KirillImg}
                             alt="Кирилл Гурбанов"/>
                    </div>
                </div>
                <div className="flex flex-col gap-6 lg:gap-16 mt-20 xl:mt-37 items-center">
                    <Title title="Кому подойдёт воркшоп"
                           subTitle="Неважно, с чего вы начинаете и в какой сфере работаете — поможем адаптировать AI под ваши задачи. От вас нужно только желание учиться :)"/>
                    <Carousel cardsLength={AUDIENCE.length} cardWidth={400}>
                        {AUDIENCE.map((item) => (
                            <CarouselContentItem iconUrl={item.iconUrl} title={item.title} text={item.text}
                                                 list={item.list}/>
                        ))}
                    </Carousel>
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
                                               list={item.list} buttonText={item.buttonText} link={item.link} date={item.date}/>
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
                                <h3 className="text-xl lg:text-lg xl:text-xl font-semibold text-black">Написать Кириллу в Телеграм</h3>
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


