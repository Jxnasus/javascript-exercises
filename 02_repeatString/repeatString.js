function repeatString(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    let result = ""; 
    for (let i = 0; i < num; i=i+1) {
        result = result + string;
    }
    return result;
}

// Do not edit below this line
module.exports = repeatString;
 