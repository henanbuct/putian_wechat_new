const vuxLoader = require('vux-loader');
const path = require('path');
var webpack = require('webpack');
module.exports = {
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // Provide path to the file with resources
          resources: './src/assets/style/main.scss'
          // Or array of paths
          // resources: ['./src/assets/style/main.scss']
        })
        .end()
    })
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $:"jquery",
        jQuery:"jquery",
        "windows.jQuery":"jquery"
      })
    ]
  },
  baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'pt_wechat_front',
  devServer: {
    port: 1717, // 端口号
    host: 'localhost',
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    proxy: {
      '/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      },

      '/dev': {
      target: 'http://www.liangnutech.com',
      changeOrigin: true,
      pathRewrite: {
        '^/dev': ''
      }
    }
    },  // 配置多个代理
  },
  configureWebpack: config => {
    require('vux-loader').merge(config, {
      options: {},
      plugins: ['vux-ui']
    })
  },
  lintOnSave: true,
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        data: `@import "./src/assets/style/main.scss";`
      }
    }
  }
}
