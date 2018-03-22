function extractNames(input) {
    "use strict";

    let regex = /\b(_)([A-Za-z0-9]+)\b/gm;

    console.log(regex);
    let test;
    let result = [];

    while (test = regex.exec(input)){
        result.push(test[2]);
    }

    console.log(result.join(','));
}


extractNames('Calculate the _area of the _perfectRectangle object.')