
function addRemoveNumbers(arr) {

    let result = [1];

    for (let i = 1; i <= arr.length; i++) {

        let currentCommand = arr[i];

        switch (currentCommand) {
            case 'add': result.push(i + 1); break;
            case 'remove': result.pop();
        }
    }

    if (result.length > 0) {
        console.log(result.join('\n'));
    }
    else {
        console.log('Empty');
    }
}

addRemoveNumbers(['remove', 'remove', 'remove']);