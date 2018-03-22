
function emailCheck(input) {

    let regex = /^[A-Za-z0-9]+@[a-z]+\.[a-z]+$/g;
    let result = regex.test(input);

    if (!result) {
        console.log('Invalid');
        return;
    }
    console.log('Valid');
}

emailCheck('valid@email.bg')