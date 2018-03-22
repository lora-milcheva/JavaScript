
function split(string, delimeter) {
    let result = string.split(delimeter);
    console.log(result.join('\n'));
}

split('One-Two-Three-Four-Five', '-');