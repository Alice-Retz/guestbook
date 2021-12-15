import { useContext, createContext, useState } from 'react';

const EntryContext = createContext();

const EntryProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  return (
    <EntryContext.Provider value={{ entries, setEntries }}>
      {children}
    </EntryContext.Provider>
  );
};

const useEntry = () => {
  const context = useContext(EntryContext);

  if (context === undefined) {
    throw new Error(
      'useEntry hook must be called within a EntryContext Provider'
    );
  }

  return context;
};

export { EntryProvider, useEntry };
