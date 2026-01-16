import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAmoCRMSubmit, type FormData } from '../../../hooks/useAmoCRMSubmit';

// URL Telegram бота для редиректа после успешной отправки
const TELEGRAM_BOT_URL = 'https://t.me/Kumar_and_Solo_bot?start=c1767615890363-ds';

interface ApplicationFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplicationFormPopup = ({ isOpen, onClose }: ApplicationFormPopupProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    telegram: '',
  });
  const { submit, isLoading, isSuccess, error, reset } = useAmoCRMSubmit();

  // Обработчик закрытия (определяем перед useEffect, который его использует)
  const handleClose = useCallback(() => {
    setFormData({ name: '', phone: '', telegram: '' });
    reset();
    onClose();
  }, [onClose, reset]);

  // Открываем Telegram бота в новой вкладке после успешной отправки формы
  useEffect(() => {
    if (isSuccess) {
      window.open(TELEGRAM_BOT_URL, '_blank');
    }
  }, [isSuccess]);

  // Блокируем скролл при открытом попапе
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Закрытие по Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, handleClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Валидация
    if (!formData.name.trim()) {
      alert('Пожалуйста, введите имя');
      return;
    }
    if (!formData.phone.trim()) {
      alert('Пожалуйста, введите номер телефона');
      return;
    }

    await submit(formData);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md bg-gradient-to-br from-[#2152ba] via-[#0e0967] to-[#005194] rounded-2xl p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Закрыть"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Success State */}
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center gap-5 py-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-white text-xl font-semibold mb-1">
                    Заявка принята!
                  </p>
                  <p className="text-white/70 text-sm">
                    Мы свяжемся с вами в ближайшее время
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="mt-4 px-6 py-3 bg-white text-black rounded-full font-semibold text-sm hover:bg-white/90 transition-colors cursor-pointer"
                >
                  ЗАКРЫТЬ
                </button>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Записаться на курс
                  </h3>
                  <p className="text-white/70 text-sm">
                    Оставьте заявку и мы свяжемся с вами
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  {/* Имя */}
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="ИМЯ"
                    className="h-[60px] px-8 py-5 rounded-xl bg-white/90 shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] text-black text-center placeholder:text-black/50 placeholder:text-center placeholder:uppercase tracking-wider text-sm focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                    disabled={isLoading}
                  />

                  {/* Телефон */}
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="НОМЕР ТЕЛЕФОНА"
                    className="h-[60px] px-8 py-5 rounded-xl bg-white/90 shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] text-black text-center placeholder:text-black/50 placeholder:text-center placeholder:uppercase tracking-wider text-sm focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                    disabled={isLoading}
                  />

                  {/* Telegram */}
                  <input
                    type="text"
                    name="telegram"
                    value={formData.telegram}
                    onChange={handleChange}
                    placeholder="НИК В TELEGRAM"
                    className="h-[60px] px-8 py-5 rounded-xl bg-white/90 shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] text-black text-center placeholder:text-black/50 placeholder:text-center placeholder:uppercase tracking-wider text-sm focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                    disabled={isLoading}
                  />

                  {/* Ошибка */}
                  {error && (
                    <p className="text-red-300 text-sm text-center">{error}</p>
                  )}

                  {/* Кнопка отправки */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-white text-black rounded-full h-[60px] px-8 py-5 uppercase tracking-wider text-sm font-semibold shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-4 cursor-pointer"
                  >
                    {isLoading ? 'ОТПРАВКА...' : 'ОСТАВИТЬ ЗАЯВКУ'}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
