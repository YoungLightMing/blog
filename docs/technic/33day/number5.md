---
title: 5. 函数调用栈，执行上下文及变量对象
---

# 函数调用栈，执行上下文及变量对象


![](http://upload-images.jianshu.io/upload_images/7803415-36e8e7d048f63524.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 1. 前言

**为什么会有这篇文章？**

在书籍或博客上，我们经常会看到「作用域链」、「闭包」、「变量提升」等概念，说明一个问题 —— 它们很重要。

但很多时候，对于这些概念，看的时候觉得自己已经明白了，可过不了多久，再让你说一说，可能就说不清楚了，之所以会这样，是因为我们对于 JavaScript 这门语言的运行机制不清楚。

我相信搞明白了今天所讲的内容，会对你理解那些知识大有裨益！


## 2. 函数调用栈（call stack）

### 2.1 什么是栈？

类似 js 中的数组，**栈也是用来存储数据的一种数据结构**，它的特点是**后进先出（LIFO）**。

与之相对的一种数据结构称为队列，**队列的特点是先进先出（FIFO）**。

可以想象这样一种场景：小明和同学们放学回家，老师让他在排在队伍的最前面，他们每天回家路上都要经过一个胡同，小明每次都是第一个进入胡同，肯定也是第一个出来，这就是所谓「先进先出」。

可是有一天，小明他们走到胡同里发现胡同口停了一辆车，把胡同给堵死了，没办法，他们只能队头变队尾往回撤，这时候，小明虽然最先进入胡同，却只能最后出去，最先出去的是排在队尾的小华，也就是「后进先出」。

### 2.2 什么叫函数调用栈?

在 js 中函数的调用也遵照这样以一个原则：最先调用的函数先放到调用栈中，假如这个函数内部又调用了别的函数，那么这个内部函数就接着被放入调用栈中，直至不再有函数调用。最先执行完毕的一定是最里面的函数，执行过后弹出调用栈，接着执行上一层函数，直至所有函数执行完，调用栈清空。

这样说可能会不太明白，举个例子：


```js
// 其他语句
function first() {
 console.log('first')
 function second() {
     console.log("second")
 }
 second();
 third();
 // 其他语句
}
//其他语句
function third() {
    console.log("third")
}
// 调用 first
first();
```
在上述代码中，首先调用的是函数 `first`, 此时 `first` 进入函数栈，接着在 `first` 中调用函数 `second`,`second` 入栈，当 `second` 执行完毕后，`second` 出栈，`third` 入栈，接着 `third` 执行完出栈，执行 `first` 其他代码，直至 `first` 执行完，函数栈清空。

![函数调用栈](https://upload-images.jianshu.io/upload_images/7803415-6fac698582be0e80.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





## 3. 执行上下文（Execution Context）
### 3.1 什么是执行上下文？

js 代码在执行时，会进入一个执行环境，它会形成一个作用域。这个执行环境，便是执行上下文。

`JavaScript` 主要有三种执行环境：

1. 全局执行环境： 代码开始执行时首先进入的环境。
2. 函数环境：函数调用时，会开始执行函数中的代码。
3. `eval`：不建议使用，可忽略。

### 3.2 执行上下文的生命周期

上面讲到 js 代码执行时会生成一个执行上下文。而这个执行上下文的周期，分为两个阶段：

1. **创建阶段**。这个阶段会生成**变量对象(VO)**，建立作用域链以及确定 this 的值。
2. **执行阶段**。这个阶段进行变量赋值，函数引用及执行代码。
到这里你应该就会明白，上面函数调用栈，就是生成了一个函数的执行上下文。

![执行上下文的生命周期](http://upload-images.jianshu.io/upload_images/7803415-c4b3d460996ec395.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 3.3 什么是执行栈？
执行上下文也同样遵循函数调用栈的规则，无非就是多加了一层 —— 全局执行上下文，函数执行完后会跳出执行栈，而全局执行上下文，会在关闭浏览器后跳出执行栈。

还是上面的例子，我们看一下执行栈。

![执行上下文](http://upload-images.jianshu.io/upload_images/7803415-b4638b9c64c699f1.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 4 变量对象
### 4.1 什么叫变量对象？

从上面其实可以得到答案，变量对象是 js 代码在进入执行上下文时，js 引擎在内存中建立的一个对象，用来存放当前执行环境中的变量。


### 4.2 变量对象(VO)的创建过程
变量对象的创建，是在执行上下文**创建**阶段，依次经过以下三个过程：
1.  **为函数的形参赋值。** 在进入函数执行上下文时，会首先检查实参个数，接着对实参对象和形参进行赋值，如果传入的实参数量小于形参数量，则会将没有被赋值的形参赋值为 `undefined`。
    ```js
      // 函数执行上下文
      function bar(a,b,c){
           console.log(a,b,c); // 1 4 undefined
        }
        bar(1,4);
    
        // 变量对象
    
        VO = {
            a: 1,
            b: 4,
            c: undefined
        }
    ```
2.  **检查当前环境中的函数声明。** 当遇到同名的函数时，后面的会覆盖前面的。
    
    ```js
    console.log(a); // function a() {console.log('fjdsfs') }
    function a() {
        console.log('24');
    }
    function a() {
      console.log('fjdsfs')
    }
    ```
    在上面的例子中，在执行第一行代码之前，函数声明已经创建完成，后面的对之前的声明进行了覆盖。
3.  **检查当前环境中的变量声明并赋值为`undefined`。** 当遇到同名的函数声明，为了避免函数被赋值为 `undefined` ,会忽略此声明
    
    ```js
    console.log(a); // function a() {console.log('fjdsfs') }
    console.log(b); // undefined
    function a() {
        console.log('24');
    }
    function a() {
      console.log('fjdsfs');
    }
    var b = 'bbbbbbbb';
    var a = 46;
    ```
    在上例我们可以看到，在代码执行前，a 仍旧是一个函数，而 b 是 undefined。

根据以上三个步骤，对于**变量提升**也就大体知道是怎么回事了。
    
### 4.3 *变量对象变为活动对象*

   执行上下文的第二个阶段，称为执行阶段，在此时，会进行变量赋值，函数引用并执行其他代码，此时，变量对象变为**活动对象**。

我们还是举上面的例子：

```js
console.log(a); // function a() {console.log('fjdsfs') }
console.log(b); // undefined
function a() {
    console.log('24');
}
function a() {
  console.log('fjdsfs');
}
var b = 'bbbb';
console.log(b); // 'bbbb'
var a = 46; 
console.log(a);  // 46
var  b = 'hahahah';
console.log(b); // 'hahah'
```
 在上面的代码中，代码真正开始执行是从第一行 `console.log()` 开始的，自这之前，执行上下文是这样的：
```js
// 创建过程
EC= {
  VO： {}; // 创建变量对象
  scopeChain: {}; // 作用域链
  this: window;
}
VO = {
  argument: {...}; // 当前为全局上下文，所以这个属性值是空的
  a: <a reference> // 函数 a  的引用地址
  b: undefiend  // 见上文创建变量对象的第三步
}
```
根据步骤，首先是 arguments 对象的创建；其次，是检查函数的声明，此时，函数 a 声明了两次，后一次将覆盖前一次；最后，是检查变量的声明，先声明了变量 b，将它赋值为 undefined，接着遇到 a  的声明，由于 a 已经声明为了一个函数，所以，此条声明将会被忽略。

到此，变量对象的创建阶段完成，接下来时执行阶段，我们一步一步来。

1. 执行 `console.log(a)`,我们知道，此时 a 是第二个函数，所以会输出`function a() {...}`；

2. 执行 `console.log(b)`，不出我们所料，将会输出 `undefined`；

3. 执行赋值操作： `b = 'bbbb'`；

4. 执行 `console.log(b)` ，此时，b 已经赋值，所以会输出 `'bbbb'`；

5. 执行赋值操作： ` a = 46`;
6. 执行 `console.log(a)` ，此时，a 的值变为 46。
7. 执行赋值操作： `b = 'hahahah'`；
8. 执行 `console.log(b)`， b 已经被重新赋值，输出 `hahahah`。

由上面我们可以看到，在执行阶段，变量对象是跟着代码不断变化的，此时，我们把变量对象成为活动对象。

执行到最后一步时，执行上下文变成了这样。
```js
// 执行阶段
EC = {
  VO = {};
  scopeChain: {};
  this: window;
}
 // VO ---- AO
AO = {
  argument: {...};
  a: 46;
  b: 'hahahah';
}
```

以上，就是变量对象在代码执行前及执行时的变化。

刚开始就说过，这部分概念将会对你理解后面的知识有很大的帮助，所以刚开始接触的话可能会有些晦涩，建议就是认真读两遍，结合后面的知识，经常回过头来看看。

最后留一道题，给大家作为练手，观察观察执行上下文及变量对象的变化。

``` js
console.log(a);
console.log(b);
var a = 4;
function a() {
  console.log('我是a1');
  b(3, 5);
}
var a = function a() {
  console.log('我是a2');
  b(3, 5);
}
var b = function (m, n) {
   console.log(arguments);
   console.log('b')
}
a();

```