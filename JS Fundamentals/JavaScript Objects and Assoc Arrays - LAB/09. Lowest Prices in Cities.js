
function checkLowestPrice(input) {

    let result = new Map();

    for (let line of input) {
        let [town, product, price] = line.split('|').map(e => e.trim());
        price = Number(price);

        if (result.has(product)) {
            let savedPrice = [...result.get(product)][0][1];
            if (savedPrice > price) {
                result.set(product, new Map());
                result.get(product).set(town, price);
            }
        } else {
            result.set(product, new Map());
            result.get(product).set(town, price);
        }
    }

    for (let [product, townPrice] of result) {
        for (let [town, price] of townPrice) {
            console.log(`${product} -> ${price} (${town})`);
        }
    }
}



checkLowestPrice([
    'Sample Town | Sample Product | 1000',
    'Varna | Sample Product | 1002',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10',
]);

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
])