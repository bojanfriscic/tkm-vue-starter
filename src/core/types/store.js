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
        ACTION: {
            GET: 'company/action/get',
        },
        MUTATION: {
            GET: 'company/mutation/get',
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
};

export { STORE };