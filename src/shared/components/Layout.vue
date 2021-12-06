<template>
    <div class="layout-dashboard">
        <QLayout
            :userRole="$t(userRole)"
            :companyName="companyName"
            :user="userDetails"
            :lang="language"
            @changeLang="changeLang"
            @changeLangErr="changeLang"
            :nav_items="menuItems"
            :loading="loading"
        >
            <div class="content">
                Hello user {{ userDetails.id }}
            </div>
        </QLayout>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import { Layout as QLayout } from 'qiwa-library/src/components/layout';

import{ STORE } from '../../core/types/store';
import { isCompanyAdmin } from '../../core/utils/roles';

export default {
    name: "Layout",
    components: {
        QLayout,
    },
    computed: {
        ...mapState({
            loading: state => state.loading,
            session: state => state.session,
            language: "en",
            // language: state => state.i18n.language,
            menuItems: state => state.navigation.items,
            companyName: "Company Name",
            // companyName: state => state.company.details.name,
            user: state => state.user,
        }),
        ...mapGetters({
            userName: "getFullName",
            userDetailsData: "getUserDetails",
        }),
        userDetails() {
            return { ...this.userDetailsData, name: this.userName };
        },
        userRole() {
            const { roles: sessionRoles } = this.session;

            if (!sessionRoles.length) return;

            if (isCompanyAdmin(sessionRoles)) {
                return "CORE.DASHBOARD.COMPANY_ADMIN";
            } else {
                return "CORE.DASHBOARD.EMPLOYEE";
            }
        },
        // routeLinks() {
        //     if (isCompanyAdmin(this.session.roles)) {
        //         return [
        //             {
        //                 name: "company-dashboard",
        //                 icon: "icon-dashboard",
        //                 t: "SIDEBAR.LINKS.DASHBOARD",
        //             },
        //         ];
        //     }
        //     return [];
        // },
    },
    mounted() {
        this.fetchMenuItems();
    },
    methods: {
        // TODO Remove it once changeLang action is implemented
        changeLang(lang) {
            this.language = lang;
        },
        ...mapActions({
            // changeLang: types.ACTION_LOCALE_SET,
            fetchMenuItems: STORE.NAVIGATION.ACTION.GET,
        }),
    },
};
</script>

<style lang="scss">
    .layout-dashboard {
        display: flex;
        min-height: 100vh;
        letter-spacing: 0;
        background-color: white;

        .q-page {
            flex: 1;
        }
    }

    .content {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 300px;
    }
</style>
