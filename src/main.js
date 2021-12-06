import 'qiwa-library/src/assets/scss/_qiwa-main.scss';

import Vue from 'vue';
import QiwaLibrary from 'qiwa-library';
import { qiwaLibraryApi, qiwaLibraryUrls } from './core/utils/qiwa-library.config';
// import Buefy from 'buefy';

import App from './App.vue';
import { store } from './core/store';
import { router } from './core/router';

Vue.config.productionTip = false;
Vue.config.devtools = process.env.NODE_ENV !== "production";

// Vue.use(Buefy);
Vue.use(QiwaLibrary, {
    Api: qiwaLibraryApi,
    urlsList: qiwaLibraryUrls,
    store,
    // layoutToInstall: ['Header', 'Sidebar', 'Footer', 'Layout'],
    // uiToInstall: ['SteperList'],
});

new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount('#app');
