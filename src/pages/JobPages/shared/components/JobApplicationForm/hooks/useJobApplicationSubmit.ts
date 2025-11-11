import { useState } from 'react';
import type { PmApplicationFormData, SubmissionStatus } from '../types';

// URL Google Apps Script для отправки заявок
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxIjOtBEmS_KzStXt7k54_Mmnh0Ib1EhAhbhy7TUfpAiWhoVeqymj4Fv4gFPuVaU4br/exec';

export const useJobApplicationSubmit = () => {
  const [status, setStatus] = useState<SubmissionStatus>({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
  });

  const submitApplication = async (data: PmApplicationFormData, jobPosition: string = 'Product Manager') => {
    setStatus({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
    });

    try {
      // Подготовка данных для отправки
      const formData = {
        ...data,
        jobPosition,
        timestamp: new Date().toISOString(),
      };

      console.log('Submitting application...', {
        url: GOOGLE_SCRIPT_URL,
        dataKeys: Object.keys(formData),
        timestamp: new Date().toISOString(),
      });

      // Отправка в Google Sheets через Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Google Apps Script не поддерживает CORS
        // Убрали headers - они вызывают preflight запрос в Chromium браузерах
        // что приводит к ERR_CONNECTION_RESET
        body: JSON.stringify(formData),
      });

      console.log('Submission successful', response);

      // При mode: 'no-cors' мы не получаем тело ответа,
      // поэтому просто считаем успешным если не было исключения
      setStatus({
        isSubmitting: false,
        isSuccess: true,
        isError: false,
      });

      return { success: true };
    } catch (error) {
      console.error('Error submitting application:', error);
      console.error('Detailed error:', {
        message: error instanceof Error ? error.message : 'Unknown error',
        name: error instanceof Error ? error.name : 'Unknown',
        stack: error instanceof Error ? error.stack : undefined,
        type: error?.constructor?.name,
      });
      setStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        errorMessage: 'Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже.',
      });

      return { success: false, error };
    }
  };

  const resetStatus = () => {
    setStatus({
      isSubmitting: false,
      isSuccess: false,
      isError: false,
    });
  };

  return {
    submitApplication,
    resetStatus,
    ...status,
  };
};