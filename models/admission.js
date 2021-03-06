var mongoose = require('mongoose');
var schema = mongoose.Schema;
var id = mongoose.Schema.Types.ObjectId;
var Schema = new schema({
  _id:id,
  procedure:{type:String},
  Elgibility:{type:String},
  fees:{type:String},
  lpuNest:{type:String},
  policy:{type:String},
  scholarship:{type:String},
  subjects:{type:String},
  benefits:{type:String},
  currentQualification:{type:String},
  department_branch:{type:String},
  discipline:{type:String},
  priorityParameter:{type:String},
  description:{type:String},
  keywords:{type:String},
  created_on:{type:Date,default:Date.now()},
},{collection:'admissions'});
module.exports = mongoose.model('admissions',Schema);
