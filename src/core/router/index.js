import Vue from 'vue';
import Router from 'vue-router';
import Meta from "vue-meta";
import { store } from '../store';
import { loadLocaleAsync } from '../i18n';
import { Cookie } from '../api/utils/cookie';
import { routes } from './routes';
import { STORE } from '../types/store';
import { ROLES } from '../types/roles';
import { CONSTANTS } from '../types/constants';

Vue.use(Router);
Vue.use(Meta);

// NavigationDuplicated error (in qiwa-library 1.1.3)
// https://github.com/vuejs/vue-router/issues/2881#issuecomment-520554378
const originalReplace = Router.prototype.replace;
Router.prototype.replace = function replace(location, onResolve, onReject) {
    if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject);
    return originalReplace.call(this, location).catch((err) => err);
};

const router = new Router({
    mode: 'history',
    base: process.env.VUE_APP_BASE_URL,
    routes,
});

router.beforeEach(async (to, from, next) => {
    const lang = store.state.i18n.language;
    const isPublicRoute = to.matched.some((route) => !route.meta.auth);

    await loadLocaleAsync(lang);

    if (isPublicRoute) {
        return next();
    }

    if (Cookie.get('QIWA_SIGNED_IN')) {
        try {
            const {
                userId,
                companyId,
                roles: sessionRoles,
                permissions,
            } = await store.dispatch(STORE.SESSION.ACTION.GET);

            await store.dispatch(STORE.USER.ACTION.GET, { userId, companyId });

            if (!permissions[CONSTANTS.SERVICE_PERMISSION_NAME]) {
                return next({ name: 'forbidden' });
            }

            if (companyId) {
                await store.dispatch(STORE.COMPANY.ACTION.GET, companyId);
            }

            const isAuthorized = to.matched.some((route) => {
                if (Array.isArray(route.meta.auth.role)) {
                    return route.meta.auth.role.some((role) => sessionRoles.includes(role));
                } else {
                    return sessionRoles.includes(route.meta.auth.role);
                }
            });

            if (isAuthorized) {
                return next();
            } else {
                if (sessionRoles.some((role) => role === ROLES.ROLE_COMPANY_ADMIN)) {
                    /**
                     * TODO Need to check were to redirect user in this case
                     */
                    return next({ name: 'company' });
                }

                return next({ name: 'unauthorized' });
            }
        } catch (error) {
            return next({ name: 'error' });
        }
    } else {
        return next({ name: 'login', params: { redirect: to.path } });
    }
});

export { router };
