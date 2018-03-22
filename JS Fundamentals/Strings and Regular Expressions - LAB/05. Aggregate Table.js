
function aggregateTable(input) {

    let towns = [];
    let sum = 0;

    for (let item of input) {
        let currentData = item.split('|').filter(e => e != '').map(e => e.trim());
        let town = currentData[0];
        let income = Number(currentData[1]);

        towns.push(town);
        sum += income;
    }

    console.log(towns.join(', '));
    console.log(sum);
}

aggregateTable(['| Sofia           | 300', '| Veliko Tarnovo  | 500', '| Yambol          | 275']);