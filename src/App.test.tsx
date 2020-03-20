import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Home from './pages/Home';

test('renders without crashing', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeDefined();
});

test('when there are no news, no news message should show', async () => {
  const { findByText } = render(<Home />);
  await findByText('No news found')
});
