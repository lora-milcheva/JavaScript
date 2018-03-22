
function generateHTML (input) {

    let fileLocation = input[0];
    let altText = input[1];

    console.log(`<img src="${fileLocation}" alt="${altText}">`);

}

generateHTML(['smiley.gif', 'Smiley Face'])