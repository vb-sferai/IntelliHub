import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CaseStudyHero } from '../../CaseStudyLancet/components/CaseStudyHero';
import { CaseStudyCTA } from '../../CaseStudyLancet/components/CaseStudyCTA';
import YandexLogo from '../../../assets/imgs/yandex-logo.svg';
import NadezhdaPhoto from '../assets/nadezhda-golovina.png';

const baseTextClass = "text-base md:text-lg leading-relaxed text-[#1A1A1A]";

export const CaseStudyYandexPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get the referrer from location state or default to /teams
  const referrer = (location.state as { from?: string })?.from || '/teams';

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Добавляем noindex meta tag для скрытия от поисковиков (по запросу Яндекса)
  useEffect(() => {
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex, nofollow';
    document.head.appendChild(metaRobots);

    return () => {
      document.head.removeChild(metaRobots);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f7f4] text-[#0f0f10]">
      {/* Hero Section */}
      <CaseStudyHero
        logoUrl="" // YandexLogo - temporarily hidden
        title="Кейс: 11 000 человек на вебинаре: как мы провели самый массовый публичный вебинар про Алису"
        gradientColors={['#CC6600', '#CC0000', '#000000']}
      />

      {/* Main Content */}
      <div className="mx-auto w-full max-w-[960px] px-6 py-16 md:px-10">

        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-semibold md:text-[32px]">О проекте</h2>
          <div className={"space-y-6 " + baseTextClass}>
            <p>
              31 июля 2024 года мы провели открытый вебинар для пользователей нейросети Алисы от Яндекса, который собрал <strong>11 000 уникальных зрителей</strong>. На сегодняшний день это самый массовый образовательный проект sfer.ai и один из крупнейших публичных вебинаров по AI в России.
            </p>
            <p>
              Перед нами поставили задачу: показать широкой аудитории новичков, как Алиса помогает в жизни и работе. Фокус — на конкретных практических кейсах и примерах применения.
            </p>

            {/* Отзыв сотрудника Яндекс */}
            <blockquote className="border-l-4 border-[#FFCC00] bg-white/70 p-6 text-[#2a2a2a]">
              <p className="italic mb-4">
                Выражаю благодарность компании sfer.ai и лично Кириллу Гурбанову за успешно проведенное мероприятие для 11 тысяч человек!
              </p>
              <p className="italic mb-4">
                Вместе с командой sfer.ai мы провели открытый вебинар по нейросети Алисе для широкой аудитории. Задача была: рассказать про возможности Алисы в чате и вовлечь людей в категорию, без сложных терминов и избыточной теории.
              </p>
              <p className="italic mb-4">
                Участники были разной степени погружения: кто-то только начинал знакомство с нейросетями, кто-то уже использовал ИИ. Именно поэтому было важно выстроить программу так, чтобы каждый нашел в ней что-то полезное.
              </p>
              <p className="italic mb-4">
                Кирилл и команда sfer.ai отлично справились с задачей. Ребята проделали большую работу: разработали формат, подход к проведению мероприятия, детализировали структуру, учитывая все наши пожелания.
              </p>
              <p className="italic mb-6">
                Благодарим команду за профессиональную, оперативную и внимательную работу!
              </p>
              <div className="flex items-center gap-4 not-italic">
                <img
                  src={NadezhdaPhoto}
                  alt="Надежда Головина"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-[#1f1f1f] uppercase tracking-wide">Надежда Головина</p>
                  <p className="text-sm text-[#2a2a2a]">Product Marketing Lead Алиса AI (Яндекс)</p>
                </div>
              </div>
            </blockquote>
          </div>
        </section>

        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-semibold md:text-[32px]">Заказчик и контекст</h2>
          <div className={"space-y-6 " + baseTextClass}>
            <p>
              Команда маркетинга <strong>Яндекс Алиса</strong> обратилась к нам с запросом: провести вебинар для широкой аудитории новичков в лёгком, развлекательном формате. Через конкретные практические кейсы показать, как Алиса может быть полезна в самых разных жизненных и рабочих сценариях.
            </p>
            <p className="font-semibold">Мы должны были:</p>
            <ul className="space-y-3 pl-6 text-base md:text-lg leading-relaxed text-[#1A1A1A]">
              <li className="list-disc">Показать разнообразные сценарии применения Алисы в быту и на работе</li>
              <li className="list-disc">Поделиться конкретными практическими кейсами и личным опытом использования</li>
              <li className="list-disc">Вдохновить людей пользоваться AI каждый день через понятные примеры</li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold md:text-[32px] mb-10">Вызовы проекта</h2>

          <article className="space-y-6 mb-14">
            <h3 className="text-xl font-semibold md:text-[28px]">1. Масштаб и разнородность аудитории</h3>
            <div className={"space-y-6 " + baseTextClass}>
              <p>
                <strong>11 000 человек одновременно</strong> — не просто цифра.
              </p>
              <p>Это:</p>
              <ul className="space-y-3 pl-6 text-base md:text-lg leading-relaxed text-[#1A1A1A]">
                <li className="list-disc">Чат, который обновлялся так быстро, что невозможно было прочитать все сообщения</li>
                <li className="list-disc">Аудитория с кардинально разным уровнем подготовки</li>
                <li className="list-disc">Необходимость удерживать внимание на протяжении 2-х часов</li>
              </ul>

              <blockquote className="border-l-4 border-[#FFCC00] bg-white/70 p-6 italic text-[#2a2a2a]">
                <p className="mb-4">
                  Я провела много стримов и вебинаров, но 11 тысяч участников – это настоящее испытание. Чат летал с такой скоростью, что его модерация потребовала фантастических усилий. При этом часть аудитории писала «Это базовая информация, я всё знаю», а другая –– «Офигеть, для меня это открытие!».
                </p>
                <p className="not-italic font-semibold text-[#1f1f1f]">Анна Бурикова, руководитель проектов sfer.ai</p>
              </blockquote>
            </div>
          </article>

          <article className="space-y-6">
            <h3 className="text-xl font-semibold md:text-[28px]">2. Строгие требования заказчика</h3>
            <div className={"space-y-6 " + baseTextClass}>
              <p>
                Работа с брендом Алисы потребовала от нас особого внимания к деталям:
              </p>
              <ul className="space-y-3 pl-6 text-base md:text-lg leading-relaxed text-[#1A1A1A]">
                <li className="list-disc"><strong>Tone of voice</strong>: нужно было согласовывать каждый слайд с PR-службой Яндекса</li>
                <li className="list-disc"><strong>Визуальный стиль</strong>: мы должны были представить продукт, полностью соответствующий брендбуку Алисы</li>
              </ul>
            </div>
          </article>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold md:text-[32px] mb-10">Решение: комплексная подготовка и реализация</h2>

          <article className="space-y-6 mb-14">
            <h3 className="text-xl font-semibold md:text-[28px]">Разработка</h3>
            <div className={"space-y-6 " + baseTextClass}>
              <p>
                Мы создали полностью кастомную программу: адаптировали наш флагманский воркшоп специально под Алису.
              </p>
              <p className="font-semibold">Двухчасовой вебинар включал:</p>
              <ul className="space-y-3 pl-6 text-base md:text-lg leading-relaxed text-[#1A1A1A]">
                <li className="list-disc"><strong>Практические сценарии</strong> — примеры применения Алисы в жизни и работе</li>
                <li className="list-disc"><strong>Личный опыт</strong> — как мы сами используем AI каждый день</li>
                <li className="list-disc"><strong>Разнообразные кейсы</strong> — от бытовых задач до профессиональных сценариев</li>
                <li className="list-disc"><strong>Ответы на вопросы</strong> — интерактив с аудиторией</li>
              </ul>
            </div>
          </article>

          <article className="space-y-6 mb-14">
            <h3 className="text-xl font-semibold md:text-[28px]">Техническая подготовка</h3>
            <div className={"space-y-6 " + baseTextClass}>
              <p className="font-semibold">Репетиции и прогоны:</p>
              <p>
                Для того, чтобы вебинар прошёл идеально, мы провели:
              </p>
              <ul className="space-y-3 pl-6 text-base md:text-lg leading-relaxed text-[#1A1A1A]">
                <li className="list-disc">2 полноценных прогона с командой Яндекса</li>
                <li className="list-disc">Технический прогон для проверки оборудования</li>
                <li className="list-disc">Содержательный прогон по презентации</li>
              </ul>

              <p className="font-semibold mt-6">План Б на случай форс-мажора:</p>
              <p>
                Мы подготовили запасной сценарий. Если бы у ведущего отключился интернет, свет, случился бы потоп, землетрясение, страхующий со-ведущий мгновенно подключался с интерактивной викториной по нейросетям, чтобы удержать внимание аудитории.
              </p>

              <blockquote className="border-l-4 border-[#FFCC00] bg-white/70 p-6 italic text-[#2a2a2a]">
                <p className="mb-4">
                  Я все это время сидела при полном параде, с хорошим светом и фоном, готовая в любой момент занять 5 минут эфира викториной, если что-то пойдет не так.
                </p>
                <p className="not-italic font-semibold text-[#1f1f1f]">Анна Бурикова, руководитель проектов sfer.ai</p>
              </blockquote>
            </div>
          </article>

          <article className="space-y-6">
            <h3 className="text-xl font-semibold md:text-[28px]">Модерация и поддержка</h3>
            <div className={"space-y-6 " + baseTextClass}>
              <p>
                Для работы с масштабной аудиторией мы организовали:
              </p>
              <ul className="space-y-3 pl-6 text-base md:text-lg leading-relaxed text-[#1A1A1A]">
                <li className="list-disc"><strong>Команду модераторов</strong>: несколько человек одновременно работали в чате</li>
                <li className="list-disc"><strong>Сбор вопросов</strong>: отбирали самые интересные для ответов в эфире</li>
                <li className="list-disc"><strong>Техподдержку</strong>: помогали участникам с техническими проблемами</li>
              </ul>
            </div>
          </article>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold md:text-[32px] mb-10">Уникальные элементы</h2>

          <article className="space-y-6">
            <h3 className="text-xl font-semibold md:text-[28px]">Медийная поддержка</h3>
            <div className={"space-y-6 " + baseTextClass}>
              <p>
                Мы обеспечили дополнительное продвижение вебинара:
              </p>
              <ul className="space-y-3 pl-6 text-base md:text-lg leading-relaxed text-[#1A1A1A]">
                <li className="list-disc">Анонсы в канале Кирилла Гурбанова (9K+ подписчиков)</li>
                <li className="list-disc">Поддержку партнеров и сообщества</li>
              </ul>
            </div>
          </article>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold md:text-[32px] mb-10">Результаты</h2>

          <article className="space-y-6 mb-14">
            <h3 className="text-xl font-semibold md:text-[28px]">Цифры</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="border-t-4 border-[#FFCC00] bg-white p-6">
                <div className="text-3xl font-semibold text-[#FF0000] mb-2">11 000</div>
                <p className="text-gray-600">уникальных зрителей</p>
              </div>
              <div className="border-t-4 border-[#FFCC00] bg-white p-6">
                <div className="text-3xl font-semibold text-[#FF0000] mb-2">4 500</div>
                <p className="text-gray-600">зрителей в пике</p>
              </div>
              <div className="border-t-4 border-[#FFCC00] bg-white p-6">
                <div className="text-3xl font-semibold text-[#FF0000] mb-2">1.5 часа</div>
                <p className="text-gray-600">непрерывного контента</p>
              </div>
            </div>
          </article>

          </section>

        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-semibold md:text-[32px]">Что этот проект дал нашей команде</h2>
          <div className={"space-y-6 " + baseTextClass}>
            <div>
              <p className="font-semibold mb-2">Опыт работы с массовой аудиторией:</p>
              <p>
                Модерация чата на несколько тысяч человек — это совершенно особый навык. Мы научились работать в условиях информационного потока, когда сообщения появляются быстрее, чем их можно прочитать.
              </p>
            </div>

            <div>
              <p className="font-semibold mb-2">Мастерство балансировки контента:</p>
              <p>
                Создавать программу, которая одновременно интересна новичкам и не скучна для продвинутых пользователей — настоящее искусство. Мы нашли этот баланс через практические примеры разного уровня сложности.
              </p>
            </div>

            <div>
              <p className="font-semibold mb-2">Навыки кризис-менеджмента:</p>
              <p>
                Подготовка плана Б и готовность мгновенно переключиться на запасной сценарий — теперь это наш стандарт для всех масштабных мероприятий.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-semibold md:text-[32px]">Продолжение истории</h2>
          <div className={"space-y-6 " + baseTextClass}>
            <p>
              Вебинар до сих пор доступен в записи. Это стало важной вехой в популяризации AI среди русскоязычной аудитории и укрепило наше партнерство с Яндексом.
            </p>
          </div>
        </section>

        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-semibold md:text-[32px]">О чем важно помнить</h2>
          <div className={"space-y-6 " + baseTextClass}>
            <p>
              Этот проект показал, что образовательные мероприятия по AI могут быть действительно массовыми и при этом полезными для каждого участника. Главное — правильно выстроить программу, подготовить команду и быть готовым к любым неожиданностям.
            </p>
            <p>
              Мы доказали, что можем работать не только с корпоративной аудиторией, но и проводить публичные мероприятия федерального масштаба, сохраняя высокое качество контента и вовлеченность участников.
            </p>
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
        title="Хотите провести масштабное обучение?"
        description="Давайте обсудим ваш проект!"
        gradientColors={['#FFCC00', '#FF0000', '#000000']}
        primaryButtonTextColor="black"
      />
    </div>
  );
};
