// 引入用户模块
var user = require('./userApi');
// 引入文章模块
var article = require('./article')
// 引入文章类别
var articleType = require('./articleType')
// 引入文章评论模块
var articleComment = require('./comment')
module.exports = {
    user, article, articleType, articleComment
}