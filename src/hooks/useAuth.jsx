import { useContext } from 'react';

export default function useAuth() {
  const context = useContext(authContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within a provideAuth context');
  }

  return context;
}
