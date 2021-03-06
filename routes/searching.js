
var create_module = require('../server_modules/search');
var event_model = require('../models/events');
var assert = require('assert');
var util=require('util');
var mongoose  = require('mongoose');
module.exports = function(MongoClient,url,app){
  app.get("/search_user/:query",function(req,res){
    MongoClient.connect(url,function(err,db){
    // db.collection('groups').find({'group_name':{$regex:req.body.query,$options:"$i"}},{'group_name':1,'knock_knock_question':1,'group_about':1,'_id':true}).limit(3).sort({key:1}).toArray(function(err,results){
    //     console.log(results);
    //     res.json(results);
    // });
  });
  });

  app.post("/search_events",function(req,res){
      MongoClient.connect(url,function(err,db){
        db.collection('events').find({$text:{$search:req.body.query}},{score:{$meta:"textScore"}},{sort:{score:{$meta:"textScore"}}}).toArray(function(err,items){
          if(err){
            console.log("err");
          }else{
            console.log(items);
            var mjson = [];
            if(!(items == undefined)){
            mjson.push(items[0]);
            }
            res.status(200).json(mjson);
          }
        });
    });
  });


  // });

  app.post("/search_process",function(req,res){
      MongoClient.connect(url,function(err,db){
        db.collection('process').find({$text:{$search:req.body.query}},{score:{$meta:"textScore"}},{sort:{score:{$meta:"textScore"}}}).toArray(function(err,items){
          if(err){
            console.log("err");
          }else{
            console.log(items);
            var mjson = [];
            if(!(items == undefined)){
            mjson.push(items[0]);
            }
            res.status(200).json(mjson);
          }
        });
  });
  });

  app.post("/search_college_information",function(req,res){
      MongoClient.connect(url,function(err,db){
        db.collection('college_information').find({$text:{$search:req.body.query}},{score:{$meta:"textScore"}},{sort:{score:{$meta:"textScore"}}}).toArray(function(err,items){
          if(err){
            console.log("err");
          }else{
            console.log(items);
            var mjson = [];
            if(!(items == undefined)){
            mjson.push(items[0]);
            }
            res.status(200).json(mjson);
          }
        });
    });
  });

  app.post("/search_placement_detail",function(req,res){
      MongoClient.connect(url,function(err,db){
        db.collection('placements').find({$text:{$search:req.body.query}},{score:{$meta:"textScore"}},{sort:{score:{$meta:"textScore"}}}).toArray(function(err,items){
          if(err){
            console.log(err);
          }else{
            console.log(items);
            var mjson = [];
            if(!(items == undefined)){
            mjson.push(items[0]);
            }
            res.status(200).json(mjson);
          }
        });
    });
  });


  app.post("/search_college_buildings",function(req,res){
      MongoClient.connect(url,function(err,db){
        db.collection('college_buildings').find({$text:{$search:req.body.query}},{score:{$meta:"textScore"}},{sort:{score:{$meta:"textScore"}}}).toArray(function(err,items){
          if(err){
            console.log("err");
          }else{
            console.log(items);
            var mjson = [];
            if(!(items == undefined)){
            mjson.push(items[0]);
            }
            res.status(200).json(mjson);
          }
        });
  });
  });


  app.post("/search_admission",function(req,res){
    MongoClient.connect(url,function(err,db){
      db.collection('admissions').find({$text:{$search:req.body.query}},{score:{$meta:"textScore"}},{sort:{score:{$meta:"textScore"}}}).toArray(function(err,items){
        if(err){
          console.log("err");
        }else{
          console.log(items);
          var mjson = [];
          if(!(items == undefined)){
          mjson.push(items[0]);
          }
          res.status(200).json(mjson);
        }
      });
    });
  });


}
