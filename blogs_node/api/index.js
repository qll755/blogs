// 引入用户模块
var user = require('./userApi');
// 引入文章模块
var article = require('./article')
// 引入文章类别
var articleType = require('./articleType')
module.exports = {
    user, article,articleType
}