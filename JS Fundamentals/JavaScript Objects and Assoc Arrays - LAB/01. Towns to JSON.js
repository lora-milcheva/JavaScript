
function townsToJSON(input) {

    let result = [];
    input.shift();

    for (let line of input) {
        let data = line.split('|').filter(e => e != '').map(e => e.trim());
        let town = {'Town': data[0], 'Latitude': Number(data[1]), 'Longitude': Number(data[2])};
        result.push(town);
    }

    console.log(JSON.stringify(result));
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)