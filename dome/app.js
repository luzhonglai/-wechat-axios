/*
 * @Descripttion: 
 * @repository: https://github.com/luzhonglai
 * @Author: ZhongLai Lu
 * @Date: 2020-12-21 11:03:41
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2020-12-21 17:32:04
 */

//app.js
import { promiseAll, promiseify, axios } from './utils/util'
App({
  onLaunch: function () {
    let wxApi = promiseAll(wx, {})
    // 单一使用
    promiseify(wx.showModal)().then(console.log(1)) 
    // 拷贝一份api
    wxApi.showModal().then(console.log(2))
  },
  globalData: {
    userInfo: null
  }
})