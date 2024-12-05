// pages/_app.js
import Script from 'next/script';
import '../styles/globals.css'; // Import the global styles

function MyApp({ Component, pageProps }) {
  return (
  <>    
    <Component {...pageProps} />
  </>
);
}

export default MyApp;
