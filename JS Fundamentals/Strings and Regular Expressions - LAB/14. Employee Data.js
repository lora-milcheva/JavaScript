
function extractData(input) {

    let regex = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/;

    for (let line of input) {
        let data = regex.exec(line);

        if (data) {
            let name = data[1];
            let position = data[3];
            let salary = data[2];

            console.log(`Name: ${name}\nPosition: ${position}\nSalary: ${salary}`)
        }
    }
}

extractData(['Jonathan - 2000 - Manager', 'Peter- 1000- Chuck', 'George - 1000 - Team Leader' ]);