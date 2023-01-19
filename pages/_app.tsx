import type { AppProps } from 'next/app';
import Layoud from '../components/Layoud';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layoud>
      <Component {...pageProps} />
    </Layoud>
  );
}
