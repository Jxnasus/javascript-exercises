let zahlenReihe = [2, 3, 5, 8, 9, 4, 1, 7, 11]

for (let o = 0; o < zahlenReihe.length; o++) {
    let currentMinimum = zahlenReihe[o]
    let currentMinimumIndex = o;
    let currentItem = 0;

    console.log("new iteration", currentMinimum)
    
    for (let i = o; i < zahlenReihe.length; i++) {
        currentItem = zahlenReihe[i];
        if (currentMinimum > currentItem) {
            currentMinimumIndex = i
            currentMinimum = currentItem
        }
        console.log("min", currentMinimum, "index", currentMinimumIndex, "item", currentItem, "o", o, "i", i, zahlenReihe)
    }
    
    let zahlenSpeicher = zahlenReihe[currentMinimumIndex]
    zahlenReihe[currentMinimumIndex] = zahlenReihe[o]
    zahlenReihe[o] = zahlenSpeicher
}