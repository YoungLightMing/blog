---

title: 12. new 与构造函数, instanceof 与实例

---

#  new 与构造函数, instanceof 与实例


## 1. 概述
在 ES6 之前，JavaScript 中没有类的概念。取而代之的是构造函数。通过 `new` 操作符调用一个函数，会返回一个对象，我们通常会把专门用来构造对象的函数，称为构造函数，把构造的对象，称为构造函数的实例。

通过这种方式生成的对象，就是构造函数的实例。我们可以通过 `instanceof()` 方法，来判断一个对象是否是某个构造函数的实例。

```js
// 构造函数 Person
function Person(name) {
    this.name = name;
    this.hands = 2;
}
// 构造函数 Animal
function Animal(name) {
    this.name = name;
    this.type = 'animal';
}
// 生成 Person 实例 xiaoming
const xiaoming = new Person('xiaoming');
// 生成 Animal 实例 lossy
const lossy = new Animal('lossy')

xiaoming; // { name: 'xiaoming', hands: 2 }
lossy; // { name: "lossy", type: "animal" }

// 检测实例是否属于构造函数
xiaoming instanceof Person; // true
xiaoming instanceof Animal; // false

lossy instanceof Animal; // true
lossy instanceof Person; // false
```

在上面的例子中，函数 `Person`、`Animal` 即构造函数，而 `xiaoming` 和 `lossy` 便分别是它们的实例。

## 2. new 操作符

从上面我们看到，`new` 操作符可以用来调用构造函数，生成实例对象。

那么假如我们不使用它，调用构造函数会发生什么？

```js
const 张伟 = Person('张伟');
张伟; // undefined
window.name; // '张伟'
```
为什么会这样？调用函数返回了 `undefind`, 而 window 多了一个值为 “张伟” 的 name 属性。

第一个问题，因为函数调用如果不指定返回值，就会返回 `undefind`;

第二个问题，在全局中调用了 `Person`, 函数内部的**this** 会指向 window ,因此，调用 `Person` 后会在 window 中添加了 name 和 hanhs 两个全局变量。

由此，我们可以隐约猜出，使用 `new` 调用函数时做这些事情：

1. **创建一个空对象**
2. **将这个空对象的原型，指向构造函数的prototype属性** // 这一点会在下一节讲到
3. **将 this 指向这个对象**
4. **调用构造函数的代码，为这个对象添加属性和方法**
5. **返回这个对象**

## 3. 手写一个 new 

既然知道了 `new` 的作用，我们可以试着自己实现一个 `new` 方法。

```js
function New(fn) {
    // 1.
    const obj = {}
    // 2
    obj._proto_ = fn.prototype;
    // 3、4
    fn.apply(obj, [].slice.call(arguments, 1));
    // 5
    return obj;
}
const 路某人 = New(Person,'路某人');
陆某人; // { name: "路某人", hands: 2 }
```

