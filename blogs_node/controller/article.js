var DbServe = require('./../server/articleServe')
addArticle = async (req, res) => {
    req.body.user_id = req.session.userID;
    var result = await DbServe.C(req.body)
    res.send(result)
}
module.exports = { addArticle }