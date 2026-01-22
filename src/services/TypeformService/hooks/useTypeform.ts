import { useReducer, useCallback, useMemo, useEffect } from 'react';
import type { TypeformConfig, TypeformState, TypeformAction, FormData, StepConfig } from '../types';

const initialState: TypeformState = {
  currentStep: -1, // -1 означает welcome screen
  formData: {},
  isSubmitting: false,
  isComplete: false,
  errors: {},
};

function typeformReducer(state: TypeformState, action: TypeformAction): TypeformState {
  switch (action.type) {
    case 'START':
      return {
        ...state,
        currentStep: 0,
        errors: {}, // Очищаем все ошибки при старте
      };
    case 'NEXT':
      return {
        ...state,
        currentStep: state.currentStep + 1,
        errors: {}, // Очищаем все ошибки при переходе на следующий шаг
      };
    case 'PREV':
      return {
        ...state,
        currentStep: Math.max(-1, state.currentStep - 1),
        errors: {}, // Очищаем все ошибки при возврате назад
      };
    case 'SET_VALUE':
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.stepId]: action.value,
        },
      };
    case 'SET_ERROR':
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.stepId]: action.error,
        },
      };
    case 'CLEAR_ERROR':
      const { [action.stepId]: _, ...restErrors } = state.errors;
      return {
        ...state,
        errors: restErrors,
      };
    case 'SUBMIT_START':
      return {
        ...state,
        isSubmitting: true,
      };
    case 'SUBMIT_SUCCESS':
      return {
        ...state,
        isSubmitting: false,
        isComplete: true,
      };
    case 'SUBMIT_ERROR':
      return {
        ...state,
        isSubmitting: false,
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export function useTypeform(config: TypeformConfig) {
  const [state, dispatch] = useReducer(typeformReducer, initialState);

  const totalSteps = config.steps.length;
  const hasWelcomeScreen = !!config.welcomeScreen;
  const hasThankYouScreen = !!config.thankYouScreen;

  // Текущий шаг формы (или null для welcome/thankyou)
  const currentStepConfig: StepConfig | null = useMemo(() => {
    if (state.currentStep >= 0 && state.currentStep < totalSteps) {
      return config.steps[state.currentStep];
    }
    return null;
  }, [config.steps, state.currentStep, totalSteps]);

  // Определение текущего экрана
  const screenType = useMemo((): 'welcome' | 'step' | 'thankyou' => {
    if (state.currentStep === -1 && hasWelcomeScreen) return 'welcome';
    if (state.currentStep >= totalSteps || state.isComplete) return 'thankyou';
    return 'step';
  }, [state.currentStep, state.isComplete, totalSteps, hasWelcomeScreen]);

  // Прогресс (0-100)
  const progress = useMemo(() => {
    if (state.currentStep < 0) return 0;
    if (state.currentStep >= totalSteps) return 100;
    return Math.round((state.currentStep / totalSteps) * 100);
  }, [state.currentStep, totalSteps]);

  // Очищаем ошибку при переходе на новый шаг
  // Это предотвращает показ ошибки сразу при входе на шаг
  useEffect(() => {
    if (currentStepConfig) {
      dispatch({ type: 'CLEAR_ERROR', stepId: currentStepConfig.id });
    }
  }, [state.currentStep]); // Зависимость от currentStep, не от id

  // Валидация текущего шага
  const validateCurrentStep = useCallback((): boolean => {
    if (!currentStepConfig) return true;

    // Info-шаги не требуют валидации
    if (currentStepConfig.type === 'info') return true;

    const value = state.formData[currentStepConfig.id] || '';

    // Проверка required
    if (currentStepConfig.required && !value.trim()) {
      dispatch({
        type: 'SET_ERROR',
        stepId: currentStepConfig.id,
        error: 'Это поле обязательно для заполнения',
      });
      return false;
    }

    // Кастомная валидация через Zod
    if (currentStepConfig.validation) {
      const result = currentStepConfig.validation.safeParse(value);
      if (!result.success) {
        dispatch({
          type: 'SET_ERROR',
          stepId: currentStepConfig.id,
          error: result.error.errors[0]?.message || 'Неверный формат',
        });
        return false;
      }
    }

    // Встроенная валидация email
    if (currentStepConfig.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        dispatch({
          type: 'SET_ERROR',
          stepId: currentStepConfig.id,
          error: 'Введите корректный email',
        });
        return false;
      }
    }

    dispatch({ type: 'CLEAR_ERROR', stepId: currentStepConfig.id });
    return true;
  }, [currentStepConfig, state.formData]);

  // Начать форму (с welcome экрана)
  const start = useCallback(() => {
    dispatch({ type: 'START' });
  }, []);

  // Отправка данных в Google Sheets
  const submitToGoogleSheets = useCallback(async (formData: FormData): Promise<void> => {
    if (!config.googleSheets?.webhookUrl) return;

    const payload = {
      formId: config.id,
      formTitle: config.googleSheets.formTitle || config.title || config.id,
      formData,
    };

    // Используем text/plain - это единственный Content-Type который работает с no-cors
    // Google Apps Script получит JSON строку в e.postData.contents
    await fetch(config.googleSheets.webhookUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify(payload),
    });

    console.log('Form data sent to Google Sheets');
  }, [config.googleSheets, config.id, config.title]);

  // Следующий шаг
  const next = useCallback(async () => {
    // Защита от двойного клика/Enter — если уже отправляем, игнорируем
    if (state.isSubmitting) {
      return;
    }

    // Валидация текущего шага
    if (screenType === 'step' && !validateCurrentStep()) {
      return;
    }

    // Если это последний шаг — отправляем форму
    if (state.currentStep === totalSteps - 1) {
      dispatch({ type: 'SUBMIT_START' });
      try {
        // 1. Отправляем в Google Sheets (если настроено)
        await submitToGoogleSheets(state.formData);

        // 2. Вызываем кастомный обработчик (если есть)
        if (config.onSubmit) {
          await config.onSubmit(state.formData);
        }

        dispatch({ type: 'SUBMIT_SUCCESS' });
        dispatch({ type: 'NEXT' });
      } catch (error) {
        console.error('Form submission error:', error);
        dispatch({ type: 'SUBMIT_ERROR' });
      }
    } else {
      dispatch({ type: 'NEXT' });
    }
  }, [screenType, validateCurrentStep, state.currentStep, state.formData, state.isSubmitting, totalSteps, config, submitToGoogleSheets]);

  // Предыдущий шаг
  const prev = useCallback(() => {
    dispatch({ type: 'PREV' });
  }, []);

  // Установить значение поля
  const setValue = useCallback((stepId: string, value: string) => {
    dispatch({ type: 'SET_VALUE', stepId, value });
    dispatch({ type: 'CLEAR_ERROR', stepId });
  }, []);

  // Сброс формы
  const reset = useCallback(() => {
    dispatch({ type: 'RESET' });
  }, []);

  // Получить значение поля
  const getValue = useCallback(
    (stepId: string): string => {
      return state.formData[stepId] || '';
    },
    [state.formData]
  );

  // Получить ошибку поля
  const getError = useCallback(
    (stepId: string): string | undefined => {
      return state.errors[stepId];
    },
    [state.errors]
  );

  // Можно ли идти назад
  const canGoPrev = useMemo(() => {
    return state.currentStep > 0 || (state.currentStep === 0 && hasWelcomeScreen);
  }, [state.currentStep, hasWelcomeScreen]);

  // Можно ли идти вперёд
  const canGoNext = useMemo(() => {
    return screenType !== 'thankyou';
  }, [screenType]);

  return {
    // Состояние
    state,
    currentStep: state.currentStep,
    currentStepConfig,
    screenType,
    progress,
    isSubmitting: state.isSubmitting,
    isComplete: state.isComplete,
    formData: state.formData as FormData,

    // Навигация
    start,
    next,
    prev,
    canGoPrev,
    canGoNext,

    // Работа с данными
    setValue,
    getValue,
    getError,
    reset,

    // Конфигурация
    totalSteps,
    config,
  };
}

export type UseTypeformReturn = ReturnType<typeof useTypeform>;
