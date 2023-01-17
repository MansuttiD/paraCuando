import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout: React.FC = ({ children }: any) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
