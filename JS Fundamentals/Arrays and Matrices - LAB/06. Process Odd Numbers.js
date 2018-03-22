
function oddPositionsSum(arr) {
    return arr.filter((n, i) => i % 2 != 0).map(n => n * 2).reverse().join(' ');
}

console.log(oddPositionsSum([3, 0, 10, 4, 7, 3]));