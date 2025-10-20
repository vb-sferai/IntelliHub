import { useState, useEffect } from 'react';
import LogoImg from '../../../assets/imgs/logo.svg';
import BurgerIcon from '../../../assets/imgs/burger.svg';
import CloseIcon from '../../../assets/imgs/close.svg';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "../../../components/Button";

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [buttonMargin, setButtonMargin] = useState('0px');

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setIsScrolled(scrollTop > 50);
        };

        const handleResize = () => {
            if (window.innerWidth < 1280) {
                setButtonMargin('calc(24px + 240px)');
            } else if (window.innerWidth < 1440) {
                setButtonMargin('calc(40px + 248px)');
            } else {
                setButtonMargin('calc(60px + 292px)');
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        const offset = 90;

        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            setIsMenuOpen(false);
        }
    };

    return (
        <>
            <div
                className={`flex w-full h-14 sm:h-20 sticky top-0 justify-between items-center z-50 py-2 sm:py-0 px-4 sm:px-12 lg:px-16 xl:px-[calc(calc(100vw-1408px)/2)] transition-all duration-300 ease-in-out ${
                    (isScrolled && !isMenuOpen)
                        ? 'bg-white text-gray-500 shadow-md'
                        : !(isScrolled || isMenuOpen) ? 'bg-transparent text-white' : 'bg-white'
                }`}
            >
                <img
                    src={LogoImg}
                    alt="Sfer AI"
                    className={`w-42 md:w-35 xl:w-[186px] transition-all duration-300 ${
                        (isScrolled || isMenuOpen) ? 'filter brightness-0' : ''
                    }`}
                />

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center">
                    <motion.div
                        className="flex flex-row gap-4 lg:gap-6 xl:gap-8 lg:text-base xl:text-xl font-normal"
                        animate={{
                            marginRight: isScrolled ? buttonMargin : '0px'
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <span onClick={() => scrollToSection('products')} className="cursor-pointer transition-colors duration-300">Products</span>
                        <span onClick={() => scrollToSection('cases')} className="cursor-pointer transition-colors duration-300">Cases</span>
                        <span onClick={() => scrollToSection('approach')} className="cursor-pointer transition-colors duration-300">Approach</span>
                        <span onClick={() => scrollToSection('team')} className="cursor-pointer transition-colors duration-300">Team</span>
                        <span onClick={() => scrollToSection('events')} className="cursor-pointer transition-colors duration-300">Events</span>
                        <span onClick={() => scrollToSection('contacts')} className="cursor-pointer transition-colors duration-300">Contact</span>
                    </motion.div>

                    <AnimatePresence>
                        {isScrolled && (
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 40 }}
                                transition={{ duration: 0.3 }}
                                className="absolute right-12 lg:right-16 xl:right-[calc(calc(100vw-1408px)/2)]"
                            >
                                <Button
                                    color="black"
                                    isInHeader
                                >
                                    Let’s Talk Strategy
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Burger Menu for Mobile */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden flex items-center justify-center w-10 h-10"
                    aria-label="Open menu"
                >
                    <img
                        src={isMenuOpen ? CloseIcon : BurgerIcon}
                        alt="Menu"
                        className={`w-6 h-6 transition-all duration-300 ${
                            isScrolled ? 'filter brightness-0' : 'brightness-100'
                        }`}
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-white z-40 md:hidden pt-20 px-4 sm:px-12"
                    >
                        <div className="flex flex-col gap-2 text-base font-semibold text-black uppercase font-geist">
                            <span onClick={() => scrollToSection('products')} className="cursor-pointer py-3">Products</span>
                            <span onClick={() => scrollToSection('cases')} className="cursor-pointer py-3">Cases</span>
                            <span onClick={() => scrollToSection('approach')} className="cursor-pointer py-3">Approach</span>
                            <span onClick={() => scrollToSection('team')} className="cursor-pointer py-3">Team</span>
                            <span onClick={() => scrollToSection('events')} className="cursor-pointer py-3">Events</span>
                            <span onClick={() => scrollToSection('contacts')} className="cursor-pointer py-3">Contact</span>
                        </div>

                        <div className="absolute bottom-10 left-6 right-6">
                            <Button
                                color="black"
                                fullWidth
                            >
                                Let’s Talk Strategy
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
