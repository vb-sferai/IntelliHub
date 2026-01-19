import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ROUTES } from '../../../constants/routes';

const COOKIE_CONSENT_KEY = 'sfer-cookie-consent';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Небольшая задержка перед показом для ненавязчивости
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[9999] p-4"
        >
          <div className="mx-auto max-w-4xl rounded-xl bg-white p-4 shadow-lg border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600 text-center sm:text-left">
              Мы используем cookies для улучшения работы сайта.{' '}
              <Link
                to={ROUTES.privacyPolicy}
                className="text-[#275DD8] hover:underline"
              >
                Политика конфиденциальности
              </Link>
            </p>
            <button
              onClick={handleAccept}
              className="shrink-0 rounded-lg bg-[#275DD8] px-6 py-2 text-sm font-medium text-white hover:bg-[#1e4bb3] transition-colors"
            >
              Принять
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
