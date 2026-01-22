import { TypeformContainer } from '../../../services/TypeformService';
import type { TypeformConfig, FormData } from '../../../services/TypeformService';

/**
 * URL Google Apps Script для записи в таблицу
 * После деплоя скрипта из docs/google-apps-script/forms-to-sheets.js
 * вставьте сюда полученный URL
 */
const GOOGLE_SHEETS_WEBHOOK =
  'https://script.google.com/macros/s/AKfycbxIii2jDBETniVeLE9R0w9DXiAAQCPvdZOIgg1G0e1FWfajVC4YI4C0O25BLEfzdj-xVg/exec';

// Конфигурация формы "Анкета для участия в комьюнити"
const communityFormConfig: TypeformConfig = {
  id: 'community-form',
  title: 'Анкета для участия в комьюнити',

  // Интеграция с Google Sheets (раскомментируйте после настройки)
  ...(GOOGLE_SHEETS_WEBHOOK && {
    googleSheets: {
      webhookUrl: GOOGLE_SHEETS_WEBHOOK,
      formTitle: 'Комьюнити sfer.ai',
    },
  }),

  welcomeScreen: {
    title: 'Спасибо за ваш интерес к сообществу!',
    description: 'Ответьте на несколько вопросов, чтобы мы могли лучше узнать вас.',
    buttonText: 'Начать',
  },

  thankYouScreen: {
    title: 'Супер!',
    description: 'Сейчас вы будете перенаправлены в Telegram-бот для завершения опроса.',
    redirectUrl: 'https://t.me/kgrbnv_bot?start=dl-17691183802b592d82952b',
    redirectDelay: 2000,
  },

  steps: [
    {
      id: 'name',
      type: 'text',
      question: 'Как вас зовут?',
      placeholder: 'Введите ваше имя',
      required: true,
    },
    {
      id: 'contact',
      type: 'text',
      question: 'Укажите ваш email или Telegram',
      description: 'Мы используем это для связи с вами',
      placeholder: 'email@example.com или @username',
      required: true,
    },
    {
      id: 'role',
      type: 'select',
      question: 'Ваша роль или должность',
      description: 'Выберите наиболее подходящий вариант',
      required: true,
      options: [
        'Фаундер / CEO',
        'Топ-менеджер',
        'Продакт-менеджер',
        'Маркетолог',
        'Разработчик',
        'Аналитик',
        'Специалист / Эксперт',
      ],
    },
    {
      id: 'interest',
      type: 'textarea',
      question: 'Что интересует вас в AI больше всего?',
      description: 'Что хотелось бы узнать, какие кейсы решить?',
      placeholder: 'Расскажите о ваших задачах и интересах...',
      required: true,
    },
    {
      id: 'company',
      type: 'text',
      question: 'Как называется ваша компания?',
      placeholder: 'Название компании',
      required: false,
    },
    // Информационный экран о комьюнити перед вопросами о цене
    {
      id: 'info_community',
      type: 'info',
      question: 'Посмотрите на это описание',
      description: `Закрытое русскоязычное сообщество для тех, кто хочет использовать AI в работе, бизнесе и личной эффективности.

• Еженедельные дайджесты — только важное, отделяем сигнал от шума
• Встречи с экспертами — реальные кейсы внедрения, обзоры инструментов
• Практические лайфхаки — инструменты под рабочие задачи
• Нетворк — предприниматели, топы, эксперты

Фокус на автоматизациях, внедрениях в работу и бизнес.`,
      buttonText: 'Понятно',
    },
    // Van Westendorp Price Sensitivity — 4 вопроса для определения оптимальной цены
    {
      id: 'price_too_cheap',
      type: 'text',
      question: 'При какой цене членство в комьюнити показалось бы слишком дешёвым?',
      description: 'Настолько дёшево, что вызывает сомнения в качестве',
      placeholder: '₽/месяц',
      required: false,
    },
    {
      id: 'price_bargain',
      type: 'text',
      question: 'При какой цене членство было бы для вас выгодной покупкой?',
      description: 'Хорошая цена за такой продукт',
      placeholder: '₽/месяц',
      required: false,
    },
    {
      id: 'price_expensive',
      type: 'text',
      question: 'При какой цене членство показалось бы дорогим, но приемлемым?',
      description: 'Дорого, но вы бы всё равно рассмотрели покупку',
      placeholder: '₽/месяц',
      required: false,
    },
    {
      id: 'price_too_expensive',
      type: 'text',
      question: 'При какой цене членство было бы слишком дорогим?',
      description: 'Настолько дорого, что вы бы точно не купили',
      placeholder: '₽/месяц',
      required: false,
    },
  ],

  onSubmit: async (data: FormData) => {
    console.log('Form submitted:', data);

    // TODO: Отправка данных на сервер
    // Пример интеграции с webhook/API:
    // await fetch('/api/community-form', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    // });

    // Имитация задержки отправки
    await new Promise((resolve) => setTimeout(resolve, 1000));
  },

  theme: {
    backgroundColor: '#ffffff',
  },
};

export function CommunityFormPage() {
  return <TypeformContainer config={communityFormConfig} />;
}
