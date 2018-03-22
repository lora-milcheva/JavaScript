
function kNumbersSequence(n, k) {

    let result = [1];

    for (let i = 0; i < n; i++) {
        let currentNumber = result.slice(-k).reduce((a, b) => a + b, 0);
        result[i] = currentNumber;
    }
    return result.join('\n');
}

console.log(kNumbersSequence(8, 2));