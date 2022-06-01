const mongoose = require('mongoose');
const Schema=mongoose.Schema

const Review = new Schema({
    revi_name: {
    type: String,
    required: true
  },
  revi_message: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const rev = mongoose.model('rev',Review);
module.exports = rev;