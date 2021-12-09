import { mapState, mapGetters, mapActions } from 'vuex';
import { Layout as QLayout } from 'qiwa-library/src/components/layout';

import { STORE } from '@types/store';
import { isCompanyAdmin } from '@utils/roles';
import { mockupLoaderFunction } from '@utils/mockupLoader';
import { parseDate } from '@shared/filters/dateParser';

export default {
    name: 'Layout',
    components: {
        QLayout,
    },
    data() {
        return {
            isMock: process.env.VUE_APP_MOCKMODE === 'enabled',
        };
    },
    computed: {
        ...mapState({
            loading: (state) => state.loading,
            session: (state) => state.session,
            language: (state) => state.i18n.language,
            menuItems: (state) => state.navigation.items,
            companyName: (state) => state.company.details.name,
            user: (state) => state.user,
        }),
        ...mapGetters({
            userName: 'getFullName',
            userDetailsData: 'getUserDetails',
        }),
        userDetails() {
            return { ...this.userDetailsData, name: this.userName };
        },
        dashboardService() {
            const fileName = 'dashboardServicesMock';
            if (!mockupLoaderFunction(fileName)) return { ...this.userDetailsData, name: this.userName };
            return mockupLoaderFunction(fileName);
        },
        userRole() {
            const { roles: sessionRoles } = this.session;

            if (!sessionRoles.length) return;

            if (isCompanyAdmin(sessionRoles)) return 'CORE.DASHBOARD.COMPANY_ADMIN';
            return 'CORE.DASHBOARD.EMPLOYEE';
        },
    },
    mounted() {
        this.fetchMenuItems();
    },
    methods: {
        ...mapActions({
            changeLang: STORE.I18N.ACTION.SET,
            fetchMenuItems: STORE.NAVIGATION.ACTION.GET,
        }),
        dateFormating: parseDate,
    },
};
