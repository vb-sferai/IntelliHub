import { motion } from 'framer-motion';
import { MeshGradient } from '@paper-design/shaders-react';
import { CTA_OPTIONS, CTAOption } from '../data';

/**
 * Иконки для типов действий
 */
const ActionIcon = ({ type }: { type: CTAOption['actionType'] }) => {
    switch (type) {
        case 'calendly':
            return (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            );
        case 'email':
            return (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            );
        case 'telegram':
            return (
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
            );
    }
};

/**
 * Карточка CTA опции
 */
const CTACard = ({ option, index }: { option: CTAOption; index: number }) => {
    return (
        <motion.a
            href={option.link}
            target={option.actionType === 'calendly' ? '_blank' : undefined}
            rel={option.actionType === 'calendly' ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col gap-4 rounded-3xl bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20 md:p-8"
        >
            {/* Иконка */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white">
                <ActionIcon type={option.actionType} />
            </div>

            {/* Контент */}
            <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-white md:text-2xl">
                    {option.title}
                </h3>
                <p className="text-sm text-white/80 md:text-base">
                    {option.description}
                </p>
            </div>

            {/* Кнопка */}
            <div className="mt-auto flex items-center gap-2 text-white transition-transform group-hover:translate-x-1">
                <span className="font-semibold">{option.action}</span>
                <span>→</span>
            </div>
        </motion.a>
    );
};

/**
 * CTASection - варианты начала сотрудничества
 * MeshGradient фон, 3 карточки опций
 */
export const CTASection = () => {
    return (
        <section className="relative overflow-hidden py-16 md:py-24" id="cta">
            {/* MeshGradient Background */}
            <MeshGradient
                speed={0.38}
                colors={['#80C2FF', '#061346', '#3A83E8']}
                distortion={0.79}
                swirl={0.4}
                grainMixer={0.3}
                grainOverlay={0}
                frame={32579.315}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-12 lg:px-16 xl:px-0">
                {/* Заголовок */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center md:mb-16"
                >
                    <h2 className="text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
                        Варианты начала сотрудничества
                    </h2>
                </motion.div>

                {/* Grid карточек */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                    {CTA_OPTIONS.map((option, index) => (
                        <CTACard key={index} option={option} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
