
function extractUniqueWords(input) {

    let result = new Set();

    for (let line of input) {

        let words = line.toLowerCase().split(/\W+/).filter(e => e != '');

        for (let i = 0; i < words.length; i++) {
            result.add(words[i]);
        }
    }

    console.log([...result].join(', '));
}

extractUniqueWords([
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.',
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',
    'Integer ac turpis commodo, varius nulla sed, elementum lectus.',
    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.',

])