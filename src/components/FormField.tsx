import React from 'react';
import { FieldErrors } from 'react-hook-form';

interface FormFieldProps {
  field: any;
  register: any;
  errors: FieldErrors;
}

const FormField: React.FC<FormFieldProps> = ({ field, register, errors }) => {
  const { id, type, label, required, placeholder, options, validation } = field;

  switch (type) {
    case 'text':
    case 'email':
      return (
        <div>
          <label className="block text-sm font-medium">{label}</label>
          <input
            type={type}
            className="w-full p-2 border rounded"
            {...register(id, { required, pattern: validation?.pattern })}
            placeholder={placeholder}
          />
          {errors[id] && (
            <p className="text-red-600 text-xs">{validation?.message || 'This field is required'}</p>
          )}
        </div>
      );
    case 'select':
      return (
        <div>
          <label className="block text-sm font-medium">{label}</label>
          <select
            className="w-full p-2 border rounded"
            {...register(id, { required })}
          >
            {options.map((option: any) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors[id] && <p className="text-red-600 text-xs">This field is required</p>}
        </div>
      );
    // Additional cases for textarea, radio, etc.
    default:
      return null;
  }
};

export default FormField;
