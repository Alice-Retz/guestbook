import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Layout from './views/Layout/Layout';
import Auth from './views/Auth/Auth';
import Home from './views/Home/Home';

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
