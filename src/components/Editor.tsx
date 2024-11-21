import React, { useState } from 'react';
import { useJsonValidation } from '../hooks/useJsonValidation';

interface EditorProps {
  json: string;
  onJsonChange: (value: string) => void;
}

const Editor: React.FC<EditorProps> = ({ json, onJsonChange }) => {
  const [error, validateJson] = useJsonValidation();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updatedJson = e.target.value;
    onJsonChange(updatedJson);
    validateJson(updatedJson);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <textarea
        className="flex-grow border p-2 text-sm"
        value={json}
        onChange={handleChange}
        placeholder="Enter JSON schema here..."
      />
      {error && <p className="text-red-600 text-xs mt-2">{error}</p>}
    </div>
  );
};

export default Editor;
