import Image from 'next/image';
import Head from 'next/head';
import { useState } from 'react';
import { FaHandPointRight, FaRegCopy, FaCheck } from "react-icons/fa";
import { FaHandPointLeft } from "react-icons/fa";



export default function Home() {
  const [inputProfession, setInputProfession] = useState('');
  const [professionImage, setProfessionImage] = useState('/assets/jhonny/default.png');
  const [randomImageSrc, setRandomImageSrc] = useState("https://www.lorem-johnny.com/api/random-image");
  const [loading, setLoading] = useState(false);
  const [copiedLink, setCopiedLink] = useState('');

  const handleProfessionChange = (event) => {
    const profession = event.target.value;
    setInputProfession(profession);
    setLoading(true); // Set loading to true when user starts typing
  
    // Check if the profession image exists by simulating a request
    const professionImagePath = `/assets/jhonny/${profession}.png`;
  
    // Create a new Image object to check if the image exists
    const img = new window.Image();
    img.src = professionImagePath;
    
    img.onload = () => {
      setProfessionImage(professionImagePath); // Set image if it exists
      setLoading(false); // Image has loaded, stop loading
    };
    
    img.onerror = () => {
      setProfessionImage('/assets/jhonny/default.png'); // Fallback image if not found
      setLoading(false); // Stop loading
    };
  };
  
  
  const refreshRandomImage = () => {
    // Append a unique query parameter to avoid caching
    setRandomImageSrc(`https://www.lorem-johnny.com/api/random-image?${Date.now()}`);
  };

  const copyToClipboard = (link) => {
    navigator.clipboard.writeText(link);
    setCopiedLink(link);

    // Reset the copied state after 2 seconds
    setTimeout(() => setCopiedLink(''), 2000);
  };


  return (
    <>
      <Head>
        <title>Lorem Jhonny Image Generator</title>
        <meta name="description" content="Generate random or profession-based images with simple URLs. Perfect for placeholders, avatars, and dynamic content." />
        <meta property="og:title" content="Lorem-Johnny Image Generator" />
        <meta property="og:description" content="Generate random images, lorem ipsum placeholders, and avatars with ease. Great for dynamic content and mockups." />
        <meta property="og:image" content="https://www.lorem-johnny.com/api/random-image" />
        <meta property="og:url" content="https://www.lorem-johnny.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.lorem-johnny.com/api/random-image" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Lorem-Johnny Image Generator",
              "description": "Generate random and profession-based images for placeholders, avatars, and content.",
              "url": "https://www.lorem-johnny.com",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "url": "https://www.lorem-johnny.com"
              },
              "image": {
                "@type": "ImageObject",
                "url": "https://www.lorem-johnny.com/api/random-image",
                "height": 300,
                "width": 300
              }
            }
          `}
        </script>

        {/* Favicon and Meta Links */}
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Lorem Johnny" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WBCXK36J');
            `
          }}
        ></script>
      </Head>

      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WBCXK36J"
          height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe>
      </noscript>
      <div className="font-sans bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center">
        {/* Content Container */}
        <div className="w-full max-w-4xl my-20 bg-white rounded-3xl shadow-2xl">
          {/* Hero Section */}
          <header className="text-center mb-12 pt-10 px-10">
            <h1 className="text-5xl font-extrabold leading-tight text-gray-900 tracking-wide">
              Welcome to <span className="text-yellow-400">Lorem-Johnny</span> Image Generator
            </h1>
            <p className="mt-4 text-xl text-gray-700">
              Effortlessly get random or profession-based images with simple URLs. Perfect for placeholders or showcasing your content.
            </p>
          </header>

          {/* How it Works Section */}
          <section className="mb-12">
            <h2 className="text-4xl font-semibold text-gray-900 mb-8 text-center">How It Works</h2>
            <p className="text-lg text-gray-600 mb-8 text-center px-10">
              Our image generator allows you to fetch random or profession-based images by simply accessing specific URLs. Ideal for dynamic content!
            </p>

            <div className="space-y-8 mx-10">
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Get a Random Image</h3>
                <p className="text-gray-700 mb-4">Access a random image by calling the `/random` route:</p>
                <div className="relative">
                  <code className="bg-gray-200 text-lg px-8 py-4 rounded-lg text-gray-800 text-center flex justify-center">
                    <a href="https://www.lorem-johnny.com/api/random-image" target="_blank" rel="noopener noreferrer">
                        https://www.lorem-johnny.com/api/random-image
                    </a>
                    <button
                      onClick={() => copyToClipboard(randomImageSrc)}
                      className="ms-5 text-indigo-600 right-10 mt-1 absolute"
                    >
                      {copiedLink === randomImageSrc ? <FaCheck/> : <FaRegCopy/>}
                    </button>
                  </code>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Get a Profession-Based Image</h3>
                <p className="text-gray-700 mb-4">
                  Access images for specific professions by calling the <code className="font-bold">/random/:profession</code> route:
                </p>
                <div className="relative">
                  <code className="bg-gray-200 text-lg px-8 py-4 rounded-lg text-gray-800 text-center flex justify-center">
                    <a href="https://www.lorem-johnny.com/api/policeman" target="_blank" rel="noopener noreferrer">
                      https://www.lorem-johnny.com/api/policeman
                    </a>
                    <button
                      onClick={() => copyToClipboard('https://www.lorem-johnny.com/api/policeman')}
                      className="ms-5 text-indigo-600 right-10 mt-1 absolute"
                    >
                      {copiedLink === 'https://www.lorem-johnny.com/api/policeman' ? <FaCheck/> : <FaRegCopy/>}
                    </button>
                  </code>
                </div>
                <p className="mt-2 text-gray-500">For example, this URL gives you an image of a policeman.</p>

                {/* Link to Available Professions Page */}
                <p className="mt-8 text-center flex justify-center items-center">
                  <FaHandPointRight className="text-indigo-600 mx-5 animate-hand-move" />
                  <a 
                    href="/professions" 
                    className="text-indigo-600 font-semibold hover:underline"
                  >
                    View all available professions
                  </a>
                  <FaHandPointLeft className="text-indigo-600 mx-5 animate-hand-move-reverse" />
                </p>

              </div>

            </div>
          </section>

          {/* Example Section */}
          <section className="px-4 py-8">
            <h2 className="text-4xl font-semibold text-gray-900 mb-8 text-center">Example Usage</h2>

            <div className="space-y-12">
              {/* Random Image Section */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-lg text-center mx-10">
                <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Random Image</h3>
                <div>
                  <Image
                    src={randomImageSrc}
                    alt="Random Image"
                    width={300}
                    height={300}
                    className="rounded-xl shadow-lg mx-auto"
                  />
                </div>
                <p className="text-gray-700 my-4">Click below to refresh and get a new random image:</p>
                <button
                  onClick={refreshRandomImage}
                  className="bg-indigo-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-300 mb-6"
                >
                  Refresh Random Image
                </button>
              </div>

              {/* Profession-based Image Section */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-lg text-center mx-10">
                <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Profession Image</h3>
                <p className="text-gray-700 mb-4">
                  Enter a profession below to view the corresponding image:
                </p>
                <div>
                  {loading ? (
                    <div className='flex items-center justify-center h-[10rem]'>
                      <p className="text-gray-500">No image found for this profession.</p> </div>
                  ) : (
                    <Image
                      src={professionImage} // The source of the image will change based on the path
                      alt="Profession Image"
                      width={300}
                      height={300}
                      className="rounded-xl shadow-lg mx-auto"
                      onError={() => setLoading(true)} // If image fails, use fallback
                    />
                  )}
                </div>
                <p className="text-gray-500 my-4">This URL generates an image for the specified profession.</p>
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <span className="text-gray-800">URL:</span>
                  <span className="text-gray-500 bg-gray-200 px-4 py-2 rounded-lg">
                    https://www.lorem-johnny.com/api/
                  </span>
                  <input
                    type="text"
                    value={inputProfession}
                    onChange={handleProfessionChange}
                    placeholder="e.g., doctor"
                    className="border rounded-lg px-4 py-2 text-gray-800 w-32"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Buy Me a Coffee Section */}
          <section className="bg-gray-100 py-12 mt-12 rounded-xl shadow-lg mx-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Support lorem-johnny.com 🙏</h2>
              <p className="text-lg text-gray-600 mt-4 mx-10">If you find Lorem-Johnny useful and would like to support the page, consider buying us a coffee! ☕ Every little bit helps us keep improving and adding new features.</p>
            </div>

            <div className="flex justify-center items-center space-x-6">
              <a
                href="https://buymeacoffee.com/virajperera"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-gray-800 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300"
              >
                Buy Me a Coffee
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-8 mt-12 text-center rounded-b-3xl">
            <p>&copy; {new Date().getFullYear()} lorem-johnny.com All rights reserved.</p>
          </footer>
        </div>
      </div>
    </>
  );
}
