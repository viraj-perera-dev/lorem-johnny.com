"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function RandomImagePage() {

  return (
    <>
      <Head>
        <title>Lorem Jhonny random image</title>
        <meta name="description" content="Generate random or profession-based images with simple URLs. Perfect for placeholders and dynamic content." />
        <meta property="og:title" content="Lorem-Johnny random image" />
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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7812738073531507" crossorigin="anonymous"></script>
      </Head>
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WBCXK36J"
          height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe>
      </noscript>
    <div className="flex items-center justify-center h-screen bg-gray-100">
        <img src="https://www.lorem-johnny.com/api/random-image" alt="Random" className="max-w-full max-h-screen object-contain" />
    </div>
    </>
  );
}
