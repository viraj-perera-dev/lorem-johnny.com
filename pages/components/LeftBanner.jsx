import Image from 'next/image';
import bannerImage from '../../public/assets/affiliates/saily/saily_vertical_banner.png';

export default function VerticalBanner() {
  return (
    <div className="fixed top-4 bottom-4 left-7 w-full max-w-[12rem] z-50 hidden xl:flex flex-col items-center justify-center p-4">
        <Image
          src={bannerImage}
          alt="Promotional Banner"
          className="object-contain rounded-lg shadow-lg w-full cursor-pointer"
          onClick={() =>
            window.open(
              'https://go.saily.site/aff_c?offer_id=101&aff_id=6747&url_id=989', 
              '_blank'
            )
          }
        />
    </div>
  );
}
