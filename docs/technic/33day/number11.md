---
title: 11. map, reduce, filter 等高阶函数
---
# map, reduce, filter 等高阶函数

## 1. 概述

当我们听到高阶函数的时候，我们可能早就使用过它了。

那，什么是高阶函数？

**高阶函数是一个接收函数作为参数或将函数作为输出返回的函数。**

高阶函数是函数式编程里提出的概念。它提倡使用纯函数来进行编码，同样的输入进行同样的输出，简洁明了。


## 2. 常用的高阶函数

最常见的，是数组的一些迭代方法。如 `map`、`filter`、`reducer`、 `forEach` 等。

我是使用它们时，只需要关心你想得到什么，而不用关心它们如何去做。

比如我想得到一个数字数组平方的新数组：

```js
const arr = [1,45, 5, 6];
// 普通方式
const newArr = [];
for (i = 0; i< arr.length; i ++) {
    newArr.push(arr[i] * arr[i])
}
console.log(newArr);
// 使用高阶函数

const newArr2 = arr.map(function(item){return item * item});
console.log(newArr2);

// 使用箭头函数将更简单
const newArr3 = arr.map(item => item *　item);
```

## 3. 高阶函数的其他应用

高阶函数除了在数组中使用外，还经常用于**函数柯里化**。

### 3.1 函数柯里化（currying）

**柯里化是指这样一个函数(假设叫做createCurry)，他接收函数A作为参数，运行后能够返回一个新的函数。并且这个新的函数能够处理函数A的剩余参数。**

假设函数 `A` 需要这样调用：

```js
A(1, 2, 3)
```
那么，经过函数柯里化后的函数 `_A`,可以这样调用：

```js
_A(1)(2)(3)
```
为什么能如此实现，其实是借助了闭包的特性，将先传入的参数存起来，然后内层的闭包函数可以使用。

那如何实现？下面给出一个例子

```js
function createCurry(func, args) {

    var arity = func.length;
    var args = args || [];

    return function() {
        var _args = [].slice.call(arguments);
        [].push.apply(_args, args);

        // 如果参数个数小于最初的func.length，则递归调用，继续收集参数
        if (_args.length < arity) {
            return createCurry.call(this, func, _args);
        }

        // 参数收集完毕，则执行func
        return func.apply(this, _args);
    }
}}

```

关于柯里化就先说到这里，后面会有专门的章节。

## 参考

1. [前端基础进阶-柯里化](https://yangbo5207.github.io/wutongluo/ji-chu-jin-jie-xi-lie/ba-3001-ke-li-hua.html)