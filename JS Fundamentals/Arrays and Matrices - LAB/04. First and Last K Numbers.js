
function solve(arr) {

    let k = arr.shift();

    console.log(arr.slice(0, k).join(' '));
    console.log(arr.slice(-k).join(' '));
}

solve([3, 6, 7, 8, 9]);