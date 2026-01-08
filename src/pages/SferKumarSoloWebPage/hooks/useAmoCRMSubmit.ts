import { useState } from 'react';
import { getSavedUTMParams, getUTMParams } from '../../../utils/analytics';

// URL твоего Google Apps Script
const AMOCRM_PROXY_URL = 'https://script.google.com/macros/s/AKfycbyhl-7jAFI2qVzC5a6h0IOJaR5rtjdDPWv8A0Cs3Yvy_OlGCupjxcyLmcNc7ObVA0sF/exec';

export interface FormData {
  name: string;
  phone: string;
  telegram: string;
}

export const useAmoCRMSubmit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const submit = async (data: FormData) => {
    setIsLoading(true);
    setError(null);

    try {
      // Получаем сохранённые UTM-параметры (с fallback на текущий URL)
      let utmParams = getSavedUTMParams();

      // Fallback: если sessionStorage пуст, пробуем получить из текущего URL
      if (!utmParams || Object.keys(utmParams).length === 0) {
        utmParams = getUTMParams();
        console.log('🔍 UTM params from current URL (fallback):', utmParams);
      } else {
        console.log('🔍 UTM params from sessionStorage:', utmParams);
      }

      // Формируем данные для отправки
      const payload = {
        name: data.name,
        phone: data.phone,
        telegram: data.telegram,
        utm_source: utmParams?.utm_source || '',
        utm_medium: utmParams?.utm_medium || '',
        utm_campaign: utmParams?.utm_campaign || '',
        utm_content: utmParams?.utm_content || '',
        utm_term: utmParams?.utm_term || '',
      };
      console.log('📤 Payload to send:', payload);

      // Отправляем в Google Apps Script
      await fetch(AMOCRM_PROXY_URL, {
        method: 'POST',
        mode: 'no-cors', // Google Apps Script требует no-cors
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // При no-cors мы не можем прочитать ответ, считаем успехом
      setIsSuccess(true);
    } catch (err) {
      setError('Произошла ошибка. Пожалуйста, попробуйте ещё раз.');
      console.error('AmoCRM submit error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setError(null);
    setIsSuccess(false);
  };

  return { submit, isLoading, error, isSuccess, reset };
};
