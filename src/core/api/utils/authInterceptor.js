import { authRedirect } from './authRedirect';

export const authInterceptor = (err) => {
    if (err && err.response && err.response.status === 401) {
        authRedirect();
    } else {
        return Promise.reject(err);
    }
};
