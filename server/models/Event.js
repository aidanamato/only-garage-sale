const mongoose = require('mongoose');

const { Schema } = mongoose;
const Tag = require('./Tag');

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  tags: [Tag.schema]
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;