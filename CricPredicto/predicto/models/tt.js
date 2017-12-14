const mongoose = require('mongoose');

let collection_name = 'tt';
let model_name = 'team';

let getResult = function() {
  return {error: {}, data:{}};
};

let TeamSchema = mongoose.Schema(
    {
      '_id': {type: Number, unique: true, index: true},
      "balls_bowled" : {type: Number}, 
      "balls_faced" : {type: Number}, 
      "bowl_economy" : {type: Number}, 
      "dots" : {type: Number}, 
      "dotted" : {type: Number}, 
      "fourballs" : {type: Number}, 
      "fours" : {type: Number}, 
      "got_out" : {type: Number}, 
      "player" : {type:String}, 
      "playerofmatch" : {type: Number}, 
      "runs_gave" : {type: Number}, 
      "runs_scored" : {type: Number}, 
      "sixerballs" : {type: Number}, 
      "sixes" : {type: Number}, 
      "stadium" : {type:String}, 
      "strikerate" : {type: Number}, 
      "wic_taken" : {type: Number}, 
      "team" : {type:String}
    },
    {versionKey: false, collection: collection_name});


TeamSchema.statics.getComaparison = function(data, cb) {
  let team1 = data.team1;
  let team2 = data.team2;
  let stadium = data.stadium;
  let result = getResult();
  if (team1 && team2 && stadium) {
    this.find(
        {team: team1, stadium: stadium}, (err, records) => {
          if (err)
            throw err;
          else {
            // result.error.status = false;
            result.data.team1 = records;
            this.find({team: team2, stadium: stadium}, (err, records) => {
                if(err) throw err;
                else{
                    result.error.status = false;
                    result.data.team2 = records;
                    cb(null, result);
                }
            });
          }
        });
  } else {
    result.error.status = true;
    result.error.message = 'All fields are required';
    cb(null, result);
  }
};


let Team = mongoose.model(model_name, TeamSchema);

module.exports = Team;