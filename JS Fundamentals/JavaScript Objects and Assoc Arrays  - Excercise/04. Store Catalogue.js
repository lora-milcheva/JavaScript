

// 100/100
function storeCatalogue2(input) {

    let catalogue = new Map();

    for (let line of input) {
        let [product, price] = line.split(':').map(e => e.trim());
        let letter = product[0];

        if(!catalogue.has(letter)){
            catalogue.set(letter, new Map());
        }
        catalogue.get(letter).set(product, price);
    }

    let result = [...catalogue].sort();

    for (let [letter, products] of result) {

        console.log(letter);

        let sortedProducts = ([...products].sort());
        for (let [product, price] of sortedProducts) {
            console.log(`  ${product}: ${price}`);
        }
    }
}

// 66/100
function storeCatalogue(input) {

    let catalogue = new Map();

    for (let line of input) {
        let [product, price] = line.split(':').map(e => e.trim());
        catalogue.set(product, price);
    }

    let result = [...catalogue].sort((a, b) => a[0] > b[0]);

    let letter = '';

    for (let i = 0; i < result.length; i++) {
        let [product, price] = result[i];
        let currentLetter = product[0];

        if (currentLetter != letter || i===0) {
            console.log(currentLetter);
            letter = currentLetter;
        }
        console.log(`  ${product}: ${price}`);
    }
}

storeCatalogue2([
'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'
]);

