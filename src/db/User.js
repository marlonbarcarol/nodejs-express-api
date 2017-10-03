const { Schema, model } = require('mongoose');

function validateEmail(email) {
  const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
}

const UserSchema = new Schema({
  email: {
    index: { unique: true },
    type: String,
    required: true,
    validate: [validateEmail, 'Please fill a valid email address'],
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  grant: {
    type: String,
    enum: ['user', 'admin'],
    required: true,
  },
});

module.exports = model('Users', UserSchema);
