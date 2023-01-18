import Header from './Header';
import Navbar from './Navbar';

type AppProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: AppProps) {
  return (
    <>
      <Header />
      {children}
      <Navbar />
    </>
  );
}
