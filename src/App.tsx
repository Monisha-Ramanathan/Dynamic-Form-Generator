import React, { useState } from 'react';
import Editor from './components/Editor';
import FormPreview from './components/FormPreview';
import { parseJsonSchema } from './utils/formUtils';

const App: React.FC = () => {
  const [json, setJson] = useState('{}');
  const schema = parseJsonSchema(json);

  return (
    <div className="h-screen flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 h-full">
        <Editor json={json} onJsonChange={setJson} />
      </div>
      <div className="w-full lg:w-1/2 h-full bg-gray-50">
        <FormPreview schema={schema} />
      </div>
    </div>
  );
};

export default App;
