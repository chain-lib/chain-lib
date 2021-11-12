module.exports = (env, argv) => ({
    mode: argv.mode ? argv.mode : 'production',
    cache: false,
    target: 'web',
    module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'esbuild-loader',
            options: {
                loader: 'jsx',
                target: 'esnext'
            }
        }
    ],
   },
   resolve: {
    extensions: ['.js','.jsx','.json'],
    preferRelative: true,
   }
});
