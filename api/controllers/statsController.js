'use strict';


const mongoose = require('mongoose');
const Stats = mongoose.model('Stats');
const Activities = mongoose.model('Activities')

exports.list_all_activities = function(req, res){
  Activities.find({}, function(err, activity){
    if (err)
      res.send(err);
    res.json(activity);
  });
};

exports.create_an_activity = function(req, res){
  let newActivity = new Activities(req.body);
  newActivity.save(function(err, activity){
    if (err)
      res.send(err);
    res.json(activity);
  });
};

exports.read_an_activity = function(req, res){
  Activities.findById(req.params.activityId, function(err, activity) {
    if (err)
      res.send(err);
    res.json(activity);
  });
};

exports.update_an_activity = function(req, res){
  Activities.findOneAndUpdate({_id: req.params.activityId}, req.body, {new: true}, function(err, activity) {
    if (err)
      res.send(err);
    res.json(activity);
  });
};

exports.delete_an_activity = function(req, res){
  Stat.remove({
      _id: req.params.activityId
    },
    function(err, activity){
    if (err)
      res.send(err);
    res.json({ message: 'Activity successfully deleted' });
  });
};

exports.create_a_stat = function(req, res){
  let newStat = new Stats(req.body);
  newActivity.save(function(err, stat){
    if (err)
      res.send(err);
    res.json(stat);
  });
};

exports.delete_a_stat = function(req, res){
  Stat.remove({
      _id: req.params.statId
    },
    function(err, stat){
    if (err)
      res.send(err);
    res.json({ message: 'Stat successfully deleted' });
  });
};
