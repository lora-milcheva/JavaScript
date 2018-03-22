
function getUsername(input) {

    let usernames = [];

    for (let item of input) {
        let currentUser = item.split('@');
        let name = currentUser[0];
        let domain = currentUser[1].split('.').map(e => e[0]).join('');

        usernames.push(`${name}.${domain}`);
    }
    console.log(usernames.join(', '));
}

getUsername(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);