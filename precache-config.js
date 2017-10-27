var SWPrecacheWebpackPlugin =  require('sw-precache-webpack-plugin');

module.exports = {
navigateFallback : '/index.html',
navigateFallbackWhitelist : [/^(?!\/__)/],
stripPrefix : 'src/app',
plugins:[

    new SWPrecacheWebpackPlugin({
        cacheId:'servicedesk',
        filename:'service-worker.js',
        staticFileGlobs:[
            'src/app/index.html',
            'src/app/assets/**.js',
            'src/app/assets/**.css'
        ],
        stripPrefix:'dist/assets/',
        mergeStaticConfigs:true
    })
]

};