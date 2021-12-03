import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';

const user = {
    state: {
        details: {},
        loading: false,
        error: null,
        fetched: false,
        roles: {},
    },
    mutations,
    actions,
    getters,
};

export { user };
