let count2: number = 918; // 基础静态类型
let myName: string = 'ouyang';// 基础静态类型
// null undefined boolean void symbol

// 对象静态类型 常量要赋值
const xiaojiejie: {
  name: string,
  age: number
} = {
  name: '小姐姐',
  age: 18
}

const xiaojiejies: string[] = ['小姐姐1', '小姐姐2']

class Person { }
const ouyang: Person = new Person() // 常量ouyang是Person类的一个对象

// jianxiaojiejie 是一个必须返回string类型的函数
const jianxiaojiejie: () => string = () => { return '小姐姐' }

// 普通对象类型、数组类型、类、函数类型 => ts中的对象类型