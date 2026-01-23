import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Loader2 } from 'lucide-react';
import type { StepConfig } from '../types';
import { TextField, EmailField, TextareaField, SelectField, InfoField } from './fields';

interface StepScreenProps {
  config: StepConfig;
  stepNumber: number;
  totalSteps: number;
  value: string;
  error?: string;
  isSubmitting: boolean;
  isLastStep: boolean;
  canGoPrev: boolean;
  onChange: (value: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

export function StepScreen({
  config,
  stepNumber,
  totalSteps,
  value,
  error,
  isSubmitting,
  isLastStep,
  canGoPrev,
  onChange,
  onNext,
  onPrev,
}: StepScreenProps) {
  const renderField = () => {
    const commonProps = {
      config,
      value,
      onChange,
      onSubmit: onNext,
      error,
    };

    switch (config.type) {
      case 'info':
        return <InfoField config={config} onSubmit={onNext} />;
      case 'email':
        return <EmailField {...commonProps} />;
      case 'textarea':
        return <TextareaField {...commonProps} />;
      case 'select':
        return <SelectField {...commonProps} />;
      case 'text':
      case 'phone':
      default:
        return <TextField {...commonProps} />;
    }
  };

  return (
    <motion.div
      key={config.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col justify-start md:justify-center min-h-0 md:min-h-[60vh] px-4"
    >
      <div className="max-w-2xl mx-auto w-full">
        {/* Step indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 mb-6 text-sm text-gray-400"
        >
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-white text-xs font-medium">
            {stepNumber}
          </span>
          <ArrowRight className="w-4 h-4" />
          <span>{totalSteps}</span>
        </motion.div>

        {/* Question */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 mb-4"
        >
          {config.question}
          {config.required && config.type !== 'info' && <span className="text-red-500 ml-1">*</span>}
        </motion.h2>

        {/* Description */}
        {config.description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className={`text-lg text-gray-500 ${config.type === 'info' ? 'mb-8 whitespace-pre-line' : 'mb-8'}`}
          >
            {config.description}
          </motion.p>
        )}

        {/* Field - скрываем для info-шагов */}
        {config.type !== 'info' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            {renderField()}
          </motion.div>
        )}

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-4"
        >
          <button
            type="button"
            onClick={onNext}
            disabled={isSubmitting}
            className="
              inline-flex items-center gap-2 px-6 py-3
              bg-black text-white font-medium rounded-lg
              hover:bg-gray-800 transition-colors
              disabled:opacity-50 disabled:cursor-not-allowed
            "
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Отправка...
              </>
            ) : (
              <>
                {config.buttonText || (isLastStep ? 'Отправить' : 'Далее')}
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>

          {canGoPrev && (
            <button
              type="button"
              onClick={onPrev}
              className="
                inline-flex items-center gap-2 px-4 py-3
                text-gray-600 font-medium rounded-lg
                hover:bg-gray-100 transition-colors
              "
            >
              <ArrowLeft className="w-5 h-5" />
              Назад
            </button>
          )}

          <span className="text-sm text-gray-400 ml-auto hidden md:block">
            Нажмите Enter
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
