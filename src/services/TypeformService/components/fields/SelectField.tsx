import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import type { StepConfig } from '../../types';

interface SelectFieldProps {
  config: StepConfig;
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  error?: string;
}

export function SelectField({
  config,
  value,
  onChange,
  onSubmit,
  error,
}: SelectFieldProps) {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const options = config.options || [];

  // Ref для актуальной версии onSubmit (избегаем stale closure в setTimeout)
  const onSubmitRef = useRef(onSubmit);
  useEffect(() => {
    onSubmitRef.current = onSubmit;
  }, [onSubmit]);

  useEffect(() => {
    // Set focus to first option or selected option
    const selectedIndex = options.findIndex((opt) => opt === value);
    setFocusedIndex(selectedIndex >= 0 ? selectedIndex : 0);
  }, [options, value]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setFocusedIndex((prev) => Math.min(prev + 1, options.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setFocusedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (focusedIndex >= 0 && options[focusedIndex]) {
          onChange(options[focusedIndex]);
          // Auto-advance after selection (используем ref для актуальной версии)
          setTimeout(() => onSubmitRef.current(), 200);
        }
      } else if (e.key >= '1' && e.key <= '9') {
        const index = parseInt(e.key) - 1;
        if (index < options.length) {
          onChange(options[index]);
          setTimeout(() => onSubmitRef.current(), 200);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [focusedIndex, options, onChange, onSubmit]);

  const handleOptionClick = (option: string) => {
    onChange(option);
    // Используем ref для актуальной версии onSubmit (избегаем stale closure)
    setTimeout(() => onSubmitRef.current(), 200);
  };

  return (
    <div ref={containerRef} className="w-full">
      <div className="space-y-3">
        {options.map((option, index) => {
          const letter = String.fromCharCode(65 + index); // A, B, C...
          const isSelected = value === option;
          const isFocused = focusedIndex === index;

          return (
            <motion.button
              key={option}
              type="button"
              onClick={() => handleOptionClick(option)}
              onMouseEnter={() => setFocusedIndex(index)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`
                w-full flex items-center gap-4 p-4 rounded-lg border-2 text-left
                transition-all duration-200
                ${isSelected
                  ? 'border-black bg-black text-white'
                  : isFocused
                    ? 'border-gray-400 bg-gray-50'
                    : 'border-gray-200 hover:border-gray-400'
                }
              `}
            >
              <span
                className={`
                  w-8 h-8 flex items-center justify-center rounded
                  text-sm font-medium
                  ${isSelected ? 'bg-white text-black' : 'bg-gray-100 text-gray-600'}
                `}
              >
                {letter}
              </span>
              <span className="text-lg md:text-xl">{option}</span>
            </motion.button>
          );
        })}
      </div>
      {error && (
        <p className="mt-3 text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
}
