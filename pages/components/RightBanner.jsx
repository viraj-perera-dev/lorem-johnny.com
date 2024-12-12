import Image from 'next/image';
// import bannerImage from '../../public/assets/hostinger/banner-image.png'; // Replace with your actual image

export default function VerticalBanner() {


  return (
    <div className="fixed top-4 bottom-4 right-7 w-full max-w-[8rem] z-50 hidden xl:flex flex-col items-center justify-center">
      <div
        className={`relative hover:scale-105 transition duration-300 cursor-pointer`}
        onClick={() =>
          window.open(
            'https://www.hostinger.com?ref=your_referral_code', // Replace with your referral link
            '_blank'
          )
        }
      >
        {/* <Image
          src={bannerImage}
          alt="Promotional Banner"
          className="object-contain rounded-lg shadow-lg"
          layout="intrinsic"
          width={120}
          height={400}
        /> */}
      </div>
    </div>
  );
}
