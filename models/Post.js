const mongoose = require('mongoose');

const PostSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
    },
    message: {
      type: String,
      required: [true, 'Please add a message'],
    },
    published: {
      type: Boolean,
      required: [true, 'Please mark if this post should be published'],
    },
    comments: [String],
  },
  { timestamps: true }
);
module.exports = mongoose.model('Post', PostSchema);
