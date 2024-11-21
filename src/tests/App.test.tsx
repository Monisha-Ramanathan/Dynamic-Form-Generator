import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Dynamic Form Generator App', () => {
  it('renders the JSON editor and form preview', () => {
    render(<App />);
    expect(screen.getByPlaceholderText(/Enter JSON schema here.../i)).toBeInTheDocument();
    expect(screen.getByText(/Waiting for a valid JSON schema/i)).toBeInTheDocument();
  });

  it('updates form preview when valid JSON is entered', () => {
    render(<App />);
    const textarea = screen.getByPlaceholderText(/Enter JSON schema here.../i);

    const validJson = `{
      "formTitle": "Test Form",
      "formDescription": "Description",
      "fields": []
    }`;

    fireEvent.change(textarea, { target: { value: validJson } });
    expect(screen.getByText(/Test Form/i)).toBeInTheDocument();
    expect(screen.getByText(/Description/i)).toBeInTheDocument();
  });
});
