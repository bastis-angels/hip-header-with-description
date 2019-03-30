const mongoose = require ('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

var campSchema = new mongoose.Schema ({
    newId: Number,
    host: String,
    hostImage: String,
    body: String,
    campers: [{ 
      name: String, 
      image: String, 
      votes: Number 
    }]
 });

var Camp = mongoose.model('Camp', campSchema);

module.exports = Camp; 