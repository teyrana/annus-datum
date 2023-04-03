import * as path from 'path';
import * as webpack from 'webpack';
// in case you run into any typescript error when configuring `devServer`
// import 'webpack-dev-server';


const config: webpack.Configuration = {
    mode: 'development',
    entry: {
        game: './src/game.mts',
        build: './src/build.mts'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.m?ts$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'ts-loader'
            }
        ]
    },
    //   devServer: {
    //     static: path.resolve(__dirname, './'),
    //     host: 'localhost',
    //     port: 5000,
    //     open: false
    //   },
    resolve: {
        extensions: ['.ts', '.mts', '.js', '.mjs']
    }
}

export default config;

