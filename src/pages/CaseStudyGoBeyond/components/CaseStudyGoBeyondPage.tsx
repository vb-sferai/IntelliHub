import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CaseStudyHero } from '../../CaseStudyLancet/components/CaseStudyHero';
import { CaseStudyCTA } from '../../CaseStudyLancet/components/CaseStudyCTA';
import YandexLogo from '../../../assets/imgs/yandex-logo.svg';

const baseTextClass = "text-base md:text-lg leading-relaxed text-[#1A1A1A]";

export const CaseStudyGoBeyondPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get the referrer from location state or default to /teams
  const referrer = (location.state as { from?: string })?.from || '/teams';

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f7f4] text-[#0f0f10]">
      {/* Hero Section */}
      <CaseStudyHero
        logoUrl={YandexLogo}
        title="Кейс: AI-инструменты для AI-разработчиков. Кастомная программа для команды маркетинга Яндекс.Алиса"
        gradientColors={['#CC6600', '#CC0000', '#000000']}
      />

      {/* Main Content */}
      <div className="mx-auto w-full max-w-[960px] px-6 py-16 md:px-10">

        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-semibold md:text-[32px]">О проекте и заказчике</h2>
          <div className={"space-y-6 " + baseTextClass}>
            <p>
              Мы провели офлайн-интенсив для создателей Алисы – обучили их эффективно использовать AI-инструменты в своей работе.
            </p>
            <p>
              <strong>Яндекс.Алиса</strong> – голосовой помощник, один из флагманских AI-продуктов Яндекса, которым ежедневно пользуются миллионы людей. Алиса интегрирована в экосистему умных устройств, мобильные приложения и веб-сервисы компании.
            </p>
            <p>
              <strong>Команда маркетинга Яндекс.Алиса</strong> отвечает за продвижение, позиционирование и коммуникацию одного из самых технологически продвинутых продуктов российского рынка. В этом заключался парадокс: сотрудники, которые ежедневно рассказывают миру о возможностях AI, сами не всегда в полной мере используют инструменты искусственного интеллекта в своей работе.
            </p>
          </div>
        </section>

        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-semibold md:text-[32px]">Уникальность запроса</h2>
          <div className={"space-y-6 " + baseTextClass}>
            <p>
              Инженеры, создающие и совершенствующие Алису, обладают блестящими техническими навыками. Однако есть нюансы:
            </p>
            <ol className="space-y-3 pl-6 list-decimal text-base md:text-lg leading-relaxed text-[#1A1A1A]">
              <li><strong>Специализация имеет границы:</strong> разработка AI и эффективное использование AI-инструментов – совершенно разные компетенции.</li>
              <li><strong>Потребность в уникальном подходе:</strong> маркетологам нужны практические навыки применения AI именно для их специфических задач.</li>
              <li><strong>Ценность внешней экспертизы:</strong> взгляд со стороны и структурированная методология отлично дополняют внутреннюю экспертизу.</li>
            </ol>
          </div>
        </section>

        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-semibold md:text-[32px]">Что мы должны были сделать?</h2>
          <div className={"space-y-6 " + baseTextClass}>
            <ul className="space-y-3 pl-6 text-base md:text-lg leading-relaxed text-[#1A1A1A]">
              <li className="list-disc">Укрепить фундамент знаний об AI-инструментах</li>
              <li className="list-disc">Помочь стать AI-native в повседневной работе</li>
              <li className="list-disc">Рассказать о глобальных трендах использования AI в маркетинге</li>
              <li className="list-disc">Показать, как применить полученные знания к реальным рабочим задачам команды</li>
            </ul>

            <blockquote className="border-l-4 border-[#FFCC00] bg-white/70 p-6 italic text-[#2a2a2a]">
              <p className="mb-4">
                Кейс GoBeyond – полностью кастомная программа по развитию сотрудников в области AI в профессиональном развитии и саморазвитии. Этот проект особенно ценен для нас. Обучать команду, которая создает один из лучших AI-продуктов страны  – это и вызов, и признание. Каждый проект с Яндексом — это возможность создавать образовательные продукты, которые реально меняют подход к работе.
              </p>
              <p className="mb-4">
                Мы показали, что даже самым технологичным компаниям нужна структурированная методология освоения AI-инструментов для нетехнических команд. И продемонстрировали умение нашей команды разрабатывать уникальные продукты на основе конкретных потребностей заказчика.
              </p>
              <p className="not-italic font-semibold text-[#1f1f1f]">Кирилл Гурбанов, основатель компании ИнтеллиХаб</p>
            </blockquote>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold md:text-[32px] mb-10">Решение: двухдневный офлайн-интенсив</h2>

          <article className="space-y-6 mb-14">
            <div className={"space-y-6 " + baseTextClass}>
              <p>
                Формат офлайн в московском офисе Яндекса был важен для максимальной вовлеченности и командной работы.
              </p>
              <p>
                Обучение велось по 2,5 часа каждый день в интерактивном формате – с мгновенной обратной связью.
              </p>

              <div className="bg-white/70 p-6 rounded-lg my-6">
                <p className="font-semibold mb-4">Интенсив включал:</p>
                <ol className="space-y-3 pl-6 list-decimal text-base md:text-lg leading-relaxed text-[#1A1A1A]">
                  <li><strong>Фундамент AI для маркетинга</strong> – изучение экосистемы AI-инструментов и продвинутых техник промптинга для маркетинговых задач.</li>
                  <li><strong>Практическое применение</strong> – автоматизацию рутинных маркетинговых процессов, применение AI для анализа конкурентов и трендов, персонализации коммуникаций, работу с реальными кейсами команды Алисы.</li>
                </ol>
              </div>
            </div>
          </article>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold md:text-[32px] mb-10">Особенности кейса</h2>

          <article className="space-y-6 mb-14">
            <h3 className="text-xl font-semibold md:text-[28px]">Адаптация под контекст</h3>
            <div className={"space-y-6 " + baseTextClass}>
              <p>
                Все примеры и задания мы построили вокруг реальных задач команды маркетинга Алисы:
              </p>
              <ul className="space-y-3 pl-6 text-base md:text-lg leading-relaxed text-[#1A1A1A]">
                <li className="list-disc">Создание промо-материалов для новых функций</li>
                <li className="list-disc">Анализ обратной связи пользователей</li>
                <li className="list-disc">Генерация идей для кампаний</li>
                <li className="list-disc">Оптимизация контент-стратегии</li>
              </ul>
            </div>
          </article>

          <article className="space-y-6">
            <h3 className="text-xl font-semibold md:text-[28px]">Практическое применение</h3>
            <div className={"space-y-6 " + baseTextClass}>
              <p>
                Участники приносили свои актуальные задачи и решали их на занятии с помощью новых инструментов.
              </p>
            </div>
          </article>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold md:text-[32px] mb-10">Результаты</h2>

          <article className="space-y-6 mb-14">
            <h3 className="text-xl font-semibold md:text-[28px]">Цифры</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="border-t-4 border-[#FFCC00] bg-white p-6">
                <div className="text-3xl font-semibold text-[#FF0000] mb-2">20+</div>
                <p className="text-gray-600">маркетологов прошли обучение</p>
              </div>
              <div className="border-t-4 border-[#FFCC00] bg-white p-6">
                <div className="text-3xl font-semibold text-[#FF0000] mb-2">5+</div>
                <p className="text-gray-600">AI-инструментов освоено на практике</p>
              </div>
              <div className="border-t-4 border-[#FFCC00] bg-white p-6">
                <div className="text-3xl font-semibold text-[#FF0000] mb-2">5</div>
                <p className="text-gray-600">рабочих процессов оптимизировано уже во время обучения</p>
              </div>
              <div className="border-t-4 border-[#FFCC00] bg-white p-6">
                <div className="text-3xl font-semibold text-[#FF0000] mb-2">100%</div>
                <p className="text-gray-600">участников применили полученные знания в первую же неделю</p>
              </div>
            </div>
          </article>

          <article className="space-y-6">
            <h3 className="text-xl font-semibold md:text-[28px]">Достижения</h3>
            <blockquote className="border-l-4 border-[#FFCC00] bg-white/70 p-6 italic text-[#2a2a2a]">
              <p className="mb-4">
                Команда перешла от знания о существовании AI-инструментов к их системному использованию в работе. Рутинные задачи, которые занимали часы, теперь решаются за минуты с помощью правильно настроенных AI-инструментов. AI стал не заменой творчества, а катализатором для генерации и развития идей.
              </p>
              <p className="not-italic font-semibold text-[#1f1f1f]">Кирилл Гурбанов, основатель компании ИнтеллиХаб</p>
            </blockquote>
          </article>
        </section>

        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-semibold md:text-[32px]">Наши инсайты</h2>
          <div className={"space-y-6 " + baseTextClass}>
            <div>
              <p className="font-semibold mb-2">1. Специализация важна.</p>
              <p>
                Даже создателям AI нужно учиться эффективно использовать AI-инструменты.
              </p>
            </div>

            <div>
              <p className="font-semibold mb-2">2. Офлайн работает.</p>
              <p>
                Для глубокого погружения и командной работы оффлайн-формат незаменим.
              </p>
            </div>

            <div>
              <p className="font-semibold mb-2">3. Кастомизация критична.</p>
              <p>
                Обучение на реальных рабочих задачах дает немедленный эффект.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 space-y-6">
          <div className={"space-y-6 " + baseTextClass}>
            <p className="italic text-gray-600 mt-8">
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
        title="Хотите организовать корпоративное обучение по AI?"
        description="Давайте обсудим ваш проект!"
        gradientColors={['#FFCC00', '#FF0000', '#000000']}
        primaryButtonTextColor="black"
      />
    </div>
  );
};
