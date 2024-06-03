import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import MatomoTracker from '../components/MatomoTracker';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MatomoTracker />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;