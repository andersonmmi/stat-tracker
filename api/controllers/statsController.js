'use strict';


const mongoose = require('mongoose');
const Stats = mongoose.model('Stats');
const Activities = mongoose.model('Activities')

exports.list_all_activities = function(req, res){
  console.log("list_all_activities");
  Activities.find({}, function(err, activity){
    if (err)
      res.send(err);
    res.json(activity);
  });
};

exports.create_an_activity = function(req, res){
  console.log("create_an_activity");
  let newActivity = new Activities(req.body);
  newActivity.save(function(err, activity){
    if (err)
      res.send(err);
    res.json(activity);
  });
};

exports.read_an_activity = function(req, res){
  console.log("read_an_activity");
  Activities.find({activity:req.params.activity}, function(err, activity) {
    if (err)
      res.send(err);
    res.json(activity);
  });
};

exports.read_an_activity_by_id = function(req, res){
  console.log("read_an_activity_by_id");
  Activities.find({_id:req.params.id}, function(err, activity) {
    if (err)
      res.send(err);
    res.json(activity);
  });
};

exports.update_an_activity = function(req, res){
  console.log("update_an_activity");
  Activities.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, activity) {
    if (err)
      res.send(err);
    res.json(activity);
  });
};

exports.delete_an_activity = function(req, res){
  console.log("delete_an_activity");
  Activities.remove({
      _id: req.params.activityId
    },
    function(err, activity){
    if (err)
      res.send(err);
    res.json({ message: 'Activity successfully deleted' });
  });
};

exports.create_a_stat = function(req, res){
  console.log("create_a_stat");
  let newStat = new Stats(req.body);
  newActivity.save(function(err, stat){
    if (err)
      res.send(err);
    res.json(stat);
  });
};

exports.delete_a_stat = function(req, res){
  console.log("delete_a_stat");
  Stat.remove({
      _id: req.params.statId
    },
    function(err, stat){
    if (err)
      res.send(err);
    res.json({ message: 'Stat successfully deleted' });
  });
};
