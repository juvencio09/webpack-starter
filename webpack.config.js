
const HtmlWebPackPlugin              = require('html-webpack-plugin');
const MiniCssExtractPlugin           = require('mini-css-extract-plugin');
const OptimizaCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin }         = require('clean-webpack-plugin');

const CopyPlugin = require('copy-webpack-plugin');

module.exports = {

    mode: 'development',
    optimization:{
        //va a minimizar el css solo cuando este en produccion
        minimizer: [ new OptimizaCssAssetsWebpackPlugin() ]
    },
    module: {
        rules: [
            {
                //esto le dice a webPack que aplique esta regla si es un archivo .css
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                //esto le dice a webPack que aplique esta regla si es un archivo .html
                test: /styles\.css$/,
                use: [
                     MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                //esto le dice a webPack que aplique esta regla si es un archivo .html
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    attributes: false,
                    minimize:false,
                },
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false
                        }
                    }
                ]


            }

        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false    
        }),
        new CopyPlugin([
            {from: 'src/assets', to: 'assets/'}
        ]),
        new CleanWebpackPlugin()
    ]

}