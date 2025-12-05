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
import { getReviewsForProduct } from '../../data/reviews';

export const SPEAKERS = [
    {
        name: 'Эдуард Эпштейн',
        title: 'Head of Growth Спортс"',
        description: 'Уже более 7 лет на рынке медиа, IT и digital-маркетинга. Последние 1,5 года занимается AI-трансформацией бизнеса, внедряет AI-инструменты в отделы продаж, маркетинга, продукта и разработки',
        photo: EduardImg,
    },
    {
        name: 'Кирилл Гурбанов',
        title: 'фаундер SFER.AI,\nex-CPO Сбер бизнес мобайл',
        description: 'Основатель sfer.ai, практик с 9-летним опытом на топ-позициях в крупнейших компаниях России: со-основатель и член СД банка СМЛТ (группа «Самолет»), Chief Digital Officer МТС Банк, CPO Сбер Бизнес Мобайл',
        photo: KirillImg,
    },
];

export const METRICS = [
    {
        value: '>25%',
        description: 'Всего кода Google теперь создаёт ИИ',
    },
    {
        value: '40%',
        description: 'Корпоративного ПО будет создаваться на практиках вайбкодинга к 2028 году',
    },
];

export const WHO_NEEDS_CODING = [
    {
        iconUrl: DataEnrichmentIcon,
        title: 'Маркетологи',
        description: 'Быстро собирать лендинги, A/B-тесты, формы обратной связи — и проверять гипотезы за вечер, а не за неделю.',
    },
    {
        iconUrl: GatewayUserAccessIcon,
        title: 'Продакт-менеджеры',
        description: 'Проверять гипотезы, создавать рабочие прототипы за один день и наконец начать понимать разработчиков.',
    },
    {
        iconUrl: MoneyIcon,
        title: 'Предприниматели\nи основатели бизнеса',
        description: 'Быстро собирать лендинги, A/B-тесты, формы обратной связи — и проверять гипотезы за вечер, а не за неделю.',
    },
];

export const WEBINAR_SESSIONS = [
    {
        day: 'День 1',
        title: 'Основы Cursor',
        date: '24 ноября (пн) 19:00-21:00',
        items: [
            'Знакомство с Cursor (интерфейс, скачивание, регистрация)',
            'Настройка rules',
            'Обзор диалогового окна, моделей, режимов',
            'Создание структуры проектов',
        ],
    },
    {
        day: 'День 2',
        title: 'Создание сервисов, приложений и сайтов',
        date: '26 ноября (ср) 19:00-21:00',
        items: [
            'Добавляем базовые МСР (скрапинг и Figma)',
            'Создание простых сервисов (калькуляторы, конверторы)',
            'Создание лендингов (копирование, с нуля, по ссылке, по html-блокам, по скриншотам)',
        ],
    },
    {
        day: 'День 3',
        title: 'Клонирование сайтов и работа с Figma',
        date: '1 декабря (пн) 19:00-21:00',
        items: [
            'Деплой проекта',
            'Работа с данными через диалоговое окно',
            'Создаем игры и более сложные продукты (с бэкенд-частью)',
        ],
    },
    {
        day: 'День 4',
        title: 'Управление проектами в Cursor',
        date: '4 декабря (ср) 19:00-21:00',
        items: [
            'Как с нуля выстроить работу над продуктом прямо внутри Cursor.',
            'Присваиваем Cursor роли (CMO, стратег, CFO, методолог), распределяем задачи между ними и получить готовый план запуска — всё в одном рабочем пространстве.',
        ],
    },
    {
        day: 'День 5',
        title: 'Демо-день',
        date: '8 декабря (пн) 19:00-21:00',
        items: [
            'Презентация проектов участников',
            'Разборы, комментарии и идеи от экспертов',
        ],
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

// Отзывы из централизованного хранилища
export const REVIEWS = getReviewsForProduct('vibecoding');

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
        buttonText: 'Забронировать место 24 ноября — 8 декабря',
        link: 'https://kirillgurbanov.getcourse.ru/vibecoding_workshop',
        disabled: true,
    },
    {
        title: 'Только запись',
        price: '39 990 ₽',
        forMonth: '3 999 ₽ / месяц',
        list: [
            'Доступ к записи воркшопа на 60 дней',
        ],
        buttonText: 'Получить запись 24 ноября — 8 декабря',
        link: 'https://kirillgurbanov.getcourse.ru/vibecoding_only_record',
        disabled: false,
    },
];


