import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoImg from '../../../assets/imgs/logo.svg';
import BurgerIcon from '../../../assets/imgs/burger.svg';
import CloseIcon from '../../../assets/imgs/close.svg';
import { Button } from '../../../components/Button';
import { NAV_ITEMS, HERO } from '../data';

const SCROLL_THRESHOLD = 50;
const HEADER_HEIGHT = 80;

const scrollToAnchor = (href: string) => {
  const targetId = href.startsWith('#') ? href.slice(1) : href;
  const element = document.getElementById(targetId);

  if (!element) {
    return;
  }

  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - HEADER_HEIGHT;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};

export const VoiceBotHeader = () => {
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

    // Если это маршрут (начинается с / но не /#), делаем переход
    if (href.startsWith('/') && !href.startsWith('/#')) {
      window.location.href = href;
    } else {
      // Иначе это якорная ссылка, скроллим
      scrollToAnchor(href);
    }
  };

  const headerTone = isScrolled || isMenuOpen ? 'bg-white text-gray-900 shadow-sm' : 'bg-transparent text-white';

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${headerTone}`}
      >
        <div className="relative mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 sm:px-10 lg:px-20">
          {/* Logo - left */}
          <a href="/" className="flex items-center z-10">
            <img
              src={LogoImg}
              alt="Sfer AI"
              className={`h-7 transition-all ${isScrolled || isMenuOpen ? 'filter brightness-0' : 'filter brightness-0 invert'}`}
            />
          </a>

          {/* Nav - absolutely centered */}
          <nav className="hidden items-center gap-6 text-lg font-medium md:flex tracking-[-0.01em] absolute left-1/2 -translate-x-1/2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item.href)}
                className="relative transition-opacity duration-200 hover:opacity-70 whitespace-nowrap"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA button - right */}
          <div className="hidden md:block z-10 -mr-6">
            <Button color={isScrolled ? 'black' : 'white'} link={HERO.botLink}>
              {HERO.ctaText}
            </Button>
          </div>

          {/* Mobile burger */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden z-10"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            <img
              src={isMenuOpen ? CloseIcon : BurgerIcon}
              alt="Menu"
              className={`h-6 w-6 transition-all ${isScrolled || isMenuOpen ? 'brightness-0' : 'brightness-0 invert'}`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col gap-8 bg-white px-6 py-20 text-gray-900"
          >
            <ul className="space-y-5 text-lg font-medium tracking-[-0.01em]">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    className="w-full text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <Button color="black" fullWidth link={HERO.botLink}>
              {HERO.ctaText}
            </Button>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};
