'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ActivitySchema = new Schema({
  activity: {
    type: String,
    required: 'Activity needs a name'
  }
});

module.exports = mongoose.model('Activities', ActivitySchema);
