<!--
 * @Descripttion:
 * @repository: https://github.com/luzhonglai/wechat-api-promise
 * @Author: ZhongLai Lu
 * @Date: 2020-12-17 10:11:56
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2020-12-21 17:30:40
-->

# -wechat-api-promise

> 在研发中随着业务不断增加，使小程序的 Api 使用比较反锁、维护难、异常捕获不够方便、代码业务嵌套比较深等问题，通调研小程序内置 Api 对象，使小程序 Api 支持使用 Promise，并提升小程序代码异常捕获控制、提升阅读性、简化复杂逻辑，光说没用直奔主题！

## Installation

### Yarn

```bash
yarn add wechat-api-promise
```

### npm

```bash
npm install wechat-api-promise
```

## 使用 dome

```js
  import {promiseify, promiseAll, axios } form 'wechat-axios'


  // 将小程序所有Api转promise
  const wxApi = promiseAll(wx,{})

  wxApi.requset().then().catch()

  //普通函数转promise
  promiseify(wx.openSteng).then().catch()
```
