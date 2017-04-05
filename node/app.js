/**
 * Created by xiaogang on 2017/3/29.
 */
"use strict";
//相关依赖
var path = require('path');
var express = require("express");
var bodyParser = require('body-parser');

const routes = require('./router/index');//require('./router');

//相关配置文件
// var config = require("../config/config");
// var pkg = require('../package');
//实例
var app = express();

// 设置模板目录
app.set('views', path.join(__dirname, 'view'));
// 设置模板引擎为 ejs
app.set('view engine', 'ejs');

// 设置静态文件目录
app.use('/src', express.static(path.join(__dirname, './public')));

// 设置模板全局常量
app.locals.blog = {
    title: "node-express",
    description: "1104"
};


// bodyParser ：ajax 请求的配置项

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json ：接受 json 或者可以转换为json的数据格式
app.use(bodyParser.json({type: 'application/*+json'}));

// 路由
routes(app);


// 监听端口，启动程序
const SERVER = app.listen(3000, function () {
    var address = SERVER.address();
    console.log(address);
    console.log(`nodeApp listening on port 3000`);
    // console.log(`${pkg.name} listening on port ${config.port}`);
});