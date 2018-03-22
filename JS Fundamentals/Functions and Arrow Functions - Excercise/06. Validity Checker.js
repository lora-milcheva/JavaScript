function distanceValidityCheck(input) {

    [x1, y1, x2, y2] = input;

    checkDistance(x1, y1, 0, 0);
    checkDistance(x2, y2, 0, 0);
    checkDistance(x1, y1, x2, y2);

    function checkDistance(x1, y1, x2, y2) {

        let a = x1 - x2;
        let b = y1 - y2;

        let distance = Math.sqrt(a ** 2 + b ** 2);

        if (Number.isInteger(distance)
                ? console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
                : console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`));
    }
}

distanceValidityCheck([3, 0, 0, 4]);
distanceValidityCheck([2, 1, 1, 1]);
distanceValidityCheck([-2, -1, 1, 1]);


