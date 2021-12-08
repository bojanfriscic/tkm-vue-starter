import 'qiwa-library/src/assets/scss/_qiwa-main.scss';
import '@assets/scss/index.scss';

import Vue from 'vue';
import * as VeeValidate from 'vee-validate';

import App from './App.vue';
import { store } from '@store';
import { i18n } from '@i18n';
import { router } from '@router';

Vue.config.productionTip = false;
Vue.config.devtools = process.env.NODE_ENV !== 'production';

Vue.use(VeeValidate, {
    i18nRootKey: 'CORE.ERRORS',
    i18n,
    useConstraintAttrs: false,
});

new Vue({
    i18n,
    store,
    router,
    render: (h) => h(App),
}).$mount('#app');
