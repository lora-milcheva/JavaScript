
function extractWords(str) {

    let result = extractToUpper(str);
    
    function extractToUpper(input) {return input.toUpperCase().split(/\W+/).filter(w => w != '');}

    return result.join(', ')
    
}

console.log(extractWords('Hi, how are you?'));