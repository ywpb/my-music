module.exports = {
    lintOnSave: false,

    devServer: {
        proxy: {
            '/': {
                target: 'http://106.14.209.232:8001/',
                pathRewrite: { '^/': '' },
            },
        },
    },
    pluginOptions:{
        "style-resources-loader":{
            preProcessor:'less',
            patterns:[]
        }
    },
}