const removeFromArray = function(array, ...removeItems) {
    const result = []
    for (let arrayItem of array) {
        let arrayItemIsInRemoveItems = false;
        for (let r of removeItems) {
            if (r === arrayItem) {
                arrayItemIsInRemoveItems = true;
                break;
            }
        }
        if (!arrayItemIsInRemoveItems) {
            result.push(arrayItem)
        }
    }
    return result;
};

const removeFromArrayFunctional = function(array, ...removeItems) {
    return array.filter((item) => !removeItems.some((removeItem) => removeItem === item));
};

// Do not edit below this line
module.exports = removeFromArray;
