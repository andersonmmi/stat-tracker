'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ActivitySchema = new Schema({
  activity: {
    type: String,
    required: 'Activity needs a name'
  },
  record_date: {
    type: Date,
    default: Date.now
  },
  repetitions: {
    type: Number,
    default: 1
  }
});

module.exports = mongoose.model('Activities', ActivitySchema);
