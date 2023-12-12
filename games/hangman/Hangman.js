const wort = input();
let SpielerHP = 5;

let verstecktesWort = [];
for (let i = 1; i <= wort.length; i++) {
    verstecktesWort.push("X");
}
window.alert(`Das Wort sieht etwa so aus ${verstecktesWort}`)
while (SpielerHP >= 1) {
let guess = input();
let hatRichtigGeraten = false;
for (let i = 0; i <= wort.length; i++) {
	if (guess == wort[i]) {
      verstecktesWort[i] = guess
      hatRichtigGeraten = true;
    }
}
  if (hatRichtigGeraten == true) {
	window.alert(`Du hast einen Buchstaben aufgedeckt! Das Wort sieht nun so aus: ${verstecktesWort}`)
  }
  if (hatRichtigGeraten == false) {
    SpielerHP--
    if (SpielerHP > 0) {
	window.alert(`Falsch. Du hast noch ${SpielerHP} Leben.`)
  }
  }
  if (SpielerHP == 0) {
  	window.alert("Du hast all deine Leben verloren. Ziemlich lost.")
    break;
  }
  if (verstecktesWort.join(``) == wort) {
    window.alert("WOW CRAZY, EINFACH GESCHAFFT!!!")
    break;
  }
}
function input() {
    const i = window.prompt();
    if (i === 'abort') {
        throw Error
    }
    return i;
}