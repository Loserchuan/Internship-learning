// 使用faker.js伪造数据 如果要使用json-server 要使用export导出生成faker data的function

module.exports = function () {
  var faker = require("faker");
  // 生成中文字符
  faker.locale = "zh_CN";
  var _ = require("lodash")
  return {
    success: {
      "data": null,
      "list": null,
      "page": null,
      "code": null,
      "msg": "操作成功",
      "type": 0
    },
    personList: {
      "type": 0,
      "code": "0",
      "data": {
        "total": 1,
        "list": [
          {
            "name": "测试名",
            "sex": "男",
            "age": 22,
          },
          {
            "name": "测试名1",
            "sex": "女",
            "age": 22,
          }
        ],
        "pageNo": 1,
        "pageSize": 20
      }
    },
    idPerson: {
      "type": 0,
      "code": "0",
      "data": {
        "name": "测试名3",
        "sex": "男",
        "age": 22,
      }
    }
  }
}