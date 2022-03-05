const webpack = require("webpack")
const target = "es2017"
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
        '@emurgo/cardano-serialization-lib-asmjs' : {
            commonjs: '@emurgo/cardano-serialization-lib-asmjs',
            commonjs2: '@emurgo/cardano-serialization-lib-asmjs',
            amd: '@emurgo/cardano-serialization-lib-asmjs',
            root: '_',
        },
    },
    devtool: "source-map",
    target: "web",
    module: getLoaders(),
    optimization: optimization,
    plugins: getPlugins()
  });