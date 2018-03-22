
function inchToFoot(inches) {

    let feet = Math.floor(inches / 12);
    let footsTale = inches % 12;

    let result = foots + '\'-' + footsTale + '\"';

    console.log(result)

}

inchToFoot(11);
