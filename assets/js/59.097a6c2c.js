(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{233:function(t,_,v){"use strict";v.r(_);var a=v(2),e=Object(a.a)({},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"bfc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#bfc","aria-hidden":"true"}},[t._v("#")]),t._v(" BFC")]),t._v(" "),v("h2",{attrs:{id:"_1-概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-概述","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 概述")]),t._v(" "),v("p",[v("code",[t._v("BFC")]),t._v("(Block Formatting Context)，即块级格式化上下文。")]),t._v(" "),v("p",[v("code",[t._v("BFC")]),t._v(" 是 web 页面的可视化 CSS 渲染的一部分，是布局过程中生成的块级盒子区域，也是浮动元素与其他元素的交互限定区域。")]),t._v(" "),v("p",[t._v("如果一个元素触发 "),v("code",[t._v("BFC")]),t._v(" 的条件，则 "),v("code",[t._v("BFC")]),t._v(" 中的元素布局不受外部影响。你可以把 "),v("code",[t._v("BFC")]),t._v(" 想象成一个大箱子，箱子外面的元素将不与箱子内的元素产生作用。")]),t._v(" "),v("h2",{attrs:{id:"_2-如何产生-bfc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何产生-bfc","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 如何产生 "),v("code",[t._v("BFC")])]),t._v(" "),v("div",{staticClass:"tip custom-block"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("ol",[v("li",[v("strong",[t._v("float 属性值不为 none")])]),t._v(" "),v("li",[v("strong",[t._v("position 属性值不为 relative 和 static")])]),t._v(" "),v("li",[v("strong",[t._v("overflow 属性值不为 visible")])]),t._v(" "),v("li",[v("strong",[t._v("display 属性值为 table-cell 、 table-caption、inline-block的其中一个")])])])]),t._v(" "),v("h2",{attrs:{id:"_3-bfc-特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-bfc-特点","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. "),v("code",[t._v("BFC")]),t._v(" 特点")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("内部的 Box 会在垂直方向上，一个接一个的放置。")])]),t._v(" "),v("li",[v("p",[t._v("Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠")])]),t._v(" "),v("li",[v("p",[t._v("每个元素的左外边缘（margin-left)， 与包含块的左边（contain box left）相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。除非这个元素自己形成了一个新的BFC。")])]),t._v(" "),v("li",[v("p",[t._v("BFC的区域不会与float box重叠。")])]),t._v(" "),v("li",[v("p",[t._v("BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。")])]),t._v(" "),v("li",[v("p",[t._v("计算BFC的高度时，浮动元素也参与计算")])])]),t._v(" "),v("h2",{attrs:{id:"_4-应用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-应用","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. 应用")]),t._v(" "),v("ol",[v("li",[v("strong",[t._v("清除浮动")]),t._v("\n浮动元素的父元素上设置 "),v("code",[t._v("overflow: hidden")]),t._v(" , 形成 "),v("code",[t._v("BFC")]),t._v(", 父元素的高度就不会塌陷。")]),t._v(" "),v("li",[v("strong",[t._v("防止 margin 合并")]),t._v("\n为合并的元素套上一个父元素，并在父元素上设置 "),v("code",[t._v("overflow: hidden")]),t._v("。")])])])},[],!1,null,null,null);_.default=e.exports}}]);