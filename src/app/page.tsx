import { About } from '@/components/About';
import { Gallery } from '@/components/Gallery';
import { Partners } from '@/components/Partners';

export default function Home() {
  return (
    <main className="flex flex-col items-center p-4">
      <About />
      <Gallery />
      <Partners />
    </main>
  );
}
