function countWords(input) {

    let words = input.join('\n').toLowerCase().split(/\W+/).filter(x => x != '');

    let result = new Map();

    for (let w of words) {

        if (!result.has(w)) {
            result.set(w, 0);
        }
        result.set(w, result.get(w)+1);
    }

    let ordered = Array.from(result.keys()).sort();
    ordered.forEach(w => console.log(`'${w}' -> ${result.get(w)} times`));

}

countWords([`Far too slow, you're far too slow.`]);