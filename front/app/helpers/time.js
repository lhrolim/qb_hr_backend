export const periodsToTime = (periods) => {
    const months = periods*6
    const remainder = months % 12;
    if (remainder !== 0) {
        return months + ' meses'
    } else {
        return months/12 + ' anos'
    }
}