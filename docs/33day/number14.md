---
title: 14. this, call, apply 和 bind
---

# this, call, apply 和 bind



## 1. this

`this` 是 JavaScript 众多概念中比较难理解的一个。

学习之前先记住：**`this` 的指向，是在执行时确定，而非定义时确定。** 

总的来说，使用 `this` 的情形有以下几种：

1. **全局环境**

在全局环境时，`this` 指向顶层对象 `window`。

```js
var name = 'pikaqiu';
function foo() {
    console.log(this.name)
}
foo(); // pikaqiu

window.name; // 'pikaqiu';
```
2. **构造函数中使用 `this`**

在第 12 节 [new 与构造函数, instanceof 与实例](https://younglightming.github.io/technic/33day/number12.html) 中，我们讲到调用 `new` 操作符时，会在内部将 `this` 绑定到创建的空对象上。

```js
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const zw = new Person('zw', 25);

zw; // { name: 'zw', age: 25 } 
```
从例子我们也能看到，`Person` 中的 `this` 指的就是实例对象 `zw`。

3. **对象的方法**

最容易让人迷惑的，还是当 `this` 存在于对象的方法中的时候。

```js

```