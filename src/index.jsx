import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProvideAuth } from './context/ProvideAuth';
import { UserProvider } from './context/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <ProvideAuth>
        <App />
      </ProvideAuth>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
