// 100/100
function uniqueSequences(data) {
    let arrays = new Map;
    for (let line of data) {
        let array = JSON.parse(line).map(Number).sort((a, b) => b - a);
        let toStore = `[${array.join(', ')}]`;
        if (!arrays.has(toStore))
            arrays.set(toStore, array.length);
    }

    console.log([...arrays.keys()].sort((a, b) => arrays.get(a) -arrays.get(b)).join('\n'));
}


/*sortArrays(
    [[-3,-2,-1,0,1,2,3,4],
    [10, 1, -17, 0, 2, 13],
    [4, -3, 3, -2, 2, -1, 1, 0]]
)*/

sortArrays([
    '[7.14, 7.180, 7.339, 80.099]',
    '[7.339, 80.0990, 7.140000, 7.18]',
    '[7.339, 7.180, 7.14, 80.099]'
]);

// mine - error with empty spaces
function sortArrays(input) {
    let result = new Set();
    for (let line of input) {
        line = JSON.parse(line).map(Number).sort((a, b) => b - a);
        line = JSON.stringify(line);
        result.add(line);
    }
    let test = [...result].map(e => JSON.parse(e)).sort((a, b) => a.length > b.length).forEach(e => console.log(e));
}


/*
let a =[];
let b = [0, 1, 2];
let c = [5, 6, 7];
a.push(b);
a.push(c);
console.log(JSON.stringify(a));
*/
