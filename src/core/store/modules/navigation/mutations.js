import { STORE } from '../../../types/store';

const mutations = {
    [STORE.NAVIGATION.MUTATION.FETCH](state, loading) {
        state.loading = loading;
    },
    [STORE.NAVIGATION.MUTATION.FETCHED](state, time) {
        state.loading = false;
        state.fetched = time;
    },
    [STORE.NAVIGATION.MUTATION.SET](state, items) {
        state.items = items;
    },
};

export { mutations };
