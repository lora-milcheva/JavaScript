

function concatenateReversed(input) {

    let chars = Array.from(input.join(''));
    return chars.reverse().join('');
}

concatenateReversed(['I', 'am', 'student'])