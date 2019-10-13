---
title: 9. 立即执行函数, 模块化, 命名空间
---

# 立即执行函数, 模块化, 命名空间

## 1. 模块化

> 为什么要使用模块化？都有哪几种方式可以实现模块化，各有什么特点？


### 1.1 好处
1. 解决命名冲突
2. 提供复用性
3. 提高代码的可维护性

### 1.2 自执行函数
在早期，使用立即执行函数实现模块化是常见的手段，通过函数作用域解决了命名冲突、污染全局作用域的问题。

```js
(function(globalVariable){
   globalVariable.test = function() {}
   // ... 声明各种变量、函数都不会污染全局作用域
})(globalVariable)
```

### 1.3 AMD 和 CMD
知道基本的使用方法即可。

```js
// AMD
define(['./a', './b'], function(a, b) {
  // 加载模块完毕可以使用
  a.do()
  b.do()
})
// CMD
define(function(require, exports, module) {
  // 加载模块
  // 可以把 require 写在函数体的任意地方实现延迟加载
  var a = require('./a')
  a.doSomething()
})
```
### 1.4 CommonJS 

CommonJS 是 node 使用的规范，目前也在广泛使用。

```js
// 导出
module.export = { a: 1 }
// 或者
export.a = 1
// 引入
let module = require('./a.js')
module.a; // 1
```
在 `module` 内部，进行了一次 `var export  = module.export` 操作，说明 `export` 就是前者的导入对象， 这就是两者在引入时一个直接可以进行赋值，而另一个不可以。

假如说，我们对 `export` 重新赋值，也就意味着 `export` 不再等于 `moudle.export`，此时 `export` 赋的值将不会生效。

如果搞不清这两者的关系，建议选择一直使用 `module.export`。 
### 1.5 ES6  Module
ES6 实现了自己的模块加载方式，使用 `import` 和 `export` 方式加载模块。

相对于 CommonJS 运行时加载，一次加载整个模块相比，ES6 模块是在编译时加载，拥有更高的效率。

另外，无论是导入还是导出，都可以对接口进行重新命名。
#### 1.5.1 export
```js
// 整体导出
var frist = 'first';
var onSecond = () => {};
export { frist, onSecond };
// 或者
export var frist = 'frist';
exprot onSecond = () => {};

// 输入默认
export default { frist, onSecond }

```

#### 1.5.2 import
```js
// 导入由 export defult 形式导出的文件
import a form './a.js';
// 导入由 export 方式导出的文件
import { a, b } from './a.js'
```

