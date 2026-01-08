import { SUCCESS_TESTIMONIAL } from '../data';

// Video Player Component - Loom Embed
const VideoPlayer = () => {
    return (
        <div className="w-full max-w-[981px] mx-auto rounded-2xl overflow-hidden mt-16 lg:mt-20">
            <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                <iframe
                    src="https://www.loom.com/embed/cac1808ee3d8402495de7b8e83e34484"
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

                {/* Testimonial Quote */}
                <div className="flex flex-col items-start sm:items-center gap-5 max-w-[768px] sm:mx-auto">
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
