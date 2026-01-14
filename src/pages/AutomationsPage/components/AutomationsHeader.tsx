import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoImg from '../../../assets/imgs/logo.svg';
import BurgerIcon from '../../../assets/imgs/burger.svg';
import CloseIcon from '../../../assets/imgs/close.svg';
import { NAV_ITEMS } from '../data';

const SCROLL_THRESHOLD = 50;
const HEADER_HEIGHT = 80;

/**
 * Scroll к секции с учётом высоты хедера
 */
const scrollToAnchor = (href: string) => {
    const targetId = href.startsWith('#') ? href.slice(1) : href;
    const element = document.getElementById(targetId);

    if (!element) return;

    const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - HEADER_HEIGHT;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
    });
};

/**
 * AutomationsHeader — кастомный scroll-aware header
 *
 * В Hero: прозрачный фон, белый текст/лого
 * После скролла: белый фон, тёмный текст, тень
 * Mobile: бургер меню
 */
export const AutomationsHeader = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const handleNavClick = (href: string) => {
        setIsMenuOpen(false);
        scrollToAnchor(href);
    };

    const headerTone =
        isScrolled || isMenuOpen
            ? 'bg-white text-gray-900 shadow-sm'
            : 'bg-transparent text-white';

    return (
        <>
            <header
                className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${headerTone}`}
            >
                <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6 md:px-12 lg:px-16 xl:px-0">
                    {/* Logo → главная */}
                    <a href="/" className="flex items-center gap-3">
                        <img
                            src={LogoImg}
                            alt="Sfer AI"
                            className={`h-8 transition-all ${
                                isScrolled || isMenuOpen
                                    ? 'brightness-0'
                                    : 'brightness-0 invert'
                            }`}
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <nav
                        className="hidden items-center gap-8 text-lg font-medium md:flex"
                        style={{ letterSpacing: '-0.3px' }}
                    >
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item.label}
                                type="button"
                                onClick={() => handleNavClick(item.href)}
                                className="relative text-left transition-opacity duration-200 hover:opacity-70"
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    {/* Mobile Burger */}
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="md:hidden"
                        aria-expanded={isMenuOpen}
                        aria-label={
                            isMenuOpen ? 'Закрыть меню' : 'Открыть меню'
                        }
                    >
                        <img
                            src={isMenuOpen ? CloseIcon : BurgerIcon}
                            alt="Menu"
                            className={`h-6 w-6 transition-all ${
                                isScrolled || isMenuOpen
                                    ? 'brightness-0'
                                    : 'brightness-0 invert'
                            }`}
                        />
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -24 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-40 flex flex-col gap-8 bg-white px-6 py-24 text-gray-900"
                    >
                        <ul className="space-y-6 text-xl font-medium">
                            {NAV_ITEMS.map((item) => (
                                <li key={item.label}>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleNavClick(item.href)
                                        }
                                        className="w-full text-left"
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
};
