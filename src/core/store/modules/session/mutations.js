import { STORE } from '@types/store';

const mutations = {
    [STORE.SESSION.MUTATION.FETCH](state, loading) {
        state.loading = loading;
    },
    [STORE.SESSION.MUTATION.FETCHED](state, time) {
        state.loading = false;
        state.time = time;
    },
    [STORE.SESSION.MUTATION.SET](state, payload) {
        Object.keys(payload).forEach((key) => {
            Reflect.has(state, key) && (state[key] = payload[key]);
        });
    },
};

export { mutations };
