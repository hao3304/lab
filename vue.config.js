module.exports = {
    chainWebpack: config => {
        // GraphQL Loader
        config.module.rule('vue')
          .test(/\.vue$/).use('iview-loader').loader('iview-loader').tap(options=>{
                return {
                    prefix: false
                }
            }).end()
      }
  }