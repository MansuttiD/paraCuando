import React from 'react';

type AppProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: AppProps) {
  return <div>{children}</div>;
}
