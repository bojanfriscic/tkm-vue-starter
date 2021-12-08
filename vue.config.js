// vue.config.js
const path = require('path');
module.exports = {
    devServer: {
        host: 'violation.qiwa.info',
        https: true,
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@assets': path.resolve(__dirname, './src/assets'),
                '@core': path.resolve(__dirname, './src/core'),
                '@api': path.resolve(__dirname, './src/core/api'),
                '@i18n': path.resolve(__dirname, './src/core/i18n'),
                '@hoc': path.resolve(__dirname, './src/core/hoc'),
                '@plugins': path.resolve(__dirname, './src/core/plugins'),
                '@router': path.resolve(__dirname, './src/core/router'),
                '@store': path.resolve(__dirname, './src/core/store'),
                '@types': path.resolve(__dirname, './src/core/types'),
                '@utils': path.resolve(__dirname, './src/core/utils'),
                '@mocks': path.resolve(__dirname, './src/mocks'),
                '@shared': path.resolve(__dirname, './src/shared'),
                '@views': path.resolve(__dirname, './src/views'),
            },
            extensions: ['.js', '.vue', '.json'],
        },
    },
    css: {
        loaderOptions: {
            sass: {
                data: `
                    @import '@/assets/scss/01-settings/_breakpoints.scss';
                    @import '@/assets/scss/01-settings/_colors.scss';
                    @import '@/assets/scss/02-tools/_functions.scss';
                    @import '@/assets/scss/02-tools/_mixins.scss';
                `,
            },
        },
    },
};
