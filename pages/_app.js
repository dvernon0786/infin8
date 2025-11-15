import '../styles/globals.css';
import Head from 'next/head';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/images/infin8-favicon.png" />
        <link rel="shortcut icon" type="image/png" href="/images/infin8-favicon.png" />
        <link rel="apple-touch-icon" href="/images/infin8-favicon.png" />
      </Head>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}

