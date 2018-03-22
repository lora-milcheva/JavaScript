
function carsList(input) {

    let carsList = new Map();

    for (let line of input) {

        let [brand, model, carsProduced] = line.split('|').map(e => e.trim());
        carsProduced = Number(carsProduced);

        if (!carsList.has(brand)) {
            carsList.set(brand, new Map());
        }
        if (!carsList.get(brand).has(model)){
            carsList.get(brand).set(model, 0);
        }

        let carsToAdd = carsList.get(brand).get(model);
        carsList.get(brand).set(model, carsProduced + carsToAdd);
    }

    for (let [car, modelProduction] of carsList) {

        console.log(car);

        for (let [model, producesCars] of modelProduction) {
            console.log(`###${model} -> ${producesCars}`);

        }
    }
}

carsList([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);