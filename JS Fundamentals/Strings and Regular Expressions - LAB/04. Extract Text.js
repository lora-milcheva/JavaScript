
function extractText(text) {

    let startIndex = text.indexOf('(');
    let result = [];

    while (startIndex > -1) {
        let endIndex = text.indexOf(')', startIndex);
        let extraction = text.substring(startIndex + 1, endIndex);

        if (endIndex == -1) break;

        result.push(extraction);
        startIndex = text.indexOf('(', endIndex);
    }
    console.log(result.join(', '));
}
extractText('Rakiya (Bulgarian brandy) (is self-made liquor (alcoholic drink)');