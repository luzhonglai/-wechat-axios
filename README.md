<!--
 * @Descripttion:
 * @repository: https://github.com/luzhonglai/wechat-api-promise
 * @Author: ZhongLai Lu
 * @Date: 2020-12-17 10:11:56
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2020-12-22 23:36:35
-->

# -wechat-api-promise

> 随着业务不断增加，使小程序的 Api 使用不便、维护难、异常捕获不够方便、代码业务嵌套比较深等问题，通调研小程序内置 Api 对象，使小程序 Api 支持Promise，并提升小程序代码异常捕获控制、提升阅读性、简化复杂逻辑，直接上代码使用方式，支持 微信 支付宝小程序！

## Install

### yarn

```bash
yarn add wechat-api-promise
```

### npm

```bash
npm install wechat-api-promise
```

## 使用 dome

```js
  import { promiseify, promiseAll } form 'wechat-api-promise'
  
  App({
    onLaunch: function () {
      let wxApi = promiseAll(wx, {})
      // 单一使用
      promiseify(wx.showModal)().then(console.log(1))
      // 拷贝一份api
      wxApi.showModal().then(console.log(2)).catch(err=> wx.showToast())
    }
  })
```
