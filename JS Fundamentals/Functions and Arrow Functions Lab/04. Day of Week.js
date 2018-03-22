
function dayOfWeek(input) {

    let weekDays = { 'Monday': 1, 'Tuesday':2, 'Wednesday': 3, 'Thursday': 4, 'Friday': 5, 'Saturday':6, 'Sunday':7 };

    for (let obj in weekDays) {
        if (obj == input) {
            return(weekDays[obj]);
        }
    }

    return ('error');
}

console.log(dayOfWeek('me'));;