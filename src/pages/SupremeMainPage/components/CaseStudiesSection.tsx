import { useState } from 'react';
import { Link } from 'react-router-dom';
import LancetLogo from '../../../assets/imgs/lancet-logo.svg';
import YandexLogo from '../../../assets/imgs/yandex-logo.svg';

const CASE_STUDIES = [
  {
    client: 'Ланцет',
    logo: LancetLogo,
    objective: (
      <>
        Создать прикладной обучающий курс по использованию ИИ для административных медицинских работников — от главврачей до клиницистов. Курс должен автоматизировать рутинную бумажную работу и освободить время для врачебной практики.
      </>
    ),
    results: [
      {
        value: '90',
        description: 'респондентов из 15 регионов участвовали в исследовании перед разработкой',
      },
      {
        value: '11',
        description: 'записанных уроков с теорией и практикой',
      },
      {
        value: '15+',
        description: 'реальных практических кейсов из жизни врача и администратора клиники',
      },
      {
        value: '10',
        description: 'дополнительных памяток с инструкциями и промптами',
      },
      {
        value: '5+ часов',
        description: 'качественного обучающего контента',
      },
      {
        value: '100%',
        description: 'кейсов адаптированы под медицинскую специфику',
      },
    ],
    stack: 'ChatGPT, Claude, Gamma, Google Docs, Notion, Miro',
    link: '/cases/lancet',
  },
  {
    client: 'Яндекс',
    logo: YandexLogo,
    objective: (
      <>
        Команда маркетинга Яндекс Алиса обратилась к нам с запросом на популяризацию нейросети через массовое обучение. Алиса недавно получила серьезное обновление, и нужно было рассказать, что изменилось, и как это работает.
      </>
    ),
    results: [
      {
        value: '11 000',
        description: 'участников онлайн на пике',
      },
      {
        value: '12 500',
        description: 'уникальных просмотров за время трансляции',
      },
      {
        value: '1.5 часа',
        description: 'непрерывного контента',
      },
      {
        value: '3',
        description: 'станции Алисы разыграны среди участников',
      },
      {
        value: '1000+',
        description: 'просмотров записи после вебинара',
      },
    ],
    stack: 'Яндекс Алиса AI',
    link: '/cases/yandex',
  },
  {
    client: 'Яндекс',
    logo: YandexLogo,
    objective: (
      <>
        Офлайн-интенсив для команды маркетинга Яндекс.Алиса по эффективному использованию AI-инструментов. Кастомная программа для создателей одного из лучших AI-продуктов страны.
      </>
    ),
    results: [
      {
        value: '20+',
        description: 'маркетологов прошли обучение',
      },
      {
        value: '5+',
        description: 'AI-инструментов освоено на практике',
      },
      {
        value: '5',
        description: 'рабочих процессов оптимизировано уже во время обучения',
      },
      {
        value: '100%',
        description: 'участников применили полученные знания в первую же неделю',
      },
    ],
    stack: 'ChatGPT, Claude, Gamma, Google Docs, Notion, Miro',
    link: '/cases/gobeyond',
  },
  {
    client: 'Wealth Management Company',
    objective: (
      <>
        Обеспечить ежедневное использование AI-инструментов всеми членами<br />
        команды для  повышения эффективности.
      </>
    ),
    results: [
      {
        value: '85%',
        description: (
          <>
            сотрудников ежедневно<br />
            используют AI-инструменты в<br />
            рабочих процессах
          </>
        ),
      },
      {
        value: '70%',
        description: (
          <>
            рутинных запросов решаются<br />
            через GPT-ассистента в течение<br />
            первых 2 недель
          </>
        ),
      },
      {
        value: '5 минут',
        description: (
          <>
            среднее время ответа<br />
            сократилось с 1 часа до 5 минут
          </>
        ),
      },
      {
        value: '52',
        description: (
          <>
            готовых промпта разработаны<br />
            для ключевых сценариев
          </>
        ),
      },
      {
        value: '12',
        description: (
          <>
            ИИ-агентов внедрены для<br />
            контроля качества, продаж,<br />
            финансов и дашбордов
          </>
        ),
      },
      {
        value: '100%',
        description: (
          <>
            промптов проверены на<br />
            соответствие политике<br />
            безопасности данных
          </>
        ),
      },
    ],
    stack: (
      <>
        ChatGPT Enterprise, Yandex GPT, n8n, Cursor, RAGDB (vector database), Power BI + Bloomberg GPT,<br />
        Miro, Whisper / Coqui
      </>
    ),
    link: '/cases/uae',
  },
];

export const CaseStudiesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : CASE_STUDIES.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < CASE_STUDIES.length - 1 ? prev + 1 : 0));
  };

  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const diff = clientX - startX;
    setTranslateX(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // Swipe threshold: 50px or more to trigger navigation
    if (translateX > 50 && currentIndex > 0) {
      handlePrev();
    } else if (translateX < -50 && currentIndex < CASE_STUDIES.length - 1) {
      handleNext();
    }

    setTranslateX(0);
  };

  return (
    <section className="bg-white px-6 pt-8 pb-16 md:px-12 lg:px-16" id="case-studies">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-5xl font-semibold leading-[1.2] tracking-[-1.44px] text-black">
            Кейсы и отзывы
          </h2>
          {CASE_STUDIES.length > 1 && (
            <div className="hidden gap-4 md:flex">
              <button
                onClick={handlePrev}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e5e5e5] bg-white transition-all hover:bg-[#f5f5f5]"
                aria-label="Previous case"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e5e5e5] bg-white transition-all hover:bg-[#f5f5f5]"
                aria-label="Next case"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Carousel */}
        <div
          className="relative overflow-hidden touch-pan-y"
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
        >
          <div
            className={`flex ${isDragging ? '' : 'transition-transform duration-500 ease-out'}`}
            style={{
              transform: `translateX(calc(-${currentIndex * 100}% + ${translateX}px))`,
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
          >
            {CASE_STUDIES.map((caseStudy, index) => (
              <article
                key={index}
                className="min-w-full rounded-[40px] bg-[#fcfbfa] p-6 md:p-10"
              >
                <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[240px_1fr] lg:gap-16">
                  <div className="flex flex-col gap-6">
                    <p className="font-geist text-base font-semibold uppercase tracking-[0.8px] text-[#005ee0]">
                      Клиент
                    </p>
                    {caseStudy.logo ? (
                      <img src={caseStudy.logo} alt={caseStudy.client} className="h-8 w-auto object-contain object-left" />
                    ) : (
                      <h3 className="text-[30px] font-semibold leading-[30px] tracking-[-1.2px] text-black">
                        {caseStudy.client}
                      </h3>
                    )}
                  </div>

                  <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-4">
                      <p className="font-geist text-base font-semibold uppercase tracking-[0.8px] text-[#005ee0]">
                        Запрос
                      </p>
                      <p className="text-base font-normal leading-[1.3] tracking-[-0.48px] text-[#676767]">
                        {caseStudy.objective}
                      </p>
                    </div>

                    <div className="flex flex-col gap-6">
                      <p className="font-geist text-base font-semibold uppercase tracking-[0.8px] text-[#005ee0]">
                        Результаты
                      </p>
                      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                        {caseStudy.results.map((result, idx) => (
                          <div key={idx} className="flex flex-col gap-4">
                            <div className="h-px w-full bg-[#e5e5e5]" />
                            <div className="flex flex-col gap-2">
                              <p className="text-[30px] font-medium leading-[38px] text-black">
                                {result.value}
                              </p>
                              <p className="text-base font-normal leading-[1.3] tracking-[-0.48px] text-[#676767]">
                                {result.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <p className="font-geist text-base font-semibold uppercase tracking-[0.8px] text-[#005ee0]">
                        Стек
                      </p>
                      <p className="text-base font-normal leading-[1.3] tracking-[-0.48px] text-[#676767]">
                        {caseStudy.stack}
                      </p>
                    </div>

                    {caseStudy.link && (
                      <div className="mt-4">
                        <Link
                          to={caseStudy.link}
                          state={{ from: '/' }}
                          className="inline-flex items-center gap-2 rounded-full bg-black px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-gray-800"
                        >
                          Подробнее о кейсе
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        {CASE_STUDIES.length > 1 && (
          <div className="flex justify-center gap-2">
            {CASE_STUDIES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-[#005ee0]' : 'w-2 bg-[#e5e5e5] hover:bg-[#cccccc]'
                }`}
                aria-label={`Go to case ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

