
function getBill(input) {

    let orders = input.filter((e, i) => i % 2 == 0);
    let sum = input.filter((e, i) => i % 2 == 1).map(Number).reduce((a, b) => a + b);

    console.log(`You purchased ${orders.join(', ')} for a total sum of ${sum}`)

}

getBill(['Cola','1.35', 'Pancakes', '2.88']);