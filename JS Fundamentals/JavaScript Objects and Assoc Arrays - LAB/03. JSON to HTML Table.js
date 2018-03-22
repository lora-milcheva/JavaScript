
function scoreToHTML(input) {

    let data = JSON.parse(input);
    let html = '<table>\n';

    html += '  <tr>';

    for (let key of Object.keys(data[0])) {
        html += `<th>${htmlEscape(key)}</th>`;
    }

    html += '</tr>\n';

    for (let line of data) {

        html += `  <tr>`;

        for (let key of Object.keys(line)) {
            html += `<td>${htmlEscape(line[key])}</td>`;
        }

        html += `</tr>\n`;
    }

    html += '</table>';

    console.log(html);

    function htmlEscape(text) {
        if (isNaN(text)) {
            let map = { '"': '&quot;', '&': '&amp;', "'": '&#39;', '<': '&lt;', '>': '&gt;' };
            return text.replace(/[\"&'<>]/g, ch => map[ch]);
        }
        else {
            return Number(text);
        }
    }
}

scoreToHTML('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]'
);