const Mongoose = require('mongoose');

let db;

const initialize = () => {
  Mongoose.connect('mongodb://localhost/nodeappdb');
  db = Mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error'));

  db.once('open', () => {
    console.log('Connection with database succeeded.');
  });

  return db;
};


exports.db = { initialize, db };
