import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Layoud from './Layoud';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layoud>
      <Component  {...pageProps}/>
    </Layoud>
  )
}
