/**
 * Created by ASUS on 2018/12/5.
 */
var loversModel=require('../model/loversModel.js');
var loversController={
    showLoversPage:function (req,res) {
        loversModel.showLoversPage(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
            }
        })
    },
    showLoversQD:function (req,res) {
        loversModel.showLoversQD(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)
            }
        })
    },
    showLoversBJ:function (req,res) {
        loversModel. showLoversBJ(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)
            }
        })
    },
    showLoversSY:function (req,res) {
        loversModel.showLoversSY(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)
            }
        })
    },
    showLoversSH:function (req,res) {
        loversModel.showLoversSH(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)
            }
        })
    },
    showLoversLJ:function (req,res) {
        loversModel.showLoversLJ(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)
            }
        })
    },
    showLoversDali:function (req,res) {
        loversModel.showLoversDali(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)
            }
        })
    },
    showLoversDet:function (req,res) {
        loversModel.showLoversDet(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
            }
        })
    },
    showLoversDetails:function (req,res) {
        loversModel.showLoversDetails(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)

            }
        })
    },
    showLoversbiBPGDetails:function (req,res) {
        loversModel.showLoversbiBPGDetails(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)

            }
        })
    },
    showLoversbiDALIDetails:function (req,res) {
        loversModel.showLoversbiDALIDetails(function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send(data)

            }
        })
    },
    showLoversbiDALI1Details:function (req,res) {
        loversModel.showLoversbiDALI1Details(function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send(data)

            }
        })
    },
    showLoversbiDALI2Details:function (req,res) {
        loversModel.showLoversbiDALI2Details(function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send(data)

            }
        })
    },
    showLoversbixiamenDetails:function (req,res) {
        loversModel.showLoversbixiamenDetails(function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send(data)

            }
        })
    },
    showLoversbixiamen1Details:function (req,res) {
        loversModel.showLoversbixiamen1Details(function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send(data)

            }
        })
    },
    showLoversbixiamen2Details:function (req,res) {
        loversModel.showLoversbixiamen2Details(function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send(data)

            }
        })
    },
    showLoversbiLGDetails:function (req,res) {
        loversModel.showLoversbiLGDetails(function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send(data)

            }
        })
    },
    showLoversbiLG1Details:function (req,res) {
        loversModel.showLoversbiLG1Details(function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send(data)

            }
        })
    },
    showLoversbiLG2Details:function (req,res) {
        loversModel.showLoversbiLG2Details(function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send(data)

            }
        })
    },
    submitloverOrder:function (req,res) {
        loversModel.submitloverOrder(req.query.m_id,req.query.sName,req.query.sSex,req.query.sPhone,req.query.sIdCard,req.query.sTotal,req.query.sRoom,req.query.sPlace,req.query.sTakenDate,req.query.sOrderDate,function (err,data) {
            if(err){
                console.log(err);
            }else {
                res.send({error:0,id:data.insertId})
            }
        })
    },
    //好友二级页面的渲染
    showfriendPage:function (req,res) {
        loversModel.showfriendPage(function (err,data) {
            if(err){
                console.log(data)
            }else{
                res.send(data)
            }
        })
    },
    showfriendDali:function (req,res) {
        loversModel.showfriendDali(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)
            }
        })
    },
    showfriendQD:function (req,res) {
        loversModel.showfriendQD(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)
            }
        })
    },
    showfriendBJ:function (req,res) {
        loversModel.showfriendBJ(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)
            }
        })
    },
    showfriendSY:function (req,res) {
        loversModel.showfriendSY(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)
            }
        })
    },
    showfriendSH:function (req,res) {
        loversModel.showfriendSH(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)
            }
        })
    },
    showfriendLJ:function (req,res) {
        loversModel.showfriendLJ(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)
            }
        })
    },
    //家庭二级页面的渲染
    showfamilyPage:function (req,res) {
        loversModel.showfamilyPage(function (err,data) {
            if(err){
                console.log(data)
            }else{
                res.send(data)
            }
        })
    },
    showfamilyDali:function (req,res) {
        loversModel.showfamilyDali(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)
            }
        })
    },
    showfamilyQD:function (req,res) {
        loversModel.showfamilyQD(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)
            }
        })
    },
    showfamilyBJ:function (req,res) {
        loversModel.showfamilyBJ(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)
            }
        })
    },
    showfamilySY:function (req,res) {
        loversModel.showfamilySY(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)
            }
        })
    },
    showfamilySH:function (req,res) {
        loversModel.showfamilySH(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)
            }
        })
    },
    showfamilyLJ:function (req,res) {
        loversModel.showfamilyLJ(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)
            }
        })
    },
    //朋友三级页面的渲染
    showfriend_CD_Det:function (req,res) {
    loversModel.showfriend_CD_Det(function (err,data) {
        if(err){
            console.log('数据库错误')
        }else{
            res.send(data)
            console.log(data)

        }
    });

},
    showfriend_DL_Det:function (req,res) {
        loversModel.showfriend_DL_Det(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)

            }
        });

    },
    showfriend_SH_Det:function (req,res) {
        loversModel.showfriend_SH_Det(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)

            }
        });

    },
    showfriend_LJ_Det:function (req,res) {
        loversModel.showfriend_LJ_Det(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)

            }
        });

    },
    showfriend_QD_Det:function (req,res) {
        loversModel.showfriend_QD_Det(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)

            }
        });

    },
    loadloverDetails:function (req,res) {
        loversModel.loadloverDetails(req.query.data,function (err,data) {
            if(err){
                console.log(err);
            }else{
                res.send({error:0,data:data});
                //console.log(data);     //在这里获取到了对应m_id的那一条数据
            }
        })
    },
    //家庭三级页面的渲染
    showfamily_CD_Det:function (req,res) {
        loversModel.showfamily_CD_Det(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)

            }
        });

    },
    showfamily_DL_Det:function (req,res) {
        loversModel.showfamily_DL_Det(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)

            }
        });

    },
    showfamily_SH_Det:function (req,res) {
        loversModel.showfamily_SH_Det(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)

            }
        });

    },
    showfamily_LJ_Det:function (req,res) {
        loversModel.showfamily_LJ_Det(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)

            }
        });

    },
    showfamily_QD_Det:function (req,res) {
        loversModel.showfamily_QD_Det(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)

            }
        });

    },

}
module.exports=loversController;