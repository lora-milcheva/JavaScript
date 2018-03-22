
function deposit(input) {

    let principalSum = input[0];
    let interest = input[1] / 100;
    let frequency = 12 / input[2];
    let periodInYears = input[3];

    let totalSum = principalSum * Math.pow((1 + interest / frequency), periodInYears * frequency);

    console.log(totalSum);

}

deposit([100000, 5, 12, 25])