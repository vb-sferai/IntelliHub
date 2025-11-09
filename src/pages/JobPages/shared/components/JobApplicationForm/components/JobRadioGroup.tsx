import React from 'react';
import type { UseFormRegister, FieldError } from 'react-hook-form';

interface JobRadioGroupProps {
  label: string;
  name: string;
  options: Array<{ value: string; label: string }>;
  required?: boolean;
  register: UseFormRegister<any>;
  error?: FieldError;
  helperText?: string;
}

export const JobRadioGroup: React.FC<JobRadioGroupProps> = ({
  label,
  name,
  options,
  required = false,
  register,
  error,
  helperText,
}) => {
  return (
    <div className="w-full">
      <label className="block text-gray-700 font-medium mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {/* Scale for English level 1-10 */}
      <div className="flex flex-col space-y-3">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Полный ноль</span>
          <span>Абсолютно свободный</span>
        </div>

        <div className="grid grid-cols-10 gap-2">
          {options.map((option) => (
            <label
              key={option.value}
              className="relative flex flex-col items-center cursor-pointer"
            >
              <input
                type="radio"
                value={option.value}
                {...register(name)}
                className="peer sr-only"
              />
              <div className={`
                w-10 h-10 rounded-full border-2 flex items-center justify-center
                transition-all duration-200
                peer-checked:bg-[#005EE0] peer-checked:text-white peer-checked:border-[#005EE0]
                hover:border-[#005EE0] hover:bg-blue-50
                ${error ? 'border-red-300' : 'border-gray-300'}
              `}>
                <span className="text-sm font-medium">{option.label}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {helperText && !error && (
        <p className="mt-2 text-sm text-gray-500">{helperText}</p>
      )}
      {error && (
        <p className="mt-2 text-sm text-red-500">{error.message}</p>
      )}
    </div>
  );
};