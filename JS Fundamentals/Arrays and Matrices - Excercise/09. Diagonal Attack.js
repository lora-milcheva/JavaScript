
function diagonalSum(input){

    let matrix = [];
    for (let line of input) {
        line = line.split(' ').map(Number);
        matrix.push(line)
    }

    let sumFirst = 0;
    let sumSecond = 0;

    for (let row = 0; row < matrix.length; row++) {
        let arr = matrix[row];
        for (let col = 0; col < arr.length; col++) {
            if (row === col) {
                sumFirst += matrix[row][col];
            }
            if (row + col == matrix.length - 1) {
                sumSecond += matrix[row][col];
            }
        }
    }

    if (sumFirst === sumSecond) {
        for (let row = 0; row < matrix.length; row++) {
            let arr = matrix[row];
            for (let col = 0; col < arr.length; col++) {
                if ((row != col) && (col != arr.length-1-row)) {
                    matrix[row][col] = sumFirst;
                }
            }
        }
    }

    matrix.forEach(line => console.log(line.join(' ')));
}

diagonalSum(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
)