import React from 'react';
import Footer from './Footer';
import Header from './Header';

type AppProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: AppProps) {
  return (
    <div>
      <Header />
      {children}
      <Footer style="" />
    </div>
  );
}
