const mongoose = require('mongoose');
const Schema=mongoose.Schema

const PRofile = new Schema({
  profile_name: {
    type: String,
    required: true
  },
  profile_email: {
    type: String,
    required: true
  },
  profile_contact: {
    type: String,
    required: true
  },
  profile_address: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const profile = mongoose.model('profile',PRofile);
module.exports = profile;