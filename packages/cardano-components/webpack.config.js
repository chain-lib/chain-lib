const path = require('path');

function getLoaders(){
    const styles = [
        {
            test: /\.(sass|less|cess)$/,
            use: ['style-loader','css-loader','less-loader']
        },
    ];
    const wasm = {
        test: /\.wasm$/,
        type: 'webassembly/async',
    };

    const esnext = {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'esbuild-loader',
        options: {
            loader: 'jsx',
            target: 'esnext'
        }
    };

    return {
        rules: [wasm, esnext, ...styles],
    };
};

const optimization = {
    usedExports: true,
    nodeEnv: false,
    splitChunks: {
      automaticNameDelimiter: '_',
      chunks: 'all',
      maxSize: 4000000,
    }
  };

module.exports = (env, argv) => ({
    mode: argv.mode ? argv.mode : 'production',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            type: 'umd',
        },
        umdNamedDefine: true,
        publicPath: '',
    },
    cache: false,
    target: 'web',
    optimization,
    module: getLoaders(),
    experiments: {
        asyncWebAssembly: true,
        topLevelAwait: true,
   },
   resolve: {
    extensions: ['.js','.json','.wasm'],
    preferRelative: true,
   },
});
