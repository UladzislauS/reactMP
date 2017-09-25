const path = require('path');

module.exports = {
    devtool: "source-map",
    entry: './src/app/src/index.js',
    output: {
        path: path.resolve('src/app/dist'),
        filename: 'index.bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [['es2015'], ['react']]
                }
            }
        ]
    },
    watch: true
};
