
function biggestElement(matrix) {

    /*let result = matrix.map(a => a.join(' ')).join(' ');*/

    let biggestNum = Number.NEGATIVE_INFINITY;
    matrix.forEach(
        r => r.forEach(
            c => biggestNum = Math.max(biggestNum, c)));
    return biggestNum;

}

console.log(biggestElement([[20, 50, 10], [8, 33, 145]]));
