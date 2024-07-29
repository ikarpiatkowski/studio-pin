import { About } from "@/components/About";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main className="flex flex-col justify-center p-4">
      <About />
      <Gallery />
    </main>
  );
}
