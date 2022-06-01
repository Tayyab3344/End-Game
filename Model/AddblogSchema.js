const mongoose = require('mongoose');
const Schema=mongoose.Schema

const AddBlogs = new Schema({
  blog_name: {
    type: String,
    required: true
  },
  blog_url: {
    type: String,
    required: true
  },
  blog_email: {
    type: String,
    required: true
  },
  blog_subject: {
    type: String,
    required: true
  },
  blog_message: {
    type: String,
    required: true
  },
  blog_image: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const addblogs = mongoose.model('addblogs', AddBlogs);
module.exports = addblogs;