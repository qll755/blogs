var DB = require('./../db');
var Sequelize = require('sequelize')
const article = DB.define('article', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,       //主键
        autoIncrement: true,    //自增
        comment: "自增id"       //注释:只在代码中有效
    },
    //文章标题
    articletittle: {
        type: Sequelize.STRING,
    },
    //文章类型
    articletype: {
        type: Sequelize.STRING(10),
        allowNull: false,//不允许为null
    },
    // 文章内容
    articlecon: {
        type: Sequelize.TEXT,
        allowNull: false,//不允许为null
    },
    //发表状态  0 是未发表
    status: {
        type: Sequelize.INTEGER,
        defaultValue: 0,//默认值是0
    },
    //发表时间
    createtime: {
        type: Sequelize.STRING,
    },
    // 由谁创建
    user_id: {
        type: Sequelize.STRING(10),
        allowNull: false,//不允许为null
    }
}, { freezeTableName: true, timestamps: false });
article.sync();
module.exports = article