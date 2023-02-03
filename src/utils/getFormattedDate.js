
export function getFormattedDate(date) {
    const dateObject = new Date(date)
    let year = dateObject.getFullYear();
    let month = (1 + dateObject.getMonth()).toString().padStart(2, '0');
    let day = dateObject.getDate().toString().padStart(2, '0');
    
    return `${month}/${day}/${year}`;
}
