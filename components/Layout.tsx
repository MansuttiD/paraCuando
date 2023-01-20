import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';

type AppProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: AppProps) {
  return (
    <div>
      <Header />
      <Hero />
      {children}
      <Footer />
    </div>
  );
}
