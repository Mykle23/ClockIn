const express = require("express");
const clientController = require("../../controllers/client.controller");
const router = express.Router();

const defaultRoute = router.route("/");
defaultRoute.get(clientController.createClient);

module.exports = router;
