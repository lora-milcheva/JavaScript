function getTownPopulation(input) {

    let result = new Map();

    for (let line of input) {

        let [town, product, sales] = line.split('->').map(e => e.trim());
        let income = sales.split(':').map(e => e.trim()).map(e => Number(e)).reduce((a, b) => a * b);

        if (!result.has(town)) {
            result.set(town, new Map());
        }
        if (!result.get(town).has(product)) {
            result.get(town).set(product, 0);
        }
        let saleToAdd = result.get(town).get(product) + income;
        result.set(town, result.get(town).set(product, saleToAdd));
    }

    for (let [town, sales] of result) {
        console.log(`Town - ${town}`);

        for (let [product, sum] of sales) {
            console.log(`$$$${product} : ${sum}`);
        }
    }
}

getTownPopulation([
    "Sofia -> Laptops HP -> 200 : 2000",
    "Sofia -> Raspberry -> 200000 : 1500",
    "Sofia -> Audi Q7 -> 200 : 100000",
    "Montana -> Portokals -> 200000 : 1",
    "Montana -> Qgodas -> 20000 : 0.2",
    "Montana -> Chereshas -> 1000 : 0.3"

]);