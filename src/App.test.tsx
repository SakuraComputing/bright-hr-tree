import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

const createTestables = (() => render(<App />));

describe('./App.tsx', () => {
  it('should render the project title', () => {
    createTestables();
    const title = screen.getByText(/Bright HR Tree/i);
    expect(title).toBeInTheDocument();
  });

  it('should render the following directories', () => {
    createTestables();
    const doc1 = screen.getByText('Employee Handbook');
    expect(doc1).toBeInTheDocument();
  })  

  
})
