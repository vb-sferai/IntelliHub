// Навигация для хедера (якорные ссылки на секции)
export const NAV_ITEMS = [
    { label: 'Как работает', href: '#how-it-works' },
    { label: 'Сравнение', href: '#comparison' },
    { label: 'Тарифы', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
];

// Hero секция
export const HERO = {
    title: 'Голосовые в текст за секунды',
    subtitle: 'Устали слушать бесконечные голосовые? Просто перешлите их боту',
    ctaText: 'Попробовать бесплатно',
    botLink: 'https://t.me/your_voice_bot', // TODO: заменить на реальную ссылку
};

// Шаги работы с ботом
export const STEPS = [
    {
        number: '01',
        title: 'Перешлите голосовое',
        description: 'Просто перешлите голосовое сообщение нашему боту в Telegram',
    },
    {
        number: '02',
        title: 'Бот расшифрует',
        description: 'Искусственный интеллект мгновенно распознает речь',
    },
    {
        number: '03',
        title: 'Читайте текст',
        description: 'Получите готовый текст сообщения в чате',
    },
];

// Шаги для HowItWorksSection (формат step: number)
// Иконки: 'send' | 'bot' | 'file-text' — соответствуют Lucide React
export const STEPS_NEW = [
    {
        step: 1,
        title: 'Перешлите голосовое',
        description: 'Просто перешлите голосовое сообщение нашему боту в Telegram',
        icon: 'send',
    },
    {
        step: 2,
        title: 'Бот расшифрует',
        description: 'Искусственный интеллект мгновенно распознает речь',
        icon: 'bot',
    },
    {
        step: 3,
        title: 'Читайте текст',
        description: 'Получите готовый текст сообщения в чате',
        icon: 'file-text',
    },
];

// Данные для таблицы сравнения с Telegram Premium
export const COMPARISON_DATA = {
    headers: ['Функция', 'Наш бот', 'Telegram Premium'],
    rows: [
        { feature: 'Расшифровка голосовых', us: true, telegram: true },
        { feature: 'Скорость обработки', us: '3-5 сек', telegram: '10-30 сек' },
        { feature: '50+ языков', us: true, telegram: false },
        { feature: 'Приватность (без хранения)', us: true, telegram: false },
        { feature: 'Работает без Premium', us: true, telegram: false },
    ],
};

// Преимущества
export const FEATURES = [
    {
        emoji: '\u26A1',
        title: 'Мгновенно',
        description: 'Расшифровка за 3-5 секунд даже для длинных сообщений',
    },
    {
        emoji: '\uD83C\uDFAF',
        title: 'Точно',
        description: '95%+ точность распознавания благодаря современным AI-моделям',
    },
    {
        emoji: '\uD83D\uDD12',
        title: 'Приватно',
        description: 'Не храним ваши сообщения \u2014 они удаляются сразу после обработки',
    },
    {
        emoji: '\uD83C\uDF0D',
        title: '50+ языков',
        description: 'Русский, английский и ещё более 50 языков мира',
    },
];

// Тарифы
export const PRICING = [
    {
        name: 'Free',
        price: '0 \u20BD',
        period: '',
        description: 'Для знакомства с ботом',
        features: [
            '10 минут расшифровки в месяц',
            'Все языки',
            'Стандартная скорость',
        ],
        ctaText: 'Начать бесплатно',
        ctaLink: 'https://t.me/your_voice_bot', // TODO: заменить
        isPopular: false,
    },
    {
        name: 'Pro',
        price: '299 \u20BD',
        period: '/месяц',
        description: 'Для активных пользователей',
        features: [
            'Безлимитные расшифровки',
            'Приоритетная обработка',
            'Все языки',
            'Поддержка 24/7',
        ],
        ctaText: 'Оформить подписку',
        ctaLink: 'https://t.me/your_voice_bot?start=pro', // TODO: заменить
        isPopular: true,
    },
    {
        name: 'Team',
        price: '999 \u20BD',
        period: '/месяц',
        description: 'Для команд',
        features: [
            'До 5 пользователей',
            'Безлимитные расшифровки',
            'Приоритетная обработка',
            'Персональный менеджер',
        ],
        ctaText: 'Связаться',
        ctaLink: 'https://t.me/your_voice_bot?start=team', // TODO: заменить
        isPopular: false,
    },
];

// FAQ
export const FAQ_ITEMS = [
    {
        question: 'Как работает бот?',
        answer: 'Просто перешлите голосовое сообщение из любого чата нашему боту. Он использует современные AI-модели для распознавания речи и отправит вам текст в ответ за несколько секунд.',
    },
    {
        question: 'Мои данные в безопасности?',
        answer: 'Да, мы серьёзно относимся к приватности. Голосовые сообщения обрабатываются в реальном времени и не сохраняются на наших серверах. Мы не храним историю ваших сообщений.',
    },
    {
        question: 'Какие языки поддерживаются?',
        answer: 'Бот поддерживает более 50 языков, включая русский, английский, испанский, французский, немецкий, китайский, японский и многие другие. Язык определяется автоматически.',
    },
    {
        question: 'Как оформить возврат?',
        answer: 'Если вы не удовлетворены качеством услуги, напишите нам в течение 14 дней после оплаты, и мы вернём деньги. Контакты для связи указаны внизу страницы.',
    },
];

// Юридическая информация (для ЮKassa)
export const LEGAL = {
    companyName: 'ИП Иванов Иван Иванович', // TODO: заменить
    inn: '123456789012', // TODO: заменить
    ogrnip: '123456789012345', // TODO: заменить
    address: 'г. Москва, ул. Примерная, д. 1', // TODO: заменить
    email: 'support@sfer.ai',
    telegram: '@sfer_support',
};

// Контактная информация
export const CONTACTS = {
    email: 'support@sfer.ai',
    telegram: '@sfer_support',
};
