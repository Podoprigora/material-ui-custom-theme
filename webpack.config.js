const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsConfigPathPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = (_, config) => {
    const { mode = 'development' } = config;
    const isDev = mode === 'development';

    return {
        mode,
        entry: {
            app: ['./src/index.tsx']
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name]-[contenthash].js',
            chunkFilename: '[name]-[contenthash].js',
            assetModuleFilename: 'images/[hash][ext][query]'
        },
        plugins: [
            ...(!isDev ? [new CleanWebpackPlugin()] : []),
            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[name].css'
            }),
            new HtmlWebpackPlugin({
                template: './public/index.html'
            })
        ],
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
            plugins: [new TsConfigPathPlugin()]
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
                    test: /.(js|ts)x?$/i,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    '@babel/preset-env',
                                    '@babel/preset-react',
                                    '@babel/preset-typescript'
                                ],
                                plugins: [
                                    '@babel/plugin-transform-runtime',
                                    '@babel/plugin-syntax-dynamic-import'
                                ]
                            }
                        }
                    ]
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'resolve-url-loader'
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                },
                {
                    test: /\.(jpe?g|png)$/i,
                    type: 'asset/resource'
                },
                {
                    test: /\.svg$/i,
                    loader: '@svgr/webpack',
                    options: {
                        svgo: true,
                        dimensions: false,
                        ref: true
                    }
                }
            ]
        }
    };
};
