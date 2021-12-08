import { mapState, mapGetters, mapActions } from 'vuex';
import { Layout as QLayout } from 'qiwa-library/src/components/layout';

import { STORE } from '@types/store';
import { isCompanyAdmin } from '@utils/roles';

export default {
    name: 'Layout',
    components: {
        QLayout,
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
        userRole() {
            const { roles: sessionRoles } = this.session;

            if (!sessionRoles.length) return;

            if (isCompanyAdmin(sessionRoles)) {
                return 'CORE.DASHBOARD.COMPANY_ADMIN';
            } else {
                return 'CORE.DASHBOARD.EMPLOYEE';
            }
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
    },
};
