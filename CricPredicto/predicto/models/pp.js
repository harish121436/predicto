const mongoose = require('mongoose');

let collection_name = 'pp';
let model_name = 'Person';

let getResult = function(){
    return {error:{}};
};

let PersonSchema = mongoose.Schema(
    {
      "_id": {type: Number, unique: true, index: true},
      "balls" : {type: Number}, 
      "batsman" : {type: String}, 
      "bowler" : {type: String},
      "bowler_economy" : {type: Number},
      "dots" : {type: Number},
      "fours" : {type: Number},
      "runs" : {type: Number},
      "sixes" : {type: Number},
      "stadium" : {type: String},
      "stadium_id" : {type: Number},
      "strike_rate" : {type: Number},
      "wickets" : {type: Number},
    },
    {versionKey: false, collection: collection_name});


PersonSchema.statics.getComaparison = function(data, cb){
    let batsman = data.person1;
    let bowler = data.person2;
    let stadium = data.stadium;
    let result = getResult();
    if(batsman && bowler && stadium){
        this.findOne({batsman: batsman, bowler:bowler, stadium: stadium}, (err, record) => {
            if(err) throw err;
            else{
                result.error.status = false;
                result.data = record;
            }
            cb(null, result);
        });
    }else{
        result.error.status = true;
        result.error.message = 'All fields are required';
        cb(null, result);
    }
};


let Person = mongoose.model(model_name, PersonSchema);

module.exports = Person;