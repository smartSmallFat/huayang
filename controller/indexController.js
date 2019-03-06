var indexModel=require('./../model/indexModel.js');


var indexController={
     img:function (res,req) {
         indexModel.img(function (err,data) {
             if(err){
                 console.log(err)
             }else {
                req.send(data)
             }
         })
     }

};

module.exports=indexController;