export function About() {
  return (
    <section id="aboutus" className="text-center text-balance w-11/12 mt-8">
      <p
        id="aboutus"
        className="font-bold text-4xl underline decoration-4 decoration-dotted decoration-sky-500 mb-4"
      >
        O Nas
      </p>
      <div className="lg:flex">
        <p className="m-4 text-xl flex-1">
          <strong className="bg-gradient-to-r text-transparent bg-clip-text from-red-500 to-violet-500">
            Pin Studio
          </strong>{' '}
          jest wiodącym producentem mebli, tworzącym wysokiej jakości elementy
          do nowoczesnych przestrzeni mieszkalnych. Specjalizujemy się w
          projektowaniu, produkcji, oraz montażu mebli na wymiar dla
          indywidualnych klientów.
        </p>
        <p className="m-4 text-xl flex-1">
          Do produkcji naszych mebli wykorzystujemy najnowsze maszyny stolarskie
          oraz wysokiej jakości materiały znanych producentów. Sprawia to, że
          nasze realizacje są solidne i trwałe, a także zachowują przez bardzo
          długi czas użytkowania, walory estetyczne i użytkowe.
        </p>
        <p className="m-4 text-xl flex-1">
          Wierzymy, że poprzez meble można wyrazić swój indywidualny styl i
          nadać pomieszczeniom wyjątkowy charakter. Jesteśmy przekonani, że
          dzięki doświadczeniu oraz profesjonalizmowi naszych projektantów,
          otrzymają Państwo meble o jakich marzą.
        </p>
      </div>
    </section>
  );
}
