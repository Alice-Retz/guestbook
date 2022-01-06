import { render, screen } from '@testing-library/react';
import React from 'react';
import { UserProvider } from '../../context/UserContext';
import Header from './Header';

it('should render the username of the logged in person', () => {
  const { container } = render(
    <UserProvider>
      <Header />
    </UserProvider>
  );

  const header = screen.getByText('Sign in!');

  expect(header).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
