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
}

module.exports = (env, argv) => ({
    mode: argv.mode ? argv.mode : 'production',
    cache: false,
    target: 'web',
    module: getLoaders(),
    experiments: {
        asyncWebAssembly: true,
        topLevelAwait: true,
   },
   resolve: {
    extensions: ['.js','.jsx','.ts','.json','.wasm'],
    preferRelative: true,
   }
});
