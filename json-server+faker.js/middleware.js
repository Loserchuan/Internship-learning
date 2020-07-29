module.exports = (request, responents, next) => {
  console.log('-------------------------')
  console.log('-------new request-------')
  console.log('params:', request.params)
  console.log('query:', request.query)
  console.log('body:', request.body)
  console.log('headers:', request.headers)
  if (request.method === 'POST') {
    request.method = 'GET'
    request.query = request.body
  }

  // 处理ie8下的文件上传
  if ((request.headers['content-type'] || '').startsWith('multipart/form-data')) {
    responents.header('content-type', 'text/html')
  }

  next()
}