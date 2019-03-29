const mongoose = require ('mongoose');
const db = require('./index.js');


var campSchema = new mongoose.Schema ({
    host:  String,
    hostImage: String,
    body:   String,
    campers: [{ name: String, image: String, votes: Number }]
 });

var Camp = mongoose.model('Camp', campSchema);

module.exports = Camp; 