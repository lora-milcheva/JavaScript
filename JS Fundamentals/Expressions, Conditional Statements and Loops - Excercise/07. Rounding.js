

function rounding(input) {

    let number = input[0];
    let precision  = input[1];

    if (precision  > 15) {
        precision  = 15;
    }

    let result = number.toFixed(precision);

    if (result.endsWith(0)) {
        result = result / 10 * 10;
    }

    console.log(result);

}

rounding([10.5, 50])