//引入express
var express = require('express');

//引入msgController文件
var weddingController = require('./../controller/weddingController.js');



//创建router对象
var myRouter = express.Router();
/*控制路由*/

//二级页面请求
myRouter.route('/showWeddingPage').get(weddingController.showWeddingPage);
//获取相应套餐的三级页面
myRouter.route('/loadWeddingDetails').get(weddingController.loadWeddingDetails);

myRouter.route('/getData').get(weddingController.getData);
//提交订单
myRouter.route('/submitWeddingOrder').get(weddingController.submitWeddingOrder);

myRouter.route('/loadOrderMsg').get(weddingController.loadOrderMsg);

//导出模块
module.exports = myRouter;