
function checkLowestPrice(input) {

    let list = new Map();

    for (let line of input) {
        let [town, product, price] = line.split('|').map(e => e.trim());

        if (!list.has(product)) {
            list.set(product, new Map());
        }
        list.get(product).set(town, Number(price));
    }

    for (let [key, value] of list) {
        let [town, price] = [...value].reduce(function (a, b) {
            if (a[1] > b[1]) return b;
            return a;
        });
        console.log(`${key} -> ${price} (${town})`);
    }
}


checkLowestPrice([
    'New York | Apple | 500',
    'Florida | Apple | 300',
    'Pleven | Apple | 500',
    'Varna | Apple | 1000',
    'Pleven | Orange | 2',
    'Pleven | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Burger | 10',
]);

/*
checkLowestPrice([
    "Sofia City | Audi | 100000",
    "Sofia City | BMW | 100000",
    "Sofia City | Mitsubishi | 10000",
    "Sofia City | Mercedes | 10000",
    "Sofia City | NoOffenseToCarLovers | 0",
    "Mexico City | Audi | 1000",
    "Mexico City | BMW | 99999",
    "New York City | Mitsubishi | 10000",
    "New York City | Mitsubishi | 1000",
    "Mexico City | Audi | 100000",
    "Washington City | Mercedes | 1000"
])*/
