import Image from 'next/image';
import imageMap from '../utils/imageMap'; // Create this file to store the imageMap
import Head from 'next/head';

export default function Professions() {
  return (
    <>
    <Head>
        <title>Lorem Jhonny Image Generator</title>
        <meta name="description" content="Generate random or profession-based images with simple URLs. Perfect for placeholders and dynamic content." />
        <meta property="og:title" content="Lorem-Jhonny Image Generator" />
        <meta property="og:description" content="Effortlessly get random or profession-based images with simple URLs. Perfect for placeholders or showcasing your content." />
        <meta property="og:image" content="https://www.lorem-johnny.com/api/random-image" />
        <meta property="og:url" content="https://www.lorem-johnny.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.lorem-johnny.com/api/random-image" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7812738073531507" crossorigin="anonymous"></script>
    </Head>
    <div className="font-sans bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl px-8 py-12 bg-white rounded-3xl shadow-2xl">
        <section className="bg-gray-100 py-12 mt-12 rounded-xl shadow-lg">
          <div className="text-center mb-8">
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
                <p className="text-gray-500">URL: <code className="text-gray-800">{`https://www.lorem-johnny.com/api/${profession}`}</code></p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
    </>
  );
}
