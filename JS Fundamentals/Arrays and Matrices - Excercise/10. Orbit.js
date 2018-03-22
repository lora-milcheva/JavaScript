
function matrixOrbit(input) {
    [width, height, x, y] = input;

    let matrix = [];
    for (let row = 0; row < width; row++) {
        matrix[row] = [];

        for (let col = 0; col < height; col++) {
            matrix[row].push(1);
        }
    }

    for (let row = 0; row < width; row++) {
        for (let col = 0; col < height; col++) {
            matrix[row][col] = Math.max(Math.abs(x - row), Math.abs(y - col)) + 1
        }
    }
    matrix.forEach(line => console.log(line.join(' ')));
}

matrixOrbit([4, 4, 0, 0]);