
var express =require('express');

var  morgan=require('morgan');
var  bodyParser=require('body-parser');
//引用模块
// var  loginRoute=require('./routes/loginRoute');
var loversRoute=require('./routes/loversRoute');
var weddingRoute = require('./routes/weddingRoute');
var phoneCode=require('./routes/phoneCode.js');
var indexRoute=require('./routes/indexRoutes.js');
var bookRoute = require('./routes/bookRoute');
var lpkpRoute=require('./routes/lpkpRoute');
var upload=require('./routes/upload.js');
var commentRoute=require('./routes/commentRoute.js');
var checkOrderRoute=require('./routes/checkOrderRoute.js');
var htCommentRoute=require('./routes/htCommentRoute.js');


var cookie=require('cookie-parser');
var session=require('express-session');
//手机短信验证
var AV = require('leanengine');
//websocket
var ws=require('ws').Server;


//搭建服务
var servers=express();
//一堆配置

//配置cookie
servers.use(cookie());
//配置session
servers.use(session({
    secret:'aaa',    //一个字符串，session的签名
    name:'demo',  //返回给客户端cookie的key值
    cookie:{maxAge:8000000}, //设置失效时间  单位是毫秒
    rolling:true, //更新失效时间
    resave:true  //重新保存
}));
//配置静态文件访问地址
servers.use(express.static(__dirname +'/public'));
//配置日志
servers.use(morgan('dev'));
//路由拦截

servers.use(bodyParser.json());//定义数据类型为JSON格式
servers.use(bodyParser.urlencoded({
    extended:false
}));//把请求头设置为application/x-www-form-urlencoded
//使用模块
// servers.use(loginRoute);
servers.use(weddingRoute);
servers.use(loversRoute);
servers.use(bookRoute);
servers.use(indexRoute);
servers.use(lpkpRoute);
servers.use(commentRoute);
servers.use(checkOrderRoute);
servers.use(htCommentRoute);
servers.post('/upload',upload.array('files',3),function (req,res) {
    // console.log(req)
    res.send({error:0});
});


servers.use(AV.express());
servers.use(phoneCode);


//配置端口号
servers.listen(8084,function () {
    console.log('项目启动');
});

// //创建服务
// var server=new ws({host:'172.16.13.18',port:9999});
// //配置服务功能
// var arr=new Array();//存客户端链接
// //当客户端与我建立链接的时候
// servers.on('connection',function (ws) {//ws是当前链接的对象
//     console.log(('有人进来了'));
//     arr.push(ws);
//     //当这人发送信息
//     ws.on('message',function (data) {
//         for (var i=0;i<arr.length;i++){
//             arr[i].send(data)
//         }
//     })
//
// });