var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transportSchema = new Schema({
      //id: '01',
      customer: String,
      start: String,
      destination: String,
      placeLoad: String,
      placeUnload: String,
      dateLoad: Date,
      dateUnload: Date,
      weight: Number,
      cost: Number,
      archived: {
         type: Boolean,
         default: false,
      },
});

var Transport = mongoose.model('Transport', transportSchema);
module.exports = Transport;