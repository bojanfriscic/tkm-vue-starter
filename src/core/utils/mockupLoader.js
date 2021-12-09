function mockupLoaderFunction(MockFileName) {
    return process.env.VUE_APP_MOCKMODE === 'enabled' && require(`@mocks/${MockFileName}.json`);
}

export { mockupLoaderFunction };
