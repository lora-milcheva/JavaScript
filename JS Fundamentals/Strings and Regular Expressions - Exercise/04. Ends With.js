
function endsWith(text, request) {
    let result = text.substring(text.length - request.length, text.length);
    console.log(result === request);
}

endsWith('How have you been?', 'm been?');