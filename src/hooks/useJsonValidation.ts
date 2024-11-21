import { useState } from 'react';

export const useJsonValidation = () => {
  const [error, setError] = useState<string | null>(null);

  const validateJson = (json: string) => {
    try {
      JSON.parse(json);
      setError(null);
    } catch (e) {
      setError('Invalid JSON format');
    }
  };

  return [error, validateJson] as const;
};
