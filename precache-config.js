var SWPrecacheWebpackPlugin =  require('sw-precache-webpack-plugin-loader');

module.exports = {
navigateFallback : '/index.html',
navigateFallbackWhitelist : [/^(?!\/__)/],
stripPrefix : 'docs',
root:"docs/",
plugins:[

    new SWPrecacheWebpackPlugin({
        cacheId:'servicedesk',
        filename:'service-worker.js',
        staticFileGlobs:[
            'docs/index.html',
            'docs/**.js',
            'docs/**.css'
        ],
        stripPrefix:'docs/assets/',
        mergeStaticsConfigs:true
    })
]

};