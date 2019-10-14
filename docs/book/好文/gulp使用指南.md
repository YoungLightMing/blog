# gulp 使用指南

## 安装

先在全局安装,再在本地项目安装。

```js
$ npm install -g gulp
$ npm install --save-dev gulp
```
## gulpfile.js

安装完成后，接下来就是配置 `gulpfile.js` 文件，我们将会在这里定义任务列表。


```js
const gulp = require('gulp'); // 引入 gulp 

gulp.task('default', () => {
  return gulp.src('./scr/**/*.js')
            .pipe(gulp.dest('./dist'))
})
```
以上就是一个最简单的任务，我们将 `src` 目录下所有的 `js` 文件通过 `pipe(管道)` 导流到 `dist` 目录中，如果当前没有此目录，便会新建一个。

我们只要执行 `gulp`命令，即可完成任务。

## gulp.task


`gulp.task` 用于创建一个 `gulp` 任务，可以接受以下参数：

- 任务名称(必选)
- 任务函数(可选)或任务数组(可选)。

定义一个任务，我们需要给这个任务起一个唯一的名字，当我们想要执行这个任务时，可以输入以下命令 

```js
$ gulp 任务名
```
**当我们不加任务名进行执行时，即只输入 `gulp` 时 ，会执行名为 `default` 的默认任务，如果没有定义这个任务，将什么也不做。**

 `gulp.task()` 的第二个参数可以是一个数组，数组中的值是任务名的集合，当执行此任务时，会先执行数组中的任务。
 
 
```
const gulp = require('gulp');

gulp.task('script', () => {
  gulp.src('./src/**/*.js')
    .pipe(gulp.dest('./dist'))
})

gulp.task('css', () => {
  gulp.src('./src/**/*.css')
    .pipe(gulp.dest('./dist'))
})

gulp.task('copy',['script'], () => {
  gulp.src(copyPath)
    .pipe(gulp.dest('./dist'))
})

gulp.task('default', ['script','css']);
```

在上面的例子中，执行 `copy` 任务之前，将会首先执行 `script` 任务；执行 `default` 命令时， 将会执行 `script` 和 `css` 任务。


但是，当任务中存在异步操作时，下一个任务并不会等到上一个任务完成后再去执行。如下：


```js
gulp.task('default', ['copy','script'])

gulp.task('script', () => {
  console.log('script');
})


gulp.task('copy', () => {
   console.log('copy1')
   setTimeout(() => {
     console.log('copy2');
   }, 3000);
})
```
上面的例子中会先输入`copy1` ,接着输出 `script` ,三秒后输出 `copy2`。

如果希望 `copy` 执行结束后再执行 `script`,有三种方式。

- 使用回调函数作为参数，用于标记任务执行完毕

    ```js
    // 添加依赖['copy']
    gulp.task('script', ['copy'], () => {
      console.log('script');
    })
    
    
    gulp.task('copy', (cb) => {
       console.log('copy1')
       setTimeout(() => {
         console.log('copy2');
         // 标志异步执行结束
         cb();   
       }, 3000);
    })
    ```
- 返回一个 Stream(适用于异步操作 `gulp.src` 导出的文件)
    
    ```js
    // 添加依赖['copy']
    gulp.task('script', ['copy'], () => {
      console.log('script');
    })
    
    gulp.task('copy', () => {
      return gulp.src('./temp/*.js')
        // 异步操作文件流
        .pipe()
        .pipe(gulp.dest('./dist')
    })
    ```
- 返回一个 promise 对象
    
    ```js
    const Q = require('q'); //一个著名的异步处理的库 https://github.com/kriskowal/
    
    // 添加依赖['copy']
    gulp.task('script', ['copy'], () => {
      console.log('script');
    })
    
    const deferred = Q.defer();
    console.log('copy1')
  setTimeout(() => {
        console.log('copy2');
        deferred.resolve();
  }, 3000);
  return deferred.promise;
    
    ```

    
    

## gulp.src

`gulp.src` 是一个用来读取文件的 API 。

可以接受一个路径字符串或数组作为参数来选择所要读取的文件，并输出一个可以被输入到 `plugins` 的 `Stream` （文件流）。

`gulp` 使用 `node-glob` 方式获取匹配的文件，通常，有以下几种方式。

> - `js/app.js` 匹配 js 目录下的 `app.js` 文件。
> - `js/*.js` 匹配 js 目录下所有以 `.js` 结尾的文件。
> - `js/**/*.js` 匹配 js 目录及其所有子目录下以 `.js` 结尾的文件。
> - `!js/app.js` 匹配 js 目录下除 `app.js` 外的所有文件。
> - `css/*.{css,less,sass}`（逗号后不要加空格） 匹配 css 目录下以 `.css` , `.less` , `.saas` 结尾的文件。


## gulp.watch

`gulp.watch` 是一个用于监控文件变化的 API 。


同 `gulp.src` ,它接受一个路径字符串或数组作为**第一个**参数用于选择将要监控文件，**第二个**参数可以是一个**任务列表数组**或者**回调函数**。当监控到文件变化时将会执行它们。



```js
// 假设你已经有一个 script 任务。
gulp.task('watch', () => {
  gulp.watch('./temp/*.html',['script'])
})

```
此时我们在启动 `watch` 任务。


```
$ gulp watch
```

现在，当我们的 `./temp/*.html` 文件发生变化，将会直接执行 `script` 任务。


假如第二个参数是一个回调函数,


```js
gulp.task('watch', (event) => {
  console.log(event); // event 包含 'added', 'changed', 'deleted' 三种类型
  
  // 下面可以进行其他的操作...
  //...
})
```

另外，`gulp.watch()` 会返回一个 `watcher` 对象，可以通过这个对象监听其他事件。


```js
gulp.task('watch', () => {
  // watcher 对象
  const watcher = gulp.watch('./temp/*');  
  watcher.on('change', (event) => {
    console.log(event);
    console.log('has changed')
    
  })
  watcher.on('add', (event) => {
    console.log(event);
    console.log('has added')
  });
})
```

## plougins

我们通常会使用一些 `npm` 模块来方便实际开发。这些模块的使用方法也很简单——通过管道流处理文件。



``` js
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('js', function () {
   return gulp.src('js/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(uglify())
      .pipe(concat('app.js'))
      .pipe(gulp.dest('build'));
});
```
在使用之前，我们只需要通过 `package.json` 将安装到本地项目中。

在上面的例子中，我们对 js 目录下的 `.js` 文件依次进行了 `jshint()`、`jshint.reporter()`、`uglify()`、`concat()`、`gulp.dest()`操作。




以上就是关于 `gulp` 一些基本的使用，如有异议，欢迎指证。

## 参考
1. [再学一次gulp](https://juejin.im/entry/586a417561ff4b006d77fe85)
2. [building-with-gulp](https://www.smashingmagazine.com/2014/06/building-with-gulp/)

