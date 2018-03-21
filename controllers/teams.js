const express = require("express");
const Schema = require("../db/teamSchema.js");

const router = express.Router();

router.get("/", (req, res) => {
  Schema.find({}).then(teams => {
    res.json(teams);
  });
});

router.post("/", (req, res) => {
  Schema.create(req.body).then(team => {
    Schema.find({}).then(teams => {
      res.json(teams);
    });
  });
});

router.put("/:teamId", (req, res) => {
  Schema.findOneAndUpdate({ _id: req.params.teamId }, req.body).then(team => {
    Schema.find({}).then(teams => {
      res.json(teams);
    });
  });
});

router.delete("/:teamId", (req, res) => {
  Schema.findOneAndRemove({ _id: req.params.teamId }).then(team => {
    Schema.find({}).then(teams => {
      res.json(teams);
    });
  });
});

module.exports = router;
