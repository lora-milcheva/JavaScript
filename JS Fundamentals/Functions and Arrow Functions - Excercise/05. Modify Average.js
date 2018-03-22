
function modifyAverage(number) {

    while (calculateAverageSum(number) <= 5){
        number = Number(number + '9');
    }

    function calculateAverageSum(n) {
        let nToString = n.toString();
        let sumNumbers = 0;

        for (let i = 0; i < nToString.length; i++) {
            sumNumbers += Number(nToString[i]);
        }

        let averageSum = sumNumbers / nToString.length;
        return averageSum;
    }

    return number;

}

console.log(modifyAverage(5835));
console.log(modifyAverage(11));

