import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast, { Toaster } from 'react-hot-toast';
import { JobTextInput } from './JobTextInput';
import { JobTextArea } from './JobTextArea';
import { JobRadioGroup } from './JobRadioGroup';
import { pmApplicationSchema, type PmApplicationFormData } from '../types';
import { useJobApplicationSubmit } from '../hooks/useJobApplicationSubmit';

interface JobApplicationFormProps {
  jobTitle: string;
  onSuccess?: () => void;
}

export const JobApplicationForm: React.FC<JobApplicationFormProps> = ({
  jobTitle,
  onSuccess,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
  } = useForm<PmApplicationFormData>({
    resolver: zodResolver(pmApplicationSchema),
    mode: 'onChange',
  });

  const { submitApplication, isSubmitting, isSuccess, isError, errorMessage } = useJobApplicationSubmit();

  const formValues = watch();
  const filledFields = Object.values(formValues).filter(value => value && value !== '').length;
  const totalFields = 11;
  const progressPercentage = Math.round((filledFields / totalFields) * 100);

  const englishLevelOptions = Array.from({ length: 10 }, (_, i) => ({
    value: String(i + 1),
    label: String(i + 1),
  }));

  const onSubmit = async (data: PmApplicationFormData) => {
    const result = await submitApplication(data, jobTitle);

    if (result.success) {
      toast.success('Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.', {
        duration: 5000,
      });
      reset();
      if (onSuccess) {
        setTimeout(onSuccess, 2000);
      }
    } else {
      toast.error(errorMessage || 'Произошла ошибка. Попробуйте еще раз.', {
        duration: 5000,
      });
    }
  };

  return (
    <>
      <Toaster position="top-center" />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Прогресс заполнения</span>
            <span>{progressPercentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#005EE0] h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Personal Information Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-800">О вас</h3>

          <JobTextInput
            label="Как вас зовут"
            name="fullName"
            placeholder="Имя и фамилия"
            required
            register={register}
            error={errors.fullName}
          />

          <JobTextInput
            label="Ваш никнейм в Телеграме"
            name="telegram"
            placeholder="@username"
            required
            register={register}
            error={errors.telegram}
            helperText="Начните с @ или укажите без @"
          />

          <JobTextInput
            label="Где вы живете?"
            name="location"
            placeholder="Страна, город"
            required
            register={register}
            error={errors.location}
            helperText="Если много путешествуете, укажите 1-2 города где проводите больше всего времени"
          />
        </div>

        {/* Experience Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-800">Ваш опыт</h3>

          <JobTextArea
            label="Расскажите про свой опыт"
            name="experience"
            placeholder="Кратко в свободной форме расскажите, чем вы сейчас занимаетесь или чем работали ранее"
            required
            register={register}
            error={errors.experience}
            rows={4}
          />

          <JobRadioGroup
            label="Владение английским"
            name="englishLevel"
            options={englishLevelOptions}
            required
            register={register}
            error={errors.englishLevel}
            helperText="Укажите ваш примерный уровень английского языка (оцените совокупно устные и письменные навыки)"
          />

          <JobTextArea
            label="Как вы используете AI в повседневной жизни?"
            name="aiUsage"
            placeholder="Расскажите ваши основные кейсы, какие инструменты используете и т.д."
            required
            register={register}
            error={errors.aiUsage}
            rows={3}
          />
        </div>

        {/* Projects Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-800">Ваши проекты</h3>

          <JobTextArea
            label="Расскажите о вашем самом успешном проекте"
            name="successProject"
            placeholder="Поделитесь недавним кейсом, которым вы особенно гордитесь, опишите суть проекта, вашу роль, ход реализации и достигнутый результат"
            required
            register={register}
            error={errors.successProject}
            rows={5}
          />

          <JobTextArea
            label="Расскажите о менее удачном проекте"
            name="failureProject"
            placeholder="Опишите проект или задачу, которые не увенчались успехом, объясните основные причины неудачи и расскажите, какие уроки вы вынесли и как изменили свой подход в дальнейшем"
            required
            register={register}
            error={errors.failureProject}
            rows={5}
          />
        </div>

        {/* Motivation Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-800">Мотивация и ожидания</h3>

          <JobTextArea
            label="Почему вам интересно поработать вместе?"
            name="motivation"
            placeholder="Опишите в двух словах, почему вам интересна эта позиция?"
            required
            register={register}
            error={errors.motivation}
            rows={3}
          />

          <JobTextInput
            label="Ожидаемый уровень компенсации"
            name="expectedCompensation"
            placeholder="Сумма в рублях или евро"
            required
            register={register}
            error={errors.expectedCompensation}
            helperText="Сообщите, какую сумму в рублях или евро вы рассчитываете получать В МЕСЯЦ за 10-20 часов работы в неделю"
          />
        </div>

        {/* Additional Info */}
        <div className="space-y-6">
          <JobTextArea
            label="Что-то еще"
            name="additionalInfo"
            placeholder="Если хотите что-то уточнить или добавить"
            register={register}
            error={errors.additionalInfo}
            rows={3}
          />
        </div>

        {/* Submit Button */}
        <div className="pt-6">
          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className={`
              w-full py-4 px-8 rounded-full font-medium text-white
              transition-all duration-300 transform
              ${isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : isValid
                  ? 'bg-[#005EE0] hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98]'
                  : 'bg-gray-300 cursor-not-allowed'
              }
            `}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Отправка...
              </span>
            ) : (
              'Отправить заявку'
            )}
          </button>
        </div>
      </form>
    </>
  );
};