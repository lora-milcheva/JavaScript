
function aggregate (input) {

    function aggregate(elements, sum, func) {
        for (let element of elements) {
            sum = func(sum, element);
        }
        return sum;
    }

    console.log(aggregate(input, 0, (a, b) => a + b));
    console.log(aggregate(input, 0, (a, b) => a + 1 / b));
    console.log(aggregate(input, '', (a, b) => a + b));
}

aggregate([2, 4, 8, 16]);
