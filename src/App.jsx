import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Layout from './views/Layout/Layout';

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/login">
            <Auth />
          </Route>
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </Layout>
    </Router>
  );
}
