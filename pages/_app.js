// pages/_app.js
import Script from 'next/script';
import '../styles/globals.css'; // Import the global styles
import { Analytics } from "@vercel/analytics/react"


function MyApp({ Component, pageProps }) {
  return (
  <>    
    <Analytics />
    <Component {...pageProps} />
  </>
);
}

export default MyApp;
