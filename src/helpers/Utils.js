export const daysCalc = (oldDate) => {
    const date = new Date(oldDate).getTime();
    const now = new Date().getTime();

    const difference_time = now - date;
  
    return Math.floor(difference_time / (1000 * 3600 * 24)) + ' days ago';
}