const mongoose = require('mongoose');

const { Schema } = mongoose;

const imageSchema = new Schema({
  url: {
    type: String
  }
})

const tagSchema = new Schema({
  name: {
    type: String
  }
});

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
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
  images: [imageSchema],
  tags: [tagSchema]
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;