import React from 'react'
import ExtractCssChunks from 'extract-css-chunks-webpack-plugin'

export default pluginOptions => ({
    webpack: (config, { stage }) => {
        let loaders = []

        const cssLoader = {
            loader: 'css-loader',
            options: {
                modules: true,
                importLoaders: 1,
            },
        }

        if (stage === 'dev') {
            // Dev
            loaders = [
                {
                    loader: ExtractCssChunks.loader,
                    options: {
                        hot: true,
                        reloadAll: true,
                    },
                },
                cssLoader,
            ]
        } else if (stage === 'node') {
            loaders = [ExtractCssChunks.loader, cssLoader]
            config.plugins.push(new ExtractCssChunks({
                filename: '[name].[chunkHash:8].css',
                chunkFilename: '[id].[chunkHash:8].css',
            }));
        } else {
            // Prod
            loaders = [
                {
                    loader: ExtractCssChunks.loader,
                    options: {
                        hot: true,
                        reloadAll: true,
                    },
                },
                cssLoader,
            ]
        }

        config.module.rules[0].oneOf.unshift({
            test: /\.css$/,
            use: loaders,
        })

        return config
    },
})
