import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CaseStudyHero } from '../../CaseStudyLancet/components/CaseStudyHero';
import { CaseStudyCTA } from '../../CaseStudyLancet/components/CaseStudyCTA';
import NubesLogo from '../../../assets/imgs/nubes-logo.svg';
import ValeriaPhoto from '../assets/imgs/valeria-sushchik.png';

const baseTextClass = "text-base md:text-lg leading-relaxed text-[#1A1A1A]";

export const CaseStudyNubesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get the referrer from location state or default to /cases
  const referrer = (location.state as { from?: string })?.from || '/cases';

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f7f4] text-[#0f0f10]">
      {/* Hero Section */}
      <CaseStudyHero
        logoUrl={NubesLogo}
        title="Кейс: Трехдневный интенсив для сотрудников облачного провайдера Nubes"
        gradientColors={['#4A90D9', '#6C5CE7', '#0D1B2A']}
      />

      {/* Main Content */}
      <div className="mx-auto w-full max-w-[960px] px-6 py-16 md:px-10">

        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-semibold md:text-[32px]">О проекте и заказчике</h2>
          <div className={"space-y-6 " + baseTextClass}>
            <p>
              <strong>Nubes</strong> — провайдер безопасных облачных сервисов для бизнеса. Компания занимается созданием безопасной ИТ-инфраструктуры для среднего и крупного бизнеса на базе защищенных облачных сервисов и дата-центра Tier III в Москве.
            </p>
            <p>
              Для облачных провайдеров важно, чтобы сотрудники были AI native и активно использовали нейросети в повседневной работе. Компания предоставляет инфраструктуру, в том числе, для решений, основанных на базе ИИ. А потому, чтобы двигаться в ногу со временем, важно разбираться в теме досконально.
            </p>

            {/* Отзыв сотрудника Nubes */}
            <blockquote className="border-l-4 border-[#6C5CE7] bg-white/70 p-6 text-[#2a2a2a]">
              <p className="italic mb-4">
                Хочу поделиться опытом сотрудничества c sfer.ai — результат превзошел наши ожидания!
              </p>
              <p className="italic mb-4">
                Мы искали экспертов, которые могли бы качественно погрузить команду Nubes в тему искусственного интеллекта. Трехдневный интенсив с Кириллом Гурбановым стал именно тем решением, которое нам было нужно. Материал подавался максимально практично. Никакой воды — только рабочие инструменты и конкретные кейсы.
              </p>
              <p className="italic mb-4">
                Команда сумела найти подход к каждому участнику: и новички получили крепкую базу, и более опытные коллеги открыли для себя новые возможности ИИ.
              </p>
              <p className="italic mb-4">
                Отдельно отмечу гибкость в работе — все наши специфические запросы и пожелания были учтены при построении программы. Видно, что ребята действительно погружаются в задачи клиента.
              </p>
              <p className="italic mb-6">
                Рекомендую sfer.ai как надежного партнера для обучения команд!
              </p>
              <div className="flex items-center gap-4 not-italic">
                <img
                  src={ValeriaPhoto}
                  alt="Валерия Сущик"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-[#1f1f1f] uppercase tracking-wide">Валерия Сущик</p>
                  <p className="text-sm text-[#2a2a2a]">Менеджер по развитию сообществ (Nubes)</p>
                </div>
              </div>
            </blockquote>
          </div>
        </section>

        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-semibold md:text-[32px]">Ключевые запросы</h2>
          <div className={"space-y-6 " + baseTextClass}>
            <p>
              Перед нами поставили задачу обучить сотрудников компании (от генерального директора до технических специалистов и коммерческой команды) взаимодействию с AI-инструментами, с фокусом на рабочих задачах, а не личном использовании.
            </p>
            <p className="font-semibold">Мы должны были обеспечить:</p>
          </div>

          <article className="space-y-4 mb-8">
            <h3 className="text-xl font-semibold md:text-[24px]">Универсальность с возможностью персонализации</h3>
            <ul className="space-y-3 pl-6 text-base md:text-lg leading-relaxed text-[#1A1A1A]">
              <li className="list-disc">Подход должен работать для всех специалистов одновременно</li>
              <li className="list-disc">Каждый участник учился «приземлить» знания на свои конкретные задачи</li>
              <li className="list-disc">Необходима адаптация под разные уровни технической подготовки</li>
            </ul>
          </article>

          <article className="space-y-4 mb-8">
            <h3 className="text-xl font-semibold md:text-[24px]">Техническую экспертизу спикера</h3>
            <ul className="space-y-3 pl-6 text-base md:text-lg leading-relaxed text-[#1A1A1A]">
              <li className="list-disc">Способность углубляться в технические детали при необходимости</li>
              <li className="list-disc">Авторитет у технической аудитории</li>
            </ul>
          </article>

          <article className="space-y-4 mb-8">
            <h3 className="text-xl font-semibold md:text-[24px]">Практическую направленность</h3>
            <ul className="space-y-3 pl-6 text-base md:text-lg leading-relaxed text-[#1A1A1A]">
              <li className="list-disc">Максимум практических кейсов для разных специальностей</li>
              <li className="list-disc">Живые демонстрации</li>
              <li className="list-disc">Возможность сразу применять знания в работе</li>
              <li className="list-disc">Шпаргалки и материалы для дальнейшего использования</li>
            </ul>
          </article>

          <article className="space-y-4 mb-8">
            <h3 className="text-xl font-semibold md:text-[24px]">Широкий охват инструментов</h3>
            <p className={baseTextClass}>
              В их числе: ChatGPT (приоритет), Claude, Gemini, Grok, Яндекс.GPT, DeepSeek, Perplexity.
            </p>
          </article>

          <article className="space-y-4">
            <h3 className="text-xl font-semibold md:text-[24px]">Особые запросы</h3>
            <p className={baseTextClass}>
              Аккуратная работа с личными кейсами, отсутствие избыточной «гуманитарной» теории.
            </p>
          </article>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold md:text-[32px] mb-10">Решение: классическая обучающая программа</h2>

          <div className={"space-y-6 mb-10 " + baseTextClass}>
            <p>
              Мы подготовили кейс для команды до 20 человек, с учетом особенностей аудитории — разного уровня технической подготовки (соотношение техничных/нетехничных — 50/50), высоких требований к экспертизе спикера, скептичного отношения к «гуманитарным» подходам и требовательности технической команды к качеству контента.
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="border-t-4 border-[#4A90D9] bg-white p-6">
                <div className="text-3xl font-semibold text-[#4A90D9] mb-2">3</div>
                <p className="text-gray-600 text-sm">онлайн-встречи</p>
              </div>
              <div className="border-t-4 border-[#4A90D9] bg-white p-6">
                <div className="text-3xl font-semibold text-[#4A90D9] mb-2">2,5 ч</div>
                <p className="text-gray-600 text-sm">каждая встреча</p>
              </div>
              <div className="border-t-4 border-[#4A90D9] bg-white p-6">
                <div className="text-3xl font-semibold text-[#4A90D9] mb-2">20</div>
                <p className="text-gray-600 text-sm">участников команды</p>
              </div>
              <div className="border-t-4 border-[#4A90D9] bg-white p-6">
                <div className="text-3xl font-semibold text-[#4A90D9] mb-2">7</div>
                <p className="text-gray-600 text-sm">AI-инструментов</p>
              </div>
            </div>
          </div>

          <article className="space-y-6 mb-14">
            <h3 className="text-xl font-semibold md:text-[28px]">Предварительная работа</h3>
            <ul className="space-y-3 pl-6 text-base md:text-lg leading-relaxed text-[#1A1A1A]">
              <li className="list-disc"><strong>Опрос</strong> участников до начала программы</li>
              <li className="list-disc"><strong>Адаптация контента</strong> под специфику аудитории и компании</li>
              <li className="list-disc">Подготовка <strong>материалов и шпаргалок</strong> для дальнейшего использования</li>
              <li className="list-disc">Создание <strong>чата для вопросов</strong> во время обучения</li>
            </ul>
          </article>

          <article className="space-y-6 mb-14">
            <h3 className="text-xl font-semibold md:text-[28px]">Из чего состоял курс</h3>

            <div className="space-y-8">
              <div className="border-l-4 border-[#4A90D9] pl-6">
                <h4 className="text-lg font-semibold mb-3">Вводный воркшоп</h4>
                <ul className="space-y-2 pl-4 text-base md:text-lg leading-relaxed text-[#1A1A1A]">
                  <li className="list-disc">Обзор основных моделей ИИ</li>
                  <li className="list-disc">Практические юзкейсы применения</li>
                  <li className="list-disc">Различия между моделями, когда какую использовать</li>
                  <li className="list-disc">Фокус на рабочих задачах для разных специалистов</li>
                </ul>
              </div>

              <div className="border-l-4 border-[#6C5CE7] pl-6">
                <h4 className="text-lg font-semibold mb-3">Практический воркшоп</h4>
                <ul className="space-y-2 pl-4 text-base md:text-lg leading-relaxed text-[#1A1A1A]">
                  <li className="list-disc">Живые демонстрации работы с инструментами</li>
                  <li className="list-disc">Практические блоки для участников</li>
                  <li className="list-disc">Продвинутые возможности моделей</li>
                  <li className="list-disc">Кейсы для разных специализаций</li>
                </ul>
              </div>

              <div className="border-l-4 border-[#0D1B2A] pl-6">
                <h4 className="text-lg font-semibold mb-3">Введение в AI-агентов + генерация идей</h4>
                <ul className="space-y-2 pl-4 text-base md:text-lg leading-relaxed text-[#1A1A1A]">
                  <li className="list-disc">Что такое агенты и как они работают</li>
                  <li className="list-disc">Базовые концепции без глубокого погружения</li>
                  <li className="list-disc">Примеры применения на уровне отдельных сотрудников и команд</li>
                </ul>
              </div>

              <div className="border-l-4 border-[#4A90D9] pl-6">
                <h4 className="text-lg font-semibold mb-3">Сессия генерации идей</h4>
                <ul className="space-y-2 pl-4 text-base md:text-lg leading-relaxed text-[#1A1A1A]">
                  <li className="list-disc">Фасилитация процесса</li>
                  <li className="list-disc">Генерация идей применения ИИ на конкретных задачах участников</li>
                  <li className="list-disc">Работа с общей доской</li>
                  <li className="list-disc">Определение наиболее перспективных направлений для каждого</li>
                </ul>
              </div>
            </div>
          </article>
        </section>

        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-semibold md:text-[32px]">Результаты</h2>
          <blockquote className="border-l-4 border-[#4A90D9] bg-white/70 p-6 text-[#2a2a2a]">
            <p className="mb-4 text-base md:text-lg leading-relaxed">
              Мы были очень рады поработать с коллегами из компании Nubes. Команда оказалась продвинутой, и вообще стремление ребят погрузиться в тему AI и интегрировать AI в свой бизнес, который изначально не подразумевает, что он должен быть исключительно AI native, вызывает уважение.
            </p>
            <p className="mb-4 text-base md:text-lg leading-relaxed">
              Я думаю, что это очень правильный способ мышления для руководителей бизнеса сегодня. Благодарим коллег за эффективную совместную работу.
            </p>
            <p className="not-italic font-semibold text-[#1f1f1f]">Кирилл Гурбанов, основатель компании sfer.ai</p>
          </blockquote>
        </section>

        <section className="mb-16 space-y-6">
          <div className={"space-y-6 " + baseTextClass}>
            <p className="italic text-gray-600">
              sfer.ai (ранее ИнтеллиХаб) — эксперты в проведении масштабных образовательных мероприятий по AI. Мы умеем работать с аудиторией любого размера и уровня подготовки, создавая контент, который вдохновляет использовать искусственный интеллект каждый день.
            </p>

            {/* Back Button */}
            <div className="mt-12 flex justify-center md:justify-start">
              <button
                onClick={() => navigate(referrer)}
                className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-black px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-gray-800 hover:border-gray-800"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Назад
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <CaseStudyCTA
        title="Хотите обучить команду работе с AI?"
        description="Давайте обсудим ваш проект!"
        gradientColors={['#4A90D9', '#6C5CE7', '#0D1B2A']}
        primaryButtonTextColor="black"
      />
    </div>
  );
};
