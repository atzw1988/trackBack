const path = require('path')
const webpack = require('webpack')

function resolve (dir) {
  return path.join(__dirname, dir)
}

// vue.config.js
const vueConfig = {

  configureWebpack: {
    plugins: [
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]
  },
  // publicPath: '/pda/',
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',

  chainWebpack: (config) => {
    config.resolve.alias
      .set('@$', resolve('src'))

    // const svgRule = config.module.rule('svg')
    // svgRule.uses.clear()
    // svgRule
    //   .oneOf('inline')
    //   .resourceQuery(/inline/)
    //   .use('vue-svg-icon-loader')
    //   .loader('vue-svg-icon-loader')
    //   .end()
    //   .end()
    //   .oneOf('external')
    //   .use('file-loader')
    //   .loader('file-loader')
    //   .options({
    //     name: 'assets/[name].[hash:8].[ext]'
    //   })
  },

  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // less vars，customize ant design theme

          // 'primary-color': '#F5222D',
          // 'link-color': '#F5222D',
          // 'border-radius-base': '4px'
        },
        javascriptEnabled: true
      }
    }
  },

  devServer: {
    // development server port 8000
    port: 8080,
    // https: true,
    // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
    proxy: {
      '/api': {
        target: 'http://192.168.0.187:18080',
        ws: true,
        // secure: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  // pwa: {
  //   iconPaths: {
  //     favicon32: 'favicon.ico',
  //     favicon16: 'favicon.ico',
  //     appleTouchIcon: 'favicon.ico',
  //     maskIcon: 'favicon.ico',
  //     msTileImage: 'favicon.ico'
  //   }
  // },
  // disable source map in production
  productionSourceMap: false,
  lintOnSave: undefined,
  // babel-loader no-ignore node_modules/*
  transpileDependencies: []
}

// preview.pro.loacg.com only do not use in your production;

module.exports = vueConfig
