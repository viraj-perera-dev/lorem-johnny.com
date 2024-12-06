import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../../public/assets/hostinger/Hostinger-logo.png';
import badgeTriangle from '../../public/assets/hostinger/badge-triangle.svg'; // Placeholder for the triangle image

export default function PromoRightBanner() {
    const [shakeClass, setShakeClass] = useState('');

    useEffect(() => {
      const interval = setInterval(() => {
        // Random delay between 1 and 10 seconds
        const randomDelay = Math.floor(Math.random() * 10 + 1) * 1000; 
  
        const timeout = setTimeout(() => {
          setShakeClass('shake-animation');
          // Remove the shake-animation class after 1 second to reset
          setTimeout(() => {
            setShakeClass('');
          }, 5000);
        }, randomDelay);
  
        return () => clearTimeout(timeout);
      }, 5000); // Run the interval every 5 seconds
  
      return () => clearInterval(interval);
    }, []);
  return (
    <div className="fixed top-4 bottom-4 left-7 w-full max-w-[20rem] md:max-w-[12rem] 2xl:max-w-[28rem] z-50 hidden xl:flex flex-col items-center justify-start bg-white shadow-lg rounded-lg p-6">
      {/* Logo */}
      <div className="flex items-center justify-center w-full">
        <Image 
          src={logo}
          alt="Hostinger Logo" 
          className="object-contain"
          width={200}
        />
      </div>

      {/* Banner Description */}
      <p className="text-center font-medium text-gray-700">
        Tutto quello di cui hai bisogno per creare il tuo sito web
      </p>

      {/* Premium Web Hosting Service */}
      <div className="space-y-6 w-full mt-4">
        <div className="bg-gray-100 rounded-lg p-4 text-center w-full">
          <h3 className="text-xl font-bold text-gray-800">Premium Web Hosting</h3>
          <p className="text-2xl font-bold text-[#fc5185]">12,95 €</p>
          <p className="text-sm text-gray-500 line-through">81% di sconto</p>
          <p className="text-lg font-semibold text-gray-800">2,45 €/mese</p>
          <ul className="text-sm text-gray-700 space-y-1 mt-3">
            <li>✅ 100 siti web</li>
            <li>✅ ~25 000 visite mensili</li>
            <li>✅ 100 GB spazio di archiviazione NVMe</li>
            <li>✅ 400 000 file e directory (inode)</li>
          </ul>
          <div className={`relative flex items-center hover:scale-[1.05] transition duration-300 cursor-pointer mt-5 mb-3 justify-center ${shakeClass}`}>
                <Image src={badgeTriangle} alt="Discount Badge" className="w-6 -me-[0.12rem]" />
                <div className="bg-[#fc5185] text-white rounded-r-lg rounded-l-sm h-[3.2rem] px-5 flex items-center">
                    <a href="https://cart.hostinger.com/pay/177601c2-067c-4d45-841b-cc6f9bb8838f?_ga=GA1.3.942352702.1711283207" target="_blank" rel="noopener noreferrer" className="text-lg font-bold">Scopri di più</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
