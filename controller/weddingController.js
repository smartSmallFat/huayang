/**
 * Created by asus on 2018/12/5.
 *///引入loginModel
var weddingModel = require('./../model/weddingModel.js');

var weddingController ={

    //对二级页面进行数据渲染
    showWeddingPage:function(req,res) {
        ///add?content=xxxx
        //返回:{error:0,data:data}     //0 成功   1失败
        weddingModel.showWeddingPage(function (err,data) {
            if(err){
                console.log('数据库错误');
            }else{
                res.send({error:0,data:data});
                //console.log(data);
            }
        })
    },


    getData:function (req,res) {
        //返回:{error:0,data:data}
        weddingModel.getData(req.query.data,function (err,data) {
            if(err){
                console.log(err)
            }else {
                res.send({error:0,data:data});
            }
        })
    },


    loadWeddingDetails:function (req,res) {
        weddingModel.loadWeddingDetails(req.query.data,function (err,data) {
            if(err){
                console.log(err);
            }else{
                res.send({error:0,data:data});
                //console.log(data);     //在这里获取到了对应m_id的那一条数据
            }
        })
    },


    submitWeddingOrder:function (req,res) {
         weddingModel.submitWeddingOrder(req.query.m_id,req.query.sName,req.query.sSex,req.query.sPhone,req.query.sIdCard,req.query.sTotal,req.query.sRoom,req.query.sPlace,req.query.sTakenDate,req.query.sOrderDate,function (err,data) {
             if(err){
                 console.log('数据库错误');
             }else {
                 res.send({error:0,id:data.insertId});
             }
         })
    },

    loadOrderMsg:function (req,res) {
        weddingModel.loadOrderMsg(req.query.data,function (err,data) {
            if(err){
                console.log(err);
            }else{
                res.send({error:0,data:data});
            }
        })
    }



}

//导出
module.exports = weddingController;
