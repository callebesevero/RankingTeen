export function getSaturday() {
    const date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const dayOfWeek = date.getDay();

    const saturday = dayOfWeek === 6 
        ? day 
        : day - (dayOfWeek + 1);

    const saturdayDate = (saturday <= 0)
        ? new Date(year, month - 1, new Date(year, month, 0).getDate() - -saturday)
        : new Date(year, month, saturday);

    return saturdayDate.toLocaleDateString("pt-BR", {day: "2-digit", month: "long", year: "numeric"}) // return last saturday date number
};
