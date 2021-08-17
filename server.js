const db = require("./app/models");
const controller = require("./app/controllers/tutorial.controller");

const run = async () => {

};


db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
  run();
});