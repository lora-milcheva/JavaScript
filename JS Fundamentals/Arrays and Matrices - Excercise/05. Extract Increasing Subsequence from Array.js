
function extract(arr) {

    arr = arr.map(Number);
    let result = [arr[0]];
    let biggestNumber = [arr[0]];

    for (let i = 1; i < arr.length; i++) {

        let currentNumber =arr[i];

        if (currentNumber >= biggestNumber) {
            result.push(currentNumber);
            biggestNumber = currentNumber;
        }
    }

    console.log(result.join('\n'));
}


extract(['1', '3', '8', '8', '4', '12', '3', '2', '24']);
extract(['20', '3', '2', '15', '6', '1']);
extract(['1']);
