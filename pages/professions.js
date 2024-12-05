import Image from 'next/image';
import imageMap from '../utils/imageMap'; // Create this file to store the imageMap
import Head from 'next/head';
import { IoMdReturnLeft } from "react-icons/io";
import Link from 'next/link';

export default function Professions() {
  return (
    <>
      <Head>
        <title>Lorem Jhonny specific image generator</title>
        <meta name="description" content="Generate random or profession-based images with simple URLs. Perfect for placeholders and dynamic content." />
        <meta property="og:title" content="Lorem-Johnny specific image generator" />
        <meta property="og:description" content="Effortlessly get random or profession-based images with simple URLs. Perfect for placeholders or showcasing your content." />
        <meta property="og:image" content="https://www.lorem-johnny.com/api/random-image" />
        <meta property="og:url" content="https://www.lorem-johnny.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.lorem-johnny.com/api/random-image" />
        
        {/* Favicon and Meta Links */}
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Lorem Johnny" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WBCXK36J"
          height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe>
      </noscript>

      <div className="font-sans bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center relative">
        {/* Torn back page effect */}

        <div className="relative w-full max-w-4xl px-8 my-12 bg-white rounded-3xl shadow-2xl">
        <div className='absolute left-5 top-5  text-black'>
          <a 
            href="/" 
            className="text-indigo-600 font-semibold flex justify-start items-center"
          >
            <IoMdReturnLeft className='me-2'/> Back Home
          </a>
        </div>

          <section className=" mt-6 mb-12">
            <div className="text-center my-16">
              <h2 className="text-3xl font-bold text-gray-800">Available Professions</h2>
              <p className="text-lg text-gray-600 mt-4">Explore the list of professions for which you can get an image:</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
              {imageMap && Object.keys(imageMap).map((profession) => (
                <div key={profession} className="text-center">
                  <Image
                    src={`/assets/jhonny/${imageMap[profession]}`}
                    alt={`${profession} Image`}
                    width={200}
                    height={200}
                    className="rounded-lg shadow-lg mx-auto"
                  />
                  <p className="text-xl mt-4 text-gray-800">{profession.charAt(0) + profession.slice(1)}</p>
                  <p className="text-gray-500">URL: <code className="text-gray-800">{`https://lorem-johnny.com/api/${profession}`}</code></p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
