import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import type { TypeformConfig } from '../types';
import { useTypeform } from '../hooks/useTypeform';
import { WelcomeScreen } from './WelcomeScreen';
import { ThankYouScreen } from './ThankYouScreen';
import { StepScreen } from './StepScreen';
import { ProgressBar } from './ProgressBar';

interface TypeformContainerProps {
  config: TypeformConfig;
  className?: string;
}

export function TypeformContainer({ config, className = '' }: TypeformContainerProps) {
  const typeform = useTypeform(config);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Игнорируем если фокус в textarea
      if (
        document.activeElement?.tagName === 'TEXTAREA' &&
        e.key === 'Enter' &&
        !e.metaKey &&
        !e.ctrlKey
      ) {
        return;
      }

      if (e.key === 'Enter') {
        e.preventDefault();
        if (typeform.screenType === 'welcome') {
          typeform.start();
        } else if (typeform.screenType === 'step') {
          typeform.next();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [typeform]);

  const renderScreen = () => {
    switch (typeform.screenType) {
      case 'welcome':
        if (!config.welcomeScreen) return null;
        return (
          <WelcomeScreen
            key="welcome"
            config={config.welcomeScreen}
            onStart={typeform.start}
          />
        );

      case 'thankyou':
        if (!config.thankYouScreen) return null;
        return (
          <ThankYouScreen
            key="thankyou"
            config={config.thankYouScreen}
          />
        );

      case 'step':
        if (!typeform.currentStepConfig) return null;
        return (
          <StepScreen
            key={typeform.currentStepConfig.id}
            config={typeform.currentStepConfig}
            stepNumber={typeform.currentStep + 1}
            totalSteps={typeform.totalSteps}
            value={typeform.getValue(typeform.currentStepConfig.id)}
            error={typeform.getError(typeform.currentStepConfig.id)}
            isSubmitting={typeform.isSubmitting}
            isLastStep={typeform.currentStep === typeform.totalSteps - 1}
            canGoPrev={typeform.canGoPrev}
            onChange={(value) =>
              typeform.setValue(typeform.currentStepConfig!.id, value)
            }
            onNext={typeform.next}
            onPrev={typeform.prev}
          />
        );

      default:
        return null;
    }
  };

  // Применяем кастомную тему
  const bgColor = config.theme?.backgroundColor || '#ffffff';

  return (
    <div
      className={`min-h-screen flex flex-col ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Progress bar - показываем только на шагах */}
      {typeform.screenType === 'step' && (
        <ProgressBar progress={typeform.progress} />
      )}

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-4xl px-6 py-12">
          <AnimatePresence mode="wait">
            {renderScreen()}
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 px-6 text-center text-sm text-gray-400">
        Powered by sfer.ai
      </footer>
    </div>
  );
}
