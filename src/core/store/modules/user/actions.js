import { api } from '@api';
import { isExpired } from '@api/utils/isExpired';
import { STORE } from '@types/store';
import { ROLES } from '@types/roles';

const actions = {
    [STORE.USER.ACTION.GET]: async ({ commit, state }, { userId, companyId }) => {
        if (!isExpired(state.fetched)) {
            return state;
        }

        try {
            commit(STORE.USER.MUTATION.FETCH, true);
            const { data: account } = await api.auth.getUser(userId, companyId);

            const user = {
                first_name: account.first_name, // We need to pass first name to Qiwa Library.
                last_name: account.last_name, // We need to pass last name to Qiwa Library.
                ...account.user,
                ...(account[ROLES.ROLE_MLSD_ADMIN] && { mlsd_admin: account[ROLES.ROLE_MLSD_ADMIN] }),
                ...(account[ROLES.ROLE_MLSD_ADMIN] && { [ROLES.ROLE_MLSD_ADMIN]: account[ROLES.ROLE_MLSD_ADMIN] }),
                ...(account.super && { super: account.super }),
            };

            commit(STORE.USER.MUTATION.FETCHED, new Date().getTime());
            commit(STORE.USER.MUTATION.SET, user);
        } catch (error) {
            commit(STORE.USER.MUTATION.FETCH, false);
            return error;
        }
    },
};

export { actions };
