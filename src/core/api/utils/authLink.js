export function authLink(slug, redirect_uri, lang) {
    const locale = lang || localStorage.getItem('locale') || 'en';
    const authUrl = process.env.VUE_APP_AUTH_URL;
    return `${authUrl}/${locale}${slug && '/' + slug}?redirect_uri=${
        redirect_uri ? window.location.origin + redirect_uri : window.location.href
    }`;
}
