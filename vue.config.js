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
                '@views': path.resolve(__dirname, './src/views'),
            },
            extensions: ['.js', '.vue', '.json'],
        },
    },
};
