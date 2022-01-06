import { useContext, createContext, useState, useMemo } from 'react';
import React from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');

  const value = useMemo(() => ({ user, setUser }), [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error(
      'useUser hook must be called within a UserContext Provider'
    );
  }

  return context;
};

export { UserProvider, useUser };
