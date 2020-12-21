module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1608540050416, function(require, module, exports) {
/*
 * @Descripttion: 
 * @repository: https://github.com/luzhonglai
 * @Author: ZhongLai Lu
 * @Date: 2020-12-17 11:01:25
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2020-12-18 00:53:50
 */

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./promise.js');Object.defineProperty(exports, 'promiseify', { enumerable: true, configurable: true, get: function() { return __TEMP__.promiseify; } });Object.defineProperty(exports, 'promiseAll', { enumerable: true, configurable: true, get: function() { return __TEMP__.promiseAll; } });
}, function(modId) {var map = {"./promise.js":1608540050417}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1608540050417, function(require, module, exports) {
/*
 * @Descripttion:
 * @repository: https://github.com/luzhonglai
 * @Author: ZhongLai Lu
 * @Date: 2020-12-17 11:00:32
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2020-12-21 17:20:11
 */

/**
 * @name: promiseify
 * @msg: 处理普通函数转Rromise形式
 * @param {fun} 传入小程序Api函数
 * @return {*} 返回Rromise实例
 */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });function promiseify(fun) {
  if (typeof fun !== 'function') return fn
  return (args = {}) => {
    new Promise((resolve, reject) => {
      fun(
        Object.assign(args, {
          success: resolve,
          fail: reject,
        })
      )
    })
  }
};exports.promiseify = promiseify

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
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });function promiseAll(wx = { ...my }, zdy = {}) {
  Object.keys(wx).forEach((key) => {
    let fn = wx[key]
    if (typeof fn === 'function') {
      zdy[key] = (args) => {
        if (hasCallback(args)) {
          fn(args)
        } else {
          return promiseify(fn)(args)
        }
      }
    } else {
      zdy[key] = fn
    }
  })
  return zdy
};exports.promiseAll = promiseAll

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1608540050416);
})()
//# sourceMappingURL=index.js.map