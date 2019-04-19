const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const paths = require('./paths')


module.exports = {
    mode: 'production',
    entry: paths.appSrc + '/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx|mjs)$/,
                include: paths.appSrc,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    output: {
        filename: 'yutil.min.js',
        path: path.resolve(paths.root, 'dist')
    }
};
