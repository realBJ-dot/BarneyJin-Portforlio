// src/app/_app.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'; // Import your global CSS

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
