const mongoose = require('mongoose');
const database = mongoose.connect('mongodb://localhost/seed');
const db = mongoose.connection; 

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected");
});

module.exports = database
