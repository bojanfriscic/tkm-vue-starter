const STORE = {
    GLOBAL: {
        MUTATION: {
            LOADER_SET: 'global/mutation/loaderSet',
            RESET: 'global/mutation/reset',
        },
        ACTION: {
            LOADER_SET: 'global/action/loaderSet',
            RESET: 'global/action/reset',
        },
    },
    USER: {
        MUTATION: {
            FETCH: 'user/mutation/fetch',
            FETCHED: 'user/mutation/fetched',
            SET: 'user/mutation/set',
        },
        ACTION: {
            GET: 'user/action/get',
        },
    },
    COMPANY: {
        MUTATION: {
            GET: 'company/mutation/get',
            FETCH: 'company/mutation/fetch',
            FETCHED: 'company/mutation/fetched',
            SET: 'company/mutation/set',
        },
        ACTION: {
            GET: 'company/action/get',
        },
    },
    I18N: {
        MUTATION: {
            SET: 'i18n/mutation/set',
        },
        ACTION: {
            SET: 'i18n/action/set',
        },
    },
    SESSION: {
        MUTATION: {
            FETCH: 'session/mutation/fetch',
            FETCHED: 'session/mutation/fetched',
            SET: 'session/mutation/set',
        },
        ACTION: {
            GET: 'session/action/get',
            LOGOUT: 'session/action/logout',
        },
    },
    NAVIGATION: {
        MUTATION: {
            FETCH: 'navigation/mutation/fetch',
            FETCHED: 'navigation/mutation/fetched',
            SET: 'navigation/mutation/set',
        },
        ACTION: {
            GET: 'navigation/action/get',
        },
    },
};

export { STORE };
