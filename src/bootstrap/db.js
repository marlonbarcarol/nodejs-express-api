const Mongoose = require('mongoose');

Mongoose.connect('mongodb://localhost/nodeappdb');
const db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

db.once('open', () => {
  console.log('Connection with database succeeded.');
});

exports.db = db;
