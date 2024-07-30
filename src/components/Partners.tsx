import Image from 'next/image';

export function Partners() {
  return (
    <>
      <p className="m-4 font-bold text-4xl underline decoration-4 decoration-dotted decoration-sky-500">
        Nasi Partnerzy
      </p>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center items-center">
        <Image
          src="/peka.png"
          alt="Logo partnera Peka"
          width="200"
          height="200"
        />
        <Image
          src="/blum.png"
          alt="Logo partnera Blum"
          width="200"
          height="200"
        />
        <Image
          src="/gtv.png"
          alt="Logo partnera GTV"
          width="200"
          height="200"
        />
        <Image
          src="/nomet.png"
          alt="Logo partnera Nomet"
          width="200"
          height="200"
        />
        <Image
          src="/stolzen.png"
          alt="Logo partnera Stolzen"
          width="200"
          height="200"
        />
        <Image
          src="/swisskrono.png"
          alt="Logo partnera Swiss Krono"
          width="200"
          height="200"
        />
        <Image src="/falmec.png" alt="Partners" width="200" height="200" />
        <Image src="/niemann.png" alt="Partners" width="200" height="200" />
        <Image src="/eegger.png" alt="Partners" width="200" height="200" />
        <Image src="/proform.png" alt="Partners" width="200" height="200" />
        <Image src="/metasofa.png" alt="Partners" width="200" height="200" />
        <Image src="/franke.png" alt="Partners" width="200" height="200" />
      </section>
    </>
  );
}
