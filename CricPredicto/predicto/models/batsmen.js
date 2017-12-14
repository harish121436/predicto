const mongoose = require('mongoose');

let collection_name = 'batsmen';
let model_name = 'Batsman';

let getResult = function() {
  return {error: {}};
};

let BatsmenSchema = mongoose.Schema(
    {'_id': {type: Number, unique: true, index: true}, 'name': {type: String}},
    {versionKey: false, collection: collection_name});


BatsmenSchema.statics.getAll = function(cb) {
  let result = getResult();
  this.find({}, (err, records) => {
    if (err)
      throw err;
    else {
      result.error.status = false;
      result.data = records;
    }
    cb(null, result);
  });
};


let Batsman = mongoose.model(model_name, BatsmenSchema);

module.exports = Batsman;