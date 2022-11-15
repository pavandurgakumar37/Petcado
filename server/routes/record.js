const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;
 

recordRoutes.route("/cats").get(function (req, res) {
  let db_connect = dbo.getDb("pets");
  db_connect
    .collection("cats")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
 });

 recordRoutes.route("/dogs").get(function (req, res) {
  let db_connect = dbo.getDb("pets");
  db_connect
    .collection("dogs")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
 });
  
recordRoutes.route("/cats/viewcat/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  var id = req.params.id;
  var hex = /[0-9A-Fa-f]{6}/g;
  id = (hex.test(id))? ObjectId(id) : id;
  db_connect
    .collection("cats")
    .find({_id : ObjectId(id)})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

recordRoutes.route("/dogs/viewdog/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  var id = req.params.id;
  var hex = /[0-9A-Fa-f]{6}/g;
  id = (hex.test(id))? ObjectId(id) : id;
  db_connect
    .collection("dogs")
    .find({_id : ObjectId(id)})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

 
module.exports = recordRoutes;