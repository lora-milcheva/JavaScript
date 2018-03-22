
function checkStringStart(text, request) {
    let result = text.substring(0, request.length);
    console.log(result === request);
}

checkStringStart('How have you been?', 'How');