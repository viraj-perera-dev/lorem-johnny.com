import Image from 'next/image';

export default function HorizontalBanner({
  bannerImage,
  mobileBannerImage,
  link,
  altText = 'Promotional Banner',
  className = '',
}) {
  return (
    <div className={`rounded-lg shadow-lg ${className}`}>
      {/* Desktop Banner */}
      <div className="hidden md:block">
        <Image
          src={bannerImage}
          alt={altText}
          className="object-contain w-full cursor-pointer"
          onClick={() => window.open(link, '_blank')}
          priority={true} // Ensures faster loading if above the fold
        />
      </div>

      {/* Mobile Banner */}
      <div className="block md:hidden">
        <Image
          src={mobileBannerImage}
          alt={altText}
          className="object-contain w-full cursor-pointer"
          onClick={() => window.open(link, '_blank')}
          priority={true}
        />
      </div>
    </div>
  );
}
