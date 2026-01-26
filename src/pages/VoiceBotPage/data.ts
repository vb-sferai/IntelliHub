// Навигация для хедера (якорные ссылки на секции)
export const NAV_ITEMS = [
    { label: 'Сценарии', href: '#usage-scenarios' },
    { label: 'Сравнение', href: '#comparison' },
    { label: 'Тарифы', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
];

// Hero секция
export const HERO = {
    title: 'Больше никаких\nголосовых сообщений\nв телеграм',
    subtitle: 'Sfer Voice Bot автоматически расшифрует любое голосовое - слушать больше не придётся',
    ctaText: 'Попробовать бесплатно',
    botLink: 'https://t.me/sfervoice_bot',
};

// Сценарии использования для UsageScenariosSection
export const USAGE_SCENARIOS = [
    {
        number: 1,
        title: 'Прямая расшифровка',
        description:
            'Просто отправьте голосовое сообщение или кружок боту - получите текст за несколько секунд',
        requiresBusiness: false,
        video: 'scenario-1-direct.mp4',
    },
    {
        number: 2,
        title: 'Автоматическая расшифровка',
        description:
            'Получили голосовое от собеседника? Бот автоматически расшифрует его и ChatGPT отформатирует в удобочитаемый текст',
        requiresBusiness: true,
        video: 'scenario-2-direct.mp4',
    },
    {
        number: 3,
        title: 'Групповые чаты',
        description:
            'Добавьте бота в чат и упомяните его @sfervoice_bot в ответ на голосовое - он расшифрует его для всех',
        requiresBusiness: false,
        video: 'scenario-3-groups.mp4',
    },
];

// Данные для таблицы сравнения с Telegram Premium
export const COMPARISON_DATA = {
    headers: ['Функция', 'Наш бот', 'Telegram Premium'],
    rows: [
        { feature: 'Расшифровка голосовых', us: true, telegram: true },
        { feature: 'Обработка кружков', us: true, telegram: true },
        { feature: 'Длинные голосовые', us: true, telegram: true },
        { feature: '50+ языков', us: true, telegram: false },
        { feature: 'Форматирование текста (абзацы, знаки препинания)', us: true, telegram: false },
        { feature: 'Работает в чатах', us: true, telegram: false },
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
        price: '0 ₽',
        period: '',
        description: 'Для знакомства с ботом',
        features: [
            '10 минут в месяц',
            'Все языки',
        ],
        ctaText: 'Начать бесплатно',
        ctaLink: 'https://t.me/sfervoice_bot',
        isPopular: false,
    },
    {
        name: 'Basic',
        price: '249 ₽',
        period: '/месяц',
        description: 'Для регулярного использования',
        features: [
            '100 минут в месяц',
            'Все языки',
        ],
        ctaText: 'Оформить подписку',
        ctaLink: 'https://t.me/sfervoice_bot?start=basic',
        isPopular: true,
    },
    {
        name: 'Team',
        price: '2 499 ₽',
        period: '/месяц',
        description: 'Для больших объёмов',
        features: [
            '1000 минут в месяц',
            'Все языки',
        ],
        ctaText: 'Оформить подписку',
        ctaLink: 'https://t.me/sfervoice_bot?start=team',
        isPopular: false,
    },
];;;;;;

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
    companyName: 'ИП Гурбанов Кирилл Игоревич',
    inn: '772158403819',
    ogrnip: '324774600493850',
    address: '111674, Россия, г. Москва, ул. 2-я Вольская, д. 20, кв. 43',
    email: 'support@sfer.ai',
    telegram: '@sfer_support',
    // Банковские реквизиты
    bank: 'АО «ТБанк»',
    bik: '044525974',
    bankInn: '7710140679',
    checkingAccount: '40802810200006477359',
    corrAccount: '30101810145250000974',
};

// Контактная информация
export const CONTACTS = {
    email: 'human@sfer.ai',
    telegram: 't.me/kgurbanov',
};;
