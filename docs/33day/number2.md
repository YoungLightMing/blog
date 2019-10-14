---
title: 2. 值类型与引用类型
---


# 值类型与引用类型

![值类型与引用类型](http://younglight.top/19-1-5/75519039.jpg)

## 1. 说点别的
这是《关于 JavaScript 你必须要知道的 33 个概念 》系列的第二篇文章，今天稍微给大家介绍下这个系列。

如今前端的发展日新月异，很多人(包括我)都是追逐着一些流行的框架学习，但往往是浮于表面，知其然而不知其所以然。当我认真的想要搞懂 react、redux 实现原理时，才发现，JavaScript 的基础知识是如此重要。

一直以来，自己对于 JavaScript 的理解都散乱无章，这就造成很多知识当时看过后感觉明白了，过一段时间用到的时候却仍旧一脸懵逼。因此，我决定整理这样一个系列，加深自己对 JavaScript 的理解，形成知识体系，以达到融会贯通。


这个计划会写 33 篇文章，会包括 JavaScript 中的基础概念如「数据类型」、「表达式和语句」、「作用域」等，以及如「闭包」、「this」、「promise」等有些理解难度的知识点。

首先声明我不是什么大佬，对于很多知识也是一边钻研一边写，所以如果有不同的看法，恳请大家指正，我会及时更新文章的不足之处！

接下来，我们言归正传。

## 2. 定义和分类

在上一篇文章（[数据类型](https://github.com/YoungLightMing/MyBlog/issues/22)）中我们知道 JavaScript 的数据类型分为基本数据类型和对象数据类型。它们的区别之一就是在计算机中的存储方式不同：基本类型数据是将变量名及值存储在变量对象中，而引用类型的数据是将变量名和地址存储在变量对象中，真正的值是存储在堆内存中。

再次将那张图放过来：

![](http://upload-images.jianshu.io/upload_images/599584-cce8e155e19593fb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

其中，基本类型（number,string,boolean,undefined,null）,便称为值类型，而对象类型（object,function,array及封装对象）便称为引用类型。

## 3. 值类型与引用类型的区别

### 3.1 可变性与不可变性

**值类型的数据是不可变的。** 这里说的不可改变，是指值本身，一旦创建，便不可更改。什么意思？举个例子：

```js
let a = 34;
a = 43;
```
我们先声明一个变量 a 并赋值为 34，此时，在变量对象中 34 就已经存放在固定位置，后边将 a 的值改为 43，看起来好像是将 34 改变成了 43， 其实不然，我们只是又在变量对象中存入了 43，原来的 34，仍旧原封未动的存在那里，等待着被内存回收。如下图所示：

<div align="center">
<img src="http://upload-images.jianshu.io/upload_images/7803415-17a22d37d99426ed.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"/>
</div>

**引用类型值是可以改变的。** 引用类型的值是将变量名称和引用地址存储在变量对象中，而值是在堆内存中，我们可以随时更改它本身的值。

```js
let b = {
	m: 1,
	n: 'emmm'
}
b.m = 4;
b;   // {m: 4,n: 'emmm'}
```
在上例中，我们声明 b 是一个引用类型值，接着，我们对 b 进行了更改，我们可以看到，更改是有效的。


### 3.2 值的复制
**值类型的复制是值本身的复制，引用类型的复制是值得引用的复制。** 不同的复制方式会在复制后有不同的表现。

```js
// 值类型的复制
var a = 45;
var b = a;
console.log(b); // 45
b = "someword";
console.log(b) // "someword"
console.log(a); // 45
// 引用类型的复制
var someone= {
  age: 14,
  weight: 134,
 sex: 'man'
};
var anthor = someone;
console.log(anthor); // {age: 14, weight: 134, sex: "man"}
anthor.age = 16;
console.log(anthor); // {age: 16, weight: 134, sex: "man"}
console.log(someone); // {age: 16, weight: 134, sex: "man"}
```

从上面的代码中可以看到，变量 b 复制变量 a 的之后进行了更改，b 的值改变了，而 a 的值没变；变量 anthor 复制的是 someone 的引用，anthor 更改了引用指向的那个对象的值，someone 的值自然也跟着改变了。

具体过程如图所示：

   ![](http://upload-images.jianshu.io/upload_images/7803415-347ba9aab0b1c92e.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 4. 应用
它们的概念理解起来很简单，但很多时候应用到实际场景中，我们就可能想不到这一层，会造成很多意外的问题，接下来我们看一下。
### 4.1 == 与 ===

在进行 `==`  及 `===` 判断时，前者会对等号两边的值进行强制类型转换，这对判断值类型的相等有所区别。但是对于引用类型，它们都只会判断引用地址是否相同，而不管对象里的属性值是否相同。

比如：
```js
// 值类型相等
let a = 45;
let b  = 45;
console.log(a == b); //  true
b = '45';
console.log(a == b); // true
console.log(a === b); // false
// 引用类型相等
let men_1 = {
  age: 23,
  sex: 'man',
};
let men_2 = {
  age: 23,
  sex: 'man',
};

let men_3 = men_1;
console.log(men_1 == men_2); //  false
console.log(men_1 === men_2); //  false
console.log(men_1 == men_3); // true
console.log(men_1 === men_3); // true
```
从上面我们可以看到：`45 === 45` 但 `45 != '45'`，但 men_1 虽然和 men_2 的值相同，但他们并不相等，无论是 `==` 还是 `===`。

***那该如何按照我们的想法比较呢？***

可以把它们转化为字符串进行比较，当然，这样也不能保证完全正确（比如对象中含有正则表达式），更严格的方法以后再讨论。
```js
function compare(a, b) {
  return JSON.stringify(a) == JSON.stringify(b);
}
```
### 4.2 函数传参

函数传参时，是将传入的参数拷贝到函数的参数参数变量上，因此，拷贝带来的问题在函数传参时仍旧存在。
```js
function foo(a,b) {
  var d = a;
  d = 'string';
  var e = b;
  e.name = 'xiaohong';
}
var exmp_1 = 3;
var exmp_2 = {
  name: 'xiaohua'
};
foo(exmp_1,exmp_2);
console.log(exmp_1); // 3
console.log(exmp_2); // {name: "xiaohong"}
```
如上所示，值类型传入后再函数内的修改不会污染外部的变量，而引用类型的变量由于复制的是引用，在函数内部的改动会影响到外部的变量。

若是想要避免这种情况，则需要在接受参数时进行深拷贝。

```js
function foo(people) {
  const newPeople = JSON.parse(JSON.stringify(people));
  newPeople.firstName = 'wang';
}
var Liu = {
   firstName: 'liu'
}
foo(Liu);
console.log(Liu); // {firstName: "liu"}
```
## 5. 一道小题

到此，关于值类型与引用类型的介绍就结束了，留一道题给大家，大家可以借此看一看对本文的理解。

```js
function create(person) {
  var personA = person;
  personA.name = 'David';
  var personB = {
      name: 'saay',
      age: 13
  };
  return personB;
}
var Jone = {
  name: 'Join',
  age: 25
}
var Wang = create(Jone);
console.log(Jone) ;// ??
console.log(Wang); // ??
```

