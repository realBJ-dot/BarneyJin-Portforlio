// src/app/_app.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'; // Import your global CSS

import type { AppProps } from 'next/app';


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;