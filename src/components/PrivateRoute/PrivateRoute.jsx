import { Redirect, Route } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import React from 'react';

export default function PrivateRoute({ children, ...routeProps }) {
  const { user } = useUser();

  return (
    <>
      <p>On a private route?</p>
      <Route
        {...routeProps}
        render={({ location }) =>
          user ? (
            children
          ) : (
            <Redirect to={{ pathname: '/login', state: { from: location } }} />
          )
        }
      />
    </>
  );
}
