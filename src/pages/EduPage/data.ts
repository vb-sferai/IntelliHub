import PenIcon from './assets/imgs/pen.svg';
import BotIcon from './assets/imgs/bot.svg';
import SettingsIcon from './assets/imgs/settings.svg';
import PeopleIcon from './assets/imgs/people.svg';
import HeartIcon from './assets/imgs/favorite.svg';
import FlashIcon from './assets/imgs/flash.svg';
import DataEnrichmentIcon from './assets/icons/data-enrichment.svg';
import GatewayUserAccessIcon from './assets/icons/gateway-user-access.svg';
import MoneyIcon from './assets/icons/money.svg';
import EduardImg from './assets/imgs/eduard.png';
import KirillImg from './assets/imgs/kirill.png';
import ArtemImg from './assets/imgs/artem.png';
import { getPublishedReviews } from '../../data/reviews';

export const SPEAKERS = [
    {
        name: 'Кирилл Гурбанов',
        title: 'AI-база, AI-агенты, Cursor и вайбкодинг',
        description: 'Основатель sfer.ai, практик с 9-летним опытом на топ-позициях в крупнейших компаниях России: со-основатель и член СД банка СМЛТ (группа «Самолет»), Chief Digital Officer МТС Банк, CPO Сбер Бизнес Мобайл',
        photo: KirillImg,
    },
    {
        name: 'Эдуард Эпштейн',
        title: 'Cursor и вайбкодинг',
        description: 'Уже более 7 лет на рынке медиа, IT и digital-маркетинга. Последние 1,5 года занимается AI-трансформацией бизнеса, внедряет AI-инструменты в отделы продаж, маркетинга, продукта и разработки',
        photo: EduardImg,
    },
    {
        name: 'Артём Фролов',
        title: 'AI-агенты',
        description: 'Ex-руководитель продуктового направления в Collextr.ai, ex-Product Manager в T-Банке. Более 2-х лет занимается созданием AI-агентов и автоматизацией процессов',
        photo: ArtemImg,
    },
];

export const METRICS = [
    {
        value: '9.4/10',
        description: 'Средняя оценка по итогам обратной связи после воркшопов',
    },
    {
        value: '2500+',
        description: 'Человек начали применять AI в жизни и работе вместе с нами',
    },
];

export const WHO_NEEDS_CODING = [
    {
        title: 'Не знаю,\nкак всё это работает',
        description: 'Разобраться с нуля и систематизировать знания',
        buttonText: 'Подробнее о базовом воркшопе',
        buttonLink: '/edu/baza',
    },
    {
        title: 'Вечно жду разработчиков',
        description: 'Создать сайт или сервис без навыков программирования',
        buttonText: 'Подробнее о вайбкодинге',
        buttonLink: '/edu/vibecoding',
    },
    {
        title: 'Тону в одинаковых задачах',
        description: 'Автоматизировать рутину с помощью ИИ-ассистента',
        buttonText: 'Подробнее об AI-агентах',
        buttonLink: '/edu/agents',
    },
];

export const COURSES = [
    {
        title: 'AI-база',
        subtitle: 'Изучить основы AI',
        items: [
            'Как выбирать ИИ под задачу',
            'Эффективный промптинг,\nпамять, кастомизация',
            'Основы вайбкодинга\nи продвинутые инструменты',
        ],
        buttonText: 'Подробнее',
        buttonLink: '/edu/baza',
    },
    {
        title: 'Cursor\nи вайбкодинг',
        subtitle: 'Создать продукт без кода',
        items: [
            'Основы и настройки Cursor',
            'Создание приложений и сайтов',
            'MCP, скрэпинг и Figma,\nдеплой проектов',
        ],
        buttonText: 'Подробнее',
        buttonLink: '/edu/vibecoding',
    },
    {
        title: 'AI-агенты',
        subtitle: 'Автоматизировать рутину',
        items: [
            'Интерфейс и основы n8n',
            'Создание автоматизаций',
            'Подключение почты,\nкалендаря, базы данных,\nсервисов по API',
        ],
        buttonText: 'Подробнее',
        buttonLink: '/edu/agents',
    },
];

export const VIDEOS = [
    {
        embedUrl: 'https://www.loom.com/embed/cac1808ee3d8402495de7b8e83e34484',
    },
    {
        embedUrl: 'https://www.loom.com/embed/0584c37f172d4e5e802b63aa03d38dbc',
    },
    {
        embedUrl: 'https://www.loom.com/embed/7e50a2ce84a14d8fb3c961d4dd496a2a',
    },
];

export const CONTENT = [
    {
        iconUrl: PenIcon,
        title: 'Узнать базу',
        text: 'Как «думает» ИИ и как с ним взаимодействовать',
        list: [
            'Разберём, как «думает» ИИ на примере ChatGPT, Claude, Алисы и др.',
            'Научимся писать промпты и получать ответы без галлюцинаций (или использовать их)',
            'Потренируемся использовать ИИ для реальных задач',
        ],
    },
    {
        iconUrl: SettingsIcon,
        title: 'Настроить AI-приложения под себя',
        text: 'Продвинутые настройки, чтобы решать задачи быстрее',
        list: [
            'Настроим личный стиль общения и тон ответов',
            'Разберём цепочки запросов и принципы контекстной памяти',
            'Освоим продвинутые инструменты: DeepResearch, генерация изображений и др.',
        ],
    },
    {
        iconUrl: BotIcon,
        title: 'Стать AI-Native',
        text: 'Разные инструменты для разных задач',
        list: [
            'Генерация видео',
            'Введение в веб-кодинг (Ловабл, Реплит)',
            'Создание презентаций',
            'NotebookLM',
        ],
    },
];

export const AUDIENCE = [
    {
        iconUrl: PeopleIcon,
        title: 'Новички',
        text: 'Не знаете, с чего начать и где вообще применять ИИ?',
        list: [
            'Поможем разобраться без сложных терминов',
            'Покажем, как экономить время на рутине',
            'Как искать информацию быстрее и использовать ChatGPT для жизни и работы.',
        ],
    },
    {
        iconUrl: HeartIcon,
        title: 'Любители',
        text: 'Иногда используете ChatGPT, но результат не такой, как хотелось бы',
        list: [
            'Покажем, как перестроить своё мышление под работу с LLM',
            'Автоматизировать простые задачи',
            'Объединять ИИ инструменты и создавать агентов',
        ],
    },
    {
        iconUrl: FlashIcon,
        title: 'Специалисты, предприниматели, креаторы',
        text: 'Понимаете, что ИИ может ускорить аналитику, отчёты или cоздание контента — но не хватает времени внедрить?',
        list: [
            'Разберём кейсы под вашу сферу, и поможем встроить их в процесс',
        ],
    },
];

// Отзывы из централизованного хранилища (для EduPage показываем ВСЕ отзывы)
export const REVIEWS = getPublishedReviews();

export const PRICE = [
    {
        title: 'Живое участие',
        price: '49 990 ₽',
        forMonth: '4 999 ₽ / месяц',
        list: [
            'Ответы на вопросы вживую и в чате, разбор кейса с экспертом',
            'Доступ к записи воркшопа на 60 дней',
            'Бонус: материалы и шпаргалки по промптам для ИИ',
            'Доступ к сообществу выпускников на 200+ человек',
        ],
        streamButtonTexts: {
            stream2: 'Забронировать место 24 ноября — 8 декабря',
            stream3: 'Забронировать место 10-24 декабря',
        },
        streamLinks: {
            stream2: 'https://kirillgurbanov.getcourse.ru/vibecoding_workshop',
            stream3: 'https://kirillgurbanov.getcourse.ru/vibecoding_workshop_december',
        },
    },
    {
        title: 'Только запись',
        price: '39 990 ₽',
        forMonth: '3 999 ₽ / месяц',
        list: [
            'Доступ к записи воркшопа на 60 дней',
        ],
        streamButtonTexts: {
            stream2: 'Получить запись 24 ноября — 8 декабря',
            stream3: 'Получить запись 10-24 декабря',
        },
        streamLinks: {
            stream2: 'https://kirillgurbanov.getcourse.ru/vibecoding_only_record',
            stream3: 'https://kirillgurbanov.getcourse.ru/vibecoding_workshop_december_copy_onlyrecord',
        },
    },
];
