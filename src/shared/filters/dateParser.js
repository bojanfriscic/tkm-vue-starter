function parseDate(DateString) {
    const d = new Date(DateString);
    return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
}

export { parseDate };
