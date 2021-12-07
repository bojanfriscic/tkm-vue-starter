import { api } from '../../../api';
import { isExpired } from '../../../api/utils/isExpired';
import { STORE } from '../../../types/store';

const actions = {
    [STORE.COMPANY.ACTION.GET]: async function ({ commit, state }, companyId) {
        if (!isExpired(state.fetched)) return state.roles;

        try {
            commit(STORE.COMPANY.MUTATION.FETCH, true);

            const { data: company } = await api.auth.getCompany(companyId);

            commit(STORE.COMPANY.MUTATION.FETCHED, new Date().getTime());
            commit(STORE.COMPANY.MUTATION.SET, company);
        } catch (error) {
            commit(STORE.COMPANY.MUTATION.FETCH, false);
            return error;
        }
    },
};

export { actions };
