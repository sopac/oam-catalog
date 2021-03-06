'use strict';

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var analyticsSchema = new mongoose.Schema({
  count: Number,
  sensor_count: Number,
  provider_count: Number,
  date: Date
});

module.exports = mongoose.model('analytics', analyticsSchema);
