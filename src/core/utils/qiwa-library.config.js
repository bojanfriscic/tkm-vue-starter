import Api from '../api';

export const qiwaLibraryApi = {
    logout: async () => {
        try {
            await Api.auth.logout();
        } catch (error) {
            return error;
        }
    },
    // fetchViolations: Api.violations.fetchViolations,
};

export const qiwaLibraryUrls = {
    productRegistryApi: process.env.VUE_APP_REGISTRY_API_URL,
    notificationsApi: process.env.VUE_APP_NOTIFICATIONS_API_URL,
    authApi: process.env.VUE_APP_AUTH_API_URL,
    authSpa: process.env.VUE_APP_AUTH_URL,
    dashboardSpa: process.env.VUE_APP_DASHBOARD_SPA_URL,
    landingSpa: process.env.VUE_APP_QIWA_URL,
    lmi: process.env.VUE_APP_LMI_URL,
    policies: process.env.VUE_APP_POLICIES_URL,
    knowledge: process.env.VUE_APP_KNOWLEDGE_URL,
};
