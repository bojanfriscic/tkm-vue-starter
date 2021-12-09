import { authRedirect } from '@api/utils/authRedirect';
import { DashboardPage } from '@views/DashboardPage';
import { ErrorPage } from '@views/ErrorPage';
import { ROUTES } from '@types/routes';
import { ROLES } from '@types/roles';

    
const routes = [
    {
        path: '/',
        redirect: {
            name: ROUTES.DASHBOARD.NAME,
        },
    },
    {
        path: ROUTES.DASHBOARD.PATH,
        name: ROUTES.DASHBOARD.NAME,
        component: DashboardPage,
        meta: {
            auth: {
                role: ROLES.ROLE_COMPANY_ADMIN,
            },
        },
    },
    {
        path: ROUTES.NOT_FOUND.PATH,
        name: ROUTES.NOT_FOUND.NAME,
        component: ErrorPage,
    },
    {
        path: ROUTES.ERROR.PATH,
        name: ROUTES.ERROR.NAME,
        component: ErrorPage,
    },
    {
        path: ROUTES.FORBIDDEN.PATH,
        name: ROUTES.FORBIDDEN.NAME,
        component: ErrorPage,
    },
    {
        path: ROUTES.UNAUTHORIZED.PATH,
        name: ROUTES.UNAUTHORIZED.NAME,
        component: ErrorPage,
    },
    {
        path: ROUTES.LOGIN.PATH,
        name: ROUTES.LOGIN.NAME,
        beforeEnter: (to, from, next) => {
            authRedirect(to.params.redirect);
            next(false);
        },
    },
];

export { routes };
