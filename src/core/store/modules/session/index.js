import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';

const session = {
    state: {
        roles: [],
        company: {},
        userId: null,
        companyId: null,
        loading: false,
        fetched: false,
        permissions: {},
    },
    mutations,
    actions,
    getters,
};

export { session };
