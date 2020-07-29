// type annotation 类型注解
// type inference  类型推断

let count3: number; // 类型注解
count3 = 123;

let countInference = 123; // 鼠标移到countInference上去会显示number类型 => 类型推断

/* 真实项目代码中
如果 TS 能够自动分析变量类型， 我们就什么也不需要做了
如果 TS 无法分析变量类型的话， 我们就需要使用类型注解 
即每一个变量类型都应该被确定
*/