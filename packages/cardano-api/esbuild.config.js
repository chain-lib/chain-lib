const { nodeExternalsPlugin } = require('esbuild-node-externals');

module.exports = {
  logLevel: 'warning',
  minify: process.env.NODE_ENV !== 'production' ? false : true,
  plugins: [
      nodeExternalsPlugin()
  ],
};
