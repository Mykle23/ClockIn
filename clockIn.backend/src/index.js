const mongoose = require("mongoose");
const config = require("./config/config");
// const logger = require("./config/logger");
const app = require("./app");

let server;

mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  //   logger.info("Connected to MongoDB");
  server = app.listen(config.port, () => {
    // logger.info(`Listening to port ${config.port}`);
  });
});
