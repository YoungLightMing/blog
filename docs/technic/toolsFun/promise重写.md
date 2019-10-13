---
title: 手写 Promise
---

# 手写 `Promise`


## 1. Promise/A+规范

有兴趣的同学可以去[Promise/A+](https://promisesaplus.com/)查看，下面只是简单的解读。

:::规范解读
- `Promise` 是一个对象或者函数。它有一个 `then` 方法。
- `thenable` 是一个对象或者函数，用来定义 `then` 方法
- `value` 是 `Promise` 状态成功时的值
- `reason` 是 `Promise` 状态失败时的值
:::


## 2. 实现一个简单的 Promise

1. **第一步，定义 `Promise` 实例的初始状态**
```js
function MyPromise(fn) {
    const that = this;
    that.state = 'pending'; // 初始状态
    that.value = null; // 调用 resolve 时的参数值
    that.reason = null; // 调用 reject 时的参数值
}
```

2. **实现 `resolve` 和 `reject` 方法**

```js
function MyPromise(fn) {
    ...

    function resolve(value) {
        if (that.state === 'pending') {
            that.value = value; // 取到 resolve 的值
            that.state = 'resolved' // 更改 状态
        }
    }

    function reject(err) {
        if (that.state === 'pending') {
            that.reason = err;
            that.state = 'rejected';
        }
    }
}
```
3. **将 `resolve` 和 `reject` 作为参数调用 fn**

```js
function MyPromise(fn) {
    ...

    try {
        fn(resolve, reject)
    } catch(e) {
        reject(e)
    }
}

```

4. **在 `Promise` 原型上定义 `then` 方法 **

```js
MyPromise.prototye.then = function(onFulfilled, onRejected) {
     let self=this;
   switch(self.status){
      case "resolved":
        onFullfilled(self.value);
        break;
      case "rejected":
        onRejected(self.reason);
        break;
      default:       
   }
}
```

## 3. 参考

1. [实现一个完美符合Promise/A+规范的Promise](https://github.com/forthealllight/blog/issues/4)