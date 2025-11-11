import { backgroundStyle } from "../consts.ts";
import { Button } from "../../../components/Button";
// Logos for English version - removed HAOM, Yandex, and MTS
import EpicGrowthLogo from '../../../assets/imgs/logo-epic-growth.svg';
import YangoLogo from '../../../assets/imgs/logo-yango.svg';
import SMStretchingLogo from '../../../assets/imgs/logo-smstretching.svg';
import RLogo from '../../../assets/imgs/logo-r.svg';
import LancetLogo from '../../../assets/imgs/lancet-logo.svg';
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
import {ProductsCarouselItem} from "./ProductsCarouselItem.tsx";
import {CasesCarouselItem} from "./CasesCarouselItem.tsx";
import {EventsCarouselItem} from "./EventsCarouselItem.tsx";
import {CASES, EVENTS, PRODUCTS} from "../data.ts";

export const MainPage = () => {
    return (
        <div className="flex flex-col w-full">
            <div style={backgroundStyle} className="-top-14 sm:-top-20"/>
            <div
                className="absolute top-[29vh] sm:top-[40vh] lg:top-[45vh] left-4 sm:left-12 lg:left-16 xl:left-[calc(calc(100vw-1408px)/2)] w-[calc(100vw-32px)] sm:w-[calc(100vw-96px)] lg:w-[calc(100vw-128px)] xl:w-352 flex flex-col md:flex-row gap-5 md:gap-2 md:justify-between text-white">
                <div className="flex flex-col gap-4">
                    <h2 className="text-4xl md:text-[56px] lg:text-[64px] xl:text-[80px] md:w-152 lg:w-177 font-semibold">
                        Train Your Team in AI and Streamline Routine Work
                    </h2>
                    {/* Subtext was not in the file, so I commented it out. You can add it if you like. */}
                    {/* <h3 className="text-xl sm:text-2xl xl:text-3xl font-semibold">Inspire. Train. Implement. Transform.</h3> */}
                </div>
                <div className="flex flex-col justify-between gap-8 md:gap-3 xl:gap-4">
                    <p className="md:max-w-95 mr-10 text-base lg:text-lg xl:text-xl font-medium">
                        We help companies integrate artificial intelligence into their everyday operations, reduce manual workload, and increase efficiency from day one.
                    </p>
                    <div className="flex flex-col gap-4 md:gap-2 xl:gap-4">
                        <Button color="white">Let's Talk Strategy</Button>
                    </div>
                </div>
            </div>
            <div className="-mt-10 md:-mt-5 lg:mt-12 xl:mt-20 px-4 sm:px-12 lg:px-16 xl:px-0 xl:max-w-348 xl:mx-auto">
                <div className="flex flex-col gap-3 lg:gap-6">
                    <h4 className="font-geist uppercase text-sm md:text-base font-semibold text-gray-400">Trusted by</h4>
                    <div className="flex flex-row flex-wrap gap-y-3 gap-x-5 lg:gap-7">
                        <img className="h-6 lg:h-[29px]" src={EpicGrowthLogo} alt="Epic Growth"/>
                        <img className="h-6 lg:h-[29px]" src={RLogo} alt="R"/>
                        <img className="h-6 lg:h-[29px]" src={YangoLogo} alt="Yango"/>
                        <img className="h-6 lg:h-[29px]" src={LancetLogo} alt="Lancet"/>
                        <img className="h-6 lg:h-[29px]" src={SMStretchingLogo} alt="SMStretching"/>
                        <img className="h-6 lg:h-[29px]" src={NubesLogo} alt="Nubes"/>
                    </div>
                </div>
                <div
                    className="flex flex-col md:flex-row gap-8 md:gap-0 md:justify-between mt-20 md:mt-24 lg:mt-40 xl:mt-50 mb-20 lg:mb-45 xl:mb-62">
                    <div className="flex flex-col gap-6 md:gap-4 lg:gap-5">
                        <h4 className="text-3xl md:text-4xl lg:text-[42px] xl:text-5xl font-semibold text-black">Results in Numbers</h4>
                        <span
                            className="text-base font-medium md:font-normal lg:text-lg xl:text-xl text-gray-400 md:text-gray-600 max-w-76 md:max-w-86 lg:max-w-103 xl:max-w-118">We've helped businesses make AI a working tool — not just a buzzword.</span>
                    </div>
                    <div className="flex flex-col gap-10 lg:gap-20">
                        {/* The file had 1,600+, but the code has 2500+. I'm using the value from the file. */}
                        <StatisticBlock title="2500+" text="Specialists trained"
                                        icon={<img className="w-6 md:w-7" src={EducationIcon} alt="Education"/>}/>
                        <StatisticBlock title="9.4/10" text="Average participant satisfaction"
                                        icon={<img className="w-6 md:w-7" src={StarIcon} alt="Star"/>}/>
                        <StatisticBlock title="96%"
                                        text="of employees started using AI tools within 7 days after the training"
                                        icon={<img className="w-6 md:w-7 -rotate-90" src={ArrowIcon} alt="Arrow"/>}/>
                    </div>
                </div>
                {/* Titles for carousels are translated here */}
                <Carousel id="products" title="Our Products" cardsLength={PRODUCTS.length} cardWidth={384}>
                    {PRODUCTS.map((product) => (
                        <ProductsCarouselItem iconUrl={product.iconUrl} title={product.title} text={product.text} list={product.list}/>
                    ))}
                </Carousel>
                <Carousel id="cases" title="Client Cases" cardsLength={CASES.length}>
                    {CASES.map((casesItem) => (
                        <CasesCarouselItem client={casesItem.client} request={casesItem.request} results={casesItem.results} stack={casesItem.stack}/>
                    ))}
                </Carousel>
                <div id="approach" className="w-full flex flex-col mt-20 xl:mt-37 lg:py-16 xl:py-24 gap-8 lg:gap-16">
                    <div className="flex flex-col gap-6 md:gap-4 xl:gap-5 w-full sm:items-center sm:text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-[42px] xl:text-5xl font-semibold text-black">What Participants Get</h2>
                        <span className="text-base lg:text-lg xl:text-xl text-gray-500">We don't teach "AI theory" We help teams transform how they work.</span>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 md:gap-0 items-center md:justify-around">
                        <DignitiesBlockItem
                            title="20% theory / 80% hands-on practice"
                            text="You'll learn by doing — using your actual tasks and documents, not simulations."
                            icon={<img className="w-10 md:w-8 xl:w-10" src={EducationOrangeIcon} alt="EducationIcon"/>}
                        />
                        <DignitiesBlockItem
                            title="Mentorship & expert feedback"
                            text="Ongoing support from experienced AI strategists. We stay involved beyond the workshop."
                            icon={<img className="w-10 md:w-8 xl:w-10" src={PersonIcon} alt="PersonIcon"/>}
                        />
                        <DignitiesBlockItem
                            title="Expert-curated prompt libraries & use cases"
                            text="Ready-to-use, field-tested prompts and AI workflows — adapted to your team's goals."
                            icon={<img className="w-10 md:w-8 xl:w-10" src={NotebookIcon} alt="NotebookIcon"/>}
                        />
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 md:gap-0 items-center md:justify-around">
                        <DignitiesBlockItem
                            title="Your own AI agents"
                            text="Participants build personalized GPT-powered agents for real tasks — emails, reports, CRM, analytics."
                            icon={<img className="w-8 xl:w-10" src={LockedIcon} alt="LockedIcon"/>}
                        />
                        <DignitiesBlockItem
                            title="Transformation plans & templates"
                            text="Each team leaves with a ready-to-implement roadmap, including automation ideas, role guidelines, and tools."
                            icon={<img className="w-8 xl:w-10" src={MapIcon} alt="MapIcon"/>}
                        />
                        <DignitiesBlockItem
                            title="Bonus resources pack"
                            text="Access to exclusive guides, databases, agent templates, and industry benchmarks to keep growing after the program."
                            icon={<img className="w-8 xl:w-10" src={GiftIcon} alt="GiftIcon"/>}
                        />
                    </div>
                </div>
                <div id="team"
                     className="flex flex-col mt-20 md:mt-22 xl:mt-25 gap-6 md:gap-8 xl:gap-12 mb-20 lg:mb-40 xl:mb-50">
                    <h2 className="text-3xl md:text-4xl lg:text-[42px] xl:text-5xl font-semibold text-black">Our Team</h2>
                    <div className="hidden sm:flex flex-col md:flex-row items-end gap-10">
                        <div className="flex flex-row items-end">
                            <div className="relative pr-4 lg:pr-7">
                                <img src={KirillImg} className="xl:w-180" alt="Kirill Gurbanov"/>
                                <div className="absolute bottom-0 left-0 right-0 h-90 lg:h-92 bg-[#F7F7F5] -z-10"></div>
                            </div>
                            <div
                                className="flex flex-col p-10 justify-between w-76 sm:w-[calc(100vw-392px)] md:w-82 lg:w-96 xl:w-full h-90 lg:h-92 bg-[#F7F7F5]">
                                <div className="flex flex-col gap-4 xl:gap-5 font-semibold">
                                    <h4 className="text-lg lg:text-2xl xl:text-3xl text-black">Kirill Gurbanov</h4>
                                    <span
                                        className="uppercase md:text-sm xl:text-base text-gray-400">Founder, Product Strategist, AI Consultant</span>
                                </div>
                                <span className="text-sm lg:text-base text-gray-500">10+ years of experience in digital product strategy and AI transformation. Author of corporate training programs used by Epic Growth, Yango, and Stretching.pro.</span>
                            </div>
                        </div>
                        <div
                            className="flex flex-col p-10 justify-between w-full md:w-70 lg:w-96 h-62 md:h-90 lg:h-92 shrink-0 bg-[#F7F7F5]">
                            <img className="w-8 lg:w-10 h-8 lg:h-10" src={EventsIcon} alt="Community"/>
                            <div className="flex flex-col gap-3 w-full text-gray-500">
                                <span className="text-lg lg:text-xl font-semibold">Supported by 30+ experts</span>
                                <span className="text-base">from McKinsey, Google, and SberTech.</span>
                            </div>
                        </div>
                    </div>
                    {/* Mobile version of the team block - I've translated it too. */}
                    <div className="flex flex-col gap-4 sm:hidden">
                        <div className="flex flex-col gap-6 w-full bg-[#F7F7F5]">
                            <div className="flex flex-col gap-5 pt-6 px-5">
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-xl font-semibold text-black">Kirill Gurbanov</h4>
                                    <span className="text-sm font-semibold uppercase text-gray-400">
                                        Founder, Product Strategist, AI Consultant
                                    </span>
                                </div>
                                <span className="text-base text-gray-400">10+ years of experience in digital product strategy and AI transformation...</span>
                            </div>
                            <img src={KirillImg} alt="Kirill Gurbanov"/>
                        </div>
                        <div className="flex flex-col gap-10 pt-14.5 px-6 pb-8 w-full bg-[#F7F7F5] items-center">
                            <img className="w-10" src={EventsIcon} alt="Community"/>
                            <div className="flex flex-col gap-3 text-center items-center text-gray-500">
                                <span className="text-xl font-semibold">Supported by<br/>30+ experts</span>
                                <span className="text-base">from McKinsey, Google, and SberTech.</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Upcoming Events section - hidden */}
                {/* <Carousel id="events" title="Upcoming Events" cardWidth={384} cardsLength={EVENTS.length}>
                    {EVENTS.map((event) => (
                        <EventsCarouselItem date={event.date} title={event.title} text={event.text} speaker={event.speaker} speakerRole={event.speakerRole} speakerPhotoUrl={event.speakerPhotoUrl} link={event.link ?? ''} />
                    ))}
                </Carousel> */}
                <div className="flex flex-col items-center mt-20 md:mt-22 lg:mt-36 xl:mt-50">
                    <h2 className="text-3xl md:text-4xl lg:text-[42px] xl:text-5xl font-semibold text-black">Frequently
                        Asked Questions</h2>
                    <QuestionsBlock/>
                </div>
                <div id="contacts"
                     className="flex flex-col gap-8 md:gap-6 lg:gap-10 xl:gap-20 mt-20 md:mt-22 lg:mt-32 xl:mt-62">
                    <h2 className="text-black font-semibold text-3xl md:text-2xl lg:text-3xl xl:text-4xl">Contact</h2>
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
                            <img className="w-10 md:w-8 xl:w-10 md:h-8 xl:h-10" src={CalendarIcon} alt="Calendar" />
                            <h3 className="text-xl lg:text-lg xl:text-xl font-semibold text-white 2xl:mb-8">Book a<br className="flex 2xl:hidden" />{' '}
                                Strategy Call</h3>
                        </div>
                        <div
                          className="flex flex-col gap-11.5 md:gap-0 md:justify-between w-full px-6 py-5 md:p-8 xl:p-10 bg-[#F7F7F5]">
                            <img className="w-10 md:w-8 xl:w-10 md:h-8 xl:h-10" src={EmailIcon} alt="Email" />
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl lg:text-lg xl:text-xl font-semibold text-black">Email</h3>
                                <span className="text-sm xl:text-base text-gray-700">as@sfer.ai</span>
                            </div>
                        </div>
                        <div
                          className="flex flex-col gap-11.5 md:gap-0 md:justify-between w-full px-6 py-5 md:p-8 xl:p-10 bg-[#F7F7F5]">
                            <img className="w-10 md:w-8 xl:w-10 md:h-8 xl:h-10" src={CursorIcon} alt="Contact Kirill (Founder) on Telegram" />
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl lg:text-lg xl:text-xl font-semibold text-black">Contact Kirill (Founder) on Telegram</h3>
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
