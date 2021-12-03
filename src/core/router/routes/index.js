import { authRedirect } from '../../api/utils/authRedirect';
import Layout from '../../../shared/components/Layout.vue';

const routes = [
    { path: '/', redirect: { name: 'company' } },
    {
        name: 'company',
        path: '/company',
        component: Layout,
        meta: {
            auth: true,
        },
    },
    {
        path: '/login',
        name: 'login',
        beforeEnter: (to, from, next) => {
            console.log(to, from, next);
            authRedirect(to.params.redirect);
            next(false);
        },
    },
];
export { routes };
