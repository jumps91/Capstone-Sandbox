module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "./bundle.js"
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.svg$|\.ttf?|\.woff$|\.woff2|\.eof|\.eot/,
                loader: 'file-loader'
            }
        ]
    },
};