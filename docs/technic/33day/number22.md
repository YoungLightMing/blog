---
title: 22. 消息队列和事件循环
---

# 消息队列和事件循环

大家都听说过，js 是一门单线程语言，也就是说，同一时间，JavaScript 只能执行一个任务，其他的任务都必须排到后面等待。

JavaScript 只在一个线程上运行，不代表 JavaScript 引擎只有一个线程。事实上，JavaScript 引擎有多个线程，单个脚本只能在一个线程上运行，其他线程都是在后台配合。

## 1. 任务队列
 我们将 JavaScript 引擎执行的某一代码段作为一个任务。当 JavaScript 开始执行代码时，会首先分配任务，不同的任务源会被分配到不同的队列中。

任务源分两种：宏任务（macro-task） 和微任务（micro-task）。

macro-task大概包括：script(整体代码)、setTimeout、setTimeInterval、setImmediate、I/O 、rendering 等。

micro-task大概包括：process.nexTick,Promise,等。


## 2. event Loop
事件循环的顺序，决定了JavaScript代码的执行顺序。

它从script(整体代码)开始第一次循环。之后全局上下文进入函数调用栈。直到调用栈清空(只剩全局)，然后执行所有的micro-task。

当所有可执行的micro-task执行完毕之后。循环再次从macro-task开始，找到其中一个任务队列执行完毕，然后再执行所有的micro-task，这样一直循环下去。

更多详情: [事件循环机制](https://yangbo5207.github.io/wutongluo/ji-chu-jin-jie-xi-lie/shi-er-3001-shi-jian-xun-huan-ji-zhi.html)

