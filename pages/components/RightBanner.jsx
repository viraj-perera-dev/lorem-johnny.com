import Image from 'next/image';
import bannerImage from '../../public/assets/affiliates/hostinger/hostinger_vertical_banner.png';

export default function VerticalBanner() {
  return (
    <div className="fixed top-4 bottom-4 right-7 w-full max-w-[12rem] z-50 hidden xl:flex flex-col items-center justify-center p-4">
        <Image
          src={bannerImage}
          alt="Promotional Banner"
          className="object-contain rounded-lg shadow-lg w-full cursor-pointer"
          onClick={() =>
            window.open(
              'https://hostinger.it?REFERRALCODE=J6NVIRAJPEYC', 
              '_blank'
            )
          }
        />
    </div>
  );
}
