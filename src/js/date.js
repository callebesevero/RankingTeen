function getSaturday() {
    const date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const dayOfWeek = date.getDay();

    /*
    new Date().getDay() -> ordem do dia da semana
    new Date().getDate() -> numero do dia
    */

    const saturday = dayOfWeek === 6 
        ? day 
        : day - (dayOfWeek + 1);

    return saturday; // return last saturday date number
}
