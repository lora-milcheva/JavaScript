/*  solution 1  */

function findEvenPosition(arr) {

    let result = [];

    for (let i in arr) {
        if (i % 2 == 0) {
            result.push(arr[i]);
        }
    }

    return result.join(' ');
}

console.log(findEvenPosition(['20', '30', '40']));


/*  solution 2  */

let arr = ['1', '2', '3', '4'];

let even = arr.filter((e, i) => i % 2 == 0).join(' ');

console.log(even);


