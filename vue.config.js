/*
 * @Author: jinqing
 * @Date: 2021-10-14 16:05:49
 * @LastEditors: jinqing
 * @LastEditTime: 2021-10-14 16:24:33
 * @Description: config
 */

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
  }
}
