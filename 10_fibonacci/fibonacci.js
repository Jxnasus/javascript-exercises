const fibonacci = function(count) {
    if (count <= 0) return "OOPS";
    let num1 = 0;
    let num2 = 1;
    for(let i = 2; i <= count; i++) {
        let current = num1 + num2;
        num1 = num2;
        num2 = current;
    }
        return num2;
};

// Do not edit below this line
module.exports = fibonacci;
