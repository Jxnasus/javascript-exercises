const sumAll = function(start, end) {
    if (typeof start != 'number' || typeof end != 'number' || start < 0 || end < 0) {
        return "ERROR";
    }
    if (start > end) {
        let a = start;
        start = end;
        end = a;
    }
    let result = 0;
    for (let i = start; i <= end; i++){
        result = i + result;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
