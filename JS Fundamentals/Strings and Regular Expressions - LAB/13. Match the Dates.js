
function matchDate(input) {

    let regex = /\b(\d{1,2})-([A-Z][a-z]{2})-(\d{4})\b/gm;
    let date;

    for (let line of input) {

        while (date = regex.exec(line)) {

            let fullDate = date[0];
            let day = date[1];
            let month = date[2];
            let year = date[3];

            console.log(`${fullDate} (Day: ${day}, Month: ${month}, Year: ${year})`)
        }
    }
}

matchDate(['1-Jan-1999 is a valid date 2-Jan-1999.', 'So is 01-July-2000.', 'I am an awful liar, by the way – Ivo, 28-Sep-2016.' ])