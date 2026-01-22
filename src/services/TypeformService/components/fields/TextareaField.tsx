import { useEffect, useRef } from 'react';
import type { StepConfig } from '../../types';

interface TextareaFieldProps {
  config: StepConfig;
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  error?: string;
  autoFocus?: boolean;
}

export function TextareaField({
  config,
  value,
  onChange,
  onSubmit,
  error,
  autoFocus = true,
}: TextareaFieldProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (autoFocus && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [autoFocus]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Cmd/Ctrl + Enter для отправки
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="w-full">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={config.placeholder || 'Введите ваш ответ...'}
        rows={3}
        className={`
          w-full bg-transparent border-b-2 resize-none
          ${error ? 'border-red-500' : 'border-gray-300 focus:border-black'}
          text-xl md:text-2xl lg:text-3xl font-light
          py-4 outline-none transition-colors duration-200
          placeholder:text-gray-400 min-h-[120px]
        `}
      />
      <p className="mt-2 text-gray-400 text-sm">
        Нажмите Cmd + Enter для продолжения
      </p>
      {error && (
        <p className="mt-2 text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
}
