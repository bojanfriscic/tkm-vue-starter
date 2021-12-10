import { api } from '@api';
import { authRedirect } from '@api/utils/authRedirect';
import { isExpired } from '@api/utils/isExpired';
import { STORE } from '@types/store';
import { ROLES } from '@types/roles';

const actions = {
    [STORE.SESSION.ACTION.GET]: async function ({ commit, state }, payload) {
        const { forced } = payload ?? {};

        if (!forced && !isExpired(state.fetched)) return state;

        try {
            commit(STORE.SESSION.MUTATION.FETCH, true);

            const { data: session } = await api.auth.getSession();
            const { user, roles, company, permissions } = session;
            const sessionRoles = roles || [];

            if (user[ROLES.ROLE_MLSD_ADMIN]) sessionRoles.push(ROLES.ROLE_MLSD_ADMIN);

            const sessionData = {
                roles: sessionRoles,
                userId: user.id,
                companyId: company ? company.id : null,
                ...(company ? { company } : {}),
                permissions,
            };

            commit(STORE.SESSION.MUTATION.FETCHED, new Date().getTime());
            commit(STORE.SESSION.MUTATION.SET, sessionData);
            commit(STORE.USER.MUTATION.SET, { workspaces: user.workspaces });

            return {
                roles: sessionRoles,
                userId: user.id,
                companyId: company ? company.id : null,
                permissions,
            };
        } catch (error) {
            commit(STORE.SESSION.MUTATION.FETCH, false);
            return error;
        }
    },
    [STORE.SESSION.ACTION.LOGOUT]: async function ({ dispatch }) {
        try {
            await api.auth.logout();
            dispatch(STORE.GLOBAL.ACTION.RESET);
            authRedirect('/dashboard');
        } catch (error) {
            return error;
        }
    },
};

export { actions };
