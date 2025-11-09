import React from 'react';
import type { UseFormRegister, FieldError } from 'react-hook-form';

interface JobTextInputProps {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  register: UseFormRegister<any>;
  error?: FieldError;
  helperText?: string;
  type?: 'text' | 'email' | 'tel';
}

export const JobTextInput: React.FC<JobTextInputProps> = ({
  label,
  name,
  placeholder,
  required = false,
  register,
  error,
  helperText,
  type = 'text',
}) => {
  return (
    <div className="w-full">
      <label htmlFor={name} className="block text-gray-700 font-medium mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`
          w-full px-4 py-3 rounded-lg border transition-colors
          ${error
            ? 'border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200'
            : 'border-gray-300 focus:border-[#005EE0] focus:ring-2 focus:ring-blue-100'
          }
          focus:outline-none
        `}
      />
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
      {error && (
        <p className="mt-1 text-sm text-red-500">{error.message}</p>
      )}
    </div>
  );
};