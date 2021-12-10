function setCookie(name, value, days) {
    const date = new Date();
    let expires = '';

    if (days) {
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = `; expires=${date.toGMTString()}`;
    }

    document.cookie = `${name}=${value}${expires}; path=/`;
}

function getCookie(name) {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');

    for (let cookie of ca) {
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }

        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }

    return null;
}

function clearCookie(name) {
    setCookie(name, '', -1);
}

const Cookie = {
    set: setCookie,
    get: getCookie,
    clear: clearCookie,
};

export { Cookie };
