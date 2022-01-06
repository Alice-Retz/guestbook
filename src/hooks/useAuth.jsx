import { useContext } from 'react';
import { authContext } from '../context/ProvideAuth';
import React from 'react';

export function useAuth() {
  const context = useContext(authContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within a provideAuth context');
  }

  return context;
}
