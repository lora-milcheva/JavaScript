
function magicMatrices(matrix) {
    let sum = 0;
    matrix[0].forEach(x => sum += x);
    for (let row = 1; row < matrix.length; row++) {
        let rowSum = 0;
        matrix[row].forEach(x => rowSum += x);
        if (rowSum != sum)	return false;
    }
    for (let col = 0; col < matrix[0].length; col++) {
        let colSum = 0;
        for (let row = 0; row < matrix.length; row++)
            colSum += matrix[row][col];
        if (colSum != sum)	return false;
    }
    return true;
}


console.log(magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
));


/* My Solution 80/100 */

function isMagicMatrix(matrix) {

    let sumRow = checkRows(matrix);

    for (let i = 0; i < matrix.length - 1; i++) {
        let sumCol = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            sumCol += matrix[j][i];
        }
        if (sumCol != sumRow) {
            console.log('false');
            return;
        }
    }

    console.log('true');

    function checkRows(matrix) {
        for (let i = 0; i < matrix.length - 1; i++) {
            let sumFirst = 0;
            matrix[i].map(n => sumFirst += n);
            let sumSecond = 0;
            matrix[i + 1].map(n => sumSecond += n);
            if (sumFirst != sumSecond) {
                return null;
            }
            else {
                return sumFirst;
            }
        }
    }
}
