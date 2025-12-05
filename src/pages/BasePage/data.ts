import PenIcon from '../../assets/imgs/pen.svg';
import BotIcon from '../../assets/imgs/bot.svg';
import SettingsIcon from '../../assets/imgs/settings.svg';
import PeopleIcon from '../../assets/imgs/people.svg';
import HeartIcon from '../../assets/imgs/favorite.svg';
import FlashIcon from '../../assets/imgs/flash.svg';
import { getReviewsForProduct } from '../../data/reviews';

export const CONTENT = [
    {
        iconUrl: PenIcon,
        title: 'Узнать базу',
        text: 'Как «думает» ИИ и как с ним взаимодействовать',
        streamDates: {
            stream8: '25 ноября (вт) 18:00-20:00',
        },
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
        streamDates: {
            stream8: '26 ноября (ср) 18:00-20:00',
        },
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
        streamDates: {
            stream8: '27 ноября (чт) 18:00-20:00',
        },
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

// Отзывы из централизованного хранилища
export const REVIEWS = getReviewsForProduct('ai-base');

export const PRICE = [
    {
        title: 'Живое участие',
        price: '24 990 ₽',
        forMonth: '8 330 ₽ / месяц',
        list: [
            'Ответы на вопросы вживую и в чате, разбор кейса с экспертом',
            'Доступ к записи воркшопа на 60 дней',
            'Бонус: материалы и шпаргалки по промптам для ИИ',
            'Доступ к сообществу выпускников на 200+ человек',
        ],
        streamButtonTexts: {
            stream8: 'Забронировать место 25-27 ноября',
        },
        streamLinks: {
            stream8: 'https://kirillgurbanov.getcourse.ru/3day_workshop_ai',
        },
        disabledStreams: ['stream8'], // Поток 8 недоступен для живого участия
    },
    {
        title: 'Только запись',
        price: '19 990 ₽',
        forMonth: '6 663 ₽ / месяц',
        list: [
            'Доступ к записи воркшопа на 60 дней',
        ],
        streamButtonTexts: {
            stream8: 'Получить запись 25-27 ноября',
        },
        streamLinks: {
            stream8: 'https://kirillgurbanov.getcourse.ru/3day_workshop_ai_rec',
        },
        disabledStreams: [], // Запись доступна для всех потоков
    },
];


