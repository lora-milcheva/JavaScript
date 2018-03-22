
function capitalizeWords(input) {

    let arr = input.split(/\s/).map(w => w.toLowerCase()).map(w => w[0].toUpperCase() + w.substr(1));
    console.log(arr.join(' '));
}

capitalizeWords('Was that Easy? tRY thIs onE for SiZe!');