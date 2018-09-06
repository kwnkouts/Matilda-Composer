'use strict';
//import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create new instance of the mongoose.schema. the schema takes an object that shows
//the shape of your database entries.


var NodesSchema = new Schema({
  Name: String,
  Distribution: String,
  Volume: String
});



NodesSchema.set('toJSON', {
     transform: function (doc, ret, options) {
         ret.ComponentIdentifier = ret._id;
         delete ret._id;
         delete ret.__v;
     }
});

//export our module to use in server.js
module.exports = mongoose.model('Node', NodesSchema);
