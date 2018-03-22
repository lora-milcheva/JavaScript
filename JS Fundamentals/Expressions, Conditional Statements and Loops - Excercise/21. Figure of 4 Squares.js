
function fourSquaresFigure(n) {

    let length = 2 * n - 1;
    let height;
    let figure = ``;

    if (n % 2 == 0 ? height = (n - 1) : height = (n));

    for (let row = 1; row <= height; row++) {

        if (row == 1 || row == Math.ceil(height / 2) || row == height) {
            for (let col = 1; col < length; col++) {
                if (col == 1 || col == n || col == length) {
                    figure += '+';
                } else {
                    figure += '-';
                }
            }
            figure += '+\n';
        }

        else {
            for (let col = 1; col < length; col++) {
                if (col == 1 || col == n || col == length) {
                    figure += '|';
                } else {
                    figure += ' ';
                }
            }
            figure += '|\n';
        }
    }
    console.log(figure);
}

fourSquaresFigure(5);
