var SWPrecacheWebpackPlugin =  require('sw-precache-webpack-plugin');

module.exports = {
navigateFallback : 'src/index.html',
navigateFallbackWhitelist : [/^(?!\/__)/],
stripPrefix : 'src',
plugins:[

    new SWPrecacheWebpackPlugin({
        cacheId:'servicedesk',
        filename:'service-worker.js',
        staticFileGlobs:[
            'src/app/index.html',
            'src/assets/**.js',
            'src/assets/**.css'
        ],
        stripPrefix:'src/assets/',
        mergeStaticConfigs:true
    })
]

};