const { Schema } = require('mongoose');
const mongoose = require('mongoose');

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
  /**
   * {TODO} Encrypt user pw.
   * Something like https://stackoverflow.com/questions/14588032/mongoose-password-hashing
   * Warn: Check if findOneAndUpdate does triggers on 'save'.
   */
  password: {
    type: String,
    select: false,
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

UserSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  // eslint-disable-next-line no-param-reassign
  transform: (doc, ret) => { delete ret._id; },
});

module.exports = mongoose.model('Users', UserSchema);
