
function tripPath(input) {

    [x1, y1, x2, y2, x3, y3] = input;

    let a = checkDistance(x1, y1, x2, y2);
    let b = checkDistance(x2, y2, x3, y3);
    let c = checkDistance(x1, y1, x3, y3);

    checkPath(a, b, c);

    function checkDistance(x1, y1, x2, y2) {
        let a = x1 - x2;
        let b = y1 - y2;
        return Math.sqrt(a ** 2 + b ** 2);
    }

    function checkPath(a, b, c) {
        let sumDistance = 0;

        if ((c >= a) && (c >= b)){
            sumDistance = a + b;
            console.log('1->2->3: ' + sumDistance);
        }
        if ((a > b) && (a > c)) {
            sumDistance = b + c;
            console.log('1->3->2: ' + sumDistance);
        }
        else if ((b > a) && (b > c)) {
            sumDistance = a + c;
            console.log('2->1->3: ' + sumDistance);
        }
    }
}

tripPath([0, 0, 2, 0, 4, 0]);
