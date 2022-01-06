import { useUser } from '../../context/UserContext';
import React from 'react';

export default function Header() {
  const { user } = useUser();

  return <header>{user ? <p>{user}</p> : <p>Sign in!</p>}</header>;
}
