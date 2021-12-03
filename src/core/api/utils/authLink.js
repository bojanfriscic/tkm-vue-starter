export function authLink(slug, redirect_uri, lang) {
    const locale = lang || localStorage.getItem('locale') || 'en';
    const authUrl = 'https://auth.qiwa.info';
    return `${authUrl}/${locale}${slug && '/' + slug}?redirect_uri=${
        redirect_uri ? window.location.origin + redirect_uri : window.location.href
    }`;
}
