var DB = require('./../db');
var Sequelize = require('sequelize')
const articleType = DB.define('articleType', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,       //主键
        autoIncrement: true,    //自增
        comment: "自增id"       //注释:只在代码中有效
    },
    //类别名
    typename: {
        type: Sequelize.STRING(255),
    },
    //父类id
    f_id: {
        type: Sequelize.STRING(255),
        allowNull: false,//不允许为null
    }
}, { freezeTableName: true, timestamps: false });
articleType.sync();
module.exports = articleType