
function gradsToDegrees(gradians) {

    let degrees = (gradians / (400 / 360) ) % 360;

    if (degrees < 0) {
        degrees = 360 + degrees;
    }

    console.log(degrees)
}

gradsToDegrees(-50)