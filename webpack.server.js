const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Ensure this is installed

module.exports = {
    mode: 'production', // Set the mode explicitly
    entry: './src/server/server.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.bundle.js',
    },
    target: 'node', // Ensure Webpack builds for Node.js
    externals: [require('webpack-node-externals')()], // Exclude node_modules
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: [
                    'css-loader', // Do not use style-loader in server-side build
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
