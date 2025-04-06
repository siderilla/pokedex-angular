STRUTTURA:
src/
├── app/
│   ├── components/
│   │   ├── homepage/
│   │   ├── pokemon-card/
│   │   └── pokemon-detail/
│   ├── model/
│   │   └── pokemon-model.ts
│   ├── services/
│   │   └── pokemon.service.ts
│   ├── app.component.ts/html/scss
│   └── app.routes.ts
├── styles.scss
├── assets/
│   └── (immagini retro opzionali)
└── index.html

components/: contiene i pezzi visivi (homepage, card, pagina dettaglio)
model/: contiene l’interfaccia che descrive la struttura dei dati di un Pokémon
services/: contiene la logica per parlare con l’API
app.routes.ts: definisce le rotte dell'app
styles.scss: contiene gli stili globali (font, sfondi)
assets/: per le immagini, icone o sfondi

---------------------------------------------------------------------

COSA FA
✅ Mostra 20 Pokémon per pagina usando l’API PokéAPI
✅ Visualizza ogni Pokémon come card in stile Pokédex retrò
✅ Cliccando su una card, si accede al dettaglio completo del Pokémon
✅ Navigazione avanti/indietro tra pagine
✅ Design pixelato, sprite 160×160, bordi rossi, font retrò
✅ Responsive & modulare

---------------------------------------------------------------------

ROUTING
    Angular usa queste rotte per sapere quale componente mostrare a seconda dell’URL.
    / mostra la homepage
    /pokemon/25 (per esempio) mostra il dettaglio di Pikachu (ID 25)

---------------------------------------------------------------------

FETCH
getPokemonPage(offset, limit)
    Questa funzione chiama la PokéAPI per ottenere i Pokémon in modo paginato: 20 per volta, a seconda dell’offset.
    offset=0: primi 20 Pokémon
    offset=20: Pokémon 21–40, ecc.

---------------------------------------------------------------------

INTERFACE
Definisce la struttura dell'oggetto PokemonModel, che rappresenta un Pokémon così come restituito dall'API. Questo si fa usando la parola chiave interface, che in TypeScript serve a descrivere il tipo di un oggetto. Le interfacce ti permettono di:
	Tipizzare i dati che ricevi da un'API o che gestisci nel codice;
	Avere un'autocompletamento migliore durante la scrittura;
	Prevenire errori grazie alla validazione statica del tipo.

---------------------------------------------------------------------

inject(...) usato nei componenti
Dove: in homepage.component.ts, pokemon-detail.component.ts
inject() è un modo moderno per accedere ai servizi in Angular standalone senza usare constructor injection.
    inject() è una funzione introdotta per accedere ai servizi direttamente dentro il corpo del componente, utile nello stile standalone. Sostituisce la classica iniezione tramite constructor(...), rendendo il codice più compatto.

---------------------------------------------------------------------

@Input()
Dove: in pokemon-card.component.ts
È fondamentale per capire come un componente figlio riceve dati dal genitore.
    @Input() permette a un componente figlio di ricevere dati da un componente genitore. In questo caso, PokemonCardComponent riceve l'oggetto pokemon da HomepageComponent.

---------------------------------------------------------------------

routerLink
Dove: in pokemon-card.component.html, pokemon-detail.component.html
È il meccanismo con cui Angular gestisce la navigazione tra pagine, sostituendo gli <a href> classici.
    routerLink è la direttiva Angular che consente la navigazione tra le pagine definite nelle rotte, senza ricaricare l'intera pagina (single-page application).

---------------------------------------------------------------------

ActivatedRoute
Dove: in pokemon-detail.component.ts
Serve a leggere parametri dalla rotta (come l’ID del Pokémon).
    ActivatedRoute è un servizio che fornisce accesso ai parametri dell'URL, come :id. È utile per sapere quale risorsa caricare nella pagina di dettaglio.

---------------------------------------------------------------------

Promise.all(...)
Dove: in getPokemonPage(...)
È un metodo importante per aspettare più fetch contemporaneamente.
    Promise.all([...]) aspetta che tutte le promesse (fetch) siano completate. È utile quando si fanno più chiamate API in parallelo, come per caricare i dettagli di 20 Pokémon in una volta.