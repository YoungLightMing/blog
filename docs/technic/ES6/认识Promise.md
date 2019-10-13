
# 认识 Promise

## Promise 是什么？

`Pormise` 是一个对象，也是一个构造函数。

```js
function f1(resolve, reject) {
    // 异步代码...
}
const p1 = new Promise(f1)
```
上面的代码中，f1 是一个用来处理异步操作的函数，`Promise` 接受这个函数作为参数，返回一个 `Promise ` 实例。

## Promise 的设计思想

所有的异步任务都返回一个 `Promise` 实例。`Promise` 实例有一个 `then()` 方法，用于指定下一步的回调函数。

```js
const p1 = new Promise(f1);

p1.then(f2)
```

上面的代码中， `f1` 异步函数执行完后，就会执行 `f2`。


## Promise 对象的状态

`Promise` 对象共有三种状态：

1. `pending` : 表示异步操作未完成。
2. `fulfilled` : 表示异步操作成功。
3. `rejected` : 表示异步操作失败。


其中，`fulfilled` 与 `rejected` 表示异步操作已完成。


`Promise` 对象的状态变化只能由未完成变为已完成，也就是说，`Promise` 最终只能有两种结果。

- 异步操作成功: 状态由 `pending` 变为 `fulfilled`。
- 异步操作失败：状态由 `pending` 变为 `rejected`。


## Promise 构造函数

同 `object`, `Array` 一样，JavaScript 提供 `Promise` 构造函数，用以生成一个 `Promsise` 对象实例。

```js

const p1 = new Promise(function (resolve, reject) {
    if(/*异步操作成功 */) {
        resolve(value)
    }
    else {
        reject(new Error())
    }
}) 
```
在上面的例子中，`Promise` 构造函数接受一个函数作为参数，该函数有两个参数：

- `resolve`: 用于在异步操作成功后将结果返回，并改变 `Promise` 实例的状态(`pending` - `fulfilled`)。
- `reject`: 用于在异步操作出错时将错误传递出去，并改变 `Promise` 实例状态(`pending` - `rejected`)。 

## Promise.prototype.then()

### 1. 使用方式

**Promise** 实例的 `then` 方法，用来添加回调函数。

这个方法能够接受两个参数：

- 第一个参数：处理异步操作成功时 `resolve` 的结果。
- 第二个参数：处理异步操作失败时 `reejct` 的结果。

**这个方法将会返回一个 `Promise` 对象。这个对象的状态要分情况讨论。**

```js

const p1 = new Promise((resolve, reject) => {
    resolve("成功");
})

p1.then(console.log, console.error);
// 成功
const p2 = new Promise((resolve, reject) => {
    reject('失败');
})’
p2.then(console.log, console.error);
// 失败
```
### 2. 链式调用

`then` 方法支持链式调用，即上一个 `then` 方法仍然会返回一个`Promise` 实例，我们可以继续调用  `then` 方法。

```js
const p1 = new Promise(resolve => resolve('p1 成功;'))
    
    .then((res) => {
        return new Promise(resolve => resolve(res + 'step1  成功'))
    })
    .then(
    console.log,
    console.error
);
// p1 成功;step1 成功
```
上例中，p1 实例将异步操作结果（此时为“p1 成功”）返回给 `then` 的第一个参数(这个参数是个函数),接着，执行这个参数，又返回一个 `Promise` 对象，并将操作成功（此时为“p1 成功;step1 成功”）的结果使用 `resolve` 传递给下一个 `then` 的第一个参数，最终，这个参数将这个结果打印出来。

### 3. then()方法返回的 `Promise` 实例的状态


前面讲过，调用`then` 方法会返回一个 `Promise` 对象，而每个 `Promise` 对象都是有状态的，那对于不同情况下的返回值，它们的状态是怎样的？

我们可以根据 `then` 方法的返回值进行判断：

1. 如果 `then` 方法内部返回了一个[普通]参数值，那么返回的 `Promise` 状态就是 resolved, value 值即是 return 的那个值。

    ```js
    const promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('success');
        },2000)
    });
    
    promise.then(function(data) {
        // 内部返回一个普通参数值2
        return 2; 
    })
    .then((data) => {
        console.log(data); // 2
    })
    
    第一个then 返回的 promise : {
        [[PromiseStatus]]: "resolved"
        [[PromiseValue]]: 2
    }
    ```
2. 如果 `then` 方法内部返回一个`promise` 实例，那么`then`返回的 `promise` 对象就是就是这个实例，他们的状态和value均一致。

    ```js
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('success');
            }, 2000)
        });

    promise.then(function (data) {
    // 返回一个promise 实例
    return new Promise( (resolve, reject) => {
        resolve('返回一个状态为 resolve 的 promises 实例');
      });
    })
    .then((data)=> {
      console.log(data); // 返回一个状态为 resolve 的 promises 实例
    })
    
    第一个then 返回的 promise : {
        [[PromiseStatus]]: "resolved"
        [[PromiseValue]]: '返回一个状态为 resolve 的 promises 实例'
    }
    ```
3. 如果 `then` 方法不返回任何值，那么返回的 `Promise` 状态就是`resolved`, value 为 undefined。

    ```js
    const promise = new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve('success');
      }, 2000)
    });
    
    promise.then(function (data) {
      // 不返回任何值
      console.log('333333');
    })
    .then((data)=> {
      console.log(data); // undefined
    });
     第一个then 返回的 promise : {
        [[PromiseStatus]]: "resolved"
        [[PromiseValue]]: undefined
    }
    ```
4. 如果 `then` 方法中抛出了一个异常，那么返回的 `Promise` 将会变成拒绝状态，value 是异常的 reason。

    ```js
    new Promise((resolve, reject) => {
        if (true) {
            resolve();
        } else {
            reject();
        }
    }).then((data) => {
        resolve();
    }, (error) => {
        reject();
    })
    then返回的promise: { 
      [[promiseStatus]]: 'rejected', 
      [[promiseValue]]: 'ReferenceError: resolve is not defined at Promise.then'
    }
    ```
   

### 4. 报错传递性


对于链式调用，我们不用为每一个`then`方法都传入第二个参数来处理`reject` 的结果。最后一个 `then` 方法将会捕获到前面最后一次`reject` 出的结果。

```js
const p1 = new Promise((resolve, reject) => reject('p1 失败;'))
  .then((res) => {
    return new Promise(resolve => resolve(res + 'step1  成功'))
  })
  .then((res) => {
    return new Promise(resolve => resolve(res + 'step2  成功'))
  })
  .then(
    console.log,
    console.error
  );
  
  // p1 失败
```
在上面的例子中，p1 `reject` 的结果我们不用在下一个 `then` 方法中就进行截获，最有一个 `then` 方法传入第二个参数便可以获取到。这便是`Promise` 的报错传递性。

## Promise.prototype.catch()

同 `then()` 方法类似，`catch()` 方法是用来指定 `Promise` 对象错误状态下的回调函数，等同于 `.then(null, (err) => {...})`。

不同之处在于 `.catch()` 方法不仅能够捕获`Promise` 对象 `reject` 出的错误，还能捕获到 `resolve` 方法执行过程中发生的错误。

由于上面提到的`promise` 报错具有传递性，因此建议在 `Promise` 语句末尾只 `.catch()` 语句来代替在 then 语句中传入第二个参数的形式。


另外，promise 还有很多其他的 API ,由于用的不多，就不做介绍了。更具体的可以直接看阮一峰老师的《es6标准入门》。


## 参考

1. [es6 标准入门-阮一峰](http://es6.ruanyifeng.com/#docs/promise)
2. [promise.then](https://segmentfault.com/a/1190000015715020)

