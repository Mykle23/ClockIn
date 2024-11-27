const { status } = require('http-status');

const createClient = (req, res) => {
  res.status(status[200]);
};

module.exports = {
  createClient,
};
