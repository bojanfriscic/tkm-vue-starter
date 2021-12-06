import 'qiwa-library/src/assets/scss/_qiwa-main.scss';

import Vue from 'vue';
import QiwaLibrary from 'qiwa-library';
import VeeValidate, { Validator } from 'vee-validate';
import { qiwaLibraryApi, qiwaLibraryUrls } from './core/utils/qiwa-library.config';
// import Buefy from 'buefy';

import App from './App.vue';
import { store } from './core/store';
import { i18n } from './i18n';
import { router } from './core/router';

Vue.config.productionTip = false;

/**
 * ! It should be true only for DEV enviroment (tip: process.env.NODE_ENV === "development")
 * * .env file currently doesn't exist
 */
Vue.config.devtools = true;

Vue.use(VeeValidate, {
    i18nRootKey: 'CORE.ERRORS',
    i18n,
    useConstraintAttrs: false,
});

// Vue.use(Buefy);
Vue.use(QiwaLibrary, {
    Api: qiwaLibraryApi,
    urlsList: qiwaLibraryUrls,
    store,
    // layoutToInstall: ['Header', 'Sidebar', 'Footer', 'Layout'],
    // uiToInstall: ['SteperList'],
});

new Vue({
    i18n,
    store,
    router,
    render: (h) => h(App),
}).$mount('#app');
