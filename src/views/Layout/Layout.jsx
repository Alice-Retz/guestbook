import Header from '../../components/Layout/Header';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer />
    </>
  );
};

export default Layout;
