// 静态类型 只要定义了 就不可以改变类型了
let count: number = 1;
// count = ""; // 报错
// count. // 加点会弹出所有的属于该类型的方法

interface xiajiejie { // 接口定义变量类型
  uname: string,
  age: number
}

const xiaohong: xiajiejie = { // 给常量xiaohong 赋值接口
  uname: '小红',
  age: 18
}

console.log(xiaohong)