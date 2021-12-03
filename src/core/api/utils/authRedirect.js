import { authLink } from './authLink';

export function authRedirect(redirect_uri, lang) {
    window.location.assign(authLink('sign-in', redirect_uri, lang));
}
