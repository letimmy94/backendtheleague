const Schema = require("./teamSchema");
const seedData = require("./seeds.json");

Schema.remove({})
  .then(() => {
    return Schema.collection.insert(seedData);
  })
  .then(() => {
    process.exit();
  });
