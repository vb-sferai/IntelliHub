import { SUCCESS_STORIES, SUCCESS_TESTIMONIAL } from '../data';

// Import images
import Image1 from '../assets/ленд/1-image.png';
import Image2 from '../assets/ленд/2-image.png';
import Image3 from '../assets/ленд/3-image.png';
import Image4 from '../assets/ленд/4-image.png';
import Image5 from '../assets/ленд/5-image.png';
import ImageCase from '../assets/case.png';

// Map card IDs to their images
const CARD_IMAGES: Record<string, string[]> = {
    'content-factories': [Image1, Image2],
    'sales-conversion': [ImageCase],
    'own-products': [Image3],
    'telegram-bots': [Image4, Image5],
};

// Success Story Card Component
interface SuccessStoryCardProps {
    id: string;
    title: string;
    description: string;
    imageLayout: string;
}

const SuccessStoryCard = ({ id, title, description, imageLayout }: SuccessStoryCardProps) => {
    const images = CARD_IMAGES[id] || [];

    // Render image area based on layout type and available images
    const renderImageArea = () => {
        switch (imageLayout) {
            case 'two-images':
                return (
                    <div className="flex gap-[8px] h-[200px] lg:h-[248px]">
                        {images[0] ? (
                            <img
                                src={images[0]}
                                alt={title}
                                className="flex-1 object-cover rounded-sm min-w-0"
                            />
                        ) : (
                            <div className="flex-1 bg-gray-300 rounded-sm" />
                        )}
                        {images[1] ? (
                            <img
                                src={images[1]}
                                alt={title}
                                className="flex-1 object-cover rounded-sm min-w-0"
                            />
                        ) : (
                            <div className="flex-1 bg-gray-300 rounded-sm" />
                        )}
                    </div>
                );
            case 'single-image':
                return (
                    <div className="flex justify-center h-[200px] lg:h-[266px]">
                        {images[0] ? (
                            <img
                                src={images[0]}
                                alt={title}
                                className="h-full object-contain rounded-sm"
                            />
                        ) : (
                            <div className="w-[80%] bg-gray-300 rounded-sm" />
                        )}
                    </div>
                );
            case 'wide-image':
                return (
                    <div className="flex items-end justify-center h-full">
                        {images[0] ? (
                            <img
                                src={images[0]}
                                alt={title}
                                className="w-full object-contain rounded-sm"
                            />
                        ) : (
                            <div className="w-full h-[80%] bg-gray-300 rounded-sm" />
                        )}
                    </div>
                );
            case 'two-images-blur':
                return (
                    <div className="flex gap-[12px] h-[200px] lg:h-[254px] items-center justify-center">
                        {images[0] ? (
                            <img
                                src={images[0]}
                                alt={title}
                                className="h-full w-auto max-w-[45%] object-contain rounded-sm"
                            />
                        ) : (
                            <div className="flex-1 bg-gray-300 rounded-sm h-full" />
                        )}
                        <div className="h-full w-auto max-w-[45%] relative">
                            {images[1] ? (
                                <img
                                    src={images[1]}
                                    alt={title}
                                    className="h-full w-auto object-contain rounded-sm"
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-300 rounded-sm" />
                            )}
                        </div>
                    </div>
                );
            case 'placeholder':
            default:
                return (
                    <div className="flex items-center justify-center h-[200px] lg:h-[266px]">
                        <div className="w-[80%] h-[80%] bg-gray-200 rounded-sm flex items-center justify-center">
                            <span className="text-gray-400 text-sm">Скоро здесь будет контент</span>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="bg-[#F7F7F5] p-[25px] flex flex-col h-auto lg:h-[399px]">
            {/* Images Area */}
            <div className="flex-1">
                {renderImageArea()}
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-[8px] text-center mt-auto pt-[25px]">
                <h3 className="text-xl lg:text-2xl font-semibold text-black leading-[30px]">
                    {title}
                </h3>
                <p className="text-sm lg:text-base font-medium text-black leading-[1.3] tracking-[-0.48px]">
                    {description}
                </p>
            </div>
        </div>
    );
};

// Video Player Component - Kinescope Embed
const VideoPlayer = () => {
    return (
        <div className="w-full max-w-[981px] mx-auto rounded-2xl overflow-hidden mt-16 lg:mt-20">
            <div className="relative" style={{ paddingTop: '56.25%', width: '100%' }}>
                <iframe
                    src="https://kinescope.io/embed/5hLbGMyiEqAubeTANqrZro"
                    allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;"
                    frameBorder="0"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-2xl"
                />
            </div>
        </div>
    );
};

// Main Section Component
export const SuccessStoriesSection = () => {
    return (
        <section className="bg-black py-16 lg:py-20 xl:py-32">
            <div className="px-4 sm:px-12 lg:px-16 xl:px-0 xl:w-312 xl:mx-auto">

                {/* Section Header */}
                <div className="flex flex-col items-start sm:items-center gap-3 mb-10 lg:mb-12">
                    <h2 className="text-2xl xs:text-3xl lg:text-[42px] xl:text-[48px] font-semibold text-white text-left sm:text-center leading-[1.2] tracking-[-0.03em] w-full">
                        Что создают наши ученики
                    </h2>
                    <p className="text-base lg:text-lg text-[#858585] text-left sm:text-center w-full">
                        В каждом модуле можно собрать один или несколько проектов
                    </p>
                </div>

                {/* 2x2 Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {SUCCESS_STORIES.map((story) => (
                        <SuccessStoryCard
                            key={story.id}
                            id={story.id}
                            title={story.title}
                            description={story.description}
                            imageLayout={story.imageLayout}
                        />
                    ))}
                </div>

                {/* Testimonial Quote */}
                <div className="flex flex-col items-start sm:items-center gap-5 mt-16 lg:mt-20 xl:mt-24 max-w-[768px] sm:mx-auto">
                    <h2 className="text-2xl xs:text-3xl lg:text-[42px] xl:text-[48px] font-semibold text-white text-left sm:text-center leading-[1.2] tracking-[-0.03em] w-full">
                        {SUCCESS_TESTIMONIAL.quote}
                    </h2>
                    <p className="text-base lg:text-lg xl:text-xl font-normal text-[#F2F2F7] text-left sm:text-center leading-[30px] w-full sm:max-w-[642px]">
                        {SUCCESS_TESTIMONIAL.description}
                    </p>
                </div>

                {/* Video Player */}
                <VideoPlayer />

            </div>
        </section>
    );
};
