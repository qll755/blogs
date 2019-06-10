var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var API = require('./api')
var app = express();



// 引入session模块
var Session = require('express-session');
// 配置session中间件
app.use(Session({
  secret: 'qll_Blogs',//生成一个session签名
  name: 'session_id',//保存本地cookie的名字
  saveUninitialized: true,//强制未初始化的session储存
  cookie: {
    maxAge: 1000 * 60 * 30
  },//设置cookie的过期时间
  rolling: true//每次请求的时候强制刷新 cookie的过期时间
}))




// 允许访问域名
const corp = 'http://192.168.3.15:8080';

//设置跨域访问
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", corp);
  res.header('Access-Control-Allow-Credentials', 'true')
  next();
});


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
for (var i in API) {
  app.use('/api', API[i])
}
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
