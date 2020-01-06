function start() {  
  return new Promise((resolve, reject) => {  
    resolve('start');  
  });  
}  
/* function getDate(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, params).then(data => {
      resolve(data)
    }, (err) => {
      console.log(err)
    }).catch(err => {
      reject(err)
    })
  })
} */
start()
  .then(data => {  
    // promise start  
    console.log('result of start: ', data);  // result of start: start
    return Promise.resolve(1); // p1  
  })  
  .then(data => {  
    // promise p1  
    console.log('result of p1: ', data);  // result of p1: 1
    return Promise.reject(2); // p2  
  })  
  .then(data => {  
    // promise p2  
    console.log('result of p2: ', data); //  无法输出 直接被跳过
    return Promise.resolve(3); // p3  
  })  
  .catch(ex => {  
    // promise p3  
    console.log('ex: ', ex);  // ex: 2
    return Promise.resolve(4); // p4  
  })  
  .then(data => {  
    // promise p4  
    console.log('result of p4: ', data);  // result of p4: 4
  });  