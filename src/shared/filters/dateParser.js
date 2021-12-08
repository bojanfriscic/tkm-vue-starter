function parseDate(DateString) {
    var d = new Date(DateString);
    return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
}

export { parseDate };
