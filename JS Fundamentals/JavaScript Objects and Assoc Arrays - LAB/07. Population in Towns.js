

function getTownPopulation(input) {

    let towns = new Map();

    for (let line of input) {

        let [town, population] = line.split('<->').map(e => e.trim());
        population = Number(population);

        if (!towns.has(town)) {
            towns.set(town, 0);
        }
        towns.set(town, towns.get(town) + population);

    }

    for (let [town, population] of towns) {
        console.log(`${town} : ${population}`)
    }
}

getTownPopulation([
'Sofia <-> 1200000',
    'Sofia <-> 500',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'
])
