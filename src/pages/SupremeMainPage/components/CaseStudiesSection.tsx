import { useState } from 'react';

const CASE_STUDIES = [
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
  },
];

export const CaseStudiesSection = () => {
  const [currentIndex] = useState(0);

  return (
    <section className="bg-white px-6 pt-8 pb-16 md:px-12 lg:px-16" id="case-studies">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-5xl font-semibold leading-[1.2] tracking-[-1.44px] text-black">
            Кейсы и отзывы
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
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
                    <h3 className="text-[30px] font-semibold leading-[30px] tracking-[-1.2px] text-black">
                      {caseStudy.client}
                    </h3>
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
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

