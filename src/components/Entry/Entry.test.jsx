import { render, screen } from '@testing-library/react';
import React from 'react';
import { EntryProvider } from '../../context/EntryContext';
import Entry from './Entry';

it('should render an entry', () => {
  const { container } = render(
    <EntryProvider>
      <Entry entry={{ name: 'Alice', message: 'Test' }} />
    </EntryProvider>
  );

  const entryName = screen.getByText('-Alice');

  expect(entryName).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
