
function operateWithNumber(input) {

    let number = input[0];

    for (let i = 1; i < input.length; i++) {
        let currentOperation = input[i];
        let result = operate(number, currentOperation);
        number = result;
        console.log(result);
    }

    function operate(n, operation){
        switch (operation) {
            case 'chop': return n / 2;
            case 'dice': return Math.sqrt(n);
            case 'spice': return n + 1;
            case 'bake': return n * 3;
            case 'fillet': return n * 0.8;
        }
    }
}

operateWithNumber([9, 'dice', 'spice', 'chop', 'bake', 'fillet',]);