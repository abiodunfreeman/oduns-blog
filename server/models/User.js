const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  username: String,
  password: {
    type: String,
    required: [true, ' Password Required'],
  },
});

module.exports = mongoose.model('User', UserSchema);
