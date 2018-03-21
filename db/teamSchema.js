const mongoose = require("./connection.js");

const TeamSchema = new mongoose.Schema({
  name: String,
  description: String
});

const Schema = mongoose.model("Schema", TeamSchema);

module.exports = { TeamSchema };
