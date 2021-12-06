import actions from './actions';
import mutations from './mutations';

const localStorageLocale = localStorage.getItem('locale') || 'ar';

const i18n = {
    state: {
        language: localStorageLocale,
    },
    actions,
    mutations,
};

export { i18n };
