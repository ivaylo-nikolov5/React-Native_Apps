import { months, days } from "./getMonth";

function getDate() {
    let dateObj;

    const newDate = new Date();
    const date = newDate.getDate();
    const day = days[newDate.getDay()];
    const monthNum = newDate.getMonth() + 1;
    const month = months[newDate.getMonth()];
    const year = newDate.getFullYear();

    dateObj = {date: date, day: day, month: month, year: year, monthNum: monthNum}
    return dateObj;
}

export default getDate;