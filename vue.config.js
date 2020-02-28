// vue.config.js
module.exports = {
  // 选项...
  assetsDir: 'static',
  devServer: {
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    proxy: {
      '/api': {
        target: 'http://xxxxxxxxxxx/api', //API服务器的地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  }
}