function mockupLoaderFunction(MockFileName) {
    if (process.env.VUE_APP_MOCKMODE === 'enabled') return require(`@mocks/${MockFileName}.json`);
    else return;
}
export { mockupLoaderFunction };
