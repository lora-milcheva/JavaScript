
function  usernames(input) {

    let list = new Set();

    for (let line of input) {
        list.add(line);
    }

    let result = Array.from(list).sort(sortUsernames);

    function sortUsernames(a, b) {
        if (a.length != b.length) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    }

    console.log(result.join('\n'));
}

usernames([
    'Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot'
])