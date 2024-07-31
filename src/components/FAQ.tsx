import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQ() {
  return (
    <>
      <p
        id="faq"
        className="m-8 font-bold text-4xl underline decoration-4 decoration-dotted decoration-sky-500"
      >
        FAQ
      </p>
      <Accordion type="single" collapsible className="w-11/12">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            1. Jakie rodzaje mebli na wymiar oferujecie?
          </AccordionTrigger>
          <AccordionContent>
            Oferujemy szeroką gamę mebli na wymiar, w tym kuchnie, szafy
            wnękowe, garderoby, meble łazienkowe, biurowe, a także meble do
            salonu i sypialni. Każdy projekt jest dostosowany do indywidualnych
            potrzeb i preferencji klienta.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            2. Jak wygląda proces zamawiania mebli na wymiar?
          </AccordionTrigger>
          <AccordionContent>
            Proces zamawiania składa się z kilku kroków:
            <ul className="list-disc list-inside px-4 pt-4 space-y-4">
              <li>
                Konsultacja: Rozmowa z klientem w celu zrozumienia jego potrzeb
                i oczekiwań.
              </li>
              <li>
                Pomiar: Dokładne pomiary przestrzeni, w której mają być
                umieszczone meble.
              </li>
              <li>
                Projekt: Przygotowanie wstępnego projektu i wizualizacji 3D.
              </li>
              <li>Wycena: Przedstawienie szczegółowej wyceny projektu. </li>
              <li>
                Produkcja: Po akceptacji projektu i wyceny, przystępujemy do
                produkcji mebli.
              </li>
              <li>Montaż: Dostarczenie i montaż gotowych mebli u klienta.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            3. Jak długo trwa realizacja zamówienia?
          </AccordionTrigger>
          <AccordionContent>
            Czas realizacji zamówienia zależy od skomplikowania projektu i
            aktualnego obciążenia produkcji. Zazwyczaj proces ten trwa od 4 do 8
            tygodni od momentu zaakceptowania projektu i podpisania umowy.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            4. Czy oferujecie pomoc w projektowaniu wnętrz?
          </AccordionTrigger>
          <AccordionContent>
            Tak, współpracujemy z doświadczonymi projektantami wnętrz, którzy
            mogą pomóc w stworzeniu idealnego projektu dostosowanego do Państwa
            potrzeb i stylu.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            5. Jakie materiały są używane do produkcji mebli?
          </AccordionTrigger>
          <AccordionContent>
            Używamy wyłącznie najwyższej jakości materiałów, takich jak drewno
            naturalne, płyty MDF, laminaty, forniry oraz wysokiej klasy okucia i
            akcesoria. Każdy materiał jest starannie wybierany, aby zapewnić
            trwałość i estetykę naszych mebli.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>
            6. Czy mogę zobaczyć próbki materiałów przed zamówieniem?
          </AccordionTrigger>
          <AccordionContent>
            Oczywiście, posiadamy szeroki wybór próbek materiałów, które można
            obejrzeć w naszym biurze lub na miejscu u klienta podczas
            konsultacji.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>
            7. Czy oferujecie gwarancję na swoje meble?
          </AccordionTrigger>
          <AccordionContent>
            Tak, na wszystkie nasze meble udzielamy gwarancji. Standardowy okres
            gwarancji wynosi 2 lata, jednak w przypadku niektórych materiałów i
            rozwiązań może on być dłuższy.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger>
            8. Czy realizujecie zamówienia poza Toruniem?
          </AccordionTrigger>
          <AccordionContent>
            Tak, realizujemy zamówienia na terenie całej Polski. Prosimy o
            kontakt w celu ustalenia szczegółów dotyczących dostawy i montażu w
            Państwa lokalizacji.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger>
            9. Jakie formy płatności akceptujecie?
          </AccordionTrigger>
          <AccordionContent>
            Akceptujemy różne formy płatności, w tym przelewy bankowe, płatności
            kartą oraz gotówkę. Szczegóły płatności ustalane są indywidualnie
            podczas podpisywania umowy.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
          <AccordionTrigger>
            10. Czy można dokonać zmian w projekcie po jego zatwierdzeniu?
          </AccordionTrigger>
          <AccordionContent>
            Możliwość wprowadzenia zmian w projekcie zależy od etapu realizacji.
            Wszelkie zmiany powinny być zgłoszone jak najszybciej, a nasz zespół
            dołoży wszelkich starań, aby je uwzględnić. W niektórych przypadkach
            może to wiązać się z dodatkowymi kosztami i wydłużeniem czasu
            realizacji.
          </AccordionContent>
        </AccordionItem>
        <p className="py-4 font-bold">
          Jeśli mają Państwo dodatkowe pytania, prosimy o kontakt telefoniczny
          lub e-mailowy. Jesteśmy do Państwa dyspozycji i chętnie udzielimy
          wszelkich informacji.
        </p>
      </Accordion>
    </>
  );
}
