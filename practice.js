export function setupPractice (element) {
  // följande funktioner körs i ordning
  // se output i console.log()
  // du ska i varje del arbeta med att visa vad du lärt dig
  // i slutändan ska projektet köras och inte innehålla fel och
  // du ska kunna förklara vad, hur varför PM

  // Samtliga delar finns förklarade/beskrivna https://webbutveckling.jensa.dev/tekniker/javascript/
  varsAndTypes(element)
  operators(element)
  controlStructures(element)
  arraysAndObjects(element)
  domAndEvents(element)
  domManipulation(element)
}

// du kan använda kontrollstrukturer och variabler etc. i 
// andra moment än där funktionen heter så såklart
function varsAndTypes(element) {
  let neoExempel = 18
  for (var i=0; i<2; i++) {
    while (neoExempel < 30 === true) {
    neoExempel = i++
    }
  }
  console.log ("nya värdet är " + neoExempel)
 //koden lägger till 1 till variabelns värde så länge dens värde är under 30
}

function operators(element) {
  //användes i varsAndTypes för att se till att alla nummer stämmer och att det adderas ordentligt
}

function controlStructures(element) {
  //användes i varsAndTypes för att göra så den fortsätter lägga tillnummer tills den når 30 (while nummer är under 30, lägg till 1)
let nummer1 = 78924389702
let nummer2 = 39462194841 //det här numret blev nästan exakta hälften av det övre när jag bara spammade siffror och tog bort så de blev samma längd
  if (nummer1 > nummer2*2 ) {
  console.log(nummer1 + " är större än " + nummer2*2);
} else {
  console.log(nummer1 + " är ej större än " + nummer2*2)
}
// den här if satsen kollar om nummer1 är större än nummer2 * 2, om den är det skriver den:
// "nummer1 är större än nummer2" och om den inte är det skriver den "nummer1 är ej större än nummer2"
}


// allting här under har jag missat


function arraysAndObjects (element) {
  // kod för att visa vad du lärt dig om arrays och objekt
  console.log(['arrays', {and: 'objects'}])
}

function domAndEvents (element) {
  // kod för att visa vad du lärt dig om DOM och events
  // använd med html och listeners
  console.log(element, 'lyssna efter event för att ändra element')
}

function domManipulation (element) {
  // kod för att visa vad du lärt dig om DOM-manipulation
  // skapa element och lägga till och ta bort
  element.innerHTML = 'dom manipulation, ändra och lägg till element'
}