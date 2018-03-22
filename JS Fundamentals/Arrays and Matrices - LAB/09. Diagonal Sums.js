
function diagonalSums(matrix) {

    let mainSum = 0;
    let secondSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        mainSum += matrix[i][i];
        secondSum += matrix[i][matrix.length - i -1];
    }

    console.log(mainSum + ' ' + secondSum);
}

diagonalSums([[20, 40], [10, 60]]);