---
title: BFC
---

# BFC

## 1. 概述

`BFC`(Block Formatting Context)，即块级格式化上下文。

`BFC` 是 web 页面的可视化 CSS 渲染的一部分，是布局过程中生成的块级盒子区域，也是浮动元素与其他元素的交互限定区域。

如果一个元素触发 `BFC` 的条件，则 `BFC` 中的元素布局不受外部影响。你可以把 `BFC` 想象成一个大箱子，箱子外面的元素将不与箱子内的元素产生作用。


## 2. 如何产生 `BFC`

:::tip   
1. **float 属性值不为 none**
2. **position 属性值不为 relative 和 static**
3. **overflow 属性值不为 visible**
4. **display 属性值为 table-cell 、 table-caption、inline-block的其中一个**
:::

## 3. `BFC` 特点

1. 内部的 Box 会在垂直方向上，一个接一个的放置。
2. Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠

3. 每个元素的左外边缘（margin-left)， 与包含块的左边（contain box left）相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。除非这个元素自己形成了一个新的BFC。

4. BFC的区域不会与float box重叠。

5. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。

6. 计算BFC的高度时，浮动元素也参与计算

## 4. 应用

1. **清除浮动**
    浮动元素的父元素上设置 `overflow: hidden` , 形成 `BFC`, 父元素的高度就不会塌陷。
2. **防止 margin 合并**
    为合并的元素套上一个父元素，并在父元素上设置 `overflow: hidden`。

