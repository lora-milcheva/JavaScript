
function createTemplate(input) {

    let code = '<?xml version="1.0" encoding="UTF-8"?>\n' + '<quiz>\n';

    for (let i = 0; i < input.length; i += 2) {
        let currentQuestion = input[i];
        let currentAnswer = input[i+1];
        code += addTemplateBlock(currentQuestion, currentAnswer);
    }

    function addTemplateBlock(question, answer) {
        let html = '';
        html += '  <question>\n' + '    ' + question + '\n' + '  </question>\n';
        html += '  <answer>\n' + '    ' + answer + '\n' + '  </answer>\n';
        return html;
    }

    code += '</quiz>';
    return code;
}


console.log(createTemplate(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]
));