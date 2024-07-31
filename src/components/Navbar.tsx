import Image from 'next/image';
import Link from 'next/link';
import { NavMenu } from '@/components/NavMenu';

export function Navbar() {
  return (
    <nav className="flex p-3 text-xl bg-red-500 items-center justify-between text-slate-900 rounded-b-3xl">
      <Link href="/" className="flex space-x-2 items-center">
        <Image
          src="/logo.png"
          alt="logo"
          width="50"
          height="50"
          className="rounded-lg"
        />
        <h1 className="text-3xl font-bold underline decoration-dashed decoration-sky-500">
          Studio PIN
        </h1>
      </Link>
      <NavMenu />
      <div className="hidden md:block">
        <a href="tel:56 660 02 76">56 660 02 76</a>
        <br />
        <a href="mailto:sklep@studiopin.pl">sklep@studiopin.pl</a>
      </div>
    </nav>
  );
}
