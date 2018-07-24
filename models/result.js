const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resultSchema = new Schema({
  result: { 
    type: String, 
    required: true 
  }
});

const Result = mongoose.model("Result", resultSchema);

module.exports = Result;