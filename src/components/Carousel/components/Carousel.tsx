import {useState, useRef, type PropsWithChildren, useEffect, useMemo} from 'react';
import { motion, useMotionValue } from 'framer-motion';
import ArrowRightIcon from "../../../assets/imgs/chevron-right.svg";
import ArrowLeftIcon from "../../../assets/imgs/chevron-left.svg";

type CarouselProps = PropsWithChildren & {
    id: string;
    title: string;
    cardWidth?: number;
    cardsLength: number;
};

export const Carousel = ({ id, title, cardWidth, cardsLength, children }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [containerWidth, setContainerWidth] = useState<number>(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (carouselRef.current) {
                setContainerWidth(carouselRef.current.offsetWidth);
            }
        };
        if (carouselRef.current) {
            setContainerWidth(carouselRef.current.offsetWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const carouselItemWidth = useMemo(() => {
        if (cardWidth) {
            if (windowWidth < 1024) {
                return (cardWidth - 24);
            } else return cardWidth;
        } else if (windowWidth >= 1680) {
            return (windowWidth - 320);
        } else if (windowWidth >= 1440) {
            return (windowWidth - 224);
        } else if (windowWidth >= 1280) {
            return (windowWidth - 128);
        } else if (windowWidth >= 768) {
            return (windowWidth - 96);
        }
        return 374;
    }, [windowWidth, cardWidth]);

    const x = useMotionValue(0);

    const maxIndex = useMemo(() => {
        if (containerWidth === 0 || carouselItemWidth === 0) return cardsLength - 1;
        const visibleCards = Math.floor(containerWidth / (carouselItemWidth + 24));
        return Math.max(0, cardsLength - visibleCards);
    }, [cardsLength, carouselItemWidth, containerWidth]);

    const nextSlide = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const handleDragEnd = (_event: any, info: { velocity: { x: number } }) => {
        if (info.velocity.x < -500) {
            nextSlide();
        } else if (info.velocity.x > 500) {
            prevSlide();
        }
    };

    const dragConstraints = useMemo(() => {
        if (maxIndex === 0) return { left: 0, right: 0 };

        const totalDragDistance = maxIndex * (carouselItemWidth + 16);
        return {
            left: -totalDragDistance,
            right: 0
        };
    }, [maxIndex, carouselItemWidth]);

    return (
        <div id={id} className="flex flex-col gap-6 md:gap-8 lg:gap-12 xl:gap-21 mt-20 md:mt-24 lg:mt-40 xl:mt-50">
            <div className="flex flex-row justify-between items-center">
                <h2 className="text-3xl md:text-4xl lg:text-[42px] xl:text-5xl font-semibold text-black">{title}</h2>
                <div className={`${maxIndex <= 0 ? 'hidden' : 'hidden md:flex'} flex-row gap-4`}>
                    <button
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        className={`flex place-items-center place-content-center rounded-full w-11 h-11 border border-gray-200 cursor-pointer ${
                            currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        aria-label="Предыдущий слайд"
                    >
                        <img src={ArrowLeftIcon} className="w-6 black" alt="Стрелка влево"/>
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={currentIndex === maxIndex}
                        className={`flex place-items-center place-content-center rounded-full w-11 h-11 border border-gray-200 cursor-pointer ${
                            currentIndex === maxIndex ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        aria-label="Следующий слайд"
                    >
                        <img src={ArrowRightIcon} className="w-6 black" alt="Стрелка вправо"/>
                    </button>
                </div>
            </div>

            <div
                ref={carouselRef}
                className="flex overflow-x-hidden -mr-4 sm:-mr-12 lg:-mr-16 xl:-mr-28 2xl:-mr-40"
            >
                <motion.div
                    className="hidden md:flex space-x-6"
                    style={{x}}
                    animate={{x: -currentIndex * (carouselItemWidth + 24)}}
                    transition={{type: "spring", stiffness: 300, damping: 30}}
                    drag="x"
                    dragConstraints={dragConstraints}
                    onDragEnd={handleDragEnd}
                    dragElastic={0.1}
                    whileTap={{cursor: "grabbing"}}
                >
                    {children}
                </motion.div>
                <motion.div
                    className="md:hidden flex space-x-4"
                    style={{x}}
                    animate={{x: -currentIndex * (carouselItemWidth + 16)}}
                    transition={{type: "spring", stiffness: 300, damping: 30}}
                    drag="x"
                    dragConstraints={dragConstraints}
                    onDragEnd={handleDragEnd}
                    dragElastic={0.1}
                    whileTap={{cursor: "grabbing"}}
                >
                    {children}
                </motion.div>
            </div>
        </div>
    );
};