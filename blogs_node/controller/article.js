var DbServe = require('./../server/articleServe')
addArticle = async (req, res) => {
    req.body.user_id = req.session.userID;
    var result = await DbServe.C(req.body)
    res.send(result)
}
articleList = async (req, res) => {
    var result = await DbServe.R({}, req.query.page,req.query.limit);
    res.send(result)
}
module.exports = { addArticle, articleList }