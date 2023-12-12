let zahlenReihe = [2, 8, 5, 3, 9, 4]

export function insertionSort(array) {
    for (let i = 0; i <= array.length; i++) {
        for (let o = i; o >= 0; o--) {
            if (array[o] < array[o-1]) {
            let zahlenSpeicher = array[o]
            array[o] = array[o-1]
            array[o-1] = zahlenSpeicher
            }
        }
    }
    return array;
}







function input() {
    const i = window.prompt();
    if (i === 'abort') {
        throw Error()
    }
    return i;
}

// 2, 8, 5, 3, 9, 4

// 2, 8, 5, 3, 9, 4

// 2, 8, 5, 3, 9, 4

// 2, 5, 8, 3, 9, 4
// 2, 5, 3, 8, 9, 4

// 2, 3, 5, 8, 9, 4

// 2, 3, 5, 8, 9, 4

// 2, 3, 4, 5, 8, 9




