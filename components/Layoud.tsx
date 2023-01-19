import Header from './Header';

type AppProps = {
  children: React.ReactNode;
};
export default function Layoud({ children }: AppProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
