// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DefiFable title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DefiFable/i);
    expect(titleElement).toBeInTheDocument();
});
