import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex p-3 text-xl bg-red-500 items-center justify-between text-black font-bold">
      <Link href="/" className="flex space-x-2 items-center">
        <Image src="/logo.png" alt="logo" width="50" height="50" />
        <h1 className="text-3xl underline decoration-sky-500">Studio PIN</h1>
      </Link>
      <div>
        56 660 02 76
        <br />
        sklep@studiopin.pl
      </div>
    </nav>
  );
}
