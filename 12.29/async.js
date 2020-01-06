async function asyncFuc() {
  let a = await Promise.resolve('foo') // 返回一个立即resolve的Promise对象 相当于 new Promise((reslove, reject) => { reslove('foo') })
  await Promise.reject('error') // 这里抛出的异常是会被Promise.catch()中回调的而参数所捕获到的
  return a // 该函数返回的是一个Promise对象 这里的返回值会被.then方法中的回调中的参数接收到
}

async function asyncFuc1() {
  try {
    var a = await Promise.resolve('foo')
    await Promise.reject('error1')  // 这里抛出的异常是会被catch的而参数所捕获到的
    await Promise.reject('error2')  // 这里抛出的异常将无法被捕获到 怎么解决？
  } catch (err) {
    console.log(err) // error1
  }
  // throw new Error('error') // 这里抛出的异常是会被Promise.catch()中回调的而参数所捕获到的 一旦出错 不适用类似try/catch这类异常处理机制处理的话 下面代码是会停止执行的 程序退出
  return a
}

asyncFuc1().then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})