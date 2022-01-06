import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';
import { ProvideAuth } from '../../context/ProvideAuth';
import { UserProvider } from '../../context/UserContext';
import React from 'react';

it('should render the log in page', () => {
  const { container } = render(
    <MemoryRouter>
      <UserProvider>
        <ProvideAuth>
          <App />
        </ProvideAuth>
      </UserProvider>
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
