
function quadricEquasion(a, b, c) {

    let d = Math.pow(b, 2) - 4 * a * c;

    if (d == 0) {
        console.log(-b / (2 * a));
    }

    else if (d > 0) {

        let x1, x2;

        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);

        if (x1 > x2) {

            [x1, x2] = [x2, x1];

            console.log(x1 + `\n` + x2);
        }
    }

    else {
        console.log('No');
    }
}

quadricEquasion(6, 11, -35);