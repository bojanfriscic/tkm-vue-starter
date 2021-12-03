import Vue from 'vue';
import QiwaLibrary from 'qiwa-library';

import { qiwaLibraryApi, qiwaLibraryUrls } from './core/utils/qiwa-library.config';
import 'qiwa-library/src/assets/scss/_qiwa-main.scss';

import App from './App.vue';
import { store } from './core/store';
import router from './core/router';

Vue.config.productionTip = false;

Vue.use(QiwaLibrary, {
    Api: qiwaLibraryApi,
    urlsList: qiwaLibraryUrls,
    store,
    layoutToInstall: ['Box', 'Sidebar', 'Spinner', 'TableList', 'Footer', 'Header', 'Layout', 'Modal'],
    uiToInstall: ['SteperList'],
});

new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount('#app');
