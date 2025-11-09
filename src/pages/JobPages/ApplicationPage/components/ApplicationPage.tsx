import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MeshGradient } from '@paper-design/shaders-react';
import { JobApplicationForm } from '../../shared/components/JobApplicationForm';
import logotype from '../../../../assets/imgs/logo.svg';

export const ApplicationPage: React.FC = () => {
  const navigate = useNavigate();
  const { position } = useParams();
  const [showSuccess, setShowSuccess] = useState(false);

  // В будущем можно будет загружать конфиг для разных вакансий
  const jobTitle = position === 'pm' ? 'Product Manager' : 'Position';

  useEffect(() => {
    document.title = position === 'pm'
      ? 'Анкета на вакансию руководителя проектов - sfer.ai'
      : 'Анкета на вакансию - sfer.ai';
    return () => {
      document.title = 'sfer.ai';
    };
  }, [position]);

  const handleSuccess = () => {
    setShowSuccess(true);
    setTimeout(() => {
      navigate(`/jobs/${position}`);
    }, 3000);
  };

  const handleBackToJob = () => {
    navigate(`/jobs/${position}`);
  };

  if (showSuccess) {
    return (
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 -z-10">
          <MeshGradient
            speed={0.15}
            color1="#0066FF"
            color2="#00AAFF"
            color3="#005EE0"
            color4="#0080FF"
          />
        </div>

        {/* Success Message */}
        <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-12 max-w-2xl mx-4 text-center">
          <div className="mb-8">
            <svg
              className="w-24 h-24 mx-auto text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Спасибо за вашу заявку!
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Мы получили вашу анкету и свяжемся с вами в ближайшее время через Telegram.
          </p>

          <button
            onClick={handleBackToJob}
            className="px-8 py-3 bg-[#005EE0] text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            Вернуться к описанию вакансии
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <style>
        {`
          .gradient-background {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: -1;
          }
        `}
      </style>

      {/* Gradient Background */}
      <div className="gradient-background">
        <MeshGradient
          speed={0.15}
          color1="#0066FF"
          color2="#00AAFF"
          color3="#005EE0"
          color4="#0080FF"
        />
      </div>

      {/* Header */}
      <div className="relative z-10 px-4 py-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <img
            src={logotype}
            alt="sfer.ai"
            className="h-8 cursor-pointer"
            onClick={() => navigate('/')}
          />
          <button
            onClick={handleBackToJob}
            className="text-white hover:underline flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Назад к вакансии
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="text-center text-white mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Анкета на позицию {jobTitle}
            </h1>
            <p className="text-xl lg:text-2xl opacity-90">
              в компании sfer.ai
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Заполните анкету
              </h2>
              <p className="text-gray-600">
                Все поля отмеченные звездочкой (*) обязательны для заполнения.
                Мы внимательно изучим вашу заявку и свяжемся с вами в течение нескольких дней.
              </p>
            </div>

            <JobApplicationForm
              jobTitle={jobTitle}
              onSuccess={handleSuccess}
            />
          </div>
        </div>
      </div>
    </div>
  );
};