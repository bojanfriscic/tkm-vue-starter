import Api from '../api';

export const qiwaLibraryApi = {
    logout: async () => {
        try {
            await Api.auth.logout();
        } catch (error) {
            return error;
        }
    },
    fetchViolations: Api.violations.fetchViolations,
};

export const qiwaLibraryUrls = {
    productRegistryApi: 'https://products-registry.api.qiwa.info',
    notificationsApi: 'https://notifications.api.qiwa.info',
    authApi: 'https://auth-api.qiwa.info',
    authSpa: 'https://auth.qiwa.info',
    dashboardSpa: 'https://spa.qiwa.info',
    landingSpa: 'https://qiwa.info',
    lmi: 'https://index.qiwa.info',
    policies: 'https://policies.qiwa.info',
    knowledge: 'https://knowledge.qiwa.info',
};
