require('./index.js');

const mongoose = require('mongoose');

const campSchema = new mongoose.Schema({
  newId: Number,
  host: String,
  hostImage: String,
  body: String,
  campers: [{
    name: String,
    image: String,
    votes: Number,
  }],
});

const Camp = mongoose.model('Camp', campSchema);

module.exports = Camp;
