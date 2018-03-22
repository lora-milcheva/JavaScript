
function lastMonthLastDay(input) {

    let day = input[0];
    let month = input[1];
    let year = input[2];

    let lastDay = new Date(year, month - 1 , 0);

    console.log(lastDay.getDate());

}

lastMonthLastDay([13, 12, 2004]);