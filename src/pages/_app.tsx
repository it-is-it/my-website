// src/pages/_app.tsx
import { AppProps } from 'next/app';
import '../styles/globals.css'; // Import the global CSS file

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
