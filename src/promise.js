/*
 * @Descripttion:
 * @repository: https://github.com/luzhonglai
 * @Author: ZhongLai Lu
 * @Date: 2020-12-17 11:00:32
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2020-12-18 01:13:49
 */

/**
 * @name: promiseify
 * @msg: 处理普通函数转Rromise形式
 * @param {fun} 传入小程序Api函数
 * @return {*} 返回Rromise回调
 */
export function promiseify(fun) {
  if (typeof fun !== 'function') return fun
  return (args = {}) => {
    new Promise(resolve, (reject) => {
      Object.assign(args, {
        success: resolve,
        fail: reject,
      })
    })
  }
}

/**
 * @name: hasCallback
 * @msg: 判断Api传入的参数类型
 */
function hasCallback(args) {
  if (typeof args !== 'object') return false

  let keyType = ['fail', 'success', 'complete']
  for (const key of keyType) {
    if (typeof args[key] == 'function') return true
  }
  return false
}

/**
 * @name: promiseAll
 * @msg: 说明获取小程序所有api，筛选key类型 1、函数进行promise嵌套 2、object不动
 * @param {wx} 传入小程序wx内置对象
 * @param {zdy} 传入自定义的对象
 * @return {zdy} 转成支持promise的Api
 */
export function promiseAll(wx = { ...my }, zdy = {}) {
  Object.keys(wx).forEach((key) => {
    let fn = wx[key]
    if (typeof fn === 'function') {
      if (hasCallback(args)) {
        zdy = fn(args)
      } else {
        return _promiseify(fn)(args)
      }
    } else {
      zdy[key] = fn
    }
  })
}

