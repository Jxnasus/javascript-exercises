let zahlenReihe = [2,6,5,0,8,7,1,3,4,4,10,4,41,50,23,14,62]

function quickSort(array) {
    if (array.length < 2) {
        console.log("ended quickSort", array)
        return array;
    }
    let pivot = array[Math.trunc(array.length/2)]
    console.log(array, pivot)
let smallerThanPivot = []
let biggerThanPivot = []
let equalToPivot = []

    for (let i = 0; i < array.length; i++) {
        if (array[i]<pivot) {
        smallerThanPivot.push(array[i])
        }
        if (array[i]>pivot) {
        biggerThanPivot.push(array[i])
        }
        if (array[i]==pivot) {
            equalToPivot.push(array[i])
        }
    }
console.log(smallerThanPivot, biggerThanPivot)
    let sortedSmallerPart = quickSort(smallerThanPivot)
    let sortedBiggerPart = quickSort(biggerThanPivot)
    let sortedZahlenReihe = [...sortedSmallerPart,...equalToPivot, ...sortedBiggerPart]
    return sortedZahlenReihe;
}


console.log(quickSort(zahlenReihe))