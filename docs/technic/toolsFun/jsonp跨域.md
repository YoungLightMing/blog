---
title: 浏览器跨域
---

# 浏览器跨域

## 1. 同源策略

为了保证用户信息的安全，防止恶意的网站数据窃取。浏览器制定了「**同源策略**」。

具体来说，就是一个域名下的网址，只能请求**同协议，同域名，同端口**下的接口数据。

## 2. 如何跨域

跨域通信分为两种：

1. **不同源的页面互相发送信息**

:::tip 解决方案
1. window.name
2. document.domain
3. window.postMessage
:::

2. **请求不同源网站的接口**

:::tip 解决方案
1. JONSP, 
2. WebSocket
3. CORS
4. 反向代理
:::

## 3. JSONP

这种方法之所以能够使用是因为同源策略并没有限制 `<script>` 标签引用资源。我们可以通过创建一个 `script` 向服务端发起请求，服务器收到请求后，将数据放在一个指定名字的回调函数中传回来。

下面看具体实现：
```js
/*
url:　请求的rul
jsonCallBack: 回调函数名称
success: 请求成功时对数据进行处理的函数
*/
const jsonp = (url, jsonCallBack, sucesss) {
	const Script = document.creatElement('script');
	Script.setAttribute('src', url);
	Script.async = true;
	Script.type = 'text/javascript'
	window[jsonCallback] = function(data) {
		success && success(data);
	}
	document.getElementsByTagName('head')[0].appendChild(Script)
}
// 使用
jsonp('http://xxx?callback=callback', 'callback', data => console.log(data))
```
这种方式优点在于简单适用，老式浏览器全部支持，服务器改造非常小。

但缺点在于**只能用于 GET 请求。**



## 4. CORS

CORS是跨源资源分享（Cross-Origin Resource Sharing）的缩写。它是W3C标准，是跨源AJAX请求的根本解决方法。相比JSONP只能发GET请求，CORS允许任何类型的请求。

实现 CORS 通信的关键是服务器。只要服务器实现了 CORS 接口，就可以跨源通信。

具体用法可见 [CORS通信-阮一峰](http://www.w3cbus.com/bom/cors.html)。



与 jsonp 比较：

> CORS与JSONP的使用目的相同，但是比JSONP更强大。
>
>JSONP只支持GET请求，CORS支持所有类型的HTTP请求。JSONP的优势在于支持老式浏览器，以及可以向不支持CORS的网站请求数据。

## 5. `document.domain`

这种方法用于两个页面，后者 `iframe` 嵌套的网页，一级域名相同的情况。比如说 `abc.d.com`  和 `mm.d.com`。

使用方法：在两个页面设置相同的 `docuement.domain`。

```js
// A 
documnet.domain = 'd.com'
document.cookie = "test1=hello";

// B
document.domain = 'd.com';
const allCooki = document.cooki;
```
## 6. `window.postMessage`

这个API为window对象新增了一个window.postMessage方法，允许跨窗口通信，不论这两个窗口是否同源。

页面通过 `window.postMessage()` 方式进行发送消息，这个方法接受两个参数，分别是发送的信息和目标窗口的源(即“协议 + 域名 + 端口”)，第二个参也可以设置为 `*`，表示不限制域名，向所有窗口发送。

而接受的一方通过监听 `Message` 事件，得到对方发来的消息。

父窗口向子窗口发送消息: 
```js
const popup = window.open('http://bbb.com', title);
popup.postMessage('hello world', 'http://bbb.com')
```
子窗口监听消息：
```js
window.addEventListener('message', function(e) {
    console.log(e.data)
})
```
`message` 事件的事件对象 `event`，提供三个属性：

:::tip
- event.source:  发送消息的窗口
- event.origin:  消息发向的网址
- event.data:  消息内容
:::

通常我们可以根据 `event.origin` 来过滤掉不该发送过来的数据，我们还可以通过 `event.source` 引用来源窗口。

```js
window.addEventListener('message', receiveMessage);
function receiveMessage(event) {
  if (event.origin !== 'http://aaa.com') return;
  if (event.data === 'Hello World') {
      event.source.postMessage('Hello', event.origin);
  } else {
    console.log(event.data);
  }
}
```


## 参考

[JavaScript 标准参考教程](http://www.w3cbus.com/bom/cors.html)