const mongoose = require('mongoose');

let collection_name = 'stadiums';
let model_name = 'Stadium';

let getResult = function() {
  return {error: {}};
};

let StadiumSchema = mongoose.Schema(
    {'_id': {type: Number, unique: true, index: true}, 'name': {type: String}},
    {versionKey: false, collection: collection_name});


StadiumSchema.statics.getAll = function(cb) {
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


let Stadium = mongoose.model(model_name, StadiumSchema);

module.exports = Stadium;