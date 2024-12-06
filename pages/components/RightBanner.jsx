import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../../public/assets/hostinger/Hostinger-logo.png';
import badgeTriangle from '../../public/assets/hostinger/badge-triangle.svg'; // Placeholder for the triangle image

export default function PromoRightBanner() {
  const [shakeClass, setShakeClass] = useState('');
  const [shakeClass1, setShakeClass1] = useState('');


  useEffect(() => {
    const interval = setInterval(() => {
      // Random delay between 3 and 8 seconds for this banner
      const randomDelay = Math.floor(Math.random() * 6 + 3) * 1000;

      const timeout = setTimeout(() => {
        setShakeClass('shake-animation');
        // Remove the shake-animation class after 1 second to reset
        setTimeout(() => {
          setShakeClass('');
        }, 5000);
      }, randomDelay);

      return () => clearTimeout(timeout);
    }, 7000); // Run the interval every 7 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Random delay between 3 and 8 seconds for this banner
      const randomDelay = Math.floor(Math.random() * 6 + 3) * 1000;

      const timeout = setTimeout(() => {
        setShakeClass1('shake-animation');
        // Remove the shake-animation class after 1 second to reset
        setTimeout(() => {
          setShakeClass1('');
        }, 3000);
      }, randomDelay);

      return () => clearTimeout(timeout);
    }, 5000); // Run the interval every 7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-4 bottom-4 right-7 w-full max-w-[28rem] z-50 hidden xl:flex flex-col items-center justify-around bg-white shadow-lg rounded-lg p-6">
      {/* Logo */}
      <div className="flex items-center justify-center w-full">
        <Image 
          src={logo}
          alt="Hostinger Logo" 
          className="object-contain"
          width={200}
        />
      </div>

      {/* Description */}
      <p className="text-center text-gray-700 font-medium">
        The best hosting and web services online. Perfect for business websites, e-commerce, and much more!
      </p>

      {/* Services Section */}
      <div className="space-y-6 w-full">
        {/* KVM 1 Service */}
        <div className="bg-gray-100 rounded-lg p-4 text-center w-full">
          <h3 className="text-xl font-bold text-gray-800">KVM 1</h3>
          <p className="text-2xl font-bold text-[#fc5185]">12,99 €</p>
          <p className="text-sm text-gray-500 line-through">54% di sconto</p>
          <p className="text-lg font-semibold text-gray-800">5,99 €/mese</p>
          <ul className="text-sm text-gray-700 space-y-1 mt-3">
            <li>✅ 1 core vCPU</li>
            <li>✅ 4 GB RAM</li>
            <li>✅ 50 GB spazio su disco NVMe</li>
            <li>✅ 4 TB Larghezza di banda</li>
          </ul>
          <div className={`relative flex items-center hover:scale-[1.05] transition duration-300 cursor-pointer mt-5 mb-3 justify-center ${shakeClass}`}>
            <Image src={badgeTriangle} alt="Discount Badge" className="w-6 -me-[0.12rem]" />
            <div className="bg-[#fc5185] text-white rounded-r-lg rounded-l-sm h-[3.2rem] px-5 flex items-center">
              <a href="https://cart.hostinger.com/pay/684b7862-e8af-42fe-ad4d-1cfa88857a30?_ga=GA1.3.942352702.1711283207" className="text-lg font-bold">Scopri di più</a>
            </div>
          </div>
        </div>

        {/* Cloud Startup Service */}
        <div className="bg-gray-100 rounded-lg p-4 text-center w-full">
          <h3 className="text-xl font-bold text-gray-800">Cloud Startup</h3>
          <p className="text-2xl font-bold text-[#fc5185]">19,99 €</p>
          <p className="text-sm text-gray-500 line-through">50% di sconto</p>
          <p className="text-lg font-semibold text-gray-800">9,99 €/mese</p>
          <ul className="text-sm text-gray-700 space-y-1 mt-3">
            <li>✅ 300 siti web</li>
            <li>✅ 200 GB spazio di archiviazione NVMe</li>
            <li>✅ 3 GB RAM</li>
            <li>✅ 2 core CPU</li>
          </ul>
          <div className={`relative flex items-center hover:scale-[1.05] transition duration-300 cursor-pointer mt-5 mb-3 justify-center ${shakeClass1}`}>
            <Image src={badgeTriangle} alt="Discount Badge" className="w-6 -me-[0.12rem]" />
            <div className="bg-[#fc5185] text-white rounded-r-lg rounded-l-sm h-[3.2rem] px-5 flex items-center">
              <a href="https://cart.hostinger.com/pay/06818010-a798-4bb5-afa7-0fb665a2e264?_ga=GA1.3.942352702.1711283207" className="text-lg font-bold">Scopri di più</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
