import { useEffect, useRef } from 'react';
import type { StepConfig } from '../../types';

interface EmailFieldProps {
  config: StepConfig;
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  error?: string;
  autoFocus?: boolean;
}

export function EmailField({
  config,
  value,
  onChange,
  onSubmit,
  error,
  autoFocus = true,
}: EmailFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="w-full">
      <input
        ref={inputRef}
        type="email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={config.placeholder || 'email@example.com'}
        className={`
          w-full bg-transparent border-b-2
          ${error ? 'border-red-500' : 'border-gray-300 focus:border-black'}
          text-2xl md:text-3xl lg:text-4xl font-light
          py-4 outline-none transition-colors duration-200
          placeholder:text-gray-400
        `}
        autoComplete="email"
      />
      {error && (
        <p className="mt-3 text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
}
