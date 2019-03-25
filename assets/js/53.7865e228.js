(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{237:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"js-中的-与"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-中的-与","aria-hidden":"true"}},[s._v("#")]),s._v(" js 中的 "),a("code",[s._v("==")]),s._v(" 与 "),a("code",[s._v("===")])]),s._v(" "),a("p",[a("img",{attrs:{src:"http://younglight.top/19-1-5/60721737.jpg",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"_1-前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言","aria-hidden":"true"}},[s._v("#")]),s._v(" 1. 前言")]),s._v(" "),a("p",[s._v("作为一个程序员，我想大家在第一次看到 "),a("code",[s._v("a = b")]),s._v(" 的语句时一定是懵逼的。后来才知道 "),a("code",[s._v("=")]),s._v(" 在编程语言中是用来赋值的，而不是用来判断两个值是否相等。")]),s._v(" "),a("p",[s._v("那该怎么判断两个值是否相等呢？在 C 或 java 中，是使用 "),a("code",[s._v("==")]),s._v(" 来进行比较，而 JavaScript 就有意思了，除了使用 "),a("code",[s._v("==")]),s._v(" , 还加了 "),a("code",[s._v("===")]),s._v(" 。")]),s._v(" "),a("h2",{attrs:{id:"_2-区别与选择"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-区别与选择","aria-hidden":"true"}},[s._v("#")]),s._v(" 2. 区别与选择")]),s._v(" "),a("h3",{attrs:{id:"_2-1-它们有什么区别？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-它们有什么区别？","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.1 它们有什么区别？")]),s._v(" "),a("p",[s._v("具体的区别就一句话："),a("strong",[a("code",[s._v("==")]),s._v(" 在比较时允许进行强制类型转换，而 "),a("code",[s._v("===")]),s._v(" 不允许。")])]),s._v(" "),a("p",[s._v("很多人都担心 "),a("code",[s._v("==")]),s._v(" 做的事情多一些会不会影响比较的速度，说实话，会的，但影响是微秒级别的，完全可以忽略不计。")]),s._v(" "),a("p",[s._v("不难看出，"),a("code",[s._v("==")]),s._v(" 像是 "),a("code",[s._v("===")]),s._v(" 的一种更深入的扩展，因此，满足 "),a("code",[s._v("===")]),s._v(" 的值一定满足 "),a("code",[s._v("==")]),s._v("，反之则不成立。")]),s._v(" "),a("h3",{attrs:{id:"_2-2-该如何选择使用它们？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-该如何选择使用它们？","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.2 该如何选择使用它们？")]),s._v(" "),a("p",[s._v("很多人会建议你坚持使用 "),a("code",[s._v("===")]),s._v(" 而不使用 "),a("code",[s._v("==")]),s._v("， 我认为这是不明智的，有些时候，比如说处理后端返回的数据时，你无法保证对方传来的值到你进行比较的时候还是预期的那样，此时我觉得完全在可以适当的使用 "),a("code",[s._v("==")]),s._v(" 来进行兼容。")]),s._v(" "),a("p",[s._v("总的来说，当你真的确定进行比较的值是类型相同的，那就使用 "),a("code",[s._v("===")]),s._v("，否则，除了几种特殊情况，使用 "),a("code",[s._v("==")]),s._v(" 并没有什么问题 。")]),s._v(" "),a("h2",{attrs:{id:"_3-的比较规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-的比较规则","aria-hidden":"true"}},[s._v("#")]),s._v(" 3."),a("code",[s._v("===")]),s._v(" 的比较规则")]),s._v(" "),a("h3",{attrs:{id:"_3-1-基本类型值的比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-基本类型值的比较","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.1 基本类型值的比较")]),s._v(" "),a("p",[a("code",[s._v("===")]),s._v(" 的比较规则很简单，对于非对象类型的值，先判断两边的操作数是否是同一类型，如果是，则进行比较，否则，直接返回 "),a("code",[s._v("false")]),s._v("。")]),s._v(" "),a("p",[s._v("但有两个例外情况："),a("code",[s._v("NaN === NaN")]),s._v(" 和 "),a("code",[s._v("+0 === -0")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不同类型")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'12'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'12'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" undefined"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 同类型")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//特殊情况")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("NaN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("NaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h3",{attrs:{id:"_3-2-引用类型值的比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-引用类型值的比较","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.2 引用类型值的比较")]),s._v(" "),a("p",[s._v("对于包含引用类型值的比较，仍然会先判断两边的数据类型，如果只有一个是引用类型值，则直接返回 "),a("code",[s._v("false")]),s._v("，如果两边均是引用类型值，则会比较他们的引用地址是否一致。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'string'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'string'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" c "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" d "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h2",{attrs:{id:"_4-的比较规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-的比较规则","aria-hidden":"true"}},[s._v("#")]),s._v(" 4. "),a("code",[s._v("==")]),s._v(" 的比较规则")]),s._v(" "),a("p",[s._v("一开始说过了，在使用 "),a("code",[s._v("==")]),s._v(" 进行比较时，运行对两边的操作数进行强制类型转换，那么问题来了，什么情况下会进行转换？不同类型的转换规则又是怎样？")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("MDN")]),s._v(" 中有这样一张表，用来展示不同类型值进行 "),a("code",[s._v("==")]),s._v(" 判断时的转换规则。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://younglight.top/18-12-14/47678148.jpg",alt:""}})]),s._v(" "),a("p",[s._v("乍一看可能会觉得很乱，但仍然是可以分几种情况来概括这些情况。")]),s._v(" "),a("p",[s._v("在具体分析之前，建议先阅读上一篇文章 "),a("a",{attrs:{href:"https://github.com/YoungLightMing/MyBlog/issues/29",target:"_blank",rel:"noopener noreferrer"}},[s._v("显式 (名义) 与 隐式 (鸭子）类型转换"),a("OutboundLink")],1),s._v("\n,因为上图中你能看到有诸如 "),a("code",[s._v("isFalsy()")]),s._v("、"),a("code",[s._v("ToNumber()")]),s._v("、"),a("code",[s._v("ToString()")]),s._v("、"),a("code",[s._v("ToPrimitive")]),s._v(" 等抽象方法，使用它们只是为了让大家知道强制转换的方向和结果，而这些也都是上一篇文章讲到的内容。")]),s._v(" "),a("h3",{attrs:{id:"_4-1-undefined-和-null-与其它类型值的比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-undefined-和-null-与其它类型值的比较","aria-hidden":"true"}},[s._v("#")]),s._v(" 4.1 "),a("code",[s._v("Undefined")]),s._v(" 和 "),a("code",[s._v("Null")]),s._v(" 与其它类型值的比较")]),s._v(" "),a("p",[s._v("我们看前两行和前两列可以发现："),a("strong",[s._v("它们只和自身及对方相等，与其他类型值比较均返回 "),a("code",[s._v("false")]),s._v("。")]),s._v(" ....这个大概就是传说中的「黑风双煞」吧！")]),s._v(" "),a("p",[s._v("大家可能会看到 "),a("code",[s._v("Object")]),s._v(" 有一个 "),a("code",[s._v("isFalse()")]),s._v(" 方法，这个方法是用来判断参数值是否是假值，这个时候大家可能会有疑问了，对象不是都是真值吗？")]),s._v(" "),a("p",[s._v("但是有例外，比如 "),a("code",[s._v("document.all")]),s._v(" 就是一个假值对象，虽然已经被新的 JavaScript 标准废弃，但你或许会在老的项目中看到它，记住就好。")]),s._v(" "),a("p",[s._v("由于这俩值的特殊性，后面我们说“其他类型”值的时候是排除这俩类型的。")]),s._v(" "),a("h3",{attrs:{id:"_4-2-number-类型值与其他类型值比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-number-类型值与其他类型值比较","aria-hidden":"true"}},[s._v("#")]),s._v(" 4.2 "),a("code",[s._v("Number")]),s._v(" 类型值与其他类型值比较")]),s._v(" "),a("p",[s._v("除了上面的黑风双煞，"),a("code",[s._v("Number")]),s._v(" 算是相等比较时的大哥，谁想和它比较，谁就得先转成 "),a("code",[s._v("Number")]),s._v(" 类型。")]),s._v(" "),a("h3",{attrs:{id:"_4-3-boolean-类型值与其他类型值比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-boolean-类型值与其他类型值比较","aria-hidden":"true"}},[s._v("#")]),s._v(" 4.3 "),a("code",[s._v("Boolean")]),s._v(" 类型值与其他类型值比较")]),s._v(" "),a("p",[s._v("既然有大哥，肯定得有小弟，而 "),a("code",[s._v("Boolean")]),s._v(" 类型值则一马当先，以身作则，将大哥的原则贯彻到底，堪称模范小弟！")]),s._v(" "),a("p",[s._v("其他类型值想和 "),a("code",[s._v("Boolean")]),s._v(" 值做比较，它摇身一变将自己转成了 "),a("code",[s._v("Number")]),s._v(" 类型，哎，你说，别人能怎么办？！")]),s._v(" "),a("p",[s._v("无论别人怎么说，"),a("code",[s._v("Boolean")]),s._v(" 只想做一只安静的舔狗，无怨无悔，一生一世。")]),s._v(" "),a("h3",{attrs:{id:"_4-4-object-类型值与其他类型值比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-object-类型值与其他类型值比较","aria-hidden":"true"}},[s._v("#")]),s._v(" 4.4 "),a("code",[s._v("Object")]),s._v(" 类型值与其他类型值比较")]),s._v(" "),a("p",[a("code",[s._v("Object")]),s._v(" 作为 JavaScript 中最会伪装自己的一种类型，在比较之前谁也摸不透它们的真实身份。也正因为此，它们的日子过得不尽相同。")]),s._v(" "),a("p",[s._v("在进行比较时，JavaScript 国王会通过 "),a("code",[s._v("toPrimitive()")]),s._v(" 方法来揭开他们的真面目，最终你会发现，它们的真实身份可能是任意的一种基本类型。")]),s._v(" "),a("p",[s._v("因此，在最终比较时，它们也将以真实身份与其他类型值比较。")]),s._v(" "),a("h3",{attrs:{id:"_4-5-string-类型值与其他类型值比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-string-类型值与其他类型值比较","aria-hidden":"true"}},[s._v("#")]),s._v(" 4.5 "),a("code",[s._v("String")]),s._v(" 类型值与其他类型值比较")]),s._v(" "),a("p",[s._v("对于 "),a("code",[s._v("String")]),s._v(" 类型值来说，在进行比较时的日子并不好过，毕竟，黑风双煞惹不起，黑社会说话也得听，唯一能让它感受到生活希望的，就是在与 "),a("code",[s._v("Object")]),s._v(" 这个变色龙进行比较的时候了。")]),s._v(" "),a("p",[s._v("只有 "),a("code",[s._v("Object")]),s._v(" 在 "),a("code",[s._v("toPrimitive()")]),s._v(" 后转为字符串的时候它们可以以字符串的规则进行比较，否则，它们就要面临黑风双煞或是黑社会。")]),s._v(" "),a("h2",{attrs:{id:"_5-正确的使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-正确的使用方法","aria-hidden":"true"}},[s._v("#")]),s._v(" 5. "),a("code",[s._v("==")]),s._v("  正确的使用方法")]),s._v(" "),a("p",[s._v("github 上有位大神总结了下面这张图：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://younglight.top/18-12-14/719774.jpg",alt:""}})]),s._v(" "),a("p",[s._v("我们可以将此当做一份参考。")]),s._v(" "),a("p",[s._v("其实在实际的使用过程中，只要我们避免一些特殊的情况，"),a("code",[s._v("==")]),s._v(" 的使用还是安全的。")]),s._v(" "),a("p",[s._v("下面就是七种所谓的特殊情况。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true -- 晕！")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true -- 晕！")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true -- 晕！")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true -- 晕！")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true -- 晕！")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true -- 晕！")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true -- 晕！")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("如何避免？两个原则：")]),s._v(" "),a("ol",[a("li",[a("strong",[s._v("如果两边的值中有 true 或者 false，千万不要使用 ==。")])]),s._v(" "),a("li",[a("strong",[s._v('如果两边的值中有 []、"" 或者 0，尽量不要使用 ==。')])])]),s._v(" "),a("h2",{attrs:{id:"_6-最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-最后","aria-hidden":"true"}},[s._v("#")]),s._v(" 6. 最后")]),s._v(" "),a("p",[s._v("检验大家成果的时候到了，")]),s._v(" "),a("ol",[a("li",[s._v("仔细想想上面七种特殊情况的产生原因。")]),s._v(" "),a("li",[s._v("思考下面这些值的比较结果。")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ?")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ?")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ?")]),s._v("\n\nNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("valueOf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ?")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])])},[],!1,null,null,null);t.default=e.exports}}]);