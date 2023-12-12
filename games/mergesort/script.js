// Die zahlenReihe soll immer wieder in der Hälfte geteilt werden, bis wir viele
// temporäre Arrays haben die jeweils eine Ziffer beinhalten. Diese sollen dann
// zusammengefügt/gemerged werden in sortierte unter Arrays, die aus 2 sortierten
// Ziffern bestehen. Das dann immer so weiter, bis wir ein vollständiges Array mit
// allen sortierten Ziffern haben.
let zahlenReihe = [2,1,7,4]



function mergeSort(array) {
    console.log("called mergeSort", array)
    if (array.length == 1) {
        console.log("ended mergeSort", array)
        return array;
    }

    //1. Schritt Array in 2 Teile splitten
    let firstHalf = array.slice(0, array.length/2)
    let secondHalf = array.slice(array.length/2)
    //2. Beide Teile sortieren
    let sortedFirstHalf = mergeSort(firstHalf)
    let sortedSecondHalf = mergeSort(secondHalf)
    //3. Sortierte Teile wieder in ein Array zusammenfügen
    let combinedHalfs = []
    let counter = 0
    while ((sortedFirstHalf.length > 0 ||sortedSecondHalf.length > 0) && counter < 100) {
            counter++
        if (sortedFirstHalf[0] <= sortedSecondHalf[0] || sortedSecondHalf.length == 0) {
            combinedHalfs.push(sortedFirstHalf[0])
            sortedFirstHalf.shift()
        }
        else {
            combinedHalfs.push(sortedSecondHalf[0])
            sortedSecondHalf.shift()
        }
    }
    console.log("ended mergeSort", array)
    return combinedHalfs;
} 
console.log(mergeSort(zahlenReihe))
