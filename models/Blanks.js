var mongoose = require('mongoose');

var BlankSchema = new mongoose.Schema({
  body: String,
  author: String/*[{type: mongoose.Schema.Types.ObjectId, ref:'Post'}]*/,
  plays: {type: Number, default: 0}
});

mongoose.model('Blank', BlankSchema);
