
function splitText(text) {
    let elements = text.split(/[\s.();,]+/);
    console.log(elements.join("\n"));
}

splitText('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}');