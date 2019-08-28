// let config = require('./config/config');

module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://10.1.192.118:9901/login/login',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        },
    }
}