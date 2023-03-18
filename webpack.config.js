const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCss = require('mini-css-extract-plugin')

const babelRules = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader'
    }
}
const html =  {
    test: /\.html$/,
    use: [
        {
            loader: 'html-loader'
        }
    ]
}
const css = {
    test: /\.(css|scss)$/i,
    use: [
        // Crea los elementos del estilo en el DOM
        'style-loader',
        // Traduce CSS en CommonJS
        'css-loader',
        // Compila Sass en CSS
        'sass-loader',
    ],
}
const images = {
    test: /\.(png|jpg|svg|jpeg|webp|gif)$/,
    type: 'asset',
}
const alias = {
    '@components': path.resolve(__dirname, 'src/components'),
    '@containers': path.resolve(__dirname, 'src/containers'),
    '@styles': path.resolve(__dirname, 'src/styles'),
    '@icons': path.resolve(__dirname, 'src/assets/icons'),
    '@logos': path.resolve(__dirname, 'src/assets/logos'),
    '@pages': path.resolve(__dirname, 'src/pages'),
    '@hooks': path.resolve(__dirname, 'src/hooks'),
    '@contexts': path.resolve(__dirname, 'src/context'),
}
const rulesE = [babelRules, html, css, images]
//Modules:
module.exports = {
    //entry: 'src/index.js' //no lo agregor porque ya viene por defecto
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', 'jsx'],
        alias: alias,
    },
    module: {
        rules: rulesE
    },   
    plugins: [
        new htmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCss({
            filename: '[name].css'
        }),
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 3005,
        historyApiFallback: true // habilitar endpoints
    }
}