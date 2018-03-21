const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const mongoose = require("./db/teamSchema.js");
const app = express();

const teamController = require("./controllers/teams.js");

app.set("port", process.env.PORT || 3001);

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(cors());

app.set("view engine", "hbs");

app.use("/teams", teamController);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
