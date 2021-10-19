/*
 * @Author: jinqing
 * @Date: 2021-10-14 16:05:49
 * @LastEditors: jinqing
 * @LastEditTime: 2021-10-19 11:48:06
 * @Description: config
 */

const registerRouter = require('./backend/router')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 全局引入变量和 mixin
        prependData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `
      }
    }
  },
  devServer: {
    before(app) {
      registerRouter(app)
    }
  }
}
