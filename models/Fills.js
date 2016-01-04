var mongoose = require('mongoose');

var FillSchema = new mongoose.Schema({
  body: String,
  author: String,
  plays: {type: Number, default: 0}
});

mongoose.model('Fill', FillSchema);
