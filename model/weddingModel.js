//引入mysql
var mysql = require('mysql');

//连接数据库
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'hy'
});


var  weddingModel = {

    //对二级页面进行数据渲染
    showWeddingPage:function (fn) {
        var sql = 'SELECT * FROM mealinformation where m_hot=1';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    //点击地方按钮，显示对应套餐
    getData:function (sPlace,fn) {
        //console.log(sPlace);
        var sql = 'SELECT * FROM mealinformation WHERE m_place="'+sPlace+'" and c_id=1';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    //点击了解更多，跳转到详情页面，获取相对应套餐的数据
    loadWeddingDetails:function (sId,fn) {
        var sql = 'SELECT * FROM mealDetails a JOIN mealinformation b WHERE a.m_id=b.m_id AND a.m_id="'+sId+'"';

        //console.log(sId);
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },


    submitWeddingOrder:function (m_id,sName,sSex,sPhone,sIdCard,sTotal,sRoom,sPlace,sTakenDate,sOrderDate,fn) {
         var sql = 'INSERT INTO order1 VALUES(NULL,"'+m_id+'",1,1,"'+sName+'","'+sSex+'","'+sPhone+'","'+sIdCard+'","'+sTotal+'","'+sRoom+'","'+sPlace+'","'+sTakenDate+'","'+sOrderDate+'");'
         db.query(sql,function (err,data) {
             fn(err,data);
         })
    },

    loadOrderMsg:function (sId,fn) {
        var sql = 'select * from order1 where m_id="'+sId+'"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    }


};




module.exports =weddingModel;