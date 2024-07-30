import { About } from '@/components/About';
import { FAQ } from '@/components/FAQ';
import { Gallery } from '@/components/Gallery';
import { Partners } from '@/components/Partners';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <About />
      <Gallery />
      <Partners />
      <FAQ />
    </main>
  );
}
