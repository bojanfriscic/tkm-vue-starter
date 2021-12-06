import { actions } from './actions';
import { mutations } from './mutations';

const company = {
    state: {
        details: {},
        loading: false,
        error: null,
        fetched: false,
    },
    actions,
    mutations,
};

export { company };
