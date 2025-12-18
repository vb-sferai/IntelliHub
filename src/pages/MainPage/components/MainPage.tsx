import { useState } from 'react';
import { backgroundStyle } from "../consts.ts";
import { Button } from "../../../components/Button";
import MtsLogo from '../../../assets/imgs/logo-mts.svg';
import EpicGrowthLogo from '../../../assets/imgs/logo-epic-growth.svg';
import RLogo from '../../../assets/imgs/logo-r.svg';
import YangoLogo from '../../../assets/imgs/logo-yango.svg';
import HaomLogo from '../../../assets/imgs/logo-haom.svg';
import LancetLogo from '../../../assets/imgs/lancet-logo.svg';
import SMStretchingLogo from '../../../assets/imgs/logo-smstretching.svg';
import YandexLogo from '../../../assets/imgs/yandex-logo.svg';
import AliceLogo from '../../../assets/imgs/alice-logo.svg';
import NubesLogo from '../../../assets/imgs/nubes-logo.svg';
import { StatisticBlock } from "./StatisticBlock.tsx";
import EducationIcon from '../../../assets/imgs/education-icon.svg';
import StarIcon from '../../../assets/imgs/star-icon.svg';
import ArrowIcon from '../../../assets/imgs/arrow-down-right-icon.svg';
import { DignitiesBlockItem } from "./DignitiesBlockItem.tsx";
import EducationOrangeIcon from '../../../assets/imgs/education-orange-icon.svg';
import PersonIcon from '../../../assets/imgs/person-favorite-icon.svg';
import NotebookIcon from '../../../assets/imgs/notebook-icon.svg';
import LockedIcon from '../../../assets/imgs/locked-icon.svg';
import MapIcon from '../../../assets/imgs/map-icon.svg';
import GiftIcon from '../../../assets/imgs/gift-icon.svg';
import KirillImg from '../../../assets/imgs/kirill.png';
import EventsIcon from '../../../assets/imgs/events.svg';
import EmailIcon from '../../../assets/imgs/email.svg';
import CalendarIcon from '../../../assets/imgs/calendar-add.svg';
import CursorIcon from '../../../assets/imgs/cursor.svg';
import {QuestionsBlock} from "./QuestionsBlock.tsx";
import {Carousel} from "../../../components/Carousel";
import {ProductCard} from "./ProductCard.tsx";
import {CasesCarouselItem} from "./CasesCarouselItem.tsx";
import {EventsCarouselItem} from "./EventsCarouselItem.tsx";
import {CASES, EVENTS, PRODUCTS} from "../data.ts";
import { Stories } from "../../../components/Stories";
import { ProductsStorySlide } from "./ProductsStorySlide.tsx";
import { CasesStorySlide } from "./CasesStorySlide.tsx";

// Градиенты для слайдов Products
const PRODUCT_GRADIENTS = [
    'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #2d1b4e 100%)',
    'linear-gradient(135deg, #0d1117 0%, #161b22 50%, #21262d 100%)',
    'linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 50%, #16213e 100%)',
    'linear-gradient(135deg, #0a1628 0%, #1a2744 50%, #0d1117 100%)',
    'linear-gradient(135deg, #1e1e2e 0%, #2d2d44 50%, #1a1a2e 100%)',
    'linear-gradient(135deg, #0f1a2e 0%, #1a2e4e 50%, #0a1628 100%)',
];

// Градиенты для слайдов Cases (по id)
const CASE_GRADIENTS: Record<string, string> = {
    'lancet': 'linear-gradient(135deg, #1e3a5f 0%, #0d2137 100%)',
    'yandex-webinar': 'linear-gradient(135deg, #cc0000 0%, #8b0000 50%, #1a0000 100%)',
    'yandex-gobeyond': 'linear-gradient(135deg, #ffcc00 0%, #cc6600 50%, #1a1a00 100%)',
    'uae-wealth': 'linear-gradient(135deg, #0a3d62 0%, #1e5f74 50%, #0d2137 100%)',
};

export const MainPage = () => {
    // Состояние для Stories
    const [productsStories, setProductsStories] = useState<{open: boolean, index: number}>({open: false, index: 0});
    const [casesStories, setCasesStories] = useState<{open: boolean, index: number}>({open: false, index: 0});
    return (
        <div className="flex flex-col w-full">
            <div style={backgroundStyle} className="-top-14 sm:-top-20"/>
            <div
                className="absolute top-[29vh] sm:top-[40vh] lg:top-[45vh] left-4 sm:left-12 lg:left-16 xl:left-[calc(calc(100vw-1408px)/2)] w-[calc(100vw-32px)] sm:w-[calc(100vw-96px)] lg:w-[calc(100vw-128px)] xl:w-352 flex flex-col md:flex-row gap-5 md:gap-2 md:justify-between text-white">
                <div className="flex flex-col gap-4">
                    <h2 className="text-4xl md:text-[56px] lg:text-[64px] xl:text-[80px] md:w-152 lg:w-177 font-semibold">
                        Бутик AI NATIVE решений для вашей команды
                    </h2>
                    <h3 className="text-xl sm:text-2xl xl:text-3xl font-semibold">Вдохновляем. Обучаем. Внедряем.
                        Меняем.</h3>
                </div>
                <div className="flex flex-col justify-between gap-8 md:gap-3 xl:gap-4">
                    <p className="md:max-w-95 mr-10 text-base lg:text-lg xl:text-xl font-medium">
                        Трансформация начинается там, где сотрудники и люди начинают мыслить иначе. Мы помогаем пройти
                        путь цифровой трансформации от общеобразовательных форматов до автоматизации бизнес - процессов
                        под ключ
                    </p>
                    <div className="flex flex-col gap-4 md:gap-2 xl:gap-4">
                        <Button color="white">Записаться на консультацию</Button>
                    </div>
                </div>
            </div>
            <div className="-mt-10 md:-mt-5 lg:mt-12 xl:mt-20 px-4 sm:px-12 lg:px-16 xl:px-0 xl:max-w-348 xl:mx-auto">
                <div className="flex flex-col gap-3 lg:gap-6">
                    <h4 className="font-geist uppercase text-sm md:text-base font-semibold text-gray-400">Нам
                        доверяют</h4>
                    <div className="flex flex-row flex-wrap gap-y-3 gap-x-5 lg:gap-7">
                        <img className="h-6 lg:h-[29px]" src={EpicGrowthLogo} alt="Epic growth"/>
                        <img className="h-6 lg:h-[29px]" src={RLogo} alt="R"/>
                        <img className="h-6 lg:h-[29px]" src={HaomLogo} alt="Haom"/>
                        <img className="h-6 lg:h-[29px]" src={LancetLogo} alt="Lancet"/>
                        <img className="h-6 lg:h-[29px]" src={MtsLogo} alt="МТС"/>
                        <img className="h-6 lg:h-[29px]" src={YangoLogo} alt="Yango"/>
                        <img className="h-6 lg:h-[29px]" src={YandexLogo} alt="Яндекс"/>
                        <img className="h-6 lg:h-[29px]" src={SMStretchingLogo} alt="SMStretching"/>
                        <img className="h-6 lg:h-[29px]" src={AliceLogo} alt="Яндекс Алиса"/>
                        <img className="h-6 lg:h-[29px]" src={NubesLogo} alt="Nubes"/>
                    </div>
                </div>
                <div
                    className="flex flex-col md:flex-row gap-8 md:gap-0 md:justify-between mt-20 md:mt-24 lg:mt-40 xl:mt-50 mb-20 lg:mb-45 xl:mb-62">
                    <div className="flex flex-col gap-6 md:gap-4 lg:gap-5">
                        <h4 className="text-3xl md:text-4xl lg:text-[42px] xl:text-5xl font-semibold text-black">Результат
                            в цифрах</h4>
                        <span
                            className="text-base font-medium md:font-normal lg:text-lg xl:text-xl text-gray-400 md:text-gray-600 max-w-76 md:max-w-86 lg:max-w-103 xl:max-w-118">Реальные изменения начинаются там, где их можно измерить. Все наши решения сопровождаются инструментами и методиками для фиксации изменений</span>
                    </div>
                    <div className="flex flex-col gap-10 lg:gap-20">
                        <StatisticBlock title="2500+" text="Специалистов прошли образовательные воркшопы"
                                        icon={<img className="w-6 md:w-7" src={EducationIcon} alt="Education"/>}/>
                        <StatisticBlock title="9.4/10" text="Средняя оценка по итогам обратной связи после воркшопов"
                                        icon={<img className="w-6 md:w-7" src={StarIcon} alt="Star"/>}/>
                        <StatisticBlock title="96%"
                                        text="Cотрудников начали применять AI-решения в последующие 7 дней после обучения"
                                        icon={<img className="w-6 md:w-7 -rotate-90" src={ArrowIcon} alt="Arrow"/>}/>
                    </div>
                </div>
                <section id="products" className="flex flex-col gap-6 md:gap-8 lg:gap-12 xl:gap-16 mt-20 md:mt-24 lg:mt-40 xl:mt-50">
                    <h2 className="text-3xl md:text-4xl lg:text-[42px] xl:text-5xl font-semibold text-black">
                        Продукты
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                        {PRODUCTS.map((product, index) => (
                            <ProductCard key={index} {...product} />
                        ))}
                    </div>
                </section>
                <Carousel id="cases" title="Кейсы" cardsLength={CASES.length}>
                    {CASES.map((casesItem) => (
                        <CasesCarouselItem client={casesItem.client} logoUrl={casesItem.logoUrl} request={casesItem.request} results={casesItem.results} stack={casesItem.stack} link={casesItem.link}/>
                    ))}
                </Carousel>
                <div id="approach" className="w-full flex flex-col mt-20 xl:mt-37 lg:py-16 xl:py-24 gap-8 lg:gap-16">
                    <div className="flex flex-col gap-6 md:gap-4 xl:gap-5 w-full sm:items-center sm:text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-[42px] xl:text-5xl font-semibold text-black">Что
                            получают участники</h2>
                        <span className="text-base lg:text-lg xl:text-xl text-gray-500">Мы не учим «теории ИИ» — мы меняем процесс,<br
                            className="hidden sm:block"/>по которому работают команды</span>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 md:gap-0 items-center md:justify-around">
                        <DignitiesBlockItem
                            title="20% теории / 80% практики"
                            text="Обучение через реальные задачи и документы, а не на демо кейсах"
                            icon={<img className="w-10 md:w-8 xl:w-10" src={EducationOrangeIcon} alt="EducationIcon"/>}
                        />
                        <DignitiesBlockItem
                            title="Менторство и обратная связь"
                            text="Постоянная поддержка опытных AI-стратегов. Мы не исчезаем после воркшопа"
                            icon={<img className="w-10 md:w-8 xl:w-10" src={PersonIcon} alt="PersonIcon"/>}
                        />
                        <DignitiesBlockItem
                            title="Библиотека промптов и кейсов"
                            text="Готовые и проверенные промпты, адаптированные под вашу сферу и цели"
                            icon={<img className="w-10 md:w-8 xl:w-10" src={NotebookIcon} alt="NotebookIcon"/>}
                        />
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 md:gap-0 items-center md:justify-around">
                        <DignitiesBlockItem
                            title="Ваши собственные AI-агенты"
                            text="Персонализированные GPT-агенты для реальных задач: письма, отчёты, CRM, аналитика"
                            icon={<img className="w-8 xl:w-10" src={LockedIcon} alt="LockedIcon"/>}
                        />
                        <DignitiesBlockItem
                            title="Роадмэпы и шаблоны"
                            text="Команда уходит с готовым роадмэпом: идеи автоматизации, новые роли, инструменты"
                            icon={<img className="w-8 xl:w-10" src={MapIcon} alt="MapIcon"/>}
                        />
                        <DignitiesBlockItem
                            title="Бонус"
                            text="Эксклюзивные гайды, базы данных, шаблоны агентов, отраслевые бенчмарки — всё, чтобы продолжать рост"
                            icon={<img className="w-8 xl:w-10" src={GiftIcon} alt="GiftIcon"/>}
                        />
                    </div>
                </div>
                <div id="team"
                     className="flex flex-col mt-20 md:mt-22 xl:mt-25 gap-6 md:gap-8 xl:gap-12 mb-20 lg:mb-40 xl:mb-50">
                    <h2 className="text-3xl md:text-4xl lg:text-[42px] xl:text-5xl font-semibold text-black">Команда</h2>
                    <div className="hidden sm:flex flex-col md:flex-row items-end gap-10">
                        <div className="flex flex-row items-end">
                            <div className="relative pr-4 lg:pr-7">
                                <img src={KirillImg} className="xl:w-180" alt="Кирилл Гурбанов"/>
                                <div className="absolute bottom-0 left-0 right-0 h-90 lg:h-92 bg-[#F7F7F5] -z-10"></div>
                            </div>
                            <div
                                className="flex flex-col p-10 justify-between w-76 sm:w-[calc(100vw-392px)] md:w-82 lg:w-96 xl:w-full h-90 lg:h-92 bg-[#F7F7F5]">
                                <div className="flex flex-col gap-4 xl:gap-5 font-semibold">
                                    <h4 className="text-lg lg:text-2xl xl:text-3xl text-black">Кирилл Гурбанов</h4>
                                    <span
                                        className="uppercase md:text-sm xl:text-base text-gray-400">фаундер, ex-CPO<br/>Сбер бизнес мобайл</span>
                                </div>
                                <span className="text-sm lg:text-base text-gray-500">Основатель SFER AI — практик  с 9-летним опытом на топ-позициях в крупнейших компаниях России: со-основатель и член СД банка СМЛТ  (группа «Самолет»), Chief Digital Officer МТС Банк,  CPO Сбер Бизнес Мобайл</span>
                            </div>
                        </div>
                        <div
                            className="flex flex-col p-10 justify-between w-full md:w-70 lg:w-96 h-62 md:h-90 lg:h-92 shrink-0 bg-[#F7F7F5]">
                            <img className="w-8 lg:w-10 h-8 lg:h-10" src={EventsIcon} alt="Коммьюнити"/>
                            <div className="flex flex-col gap-3 w-full text-gray-500">
                                <span className="text-lg lg:text-xl font-semibold">И еще более 20+ специалистов</span>
                                <span className="text-base">AI Методологи, AI разработчики и архитекторы, аналитики и рисерчеры</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 sm:hidden">
                        <div className="flex flex-col gap-6 w-full bg-[#F7F7F5]">
                            <div className="flex flex-col gap-5 pt-6 px-5">
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-xl font-semibold text-black">Кирилл Гурбанов</h4>
                                    <span className="text-sm font-semibold uppercase text-gray-400">
                                        фаундер, ex-CPO<br/>Сбер бизнес мобайл
                                    </span>
                                </div>
                                <span className="text-base text-gray-400">Сооснователь и член совета директоров SMLT Bank (входит в группу «Самолёт»), Chief Digital Officer в МТС Банке, CPO Сбер Бизнес Мобайл</span>
                            </div>
                            <img src={KirillImg} alt="Кирилл Гурбанов"/>
                        </div>
                        <div className="flex flex-col gap-10 pt-14.5 px-6 pb-8 w-full bg-[#F7F7F5] items-center">
                            <img className="w-10" src={EventsIcon} alt="Коммьюнити"/>
                            <div className="flex flex-col gap-3 text-center items-center text-gray-500">
                                <span className="text-xl font-semibold">И еще более<br/>30+ специалистов</span>
                                <span className="text-base">AI Методологи, AI разработчики и архитекторы, аналитики и рисерчеры</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Carousel id="events" title="Ближайшие мероприятия" cardWidth={384} cardsLength={EVENTS.length}>
                    {EVENTS.map((event) => (
                        <EventsCarouselItem date={event.date} title={event.title} text={event.text} speaker={event.speaker} speakerRole={event.speakerRole} speakerPhotoUrl={event.speakerPhotoUrl} link={event.link ?? ''} />
                    ))}
                </Carousel> */}
                <div className="flex flex-col items-center mt-20 md:mt-22 lg:mt-36 xl:mt-50">
                    <h2 className="text-3xl md:text-4xl lg:text-[42px] xl:text-5xl font-semibold text-black">Часто
                        задаваемые вопросы</h2>
                    <QuestionsBlock/>
                </div>
                <div id="contacts"
                     className="flex flex-col gap-8 md:gap-6 lg:gap-10 xl:gap-20 mt-20 md:mt-22 lg:mt-32 xl:mt-62">
                    <h2 className="text-black font-semibold text-3xl md:text-2xl lg:text-3xl xl:text-4xl">Связаться</h2>
                    <div
                      className="flex flex-col md:flex-row gap-6 md:gap-0 md:justify-around md:gap-5 xl:gap-6 md:h-42 lg:h-50 xl:h-58">
                        <div
                          onClick={() => {
                            const newWindow = window.open('https://calendly.com/as-sfer/30min', '_blank', 'noopener,noreferrer');
                            if (newWindow) newWindow.opener = null;
                          }}
                          className="flex flex-col gap-11.5 md:gap-0 md:justify-between w-full px-6 py-5 md:p-8 xl:p-10 bg-[#FF8002] cursor-pointer"
                          style={{ userSelect: 'none' }}
                        >
                            <img className="w-10 md:w-8 xl:w-10 md:h-8 xl:h-10" src={CalendarIcon} alt="Календарь" />
                            <h3 className="text-xl lg:text-lg xl:text-xl font-semibold text-white 2xl:mb-8">Записаться на<br className="flex 2xl:hidden" /> консультацию</h3>
                        </div>
                        <div
                          className="flex flex-col gap-11.5 md:gap-0 md:justify-between w-full px-6 py-5 md:p-8 xl:p-10 bg-[#F7F7F5]">
                            <img className="w-10 md:w-8 xl:w-10 md:h-8 xl:h-10" src={EmailIcon} alt="Email" />
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl lg:text-lg xl:text-xl font-semibold text-black">Почта</h3>
                                <span className="text-sm xl:text-base text-gray-700">as@sfer.ai</span>
                            </div>
                        </div>
                        <div
                          className="flex flex-col gap-11.5 md:gap-0 md:justify-between w-full px-6 py-5 md:p-8 xl:p-10 bg-[#F7F7F5]">
                            <img className="w-10 md:w-8 xl:w-10 md:h-8 xl:h-10" src={CursorIcon} alt="Телеграм" />
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl lg:text-lg xl:text-xl font-semibold text-black">Телеграм</h3>
                                <span 
                                 className="text-sm xl:text-base text-gray-700 cursor-pointer hover:text-gray-900 underline"
                                  onClick={() => {
                                  const newWindow = window.open('https://t.me/kgurbanov', '_blank', 'noopener,noreferrer');
                                  if (newWindow) newWindow.opener = null;
                                  }}
                                >
                                  @kgurbanov
                                  </span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
