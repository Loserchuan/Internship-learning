## let 命令
1. 可以创建块级作用域 (只在当前的代码块中有效) 适用于for循环 
   经典的题目
   ```js
   var a = [];
   for (var i = 0; i < 10; i++) {
     a[i] = function () {
       console.log(i);
     };
   }
   a[6](); // 10
   // 其实过程应该是这样的 a = [] => [1] => [2, 2] => [3, 3, 3] => ....[10, ...]
   ```
   使用let 声明就可以避免这种情况
   * 变量i是let声明的，当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量.你可能会问，如果每一轮循环的变量i都是重新声明的，那它怎么知道上一轮循环的值，从而计算出本轮循环的值？这是因为 JavaScript 引擎内部会记住上一轮循环的值，初始化本轮的变量i时，就在上一轮循环的基础上进行计算。
   * 另外，for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。
   ```js
   for (let i = 0; i < 3; i++) {
     let i = 'abc';
     console.log(i);
   }
   // abc
   // abc
   // abc 这里会输出三次abc 而不是1,2,3
   ```
2. 不存在变量提升 
   var 存在变量提升 变量可以在声明之前使用 值为undefined
   let 不存在这种情况 会报ReferenceError错误
3. 暂时性死区
   只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
   总之，在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。
   ```js 暂时性死区
   var tmp = 123;
   if (true) {
     tmp = 'abc'; // 会报ReferenceError错 在let命令声明变量tmp之前，都属于变量tmp的“死区”。只要使用到该变量就会报错(这句话很重要)
     let tmp;
   }
   ```
   * 因为let声明变量会存在一个暂时性死区的问题 只要在let声明变量之前使用到该变量就会报错 所以又出现了typeof不再是一个百分百安全的操作符
   * 在es5时 typeof x(一个未声明的变量) => undefined 但是 如果出现了let 就会报错;如果一个变量根本没有被声明，使用typeof反而不会报错
   ```js
   typeof undeclared_variabl // undefined
   // 使用let
   typeof x // ReferenceError
   let x
   ```
   总之，暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。
4. 不允许重复声明
   let不允许在相同作用域内，重复声明同一个变量 
## 块级作用域
1. 为什么需要块级作用域？
   ES5 只有全局作用域和函数作用域，没有块级作用域，这带来很多不合理的场景。
   > 场景一:内层变量可能会覆盖外层变量
   ```js
   var tmp = new Date();
   function f() {
     console.log(tmp);
     if (false) {
       var tmp = 'hello world';
     }
   }
   f(); // undefined if内的tmp声明但未赋值 所以会输出undefined
   ```
   > 第二种场景:用来计数的循环变量泄露为全局变量
   ```js
   var s = 'hello';
   for (var i = 0; i < s.length; i++) {
     console.log(s[i]);
   }
   console.log(i); // 5
   ```
2. ES6 的块级作用域
   > let实际上为 JavaScript 新增了块级作用域。
   > ES6 允许块级作用域的任意嵌套。
   > 内层作用域可以定义外层作用域的同名变量。
   > 块级作用域的出现，实际上使得获得广泛应用的匿名立即执行函数表达式（匿名 IIFE）不再必要了。
  * 补充匿名 IIFE立即执行函数知识
3. 块级作用域与函数声明
## const 命令