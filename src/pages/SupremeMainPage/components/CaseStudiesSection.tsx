import { useState } from 'react';
import { Link } from 'react-router-dom';

const CASE_STUDIES = [
  {
    client: 'Wealth Management Company',
    objective:
      'The goal was to integrate AI tools into everyday work across all roles and increase overall productivity.',
    results: [
      {
        value: '85%',
        description: 'of employees use AI tools daily in workflows',
      },
      {
        value: '70%',
        description: 'of routine queries resolved via GPT assistant within the first 2 weeks',
      },
      {
        value: '5 min',
        description: 'Average response time reduced from 1 hour to 5 minutes',
      },
      {
        value: '52',
        description: 'ready-to-use prompts created for key scenarios (finance, presale, legal, HR)',
      },
      {
        value: '12',
        description: 'AI agents deployed for quality, sales, finance, and executive dashboards',
      },
      {
        value: '100%',
        description: 'prompts reviewed for data security compliance',
      },
    ],
    stack:
      'ChatGPT Enterprise, Yandex GPT, n8n, Cursor, RAGDB (vector database), Power BI + Bloomberg GPT, Miro, Whisper / Coqui',
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
            Case studies
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
                  <div className="flex flex-col gap-6 justify-between">
                    <div className="flex flex-col gap-6">
                      <p className="font-geist text-base font-semibold uppercase tracking-[0.8px] text-[#275DD8]">
                        Client
                      </p>
                      <h3 className="text-[30px] font-semibold leading-[30px] tracking-[-1.2px] text-black">
                        {caseStudy.client}
                      </h3>
                    </div>
                    <Link 
                      to="/casestudies"
                      className="inline-flex items-center justify-center px-6 py-3 bg-black text-white font-semibold rounded hover:bg-gray-800 transition-colors text-center whitespace-nowrap"
                    >
                      Learn more about case →
                    </Link>
                  </div>

                  <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-4">
                      <p className="font-geist text-base font-semibold uppercase tracking-[0.8px] text-[#275DD8]">
                        Objective
                      </p>
                      <p className="text-base font-normal leading-[1.3] tracking-[-0.48px] text-[#676767]">
                        {caseStudy.objective}
                      </p>
                    </div>

                    <div className="flex flex-col gap-6">
                      <p className="font-geist text-base font-semibold uppercase tracking-[0.8px] text-[#275DD8]">
                        Results
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
                      <p className="font-geist text-base font-semibold uppercase tracking-[0.8px] text-[#275DD8]">
                        Stack
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

