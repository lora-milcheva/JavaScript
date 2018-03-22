
function sort(arr) {

    arr.sort(function(a, b) {

        if (a.length > b.length) {
            return 1;
        } else if (a.length < b.length) {
            return -1;
        }
        else {
            if(a > b) {
                return 1;
            }
            return -1;
        }
    });

    console.log(arr.join('\n'));
}

sort(['alpha', 'beta', 'gamma']);

sort(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);

sort(['Default', 'Deny', 'test', 'deny', 'omen']);

