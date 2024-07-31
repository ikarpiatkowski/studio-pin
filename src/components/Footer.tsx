import Image from 'next/image';
import Link from 'next/link';
import { ModeToggle } from './ModeToggle';

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground px-4 pt-4 space-y-6 rounded-t-3xl">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2399.485567322278!2d18.60882281321469!3d53.02961009825821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4703349767ce8bfd%3A0xa13b2a779774611b!2sPin%20Studio%20-%20Producent%20Mebli%20na%20Wymiar!5e0!3m2!1spl!2spl!4v1720139881618!5m2!1spl!2spl"
        width="100%"
        height="400"
        allowFullScreen
        loading="lazy"
        className="rounded-lg"
      ></iframe>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex space-x-4 items-center">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <Image
                src="/logo.png"
                alt="logo"
                height={64}
                width={64}
                className="rounded-lg"
              />
            </Link>
            <div className="flex flex-col">
              <span className="font-bold text-2xl bg-gradient-to-r text-transparent bg-clip-text from-red-500 to-violet-500">
                Studio PIN
              </span>
              <div className="flex space-x-4">
                <Link
                  href="https://www.facebook.com/studiopintorun"
                  prefetch={false}
                >
                  <Image
                    src="/facebook-color.svg"
                    alt="facebook"
                    height={32}
                    width={32}
                  />
                </Link>
                <Link href="https://www.instagram.com/" prefetch={false}>
                  <Image
                    src="/instagram-color.svg"
                    alt="instagram"
                    height={32}
                    width={32}
                  />
                </Link>
                <ModeToggle />
              </div>
            </div>
          </div>
          <h4 className="font-semibold">Godziny otwarcia</h4>
          <p className="text-sm flex justify-between">
            <p>Poniedziałek - Piątek: </p>
            <p>11:00 - 17:00</p>
          </p>
          <p className="text-sm flex justify-between">
            <p>Sobota: </p>
            <p>11:00 - 14:00</p>
          </p>
        </div>
        <div className="grid gap-2">
          <h4 className="font-semibold">Oferta</h4>
          <Link href="#" className="hover:underline" prefetch={false}>
            Kuchnie
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Szafy
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Łazienki
          </Link>
        </div>
        <div className="grid gap-2">
          <h4 className="font-semibold">Sekcje</h4>
          <Link href="#aboutus" className="hover:underline" prefetch={false}>
            O Nas
          </Link>
          <Link href="#gallery" className="hover:underline" prefetch={false}>
            Galeria
          </Link>
          <Link href="#partners" className="hover:underline" prefetch={false}>
            Nasi Partnerzy
          </Link>
          <Link href="#faq" className="hover:underline" prefetch={false}>
            FAQ
          </Link>
        </div>
        <div className="grid gap-2">
          <h4 className="font-semibold">Kontakt</h4>
          <p>
            PIN STUDIO Sp. z o.o. <br />
            ul. Grudziądzka 124/126 <br />
            87-100 Toruń <br />
            Telefon: <a href="tel:56 660 02 76">56 660 02 76</a>
            <br />
            E-mail: <a href="mailto:sklep@studiopin.pl">sklep@studiopin.pl</a>
          </p>
        </div>
      </div>
      <div className="container py-8 flex items-center justify-between">
        <p>
          &copy; {new Date().getFullYear()} Studio PIN. Wszelkie prawa
          zastrzeżone.
        </p>
        <Link href="#" className="hover:underline" prefetch={false}>
          Polityka prywatności
        </Link>
      </div>
    </footer>
  );
}
