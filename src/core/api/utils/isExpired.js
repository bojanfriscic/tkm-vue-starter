const EXPIRATION_PERIOD = 15 * 60 * 1000;

export function isExpired(fetchedTime) {
    const now = new Date();
    const expirationTime = fetchedTime + EXPIRATION_PERIOD;

    return expirationTime < now.getTime();
}
