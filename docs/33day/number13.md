---
title: 13. 原型继承与原型链
---

# 原型继承与原型链

## 1. 原型与原型链

每个对象都有一个 `_proto_` 属性，指向它的原型对象。

而每个对象都是由构造函数生成，他们的构造函数有一个 `prototype` 属性，同样指向这个原型对象。

由于函数也是一种对象，所以，函数也有 `_proto_` 属性，那函数时从怎么生成的呢？是通过构造函数 `Function` 创建的。所以，每一个函数的 `_proto_` 属性将指向 `Function.prototype`。

最终，所有的对象的原型对象都将指向 `Object.protoType` .

![](https://user-gold-cdn.xitu.io/2018/11/16/1671d387e4189ec8?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)


上面这张图已经涵盖了所有情况。我们也能从中得到几点信息：

1. **所有函数的 `_proto_` 属性都是指向 `Function.prototype`, 因为函数也是通过构造函数 `Function` 生成 。**

2. **所有的对象的 `_proto_` 属性，最终都指向 `Object.prototype`,因为所有的对象，都是由构造函数 `Object` 生成。**

3. **构造函数`Function`的 `prototype` 属性和 `_proto_` 属性，都指向 `Function.prototype`。**
## 2. 继承
JavaScript 没有类的概念，因此，通过原型链的方式来实现继承。

继承的理念说起来很简单。

1. **子构造函数继承父构造函数的属性和方法**

2. **子构造函数继承父构造函数原型上的属性和方法**

通常有以下几种方式。
### 2.1 组合继承
```js
 function Animal() {
    this.foot = 4;
    this.eye = 2;
}
Animal.prototype.jump = () => {console.log('i can jump')}

function Cat() {
   // 继承父类上的属性
    Animal.call(this);
    // 子类自己的属性
    this.name = 'cat'
}
// 继承父类原型上的方法
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
// 子类的实例
const ming = new Cat();
ming; // {foot: 4, name: 'cat', eye: 2}
ming.jump(); // i can jump
```
以上就是组合方式的原型继承，但有一点不足，我们是通过调用 `new Animal()` 的方式来继承父类原型上的方法，由于调用了 `Animal`,因此在 `Cat` 的 `prototype` 对象上，就生成了`foo`, `eye` 两个属性，虽然不会影响继承，但会占用空间。

### 2.2 寄生组合式继承
```js
//  父类 Animal 同上
// 继承父类的属性
function Dog() {
	Animal.call(this);
	this.name = '旺财';	
}
// 继承父类原型上的方法和属性
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constuctor = Dog;
// 子类的实例
const wangcai = new Dog();
```
这样，`Dog` 将直接继承 `Animal.prototype` ,而不用通过实例来继承。没有调用 `new Animal` 也就不会有多余的属性。

### 2.3 class 继承
> 如何实现继承？有哪几种方式，各有什么特点？

class 是 ES6 的新语法，其本质是 ES5 的语法糖，其中的绝大部分功能都可以通过原型
继承的方式实现。

相对于原型继承，Class 语法就简洁多了。

```js
// 父类Class
class Animal {
	constructor() {
		this.footer = 4;
		this.eye = 2;
	}
	jump() {
		console.log('i can jump')
	}
}
// 子类
class Cat extends Animal {
	constructor() {
	// 继承父类的实例属性及原型方法
	super()
	this.name = 'ming'
	}
	run() {
		console.log('i can run')
	}
}
// 生成子类的实例

const ming = new Cat();
ming; //{}
// 调用父类原型上的方法
ming.jump();
// 调用子类原型上的方法
ming.run();
```
在 `class` 语法中，`constructor` 就相当于构造函数，而 `super` 方法，就像是调用 `Animal.call(this)`,并且将子类的原型指向了父类的原型。 在 `constructor ` 函数之外定义的方法或属性，则相当于在构造函数的原型上添加方法或属性。可以将上面的例子同原型继承的例子做一个对比。