import Image from 'next/image';

const partners = [
  { src: '/peka.png', alt: 'Logo  Peka' },
  { src: '/blum.png', alt: 'Logo  Blum' },
  { src: '/gtv.png', alt: 'Logo  GTV' },
  { src: '/nomet.png', alt: 'Logo  Nomet' },
  { src: '/stolzen.png', alt: 'Logo  Stolzen' },
  { src: '/swisskrono.png', alt: 'Logo  Swiss Krono' },
  { src: '/niemann.png', alt: 'Logo Niemann' },
  { src: '/falmec.png', alt: 'Logo Falmec' },
  { src: '/eegger.png', alt: 'Logo Eegger' },
  { src: '/proform.png', alt: 'Logo Proform' },
  { src: '/metasofa.png', alt: 'Logo Metasofa' },
  { src: '/franke.png', alt: 'Logo Franke' },
];

export function Partners() {
  return (
    <>
      <p
        id="partners"
        className="m-4 font-bold text-4xl underline decoration-4 decoration-dotted decoration-sky-500"
      >
        Nasi Partnerzy
      </p>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center items-center">
        {partners.map(({ src, alt }) => (
          <Image
            key={src}
            src={src}
            alt={alt}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
          />
        ))}
      </section>
    </>
  );
}
