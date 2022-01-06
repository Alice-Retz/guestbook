import { createContext, useState } from 'react';
import React from 'react';

export const authContext = createContext();

export function ProvideAuth({ children }) {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    const loginWasSuccessful =
      username === process.env.AUTH_EMAIL &&
      password === process.env.AUTH_PASSWORD;

    if (loginWasSuccessful) setUser({ username });
    return loginWasSuccessful;
  };

  const logout = (callback) => {
    setUser(null);
    callback();
  };

  return (
    <authContext.Provider value={{ user, login, logout }}>
      {children}
    </authContext.Provider>
  );
}
