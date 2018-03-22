
function escapeSpecialCharacters(text) {

    return "<ul>\n" + text.map(htmlEscape).map(item => `  <li>${item}</li>`).join("\n") + "\n</ul>";

    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;', "'": '&#39;', '<': '&lt;', '>': '&gt;' };

        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}

console.log(escapeSpecialCharacters(['<b>unescaped text</b>', 'normal text']));;