import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import SliderCard from '../components/SliderCard';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <SliderCard />
    </Layout>
  );
}
