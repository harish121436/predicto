const mongoose = require('mongoose');

let collection_name = 'bowlers';
let model_name = 'Bowler';

let getResult = function() {
  return {error: {}};
};

let BowlerSchema = mongoose.Schema(
    {'_id': {type: Number, unique: true, index: true}, 'name': {type: String}},
    {versionKey: false, collection: collection_name});


BowlerSchema.statics.getAll = function(cb) {
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


let Bowler = mongoose.model(model_name, BowlerSchema);

module.exports = Bowler;