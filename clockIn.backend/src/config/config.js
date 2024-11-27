const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const port = process.env.PORT;
const mongoUrl = process.env.MONGODB_URL;

module.exports = {
  port: port,
  mongoose: {
    url: mongoUrl,
    // options: {},
  },
};
