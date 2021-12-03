import Api from '../../../api';
import { isExpired } from '../../../api/utils/isExpired';
import { STORE } from '../../../types/store';
import { ROLE_MLSD_ADMIN } from '../../../types/roles';

const actions = {
    [STORE.USER.ACTION.GET]: async ({ commit, state }, { userId, companyId }) => {
        console.log('user fetch');

        if (!isExpired(state.fetched)) {
            return state;
        }

        try {
            commit(STORE.USER.MUTATION.FETCH, true);
            const { data: account } = await Api.auth.getUser(companyId, userId);

            const user = {
                first_name: account.first_name, // We need to pass first name to Qiwa Library.
                last_name: account.last_name, // We need to pass last name to Qiwa Library.
                ...account.user,
                ...(account[ROLE_MLSD_ADMIN] && { mlsd_admin: account[ROLE_MLSD_ADMIN] }),
                ...(account[ROLE_MLSD_ADMIN] && { [ROLE_MLSD_ADMIN]: account[ROLE_MLSD_ADMIN] }),
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
