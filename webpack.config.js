const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (_, config) => {
    const { mode = 'development' } = config;
    const isDev = mode === 'development';

    return {
        mode,
        entry: {
            app: ['./src/index.js']
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name]-[contenthash].js',
            chunkFilename: '[name]-[contenthash].js'
        },
        plugins: [
            ...(!isDev ? new CleanWebpackPlugin() : []),
            new HtmlWebpackPlugin({
                template: './public/index.html'
            })
        ],
        resolve: {
            extensions: ['.js', '.jsx', '.json']
        },
        optimization: {
            runtimeChunk: 'single',
            moduleIds: 'deterministic',
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    },
                    styles: {
                        test: /\.css$/,
                        name: 'styles',
                        chunks: 'all',
                        enforce: true
                    }
                }
            }
        },
        ...(isDev && {
            devtool: 'source-map',
            devServer: {
                open: false,
                historyApiFallback: true,
                contentBase: './public',
                port: 9017
            }
        }),
        module: {
            rules: [
                {
                    test: /.(jsx?)$/i,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env', '@babel/preset-react'],
                                plugins: [
                                    '@babel/plugin-transform-runtime',
                                    '@babel/plugin-syntax-dynamic-import'
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    };
};
