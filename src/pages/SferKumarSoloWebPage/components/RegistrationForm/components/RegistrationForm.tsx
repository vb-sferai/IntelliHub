import { useState, useEffect } from 'react';
import { useAmoCRMSubmit, type FormData } from '../../../hooks/useAmoCRMSubmit';

// URL Telegram бота для редиректа после успешной отправки
const TELEGRAM_BOT_URL = 'https://t.me/Kumar_and_Solo_bot?start=c1767615890363-ds';

export const RegistrationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    telegram: '',
  });
  const { submit, isLoading, isSuccess, error, reset } = useAmoCRMSubmit();

  // Редирект в Telegram бота после успешной отправки формы
  useEffect(() => {
    if (isSuccess) {
      window.location.href = TELEGRAM_BOT_URL;
    }
  }, [isSuccess]);

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

  // Состояние успешной отправки
  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center gap-5 py-10 w-full bg-white/75 rounded-xl shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="text-center">
          <p className="text-black text-xl font-semibold mb-1">
            Заявка принята!
          </p>
          <p className="text-black/60 text-sm">
            Мы свяжемся с вами в ближайшее время
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
      {/* Имя */}
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="ИМЯ"
        className="h-[60px] px-8 py-5 rounded-xl bg-white/75 shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] text-black text-center placeholder:text-black/50 placeholder:text-center placeholder:uppercase tracking-wider text-sm focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
        disabled={isLoading}
      />

      {/* Телефон */}
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="НОМЕР ТЕЛЕФОНА"
        className="h-[60px] px-8 py-5 rounded-xl bg-white/75 shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] text-black text-center placeholder:text-black/50 placeholder:text-center placeholder:uppercase tracking-wider text-sm focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
        disabled={isLoading}
      />

      {/* Telegram */}
      <input
        type="text"
        name="telegram"
        value={formData.telegram}
        onChange={handleChange}
        placeholder="НИК В TELEGRAM"
        className="h-[60px] px-8 py-5 rounded-xl bg-white/75 shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] text-black text-center placeholder:text-black/50 placeholder:text-center placeholder:uppercase tracking-wider text-sm focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
        disabled={isLoading}
      />

      {/* Ошибка */}
      {error && (
        <p className="text-red-400 text-sm text-center">{error}</p>
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
  );
};
