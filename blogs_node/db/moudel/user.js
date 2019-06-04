var DB = require('./../db');
var Sequelize = require('sequelize')
const user = DB.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,       //主键
        autoIncrement: true,    //自增
        comment: "自增id"       //注释:只在代码中有效
    },
    //用户名
    username: {
        type: Sequelize.STRING,
    },
    //密码
    pwd: {
        type: Sequelize.STRING(10),
        allowNull: false,//不允许为null
    },
    //状态
    status: {
        type: Sequelize.INTEGER,
        defaultValue: 0,//默认值是0
    },
    //预留电话
    nickname: {
        type: Sequelize.STRING,
    }
}, { freezeTableName: true ,timestamps: false});
user.sync();
module.exports = user