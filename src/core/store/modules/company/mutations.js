import { STORE } from '../../../types/store';

const mutations = {
    [STORE.COMPANY.MUTATION.FETCH](state, loading) {
        state.loading = loading;
    },
    [STORE.COMPANY.MUTATION.FETCHED](state, time) {
        state.loading = false;
        state.fetched = time;
    },
    [STORE.COMPANY.MUTATION.SET](state, payload) {
        state.details = Object.assign({}, state.details, payload);
    },
};

export { mutations };
