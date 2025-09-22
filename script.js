/******************************************************************************
Funksjoner og metoder oppgave

Les oppgaveteksten NØYE. Vis noen eksempler i koden din som tester
funksjonene og metodene dine. Bruk en variasjon av pilfunksjoner (arrow functions)
og funksjoner laget med nøkkelordet `function`.

Legg til kommentarer i koden din som kort forklarer hva den gjør.

******************************************************************************/

/******************************************************************************
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

******************************************************************************/

const erOddetall = (tall) =>
  typeof tall !== "number"
    ? "Du må taste inn et tall"
    : tall % 2 === 0
    ? "Partall"
    : "Oddetall";

// Velger arrow-funksjon (med ternery) for denne oppgaven, siden det er en ganske kort og oversiktelig funksjon.
// Har også valgt å legge inn en typeof-sjekk, som idiotforsikring.

console.log(erOddetall(5));
console.log(erOddetall(2));
console.log(erOddetall(1001));
console.log(erOddetall(372094578));
console.log(erOddetall("Trettito"));

/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/

const capitalize = (wordString) => {
  return wordString.toUpperCase() + "!";
};

// Igjen - en kort funksjon => arrow

console.log(capitalize("dette er kult"));
console.log(capitalize("Hello World"));
console.log(capitalize("JAvascRipT Er gØy"));

/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

  - Et navn (string)
  - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/

function greeting(name, time) {
  if (time === undefined) {
    return `Error: Husk å skriv inn både navn og tid`;
  } else if (time < 0 || time > 23) {
    return `Ugyldig tid`;
  } else if (time < 6) {
    return `God natt ${name}`;
  } else if (time < 12) {
    return `God morgen ${name}`;
  } else if (time < 18) {
    return `God dag ${name}`;
  } else if (time < 24) {
    return `God kveld ${name}`;
  }
}

// Starter med å "fjerne" de ugyldige tidene. Slik går det an å teste alle andre tidspunkter "ensidig", så lenge du gjør det i riktig rekkefølge

console.log(greeting("Jake", 6));
console.log(greeting("Jake", 7));
console.log(greeting("Amy", 0));
console.log(greeting("Amy", 4));
console.log(greeting("Charles", 12));
console.log(greeting("Charles", 15));
console.log(greeting("Terry", 18));
console.log(greeting("Terry", 23));
console.log(greeting("Rosa", 25));
console.log(greeting("Rosa", -3));
console.log(greeting("Gina"));

/******************************************************************************
4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].

******************************************************************************/

const colors = ["Rød", "Grønn", "Blå", "Gul"];
const num = ["En", "To", "Tre", "Fire", "Fem", "Seks"];

// function cutTheArray(array) {
//   return array.slice(1, array.length-1);
// }

function cutTheArray(array) {
  return array.slice(1, -1);
}

// For å korte ned koden bruker jeg -1 istedet for array.length-1, da arrayen skal telle bakfra ved negativ index.

console.log(cutTheArray(colors));
console.log(cutTheArray(num));

/******************************************************************************
5.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
  - Erstatt ordet "vanskelig" med "gøy".
  - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/

function detteErGøy(string) {
  return string.trim().replace("vanskelig", "gøy");
}

console.log(detteErGøy("Javascript er vanskelig"));
console.log(detteErGøy("Det er vanskelig å bruke metoder"));
console.log(detteErGøy("   vanskelig        "));

/******************************************************************************
6.

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/

// Skriver (og tester) alle hver for seg først
// items.shift();
// items.splice(items.indexOf("Viskelær"), 1, "Linjal");
// items.splice(0, 2, "Markeringspenn");

// Disse endrer original array, så kjører derfor console.log på den originale "items"-arrayen.
// console.log(items);

// Setter det inn i en funksjon
function modifyArray(array) {
  array.shift();
  array.splice(array.indexOf("Viskelær"), 1, "Linjal");
  array.splice(0, 2, "Markeringspenn");
  return array;
}

console.log(modifyArray(items));

const newItems = items.join(" | ");
console.log(newItems);

/******************************************************************************
7.

EKSTRA UTFORDRING #1:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere, en array og en string.

Sjekk om arrayen inneholder stringen. Hvis den gjør det, fjern elementet
fra arrayet og returner den oppdaterte arrayen.

Hvis arrayet ikke inneholder stringen, legg stringen til på slutten
av arrayet og returner det oppdaterte arrayet.

Eksempel 1: (["Rød", "Grønn"], "Blå") --> ["Rød", "Grønn", "Blå"]
Eksempel 2: (["Rød", "Grønn", "Blå"], "Grønn") --> ["Rød", "Blå"]
Eksempel 3: (["En", "To", "Tre"], "Fire") --> ["En", "To", "Tre", "Fire"]
Eksempel 4: (["En", "To", "Tre"], "To") --> ["En", "Tre"]

******************************************************************************/

// Skriv koden for oppgave 7 her

/******************************************************************************
8.

EKSTRA UTFORDRING #2:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn ett parameter.

Hvis parameteret er en string:
Returner stringen med "😎" lagt til i starten og slutten.

Hvis parameteret er et tall:
Doble verdien, konverter den til en string, og returner den med "😎" lagt til i
starten og slutten.

Hvis parameteret er en boolean:
Returner "😎Ja😎" hvis parameteret er true, eller "😎Slapp av😎" hvis parameteret er false.

Hvis parameteret er en annen datatype:
Returner "😎Kun primitive verdier😎".

******************************************************************************/

// Skriv koden for oppgave 8 her
