let eingabe = window.prompt()
console.log(eingabe)
const zahlentopf = []
for (let i = 1; i <= eingabe; i++) {
let zufallsZahl = Math.random() * 10
  zahlentopf.push(Math.floor(zufallsZahl))
  console.log(i)

}
console.log(zahlentopf)

for (let i = 0; i <= zahlentopf.length; i++) {
for (let i = 0; i <= zahlentopf.length; i++) {
  if (zahlentopf[i] > zahlentopf[i+1]) {
    let zahlenspeicher = zahlentopf[i+1];
    zahlentopf[i+1] = zahlentopf[i]
    zahlentopf[i] = zahlenspeicher
  }
}
}

console.log(zahlentopf)