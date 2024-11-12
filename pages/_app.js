// pages/_app.js
import '../styles/globals.css'; // Import the global styles

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />; // Render the page component
}

export default MyApp;
