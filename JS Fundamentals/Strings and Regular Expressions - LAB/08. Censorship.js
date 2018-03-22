
function censorText(text, words) {
    for (let word of words) {
        let censure = '-'.repeat(word.length);
        while (text.indexOf(word) > -1) {
            text = text.replace(word, censure)
        }
    }
    console.log(text);
}

censorText('I like C#, HTML, JS and PHP',['C#', 'HTML', 'PHP']);
