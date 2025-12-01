import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CaseStudyHero } from '../../CaseStudyLancet/components/CaseStudyHero';
import { CaseStudyCTA } from '../../CaseStudyLancet/components/CaseStudyCTA';

const baseTextClass = "text-base md:text-lg leading-relaxed text-[#1A1A1A]";

export const CaseStudyUAEPage = () => {
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
        title="Кейс: комплексная программа для международной компании по работе с AI с приглашенными экспертами"
      />

      {/* Main Content */}
      <div className="mx-auto w-full max-w-[960px] px-6 py-16 md:px-10">

        {/* О проекте и заказчике */}
        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-semibold md:text-[32px] mb-6">О проекте и заказчике</h2>
          <div className={"space-y-6 " + baseTextClass}>
            <p>
              Компания по управлению активами из Объединенных Арабских Эмиратов решила обучить 70 сотрудников основам работы с нейросетями и сделать их AI-native. Мы представили базовый курс на русском и английском языках, с приглашением эксперта – руководителем AI-проектов в мексиканском банке Марией Полтановой.
            </p>
          </div>
        </section>

        {/* Уникальность запроса */}
        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-semibold md:text-[32px] mb-6">Уникальность запроса</h2>
          <div className={"space-y-6 " + baseTextClass}>
            <p>
              Перед нашей командой стояла задача подготовить обучение для международной компании, на двух языках, с прицелом на будущее.
            </p>
            <p>
              Сегодня AI внедряется в отрасли, где раньше казалось ненужным или невозможным автоматизировать отдельные задачи или весь процесс. Поэтому навык владения нейросетями становится ключевой компетенцией и обязательным условием для того, чтобы оставаться конкурентоспособным на рынке. Не потеряется тот, кто постоянно обучается и адаптируется к работе с AI.
            </p>

            <blockquote className="border-l-4 border-[#9c8cff] bg-white/70 p-6 italic text-[#2a2a2a]">
              <p className="mb-4">
                Мы помогаем компаниям войти в это будущее через обучение и автоматизацию на рабочих местах. Наша программа дает возможность переставить бизнес-процессы на AI-рельсы. Например, мы можем научить усилить эффективность B2B-продаж с помощью нейросетей. А также показать сотрудникам, как автоматизировать рабочие места – создавать AI-агентов под свои специфические задачи. В итоге процессы идут гораздо быстрее, задачи выполняются эффективнее, тратится меньше ресурсов, компания становится более успешной.
              </p>
              <p className="not-italic font-semibold text-[#1f1f1f]">Кирилл Гурбанов, основатель компании sfer.ai – AI-обучение для команд и создание ИИ-агентов</p>
            </blockquote>
          </div>
        </section>

        {/* Решение */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold md:text-[32px] mb-10">Решение: 2-месячное базовое обучение с эксклюзивными дополнениями</h2>

          {/* Программа курса */}
          <article className="space-y-6 mb-14">
            <h3 className="text-xl font-semibold md:text-[28px]">Наш курс включал в себя:</h3>
            <div className={"space-y-6 " + baseTextClass}>
              <ul className="space-y-3 pl-6 text-base md:text-lg leading-relaxed text-[#1A1A1A]">
                <li className="list-disc">Вебинары с домашними заданиями и сессиями «вопрос-ответ»</li>
                <li className="list-disc">2-недельную программу по AI-агентам</li>
                <li className="list-disc">Сессию генерации идей со звездным спикером</li>
                <li className="list-disc">Демо-день для демонстрации работ слушателей</li>
              </ul>

              <blockquote className="border-l-4 border-[#9c8cff] bg-white/70 p-6 italic text-[#2a2a2a]">
                <p className="mb-4">
                  Мы решили организовать трендвотчинг-сессию, чтобы вдохновить наших слушателей. Для этого пригласили звездного гостя – Марию Полтанову. Все прошло просто прекрасно: мы увидели высокую вовлеченность, множество интересных сгенерированных идей, которые помогли в разработке AI-агентов.
                </p>
                <p className="not-italic font-semibold text-[#1f1f1f]">Анна Бурикова, руководитель проектов sfer.ai</p>
              </blockquote>

              <p>
                Вместе с командой заказчика мы с нуля разработали кастомных AI-агентов для решения определенных задач компании. Это позволило не абстрактно, а на реальных примерах показать, как работает и какую пользу приносит автоматизация процессов.
              </p>
            </div>
          </article>

          {/* Кастомные AI-агенты */}
          <article className="space-y-6 mb-14">
            <h3 className="text-xl font-semibold md:text-[28px]">Кастомные AI-агенты</h3>
            <div className={"space-y-6 " + baseTextClass}>
              <blockquote className="border-l-4 border-[#9c8cff] bg-white/70 p-6 italic text-[#2a2a2a]">
                <p className="mb-6">
                  Первый агент подключался к базе знаний AML (Anti-Money Laundering). Он проверял клиента на возможность выдачи денег и на то, можно ли с ним работать для финансовых организаций. Мы создали агента, который отвечал на вопросы по поводу законодательства: брал нужные официальные данные с сайта правительства и складывал их в базу.
                </p>
                <p className="mb-6">
                  Второй агент подключался к почте и календарю, добавлял встречи и другую информацию, получал переписку между клиентом и поддержкой, давал оценку, правильно ли она отработала. Если неправильно, сообщал об этом менеджеру оператора.
                </p>
                <p className="mb-4">
                  Третий агент проверял стоимость акций на бирже через API.
                </p>
                <p className="not-italic font-semibold text-[#1f1f1f]">Артем Фролов, разработчик</p>
              </blockquote>

              <p>
                Слушатели могли брать за основу наших AI-агентов, либо создавать своих.
              </p>
            </div>
          </article>
        </section>

        {/* Результаты */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold md:text-[32px] mb-6">Результаты</h2>
          <div className={"space-y-6 " + baseTextClass}>
            <ol className="space-y-4 pl-6">
              <li className="list-decimal">
                Мы получили <strong>большую вовлеченность слушателей</strong> во все процессы, они задавали много вопросов и получили много полезных ответов.
              </li>
              <li className="list-decimal">
                В компании <strong>появилась группа энтузиастов</strong>, которая серьезно занимается автоматизацией задач и «дотягивает» всех остальных. Это отличное «послевкусие».
              </li>
            </ol>
          </div>
        </section>

        {/* Отзыв */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold md:text-[32px] mb-6">Отзыв</h2>
          <div className={"space-y-6 " + baseTextClass}>
            <blockquote className="border-l-4 border-[#9c8cff] bg-white/70 p-6 italic text-[#2a2a2a]">
              <h3 className="not-italic font-semibold text-[#1f1f1f] text-xl mb-4">
                Юлия Неценко, Head of HR в WEALTH MANAGEMENT
              </h3>
              <div className="space-y-4">
                <p>
                  Рекомендую sfer.ai как настоящих профи в обучении искусственному интеллекту. Наша международная команда в ОАЭ прошла серию из 6 Al-воркшопов — от базовых принципов до разработки собственных AI-агентов под конкретные бизнес-задачи. Сессии шли и на русском, и на английском, что сделало программу комфортной для всех участников.
                </p>
                <p>
                  Отдельный плюс — приглашённые эксперты: сильнейшие специалисты из нашей отрасли и Al-сферы, которых команда ИнтеллиХаб привлекла для отдельных блоков.
                </p>
                <p>
                  Программа была выстроена очень логично и прикладно: от понимания основ до реального создания инструментов. Каждый участник, независимо от уровня, ушел с конкретными навыками и готовыми решениями.
                </p>
                <p>
                  Спасибо, sfer.ai, что сделали программу «под нас» — с учётом разных уровней участников, языков и нашей международной специфики!
                </p>
              </div>
            </blockquote>
          </div>
        </section>

        {/* Footnote */}
        <section className="mb-12">
          <div className="text-sm text-[#6b6b6b] leading-relaxed border-t border-[#d4d4d4] pt-6">
            <p>
              *sfer.ai (ранее ИнтеллиХаб) — эксперты в проведении масштабных образовательных мероприятий по AI. Мы умеем работать с аудиторией любого размера и уровня подготовки, создавая контент, который вдохновляет использовать искусственный интеллект каждый день.*
            </p>
          </div>
        </section>

        {/* Back Button */}
        <div className="mt-12 flex justify-center md:justify-start">
          <button
            onClick={() => navigate(referrer)}
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#275DD8] px-8 py-3 text-base font-semibold text-[#275DD8] transition-colors hover:bg-[#275DD8] hover:text-white"
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

      {/* CTA Section */}
      <CaseStudyCTA
        title="Есть похожая задача?"
        description="Давайте встретимся и обсудим!"
      />
    </div>
  );
};
