---
title: 3. 显式 (名义) 与 隐式 (鸭子）类型转换
---

# 显式 (名义) 与 隐式 (鸭子）类型转换

![显示与隐式类型转换](http://younglight.top/19-1-5/25571963.jpg)
## 1. 前言

说实话，JavaScript 的类型转换是个相当头疼的问题，无论是对于初学者还是有经验的老司机。它的难处并不在于概念多难理解，而是情况多且杂，看似相同的情况结果却又出人意料，很少有人能保证时刻都能做出正确的判断。

因此，这篇文章希望能讲的足够细致和明确，让大家能够在日常使用中，能够尽快的搞清楚类型转换的顺序和结果。

长文预警，建议先 mark, 分多次查看。

## 2. 类型转换

### 2.1 什么叫类型转换？

我们知道，JavaScript 中存在七种数据类型，在必要的时候，我们会对不同类型的值进行相互间的转换。比如说，在进行条件判断时，我们需要将其他类型的值转为布尔类型值，在使用 `console.log()` 打印内容时，需要将其转为字符串输出。

### 2.2 JavaScript 中的类型转换方式有哪些？

在 JavaScript 中，分为显式类型转换和隐式类型转换。

其中，显式类型转换是我们为了功能需要，人为的将一种类型的值转换为另一中类型，转换的时机和结果都是我们预期的；而隐式类型转换则是 JavaScript 在代码运行时，未经我们允许而进行的强制类型转换。

##  3. 显式类型转换
### 3.1 其他类型转换为字符串( ToString )

值类型 |例子| 转换后  | 调用法则
--| -- | --| --
number| 34| '34'| `String(34)`
boolean| true| 'true'| `String(true)`
boolean| false| 'false'| `String(false)`
undefiend| undefined| 'undefined'| `String(undefined)`
null | null | 'null' | `String(null)`
object | { a: 'fa' }|  "[object Object]" | `String({a: 'fa'})`
object| new String(45)| '45'| `String(new String(45))`
object | [1, 2] | '1,2'| `String([1,2])`
object| function() {var d;}| "function() { var d; }"| `String(function() {var d;})`

其他类型的值转换为字符串，是通过调用原生函数`String()`实现，但不同类型值的实现却有明显的差异。

对于基本类型的值，直接将其转化为值的字符串形式。而对于对象类型来说，便有些复杂了。

首先，每个对象内部都有一个 **`[[Class]]`** 属性，我们通过`Object.prototype.toString()` 方法可以得到这个属性的字符串值。

对于对象(如`{ a: 'ff'; }`)而言，除非自己定义 `toString()` 方法，否则，调用   `String()` 方法将返回和调用 `Object.prototype.toString()` 相同的值。(如 : `"[object Object]"`)。

```js
const obj_1 = {
  b: 'lalala'
};
const obj_2 = {
  toString() {
    return "fasfa";
  }
};
String(obj_1); // '[object Object]'
String(obj_2); // 'fasfa'
```
其次， JavaScript 中，除了普通对象，还有以下几种:
1. #### **封装对象**
    对于基本类型值 `string`、`number`、`boolean` 是没有 `.length` 及`toString()` 方法的，因此，JavaScript 提供了内建函数 `String()`、`Number()`、`Boolean()` ，通过 `new ` 调用后会将基本类型值封装为一个对象。

    如果想要取到封装对象中的基本类型值，可以使用 `valueOf()` 方法。

    ``` js
    // string 类型
    const a = 'i am string';
    typeof a; //  'string'
    // string 封装对象
    const b = new String('i am sringObject');
    typeof b; // 'object'
    // 拆封
    b.valueOf(); // i am sringObject
    ```
    那对于封装对象，`String()` 会返回什么值呢？
    
    事实上，封装对象对于 `toString()` 方法进行了封装，因此，对封装对象调用 `String()` 方法，将会返回封装对象调用`toString()` 方法返回的值。
    
    ``` js
    const numObj = new Number(false); // Number {0}
    numObj.toString(); // '0'
    String(numObj); // '0'
    ```
2.  #### **函数**
    对于函数来说，它也包装了自己的 `toString()`方法，因此，调用 `String()` 方法时将返回函数字符串化后的值。
  
    ``` js
    function bar() {
      console.log('bar');
    }
    String(bar); // "function bar() {↵  console.log('bar');↵}"
    bar.toString(); // "function bar() {↵  console.log('bar');↵}"
    Object.prototype.toString.call(bar); // "[object Function]"
    ```
    从上例可以看到，`String()` 与 `toString()` 方法调用的是函数自己封装的`toSring()`，如果调用对象的 `toString()` 方法，则函数与普通对象一样，返回的是函数对象内部的 `[[Class]]` 属性。
3. #### **数组**
    数组同函数一样，同样包装了自己的  `toString()` 方法。此方法会将数组中的每一项用逗号连接成一个字符串。

    ``` js
    const arr = [1,4,6];
    String(arr); // "1,4,6"
    arr.toString(); // "1,4,6"
    Object.prototype.toString.call(arr); // "[object Array]"
    ```
### 3.2 其他类型值转为数字( ToNumber )
同样，先感受一下什么叫绝望？~~

值类型 |例子| 转换后  | 调用法则
--| -- | --| --
string| '34'| 34| `Number('34')`
string| ''| 0| `Number('')`
string| '34fad'| NaN| `Number('34fad')`
string| '34fad'、'34.24'、'34'| 34| `parseInt('34fad')`
string| '34fad'、'34'|34 | `parseFloat(值)`
string| '34.34'|34.34 | `parseFloat(值)`
boolean| true| 1| `Number(true)`
boolean| false| 0| `Number(false)`
undefiend| undefined| NaN| `Number(undefined)`
null | null | 0| `Number(null)`
object | { a: 'fa' }|  NaN | `Number({a: 'fa'})`
object| new String('fff')| NaN| `Number(new String('fff'))`
object | [] | 0 | `Number([])`
object | [1, 2] | NaN | `Number([1,2])`
object| function() {var d;}| NaN | `Number(function() {var d;})`

看完一脸懵逼有没有？！哈哈，不用害怕，乍看上去，大概会觉得异常混乱，其实稍加整理，不外乎以下几种情况：

1.  #### **转换后值为 NaN**

    数字与字符串不同，并不是任何类型值都能转为数字，因此，就会有 NaN，意思就是 `not a number`。

    诸如包含非数字的字符串、undefined、非空数组，部分对象，都是我们知道无法转化为一个数字的。

2. #### **boolean 类型值**

   对于 `true`和  `false` ，`true` 转换为 1，`false` 转为 0。
3. #### **带有数字的字符串**

    从上面我们可以看到，对于带有数字的字符串，有三种方法进行转换，但规则不同。

    - `Number()` 方法会对字符串整体进行转换， 它会先判断这个字符串是否是个正确的数字字符串，如果不是，则会返回 `NaN`。
  
    - `parseInt()` 方法则会对字符串从左往右依次解析，直到遇到第一个非数字字符(包括小数点)，如果最左边的字符是非数字字符，则返回 `NaN`。 

    - `parseFloat()` 方法解析顺序同 `parseInt()` 相同，不同的是它遇到**第一个**小数点时会正常往右继续解析，直至遇到非数字字符停止。

    其实严格来讲，只有 `Number()` 方法是进行转换操作，而后两者属于将字符串**解析** 为数字，但为了讲解方便，我将它们放在一起讲述。
4. #### **对象**

   对于对象而言，会先将对象转为基本类型值( ToPrimitive )，再对基本类型值调用 `Number()` 方法。

   那如何将对象转为基本类型值？首先会调用对象的 `valueOf()` 方法，如果没有此方法或者此方法返回值不是基本类型值，则会调用`toString()` 方法，如果 `toString()` 方法不存在或者返回值也不是基本类型值，会产生 `TypeError` 错误。

    ```js
    // 普通对象
    const nomalObj = {
      a: '56'
    };
    nomalObj .valueOf(); // { a: '56'}
    nomalObj.toString(); // "[object Object]"
    // Number(nomalObj) 相当于Number("[object Object]") 
    Number("[object Object]"); // NaN
    Number(nomalObj); // NaN
   
   // valueOf() 返回基本类型值的对象
    const obj_1 = {
      a: '56',
      valueOf: function() {
        return '23';
      }  
    };
    obj_1.valueOf(); // '23'
    // Number(obj_1) 相当于 Number('23');
    Number('23'); // 23
    Number(obj_1); // 23
    
    // valueOf() 返回非基本类型值，toString() 返回基本类型值的对象
    const obj_2 = {
      a: '56',
      valueOf: function() {
        return {b: 34}
      },
      toString: function() {
        return false;
      }
    };
    obj_2.valueOf(); // {b: 34}
    obj_2.toString(); // false
    // Number(obj_2) 相当于 Number(false)
    Number(obj_2); // 0
    Number(false); // 0
    ```
    上面的规则，适用于我们所说的所有对象，比如数组，封装对象和函数。

### 3.3 其他类型转换为 boolean 值( ToBoolean )

我们可以通过 `Boolean()`方法 或`!!`运算符来显式的将一个值转换为布尔值。

相对来说，判断一个值是 `true` 还是 `false` 则比较容易，我们只需要记住以下几种值会转换为 `false`，而其他值，均为 `true`。

- undefined
-  null
- false
- +0、-0 和 NaN
-  ""

当我们看到 `[]、{}` 甚至是 `"''"` 时，也一定要记住，它们是真值。
```js

Boolean(false); // fasle
Boolean([]); //true
Boolean({}); //true
Boolean(''); // false
Boolean('""'); // true
Boolean('false'); // true
```

## 4. 隐式强制类型转换

除了进行强制类型转换，JavaScript 会在运行时根据需要，自动进行类型的转换，尽管这个特点饱受争议，但不得不承认，某些情况下我们仍旧更喜欢使用某些隐式转换规则。

一旦某些隐式的规则被接受并广泛使用，从某种意义上来讲，这些规则便同显式转换一样。

### 4.1 奇怪的 `+` 号
先看一一个最常见的例子：
```js
const a = 5;
const b = '6';
console.log(a+a); // 10
console.log(a+b); // '56'
console.log(b+b); // '66'
```
之所以会产生上例中的状况，原因就在于在**JavaScript 中，`+` 运算符既可以作用于`number` 类型值，也可以作用于 `string` 类型值。前者进行数字相加，后者则进行字符串的拼接。**

这就是为什么`5 + 5 = 10` 而 `'6' + '6' = '66'`。而当 `+` 号两边既有数字也有字符串时，则会隐式的将数字转换为字符串，然后进行字符串的拼接。

那两边没有字符串的情况呢？比如：

```js
const a = [1,4];
const b = [2,3];
const c = 4;
console.log(a+c); // '1,44'
console.log(a+b); // '1,42,3'
```
为什么会这样？原来**只要` + ` 的其中一个操作数可以通过某种方式（`toPrimitive`）转换为字符串，就会进行字符串的拼接。**

我们知道，数组`[1,4]` 可以通过 `toString()` 方法返回字符串 `'1,4'`，因此，`[1,4] + 4` 就相当于 `'1,4' + 4 `。

因为这个特性，我们在想将一个数字 a 转换为字符串时，便可以直接使用 `a + ''` 的形式即可。相对于显式使用`String(a)`，隐式转换则更加简洁。

从数组的例子我们可以看到，除了数字，其他类型的值也可以通过 `+ '  '` 的形式转化为字符串。
```js
const a = {b: '2'}
console.log( a+ ''); // "[object Object]"
```
但有一点需要注意，对于对象而言，使用  `String()` 方法是直接取这个对象 `toString()` 方法的返回值，而 `+ ' '` ,则会对这个对象调用 `valueOf` 反法，然后对 `valueOf` 的返回值调用 `toString()`，将其转换为字符串。

```js
const a = {
  toString: function() { return 45 },
  valueOf: function() { return 4}
 };
String(a); // '45'
a + ' '; //  // '4'
```
好在除非我们特意去改变一个对象的 `valueOf` 及 'toString()' 方法，通过上述两个方式的转换后的结果都是一致的。

### 4.2 有用的 `-` 号
与 `+` 号不同的是，`-` 号只能用于数字的相减，对于它两边的操作数，都会经过隐式类型转换转为数字。

```js
const a = '34';
const b = '4';
console.log(a - b); // 30
const c = 'dd';
console.log(a - c); // NaN
const d = [4];
console.log(a - d); // 30
```
根据上例，我们可看到，如果 `-` 号两边是字符串，则会将他们强制转换为数字，如果 `-` 两边不是字符串，则会先将其转为字符串，再将这个字符串转为数字。

### 4.3 隐式转换为布尔值
将其他类型值隐式转换为布尔值是我们最常用的一种转换。因为程序的编写实质上就是不停的进行判断。

在以下场景中，都是进行判断，而只要传入的值不是布尔值，都会通过隐式类型转换转为布尔值。

1. `if (..) {}` 语句中的条件判断表达式。
2. `for ( .. ; .. ; ..)` 语句中的条件判断表达式。
3. `while (..) ` 和 `do ... while ( ..)`  中的条件判断表达式。
4. `? : ` 中的条件判断表达式。
5.  逻辑或 ` || ` 或逻辑与 ` && ` 左边的操作数。

在这些情况下，都将会进行其他类型值到布尔类型值的隐式转换，规则同显式调用 `Boolean()`。

## 5. 最后
上面就是不同数据类型直接显式或隐式的转换规则，我们不需要将每一种情况都牢记在心，但有必要对他们进行充分的了解，这可以保证我们在实际写代码时避免不少奇怪又难以排查的 bug 。