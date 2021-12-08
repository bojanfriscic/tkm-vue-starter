import { STORE } from '@types/store';

const mutations = {
    [STORE.I18N.MUTATION.SET](state, language) {
        state.language = language;
    },
};

export { mutations };
