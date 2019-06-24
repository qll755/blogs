var DbServe = require('./../server/comment')
addComment = async (req, res) => {
    var result = await DbServe.C(req.body)
    res.send(result)
}
commentList = async (req, res) => {
    var result = await DbServe.R(req.query)
    res.send(result)
}
module.exports={addComment,commentList}