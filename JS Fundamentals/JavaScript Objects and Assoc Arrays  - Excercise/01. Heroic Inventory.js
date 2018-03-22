//  80/100
/*function heroesInfo(input) {

    let result = [];

    for (let line of input) {

        let [name, level, itemsList] = line.split('/').map(e => e.trim());
        let items = itemsList.split(',').map(e => e.trim());

        let hero = {
            name: name,
            level: Number(level),
            items: items
        };

        result.push(hero);
    }
    console.log(JSON.stringify(result));
}*/

// 100/100
function heroesInfo(input) {

    let result = [];

    for (let i = 0; i < input.length; i++) {
        let currentData = input[i].split(' / ');
        let name = currentData[0];
        let level = currentData[1];
        let items = [];

        if (currentData.length > 2) {
            items = currentData[2].split(', ')
        }

        let hero = {
            name: name,
            level: Number(level),
            items: items
        };

        result.push(hero);
    }

    console.log(JSON.stringify(result));
}

heroesInfo([
    'Isacc / 25',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])

