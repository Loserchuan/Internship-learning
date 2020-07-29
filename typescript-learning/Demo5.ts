// 函数返回类型的注解
function getTotal(one: number, two: number): number { //直接定义函数的返回类型为number 下面操作导致类型改变的时候就会报错 非常易于代码的维护
  // return one + two + ''; 报错
  return one + two;
}

const total = getTotal(1, 2); // 此时total变成了string类型

function sayHello(): void { // 表示这个函数返回值为空
  console.log("hello word");
  // return ''; // 报错
}

function errFunc(): never { // 该方法永远执行不完 死循环或者一开始就抛出了错误
  throw new Error()
  console.log('hello world')
}

function forNever(): never {
  while (true) { }
  console.log('hello world')
}

function add({ one, two }: { one: number, two: number }) { // 参数是对象的类型声明方法 可以确定返回的类型
  return one + two;
}
const total2 = add({ one: 1, two: 2 })

function getNumber({ one }: { one: number }) {
  return one
}
const one = getNumber({ one: 1 })