
test(5, 3);

function test(w, h) {

    let total = w * h;
    let result= [];

    for(let i = 0; i < h; i++) {
        let arr = [];
        for(let j = 0 ; j < w ; j++) {
            arr.push(0);
        }
        result.push(arr);
    }

    let number = 0;
    let row = 0;
    let col = 0;

    while (number <= total) {

        for (let i = col; i < w - col; i++) {
            number++;
            result[row][i] = number;
        }
        row++;
        if (number === total) break;

        for (let i = row; i < h - row; i++) {
            number++;
            result[i][w - 1 - col] = number;
        }
        col++;
        if (number === total) break;

        for (let i = w - col; i >= col - 1; i--) {
            number++;
            result[h - row][i] = number;
        }
        if (number === total) break;

        for (let i = h - 1 - row; i >= row ; i--) {
            number++;
            result[i][row - 1] = number;
        }
        if (number === total) break;

    }

    result.forEach(row => console.log(row.join(' ')))
}
