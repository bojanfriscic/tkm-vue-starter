import axios from 'axios';
import { authInterceptor } from '../utils/authInterceptor';
import { validateStatus } from '../utils/validateStatus';

const authApi = axios.create({
    baseURL: `${process.env.VUE_APP_AUTH_API_URL}/api`,
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
    validateStatus,
});

authApi.interceptors.response.use((res) => res, authInterceptor);

export function getSession() {
    return authApi.get('session');
}

export function logout() {
    return authApi.delete('session');
}

export function getUser(company = false, userId) {
    return authApi.get(`${company ? 'corporate/company/' : ''}users/${userId}`);
}

export function getCompany(companyId) {
    return authApi.get(`companies/${companyId}`);
}

export function changeLocale(locale) {
    return authApi.put('profile/update_locale', { user: { locale } });
}
