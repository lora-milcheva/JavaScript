
function calculate (a, b, operator) {

    let calc = function (a, b, operation) { return operation(a, b)};
    let add = function (a, b) {return a + b};
    let subtract = function (a, b) {return a - b};
    let multiply = function (a, b) {return a * b};
    let divide = function (a, b) {return a / b};

    switch (operator) {
        case '+': return calc(a, b, add);
        case '-': return calc(a, b, subtract);
        case '*': return calc(a, b, multiply);
        case '/': return calc(a, b, divide);
    }
}

console.log(calculate(2, 4, '/'));
console.log(calculateShort(2, 4, '/'));

function calculateShort (a, b, operator) {

    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
    }
}