// 链接数据库并同步形成映射关系
// 引入基础配置
var con = require('./db_config')
// 引入sequelize模块
var Sequelize = require('sequelize');
const DB = new Sequelize(con.DBNAME, con.UN, con.PW, con.LINK_CONFIG);
module.exports = DB