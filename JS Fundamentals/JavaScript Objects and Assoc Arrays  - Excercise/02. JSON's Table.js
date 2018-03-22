
function html(input) {
    let html = '<table>\n';

    for (let i = 0; i < input.length; i++) {
        let data = JSON.parse(input[i]);
        html += '\t<tr>\n';
        html += `\t\t<td>${data.name}</td>\n`;
        html += `\t\t<td>${data.position}</td>\n`;
        html += `\t\t<td>${data.salary}</td>\n`;
        html += '\t</tr>\n';
    }

    html += '</table>';
    console.log(html);
}

html([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'

])