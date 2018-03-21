const mongoose = require("./connection.js");

const TeamSchema = new mongoose.Schema({
  name: String,
  description: String
});

const teamSchema = mongoose.model("teamSchema", TeamSchema);

module.exports = { teamSchema };
