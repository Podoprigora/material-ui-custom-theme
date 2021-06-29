const path = require('path');

module.exports = {
    webpackFinal: async (config) => {
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
