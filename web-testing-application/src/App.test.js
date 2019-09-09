import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';


test('App renders without crashing', () => {
  render(<App />);
});

