import { authRedirect } from '../../api/utils/authRedirect';
import { Layout } from '../../../core/hoc/Layout';
import { ErrorPage } from '../../../views/ErrorPage';
import { ROLES } from '../../types/roles';

const routes = [
    {
        path: '/',
        redirect: {
            name: 'company',
        },
    },
    {
        name: 'company',
        path: '/company',
        component: Layout,
        meta: {
            auth: {
                role: ROLES.ROLE_COMPANY_ADMIN,
            },
        },
    },
    {
        path: '/not-found',
        name: '404',
        component: ErrorPage,
    },
    {
        path: '/error',
        name: 'error',
        component: ErrorPage,
    },
    {
        path: '/forbidden',
        name: 'forbidden',
        component: ErrorPage,
    },
    {
        path: '/unauthorized',
        name: 'unauthorized',
        component: ErrorPage,
    },
    {
        path: '/login',
        name: 'login',
        beforeEnter: (to, from, next) => {
            authRedirect(to.params.redirect);
            next(false);
        },
    },
];

export { routes };
