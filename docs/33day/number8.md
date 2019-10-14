---
title: 8. 表达式和语句
---


# 表达式和语句

> 翻译
> 原文地址：[关于 JavaScript 的表达式、语句、表达式语句你需要知道的所有知识点]()


在看完这篇文章后，你应该可以详细说出下面的代码的运行结果以及为什么会是这样。

```js
{} + 1; // 1
{2} + 2; // 2
{2 + 2} + 3; // 3
{2 + 3} - 3; // -3
```

在 JavaScript 中有两个主要的语法类别：

1. 语句
2. 表达式

对它们进行区分十分必要，因为表达式的作用类似于语句，也因此有表达式语句，但反过来，语句并不能像表达式那样工作。

## 一、表达式

### 1. 表达式返回一个值

表达式是产生单个值的 JavaScript 代码片段。

它们的长度没有限制，但最终只会返回一个单一的值。


```js
2 + 2 * 3/2

(Math.random()*(100 -20)) + 20

functionCall(); // 函数调用

window.history ? useHistory() : noHistoryFallBack()

1 + 1, 2 + 2, 3 + 3

declaredVarible // 变量声明

true && functionCall // && 运算符

true && declaredVariable
```
上面的每一条都是表达式，在 JavaScript 中需要一个值的时候总能看到它们。因此，下面的 `console.log()` 会打印出一个值。

```js
console.log(true && 2 * 9); // 18
```

### 2. 表达式不一定改变状态

举个例子：

```js
const a = 2; // 这是一条语句，a 是一个状态

a + 4; // 表达式

a * 10; // 表达式

a - 10; // 表达式

console.log(a); // 2
```

在上面的例子中，有很多表达式，但 `a` 的值依然是 2 。之所以说**不一定**改变状态，是因为函数调用是表达式，而在函数内部能够包含改变状态的语句。

所以 `foo()` 本身就是一个表达式，它会返回一个 `undefined` 或者其他值，但是如果这样改写一下：

```js
const foo = foo() => {
    a = 14;
}
```
此时，虽然 `foo()` 仍旧是一个表达式，但是它改变了状态。 因此，重写 `foo` 方法和语句的更好方式应该是这样：

```js
cosnt foo = foo() => {
    return 14; // 显式的返回一个值
}
a = foo();
```
或者，

```js
const foo = foo(n) => {
    return n; // 显式的返回一个值
}
a = foo(14)
```
这样的话，你的代码将会更有加可读、更可组合，并且表达式和语句之间有明显的区别和分离。这是功能和声明性 JavaScript 的基础。

## 二、语句

语句是函数式编程的头疼之处。通常，语句会执行动作，它们会做些什么。

在 JavaScript 中，当我们需要一个值的时候绝对不能使用语句。因此它们不能当做函数参数、运算符操作、返回值等等 ...

```js
foo(if() {return 2}); // 这样会报错
```
下面是所有的 JavaScript 语句：

1. `if`
2. `if-else`
3. `while`
4. `do-while`
5. `for`
6. `switch`
7. `for-in`
8. `with`(被废弃)
9. `debugger`
10. 变量声明

如果你在浏览器中尝试下面的代码：

```js
if (true) { 9 + 9 }
```
你将会看到它会返回 18，尽管如此，你不能将他们用作表达式，同样，也不能在 JavaScript 需要值的时候使用它们。

这很奇怪，因为你希望语句不会返回任何内容。如果不能使用，那么返回一个值就是相当多余，这也是 JavaScript 的一个怪异的地方。


### 函数声明，函数表达式和命名函数表达式

函数声明是一个语句。

```js
function foo(func) {
    return func.name;
}
```

函数表达式是一个表达式，也就是大家说的匿名函数。

```js
console.log(foo(function () {})); // ''
```

命名函数表达式是一个表达式，类似于匿名函数，但是它有名字。

```js
console.log(foo(function myName() {})); // 'myName'
```
函数是作为表达式还是函数声明根本在于理解下面这段话：

**当你在任何需要一个值的地方声明一个函数，JavaScript 会尽力将它转为一个值，如果无法做到，就会抛出错误。**

**而在全局环境、模块、或块语句的顶级（即不需要值的地方）声明一个函数，将会产生一个函数声明。**


举个例子：

```js
if (true) {
    function foo() {}; // 块语句的顶级，语句
}

function foo() {} // 全局环境， 语句

function foo() {
    function bar() {}; // 函数作用域的顶级， 语句
}

function foo() {
    return function bar() {}; // 命名函数表达式
}

foo(function () {}); // 匿名函数表达式

function foo() {
    return function bar() {
        function baz() {}; // 函数作用域的顶层，语句
    }
}

function () {}; // SyntaxError 函数声明需要有名字
if (true) {
    function () {}; // //SyntaxError 函数声明需要有名字
}
```

