/**
 * Created by ASUS on 2018/12/5.
 */
var mysql=require('mysql');
var db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'hy'
});
var loversModel={
    showLoversPage:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=2';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showLoversSH:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=2 AND m_place="厦门"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showLoversLJ:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=2 AND m_place="丽江"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showLoversQD:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=2 AND m_place="青岛"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showLoversBJ:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=2 AND m_place="北京"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showLoversSY:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=2 AND m_place="三亚"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showLoversDali:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=2 AND m_place="大理"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showLoversDet:function (fn) {
        var sql='SELECT   *   FROM  mealdetails   WHERE  m_id=7 ';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showLoversDetails:function (fn) {
        var sql='SELECT   *   FROM  mealdetails   WHERE  m_id=8 ';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showLoversbiBPGDetails:function (fn) {
        var sql='SELECT   *   FROM  mealdetails   WHERE  m_id=9';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showLoversbiDALIDetails:function (fn) {
        var sql='SELECT   *   FROM  mealdetails   WHERE  m_id=10';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showLoversbiDALI1Details:function (fn) {
        var sql='SELECT   *   FROM  mealdetails   WHERE  m_id=11';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showLoversbiDALI2Details:function (fn) {
        var sql='SELECT   *   FROM  mealdetails   WHERE  m_id=12';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showLoversbixiamenDetails:function (fn) {
        var sql='SELECT   *   FROM  mealdetails   WHERE  m_id=13';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showLoversbixiamen1Details:function (fn) {
        var sql='SELECT   *   FROM  mealdetails   WHERE  m_id=14';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showLoversbixiamen2Details:function (fn) {
        var sql='SELECT   *   FROM  mealdetails   WHERE  m_id=15';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showLoversbiLGDetails:function (fn) {
        var sql='SELECT   *   FROM  mealdetails   WHERE  m_id=16';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showLoversbiLG1Details:function (fn) {
        var sql='SELECT   *   FROM  mealdetails   WHERE  m_id=17';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showLoversbiLG2Details:function (fn) {
        var sql='SELECT   *   FROM  mealdetails   WHERE  m_id=18';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    //闺蜜照module层
    showfriendPage:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=3 and m_place="成都"';
        db.query(sql,function (err,data) {
            fn(err,data);
            console.log(data)
        })
    },
    showfriendDali:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=3 AND m_place="大理"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showfriendSH:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=3 AND m_place="上海"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showfriendLJ:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=3 AND m_place="丽江"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showfriendQD:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=3 AND m_place="青岛"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showfriendBJ:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=3 AND m_place="北京"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showfriendSY:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=3 AND m_place="三亚"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    //家庭照module层
    showfamilyPage:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=4 and m_place="成都"';
        db.query(sql,function (err,data) {
            fn(err,data);
            console.log(data)
        })
    },
    showfamilyDali:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=4 AND m_place="大理"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showfamilySH:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=4 AND m_place="上海"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showfamilyLJ:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=4 AND m_place="丽江"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showfamilyQD:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=4 AND m_place="青岛"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showfamilyBJ:function (fn) {
  var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=4 AND m_place="北京"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showfamilySY:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=4 AND m_place="三亚"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    submitloverOrder:function (m_id,sName,sSex,sPhone,sIdCard,sTotal,sRoom,sPlace,sTakenDate,sOrderDate,fn) {
        var sql = 'INSERT INTO order1 VALUES(NULL,"'+m_id+'",1,1,"'+sName+'","'+sSex+'","'+sPhone+'","'+sIdCard+'","'+sTotal+'","'+sRoom+'","'+sPlace+'","'+sTakenDate+'","'+sOrderDate+'");'
        db.query(sql,function (err,data) {
            fn(err,data);
            console.log(err)
        })
    },
    showfriend_CD_Det:function (fn) {
    var sql='SELECT   *   FROM  mealdetails   WHERE  m_id=19';
    db.query(sql,function (err,data) {
        fn(err,data);
        console.log(data)
    })
},
    showfriend_DL_Det:function (fn) {
        var sql='SELECT   *   FROM  mealdetails   WHERE  m_id=20';
        db.query(sql,function (err,data) {
            fn(err,data);
            console.log(data)
        })
    },
    showfriend_SH_Det:function (fn) {
        var sql='SELECT   *   FROM  mealdetails   WHERE  m_id=21';
        db.query(sql,function (err,data) {
            fn(err,data);
            console.log(data)
        })
    },
    showfriend_LJ_Det:function (fn) {
        var sql='SELECT   *   FROM  mealdetails   WHERE  m_id=22';
        db.query(sql,function (err,data) {
            fn(err,data);
            console.log(data)
        })
    },
    showfriend_QD_Det:function (fn) {
        var sql='SELECT   *   FROM  mealdetails   WHERE  m_id=23';
        db.query(sql,function (err,data) {
            fn(err,data);
            console.log(data)
        })
    },
    //家庭照三级页面module层
    showfamily_CD_Det:function (fn) {
        var sql='SELECT   *   FROM  mealdetails   WHERE  m_id=26';
        db.query(sql,function (err,data) {
            fn(err,data);
            console.log(data)
        })
    },
    showfamily_DL_Det:function (fn) {
        var sql='SELECT   *   FROM  mealdetails   WHERE  m_id=27';
        db.query(sql,function (err,data) {
            fn(err,data);
            console.log(data)
        })
    },
    showfamily_SH_Det:function (fn) {
        var sql='SELECT   *   FROM  mealdetails   WHERE  m_id=28';
        db.query(sql,function (err,data) {
            fn(err,data);
            console.log(data)
        })
    },
    showfamily_LJ_Det:function (fn) {
        var sql='SELECT   *   FROM  mealdetails   WHERE  m_id=29';
        db.query(sql,function (err,data) {
            fn(err,data);
            console.log(data)
        })
    },
    showfamily_QD_Det:function (fn) {
        var sql='SELECT   *   FROM  mealdetails   WHERE  m_id=30';
        db.query(sql,function (err,data) {
            fn(err,data);
            console.log(data)
        })
    },
    loadloverDetails:function (sId,fn) {
        var sql = 'SELECT * FROM mealDetails a JOIN mealinformation b WHERE a.m_id=b.m_id AND a.m_id="'+sId+'"';
        //console.log(sId);
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
}
module.exports=loversModel;