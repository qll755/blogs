var DB = require('./../db');
var Sequelize = require('sequelize')
var user = require('./user')
const articleComment = DB.define('articleComment', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,       //主键
        autoIncrement: true,    //自增
        comment: "自增id"       //注释:只在代码中有效
    },
    // 文章id
    articleID: {
        type: Sequelize.INTEGER,
        allowNull: false,//不允许为null
    },
    //评论内容
    comment: {
        type: Sequelize.STRING(255),
    },
    //当前用户
    currentUser: {
        type: Sequelize.INTEGER,
        allowNull: false,//不允许为null
    },
    // 被回复用户 为0 的话证明是 直接评论   否则的话就是回复评论
    replyUser: {
        type: Sequelize.INTEGER,
        defaultValue: 0,//默认值是0
    },
    //是否被查看
    statu: {
        type: Sequelize.INTEGER,
        defaultValue: 0,//默认值是0
    }
}, { freezeTableName: true, timestamps: false });

// 模型关联
articleComment.belongsTo(user, { foreignKey: 'currentUser', targetKey: 'id', as: 'currentuser' })
articleComment.belongsTo(user, { foreignKey: 'replyUser', targetKey: 'id', as: 'replyuser' })
articleComment.sync();
module.exports = articleComment