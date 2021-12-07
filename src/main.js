import 'qiwa-library/src/assets/scss/_qiwa-main.scss';

import Vue from 'vue';
import * as VeeValidate from 'vee-validate';
// import Buefy from 'buefy';
// import QiwaLibrary from 'qiwa-library';
// import { qiwaLibraryApi, qiwaLibraryUrls } from './core/utils/qiwa-library.config';

import App from './App.vue';
import { store } from './core/store';
import { i18n } from './i18n';
import { router } from './core/router';

Vue.config.productionTip = false;
Vue.config.devtools = process.env.NODE_ENV !== "production";

Vue.use(VeeValidate, {
    i18nRootKey: 'CORE.ERRORS',
    i18n,
    useConstraintAttrs: false,
});

// Vue.use(Buefy);
// Vue.use(QiwaLibrary, {
//     Api: qiwaLibraryApi,
//     urlsList: qiwaLibraryUrls,
//     store,
//     layoutToInstall: ['Header', 'Sidebar', 'Footer', 'Layout'],
//     uiToInstall: ['SteperList'],
// });

new Vue({
    i18n,
    store,
    router,
    render: (h) => h(App),
}).$mount('#app');
