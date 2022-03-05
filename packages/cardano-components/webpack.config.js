const webpack = require("webpack")
const target = "esnext"
const optimization = {
};

function getLoaders(){
    const esbuild = {
        test: /\.(js)?$/,
        loader: 'esbuild-loader',
        options: {
            target: target
        }
    }
    return {
        rules: [ esbuild ]
    }
}

function getPlugins(){
return []
}

module.exports = (env, argv) => ({
    mode: argv.mode,
    experiments: {
        asyncWebAssembly: true,
        topLevelAwait: true,
    },
    resolve: {
        extensions: ['.wasm', '.js'],
    },
    output: {    
        filename: '[name].js',
        library: {
            type: "umd",
            name: "cardano-components"
        },
        umdNamedDefine: true,
        publicPath: '/',
        //chunkFormat: 'array-push',
        chunkFormat: 'array-push'
    },
    externals:{
        '@emurgo/cardano-serialization-lib-browser' : {
            commonjs: '@emurgo/cardano-serialization-lib-browser',
            commonjs2: '@emurgo/cardano-serialization-lib-browser',
            amd: '@emurgo/cardano-serialization-lib-browser',
            root: '_',
        },
        '@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib.js' : {
            commonjs: '@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib.js',
            commonjs2: '@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib.js',
            amd: '@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib.js',
            root: '_'
        },
    },
    devtool: "source-map",
    target: "web",
    module: getLoaders(),
    optimization: optimization,
    plugins: getPlugins()
  });