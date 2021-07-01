const path = require('path');

const TsConfigPathPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    webpackFinal: async (config) => {
        config.resolve = {
            ...config.resolve,
            alias: {
                ...config.resolve.alias,
                // To fix the issue: https://github.com/mui-org/material-ui/issues/24282
                '@emotion/core': path.resolve('./node_modules/@emotion/react'),
                'emotion-theming': path.resolve('./node_modules/@emotion/react')
            },
            plugins: [new TsConfigPathPlugin()]
        };

        const cssRule = config.module.rules.find(({ test }) => /css/gi.test(test));

        if (cssRule) {
            Object.assign(cssRule, {
                test: /\.(scss|css)$/i,
                use: [
                    {
                        loader: 'style-loader'
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
            });
        }

        return config;
    }
};
