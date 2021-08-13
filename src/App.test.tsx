import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('Test Git Hub Actions 2');
  expect(linkElement).toBeInTheDocument();
});
