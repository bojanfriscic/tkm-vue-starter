import Vue from 'vue';
import Vuex from 'vuex';

import { STORE } from '../types/store';
import { user } from './modules/user';
import { session } from './modules/session';
import { company } from './modules/company';
import { i18n } from './modules/i18n';
import { navigation } from './modules/navigation';

Vue.use(Vuex);

const initialState = {
    i18n: i18n.state,
    user: user.state,
    session: session.state,
    navigation: navigation.state,
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
        company,
        i18n,
        navigation,
    },
});

export { store };
