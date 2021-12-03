import Vue from 'vue';
import Vuex from 'vuex';

import { STORE } from '../types/store';
import { user } from './modules/user';
import { session } from './modules/session';

Vue.use(Vuex);

const initialState = {
    i18n: {},
    user: user.state,
    session: session.state,
    navigation: {},
};

const store = new Vuex.Store({
    state: {
        loading: false,
    },
    mutations: {
        [STORE.GLOBAL.MUTATION.LOADER_SET](state, loading) {
            state.loading = loading;
        },
        [STORE.GLOBAL.MUTATION.RESET](state) {
            Object.keys(state).forEach((key) => {
                Object.assign(state[key], initialState[key]);
            });
        },
    },
    actions: {
        [STORE.GLOBAL.ACTION.LOADER_SET]({ commit }, payload) {
            commit(STORE.GLOBAL.MUTATION.LOADER_SET, payload);
        },
        [STORE.GLOBAL.ACTION.RESET]({ commit }) {
            commit(STORE.GLOBAL.MUTATION.RESET);
        },
    },
    modules: {
        user,
        session,
    },
});

export { store };
