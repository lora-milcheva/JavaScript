function countOccurences(text, word) {

    let regex = new RegExp(`\\b${word}\\b`,'gmi');
    let test;
    let count = 0;

    while (test = regex.exec(text)){
        count++;
    }

    console.log(count);
}


countOccurences('The waterfall was so high, that the child couldn’t see its peak.', 'the');