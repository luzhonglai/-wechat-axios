/*
 * @Descripttion:
 * @repository: https://github.com/luzhonglai
 * @Author: ZhongLai Lu
 * @Date: 2020-12-21 11:03:41
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2020-12-25 17:23:51
 */

//app.js
import { promiseAll, promiseify } from 'wechat-api-promise'

App({
  onLaunch: function () {
    let wxApi = promiseAll(wx, {})
    // 单一使用
    promiseify(wx.showModal)().then(console.log(1))
    // 拷贝一份api
    wxApi.showModal().then(console.log(2)).catch(err=> wx.showToast())
  },
  globalData: {
    userInfo: null,
  },
})
