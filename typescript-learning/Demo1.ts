// 全局安装ts：npm install -g typescript  
// => tsc -v查看版本
// => tsc filename 将ts文件转化为js文件
// 全局安装ts-node：npm install -g ts-node ==> ts-node filename 执行ts文件

function tsFunc() {
  let web: string = "Hello world";
  console.log(web);
}

tsFunc();

// 定义静态类型 static Typing => 定义了就不可以改变了 相当于const变量