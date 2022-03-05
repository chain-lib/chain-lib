const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack : {
    experiments : {
      asyncWebAssembly : true
    },
    stats: {
      errorDetails : true,
      errorStack : true
    }
    
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => ({
        ...options,
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('cardano-'),
        }
    }))
},
})
