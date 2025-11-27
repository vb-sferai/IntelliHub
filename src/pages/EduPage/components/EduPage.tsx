import { Dithering as Dithering1, MeshGradient as MeshGradient1 } from '@paper-design/shaders-react';
import {Button} from "./Button";
import {Questions} from "./FAQ";
import {Carousel} from "./Carousel";
import {METRICS, WHO_NEEDS_CODING, SPEAKERS, REVIEWS, VIDEOS, COURSES} from "../data";
import {CarouselReviewsItem} from "./CarouselReviewsItem";

export const EduPage = () => {
    const scrollToCourses = () => {
        const coursesSection = document.getElementById('courses');
        if (coursesSection) {
            coursesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="flex flex-col w-full">
            <style>{`
                .edu-page-primary {
                    color: #29337f;
                }
            `}</style>
            <div className="relative min-h-screen w-full flex items-center justify-center -mt-14 sm:-mt-20">
                <Dithering1 colorBack="#00000000" colorFront="#29337f" speed={0.68} shape="wave" type="4x4" size={5.2} scale={1.26} frame={89049.01300004251} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#16151F' }} />
                <div className="relative z-10 flex flex-col w-full text-center items-center gap-3 xs:gap-4 xl:gap-10 px-4 sm:px-12 lg:px-16 xl:px-0 max-w-[1408px] text-white py-20">
                    <h2 className="text-3xl xs:text-4xl md:text-[56px] lg:text-[64px] xl:text-[80px] font-semibold leading-[110%]">
                        Все говорят про ИИ.<br/>Мы учим им пользоваться
                    </h2>
                    <span className="max-w-[725px] text-center text-sm xs:text-base lg:text-lg xl:text-xl font-medium mb-2.5">
                        Три практических программы для разных задач и уровней
                    </span>
                    <Button color="white" width="190px" onClick={scrollToCourses}>Подробнее</Button>
                </div>
            </div>
            <div className="flex flex-col px-4 sm:px-12 lg:px-16 xl:px-0 xl:w-312 xl:mx-auto pt-12 md:pt-16 lg:pt-20 xl:pt-24 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
                <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-20 lg:items-center lg:justify-center">
                    {METRICS.map((metric, index) => (
                        <div key={index} className="lg:w-104 flex flex-col gap-5 lg:text-center lg:items-center">
                            <span className="text-[72px] xs:text-[80px] md:text-7xl lg:text-8xl xl:text-[140px] font-normal leading-none tracking-[-0.06em] edu-page-primary">
                                {metric.value}
                            </span>
                            <span className="text-base lg:text-lg xl:text-xl font-medium leading-[1.2] tracking-[-0.03em] text-[#AEB0B3]">
                                {metric.description}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-8 lg:gap-12 mt-20 xl:mt-37 w-full">
                    <div className="flex flex-col gap-6 items-center max-w-[768px] mx-auto">
                        <h2 className="text-3xl xs:text-4xl lg:text-[42px] xl:text-[48px] font-semibold leading-[1.2] tracking-[-0.03em] text-black text-center w-full">
                            Кому подойдёт
                        </h2>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4 w-full">
                        {WHO_NEEDS_CODING.map((item, index) => (
                            <div key={index} className="flex-1 min-w-[320px] bg-[#F7F7F5] p-8 flex flex-col justify-between h-auto lg:h-[320px]">
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-xl lg:text-2xl font-bold leading-[1.25] text-black whitespace-pre-line">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm lg:text-base font-medium leading-[1.4] text-black">
                                        {item.description}
                                    </p>
                                </div>
                                <a
                                    href={item.buttonLink}
                                    className="mt-6 w-full py-3 px-6 bg-white hover:bg-gray-50 rounded-full text-center text-sm font-medium text-black transition-colors"
                                >
                                    {item.buttonText}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="programs" className="flex flex-col gap-8 lg:gap-12 mt-20 xl:mt-37 w-full">
                    <div className="flex flex-col gap-4 items-center text-center">
                        <h2 className="text-3xl xs:text-4xl lg:text-[42px] xl:text-[48px] font-semibold leading-[1.2] tracking-[-0.03em] text-black">
                            Много практики
                        </h2>
                        <p className="text-base lg:text-lg xl:text-xl font-normal leading-[1.5] text-[#858585]">
                            Научим работать с ИИ — от основ до создания продуктов
                        </p>
                    </div>
                    <div className="flex flex-col gap-6 w-full max-w-[900px] mx-auto">
                        {VIDEOS.map((video, index) => (
                            <div key={index} className="w-full">
                                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                    <iframe
                                        src={video.embedUrl}
                                        frameBorder="0"
                                        allowFullScreen
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="speaker" className="flex flex-col gap-8 lg:gap-12 mt-20 xl:mt-37 w-full">
                    <div className="flex flex-col gap-4 items-center text-center">
                        <h2 className="text-3xl xs:text-4xl lg:text-[42px] xl:text-[48px] font-semibold leading-[1.2] tracking-[-0.03em] text-black">
                            Преподаватели
                        </h2>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4 w-full">
                        {SPEAKERS.map((speaker, index) => (
                            <div key={index} className="flex-1 w-full max-w-[343px] lg:max-w-none mx-auto bg-[#F7F7F5] p-6 lg:p-8 flex flex-col gap-6 items-center text-center">
                                <div className="relative shrink-0">
                                    <Dithering1 className="w-[180px] h-[180px] lg:w-[160px] lg:h-[160px] rounded-full" colorBack="#00000000" colorFront="#29337f" speed={0.68} shape="wave" type="4x4" size={5.2} scale={1.26} frame={89049.01300004251} style={{ backgroundColor: '#16151F' }} />
                                    <img
                                        className="absolute top-0 w-[180px] h-[180px] lg:w-[160px] lg:h-[160px] rounded-full object-cover"
                                        src={speaker.photo}
                                        alt={speaker.name}
                                        style={speaker.name === 'Артём Фролов' ? { objectPosition: 'center 20%' } : undefined}
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-xl lg:text-2xl font-semibold leading-[1.2] text-black">
                                            {speaker.name}
                                        </h3>
                                        <p className="text-base font-medium leading-[1.3] edu-page-primary">
                                            {speaker.title}
                                        </p>
                                    </div>
                                    <p className="text-sm lg:text-base font-normal leading-[1.4] tracking-[-0.03em] text-[#858585]">
                                        {speaker.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="courses" className="flex flex-col gap-8 lg:gap-12 mt-20 xl:mt-37 w-full">
                    <div className="flex flex-col gap-4 items-center text-center">
                        <h2 className="text-3xl xs:text-4xl lg:text-[42px] xl:text-[48px] font-semibold leading-[1.2] tracking-[-0.03em] text-black">
                            Курсы
                        </h2>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4 w-full">
                        {COURSES.map((course, index) => (
                            <div key={index} className="flex-1 relative w-full max-w-[343px] lg:max-w-none mx-auto min-h-[420px] lg:min-h-[420px] p-6 lg:p-8 flex flex-col overflow-hidden">
                                {index === 0 && (
                                    <MeshGradient1
                                        speed={0.38}
                                        colors={['#80C2FF', '#061346', '#3A83E8']}
                                        distortion={0.79}
                                        swirl={0.4}
                                        grainMixer={0.3}
                                        grainOverlay={0}
                                        frame={32579.315000002767}
                                        style={{ position: 'absolute', inset: 0, zIndex: 0 }}
                                    />
                                )}
                                {index === 1 && (
                                    <Dithering1
                                        colorBack="#00000000"
                                        colorFront="#015177"
                                        speed={0.11}
                                        shape="warp"
                                        type="4x4"
                                        size={3.3}
                                        scale={1.66}
                                        frame={72643.8470000289}
                                        style={{ position: 'absolute', inset: 0, backgroundColor: '#16151F', zIndex: 0 }}
                                    />
                                )}
                                {index === 2 && (
                                    <Dithering1
                                        speed={0.11}
                                        shape="simplex"
                                        type="4x4"
                                        size={3.3}
                                        scale={1.66}
                                        frame={55135.7740000361}
                                        colorBack="#00000000"
                                        colorFront="#7F56B4"
                                        style={{ position: 'absolute', inset: 0, backgroundColor: '#16151F', zIndex: 0 }}
                                    />
                                )}
                                <div className="relative z-10 flex flex-col gap-3">
                                    <h3 className="text-2xl lg:text-3xl font-bold leading-[1.2] text-white whitespace-pre-line">
                                        {course.title}
                                    </h3>
                                    <p className="text-sm lg:text-base font-bold leading-[1.3] text-white">
                                        {course.subtitle}
                                    </p>
                                </div>
                                <div className="relative z-10 flex flex-col gap-4 mt-auto mb-8">
                                    {course.items.map((item, itemIndex) => (
                                        <p key={itemIndex} className="text-sm lg:text-base font-medium leading-[1.5] text-white whitespace-pre-line">
                                            — {item}
                                        </p>
                                    ))}
                                </div>
                                <a
                                    href={course.buttonLink}
                                    className="relative z-10 w-full max-w-[200px] mx-auto py-3 px-6 bg-white hover:bg-[#d9d9d9] rounded-full text-center text-base font-bold text-black/70 transition-colors"
                                >
                                    {course.buttonText}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="reviews" className="mt-20 xl:mt-37">
                    <Carousel title="Что говорят участники программ sfer.ai" cardsLength={REVIEWS.length} cardWidth={360}>
                        {REVIEWS.map((review, index) => (
                            <CarouselReviewsItem key={index} title={review.title} text={review.text} author={review.author}
                                                 role={review.role} avatarUrl={review.avatarUrl}/>
                        ))}
                    </Carousel>
                </div>
                <div id="faq" className="flex flex-col gap-8 lg:gap-12 mt-20 xl:mt-37 w-full">
                    <div className="flex flex-col gap-4 items-center text-center">
                        <h2 className="text-3xl xs:text-4xl lg:text-[42px] xl:text-[48px] font-semibold leading-[1.2] tracking-[-0.03em] text-black">
                            FAQ
                        </h2>
                    </div>
                    <div className="flex justify-center">
                        <Questions/>
                    </div>
                </div>
                <div className="flex relative w-full mt-20 xl:mt-37 lg:items-center">
                    <Dithering1 colorBack="#00000000" colorFront="#29337f" speed={0.68} shape="wave" type="4x4" size={5.2} scale={1.26} frame={89049.01300004251} style={{ width: '100%', backgroundColor: '#16151F' }} className="h-96 sm:h-92 lg:h-64" />
                    <div
                        className="absolute flex flex-col lg:flex-row justify-between lg:justify-between w-full h-96 sm:h-92 lg:h-64 p-6 xs:p-8 sm:p-10 lg:p-15 items-center lg:items-center">
                        <span
                            className="text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] xl:text-5xl font-semibold text-white leading-[120%] z-10 relative text-center lg:text-left pt-4 lg:pt-0">Нужна консультация{' '}<br className="hidden lg:block"/>и помощь с выбором?</span>
                        <a href="https://t.me/colorc_t" target="_blank" rel="noopener noreferrer">
                            <Button color="white" width="240px">Напишите нам</Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
