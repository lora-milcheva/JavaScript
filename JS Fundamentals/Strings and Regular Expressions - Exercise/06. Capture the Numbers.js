

getNumbers(['The300', 'What is that?', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45']);


function getNumbers(input) {

    let regex = /\d+/g;
    let result = [];
    let test;

    for (let line of input) {
        while (test = regex.exec(line)){
            result.push(test[0]);
        }
    }

    console.log(result.join(' '));
}