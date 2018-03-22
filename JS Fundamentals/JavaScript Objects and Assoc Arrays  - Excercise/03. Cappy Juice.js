
function calculateBottles(input){
    
    let result = new Map();
    let allJuices = new Map();

    for (let i = 0; i < input.length; i++) {
        let [fruit, quantity] = input[i].split(' => ');
        quantity = Number(quantity);

        if (!allJuices.has(fruit)) {
            allJuices.set(fruit, 0);
        }
        allJuices.set(fruit, allJuices.get(fruit) + quantity);

        let bottles = Math.floor(allJuices.get(fruit) / 1000);
        if (bottles >= 1){
            result.set(fruit, allJuices.get(fruit));
        }
    }

    for (let [juice, ml] of result) {
        console.log(`${juice} => ${Math.floor(ml / 1000)}`);
    }
}

calculateBottles([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);