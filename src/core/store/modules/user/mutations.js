import { STORE } from '../../../types/store';

const mutations = {
    [STORE.USER.MUTATION.FETCH](state, loading) {
        state.loading = loading;
    },
    [STORE.USER.MUTATION.FETCHED](state, time) {
        state.loading = false;
        state.fetched = time;
    },
    [STORE.USER.MUTATION.SET](state, payload) {
        state.details = Object.assign({}, state.details, payload);
    },
};

export { mutations };
