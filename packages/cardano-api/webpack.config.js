const path = require('path');

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
    cache: false,
    target: 'web',
    optimization,
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            type: 'umd',
        },
        umdNamedDefine: true,
        publicPath: '',
    },
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
