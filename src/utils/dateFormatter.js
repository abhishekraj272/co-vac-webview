import { months } from "../constants";

function dateFormatter(addDate = 0) {
    const d = new Date();
    const year = d.getFullYear();
    const date = d.getDate() + addDate;
    const monthIndex = d.getMonth();
    const monthName = months[monthIndex];
    return `${date} ${monthName}`;
};

export const get7Dates = () => {
    const arr = []
    for (let index = 0; index < 7; index++) {
        arr.push(dateFormatter(index));
    }
    return arr;
}