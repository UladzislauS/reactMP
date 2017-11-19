import path from 'path';
import nodeExternals from 'webpack-node-externals';

const client = {
    devtool: 'source-map',
    entry: './src/app/src/indexTemplate.js',
    output: {
        path: path.resolve('src/static/js'),
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
    }
};

const server = {
    target: 'node',
    node: {
        __dirname: false,
    },
    externals: [nodeExternals({
        modulesFromFile: true,
    })],
    entry: {
        js: './src/server/indexTemplate.js',
    },
    output: {
        path: path.join(__dirname, 'src'),
        filename: 'server-es5.js',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: /.js$/,
                use: {
                    loader: 'babel-loader',
                    options: 'cacheDirectory=.babel_cache',
                },
            },
        ],
    },
};

export default [client, server];