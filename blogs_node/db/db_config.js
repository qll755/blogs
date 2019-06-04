
// 数据库及本配置
const DBNAME = 'blogs';
const UN = 'root';
const PW = 'qll7452654';
const LINK_CONFIG = {
    host: 'localhost',    //数据库地址,默认本机
    port: '3306',
    dialect: 'mysql',
    pool: {   //连接池设置
        max: 5, //最大连接数
        min: 0, //最小连接数
        idle: 10000
    }
}
module.exports = { DBNAME, UN, PW, LINK_CONFIG }