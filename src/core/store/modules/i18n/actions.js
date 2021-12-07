import Api from '../../../api';
import { loadLocaleAsync } from '../../../i18n';
import { STORE } from '../../../types/store';

const actions = {
    [STORE.I18N.ACTION.SET]: async function ({ commit, dispatch }, locale) {
        try {
            dispatch(STORE.GLOBAL.ACTION.LOADER_SET, true);

            await Api.auth.changeLocale(locale);
            await loadLocaleAsync(locale);

            commit(STORE.I18N.MUTATION.SET, locale);
            dispatch(STORE.GLOBAL.ACTION.LOADER_SET, false);
            return dispatch(STORE.NAVIGATION.ACTION.GET);
        } catch (error) {
            dispatch(STORE.GLOBAL.ACTION.LOADER_SET, false);
            return error;
        }
    },
};

export { actions };
