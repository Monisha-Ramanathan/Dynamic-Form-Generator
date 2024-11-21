import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import FormField from './FormField';

interface FormPreviewProps {
  schema: any;
}

const FormPreview: React.FC<FormPreviewProps> = ({ schema }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log('Form Submission:', data);
  };

  if (!schema) {
    return <p className="text-gray-500">Waiting for a valid JSON schema...</p>;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 p-4 bg-white shadow rounded"
    >
      <h2 className="text-xl font-semibold">{schema.formTitle}</h2>
      <p className="text-sm text-gray-600">{schema.formDescription}</p>
      {schema.fields.map((field: any) => (
        <FormField key={field.id} field={field} register={register} errors={errors} />
      ))}
      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default FormPreview;
